import Product from "@/components/Product";
import React, { useState, useEffect } from "react";
import { getToken } from "@/services/product.service";

export default function Home() {
  const [token, setToken] = useState("");
  const takeToken = async () => {
    try {
      const response = await getToken();
      localStorage.setItem("accessToken", response.data.data.token);
      setToken(response.data.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    takeToken();
  }, []);

  return (
    <>
      <center>{token && <Product />}</center>
    </>
  );
}
