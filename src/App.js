import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./pages/Login"));
const Post1 = lazy(() => import("./pages/blogD.js/Post1"));
const Post2 = lazy(() => import("./pages/blogD.js/Post2"));
const Post3 = lazy(() => import("./pages/blogD.js/Post3"));
const Post4 = lazy(() => import("./pages/blogD.js/Post4"));
const Post5 = lazy(() => import("./pages/blogD.js/Post5"));

const CheckOutPayment = lazy(() => import("./pages/CheckOutPayment"));
const Admin = lazy(() => import("./Admin/Admin"));
const Blog = lazy(() => import("./pages/Blog"));
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const LayOut = lazy(() => import("./pages/layout/LayOut"));
const Intro = lazy(() => import("./pages/Intro"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Product"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-10 h-10 border-4 border-[#ee4d2d] border-t-w border-b-w rounded-full animate-spin mx-auto mt-10"></div>
      }
    >
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/san-pham" element={<Product />} />
          <Route path="/san-pham/:slug" element={<ProductDetail />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/gioi-thieu" element={<Intro />} />
          <Route path="/bai-viet" element={<Blog />} />
          <Route path="/thanh-toan" element={<Cart />} />
          <Route path="/checkout" element={<CheckOutPayment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bai-viet-1" element={<Post1 />} />
          <Route path="/bai-viet-2" element={<Post2 />} />
          <Route path="/bai-viet-3" element={<Post3 />} />
          {/* <Route path="/bai-viet-4" element={<Post4 />} />
          <Route path="/bai-viet-5" element={<Post5 />} /> */}
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Suspense>
  );
}

export default App;
