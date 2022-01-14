import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import SignIn from "../components/SignIn";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <SignIn />
    </div>
  );
};

export default Home;
