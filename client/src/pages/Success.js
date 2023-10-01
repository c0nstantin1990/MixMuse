import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  const saveOrder = async () => {
    const cart = await idbPromise("cart", "get");
    const products = cart.map((item) => item._id);

    if (products.length) {
      const { data } = await addOrder({ variables: { products } });
      const productData = data.addOrder.products;

      productData.forEach((item) => {
        idbPromise("cart", "delete", item);
      });
    }
  };

  const handleLogout = () => {
    setTimeout(() => {
      console.log("User logged out");
    }, 1000);
  };

  useEffect(() => {
    saveOrder();
    const logoutTimer = setTimeout(() => {
      handleLogout();
      window.location.assign("/");
    }, 3000);

    return () => clearTimeout(logoutTimer);
  }, [addOrder]);

  return (
    <div>
      <Jumbotron>
        <h1 style={{ color: "white" }}>Success!</h1>
        <h2 style={{ color: "white" }}>Thank you for your purchase!</h2>
        <h2 style={{ color: "white" }}>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
