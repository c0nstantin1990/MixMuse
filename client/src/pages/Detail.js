import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/Cart";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_RATING } from "../utils/mutations";
import  StarRating  from "../components/StarRating";

import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";

function Detail() {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ productId: "", stars: "", comments: "" });
  const [addRating] = useMutation(ADD_RATING);

  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const { products, cart } = state;
  let average = 0;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted id: ", id);
    console.log("formState.stars: ", formState.stars);
    console.log("formState.comments: ", formState.comments);
    const mutationResponse = await addRating({
      variables: {
        productId: id,
        stars: Number(formState.stars),
        comments: formState.comments,
      },
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      {currentProduct && cart ? (
      <div className="page-container">
        <div className="detail-container">
          <Link to="/">← Back to Products</Link>

          <h2>{currentProduct.name}</h2>

          <p>{currentProduct.description}</p>

          <p>
            <strong>Price:</strong>${currentProduct.price}{" "}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>
          <img
                src={`${currentProduct.image}`}
                alt={currentProduct.name}
              />
          <div>
            { (currentProduct.ratings)
                ? <div> <StarRating value={ currentProduct.ratings.reduce((acc, current) => acc + Number.parseInt(current.stars), 0) / currentProduct.ratings.length} />{currentProduct.ratings.length} rating(s) </div> 
                : <div> Not rated yet </div> 
            }
          </div>

        </div>
          <div className="detail-form-container">
      <form onSubmit={handleFormSubmit}>
        <h3>Rate this product</h3>
        <div className="flex-row space-between my-2">
          <label htmlFor="stars"><strong>Number of Stars:</strong></label>
          <input
            placeholder="0 to 5 stars"
            name="stars"
            type="stars"
            id="stars"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="comments"><strong>Comments:(optional)</strong></label>
          <input
            placeholder="Comments"
            name="comments"
            type="comments"
            id="comments"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit"><strong>Submit</strong></button>
        </div>
      </form>

          </div>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;