import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LayOut from "./components/LayOut";

import T404 from "./pages/T404";

const Home = lazy(() => import("./pages/Home"));
const Catagory = lazy(() => import("./pages/Catagory"));
const Contact = lazy(() => import("./pages/Contact"));

const Main = () => {
  return (
    <Suspense
      fallback={
        <div className=" relative top-5 left-[50%] translate-x-[-50%] w-10 h-10 rounded-full animate-spin border-4 border-l-transparent border-primary transition-all duration-300"></div>
      }
    >
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/calog" element={<Catagory />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
        <Route path="*" element={<T404 />} />
      </Routes>
    </Suspense>
  );
};

export default Main;
