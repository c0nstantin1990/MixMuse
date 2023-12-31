import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import  StarRating  from "../StarRating";

function ProductItem(item) {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const { cart } = state;
  
  const { image, name, _id, price, quantity, ratings } = item;

  let average = 0;
  if (ratings.length !== 0) {
    average = ratings.reduce((acc, current) => acc + Number.parseInt(current.stars), 0) / ratings.length;
  }

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`${image}`} />
        <div><p style={{ fontSize: "20px", fontWeight: "bold" }}>{name}</p></div>
      </Link>
      <div>
        <div>
          {quantity} {pluralize("item", quantity)} in stock
        </div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
      <div>
      { (average === 0)
          ? <div> Not rated yet </div> 
          : <div> <StarRating value={average} />{ratings.length} rating(s)</div> 
      }
      </div>
    </div>
  );
}

export default ProductItem;