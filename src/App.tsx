import "./App.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// MUI components
import { Drawer, LinearProgress, Grid, Badge } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// styles
import { Wrapper } from "./app.styles";

// types

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  rating: {
    count: number;
    rate: number;
  };
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    ["products"],
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;
  return <div className="App"></div>;
};

export default App;
