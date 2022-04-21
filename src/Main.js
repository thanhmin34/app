import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LayOut from "./components/LayOut";
// import Home from "./pages/Home";

const Home = lazy(() => import("./pages/Home"));

const Main = () => {
  return (
    <Suspense fallback={<div className="animated yt-loader">loading...</div>}>
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/calog" element={<>catagory</>}></Route>
          <Route path="/contact" element={<>contact</>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Main;
