import React from "react";
import { Routes, Route } from "react-router-dom";
import LayOut from "./components/LayOut";

const Main = () => {
  return (
    <Routes>
      <Route element={<LayOut />}>
        <Route path="/" element={<>trang chu</>}></Route>
        <Route path="/calog" element={<>catalory</>}></Route>
        <Route path="/contact" element={<>contact</>}></Route>
      </Route>
    </Routes>
  );
};

export default Main;
