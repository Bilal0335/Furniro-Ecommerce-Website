"use client";
import { addtocart } from "@/app/(addtocart)/Redux/features/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { Button } from "./ui/button";

function Toastity({ cartItem }: any) {
  const dispatch = useDispatch();
  const notify = () =>
    toast.success("Product added Successfully", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce
    });
  return (
    <>
      <div onClick={() => dispatch(addtocart(cartItem))}>
        <Button onClick={notify}>Add to cart!</Button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default Toastity;
