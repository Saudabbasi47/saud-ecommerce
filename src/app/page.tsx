
import ItemsData from "@/app/components/data";
import Image from "next/image";
import React from "react";
import NewHome from "./components/newhome";

const Home = () => {
  const Newitems=ItemsData.slice(4)
  return (
    <>
    <NewHome/>
    </>
  );
};

export default Home;
