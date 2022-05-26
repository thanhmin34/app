import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CheckOut from "../components/CheckOut";
import Form from "../components/Form";
import productData from "../data/products";

const CheckOutPayment = () => {
  const cartCheckOut = useSelector((state) => state.cart.value);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-[10px] md:px-6 lg:px-8  mt-10 flex-col-reverse">
      <div className="flex flex-col ">
        <h2 className="font-bold text-xl mb-4">Danh sách sản phẩm</h2>
        <div className="w-full md:flex items-center gap-x-4 font-bold py-2 border-b  hidden text-base">
          <h3 className="basis-6/12">Sản phẩm</h3>
          <p className="basis-2/12">Giá</p>
          <p className="basis-2/12">Số lượng</p>
          <p className="basis-2/12">Tổng</p>
        </div>

        <div className="flex flex-col font-bold  md:mt-5">
          {cartCheckOut.length > 0 &&
            cartCheckOut.map((item, index) => <Cart key={index} item={item} />)}
        </div>
      </div>
      <div className="flex flex-col mt-10 md:flex-row w-full md:gap-x-3 mb-10 md:mt-24 md:mb-32">
        <div className="flex flex-col md:flex-1">
          <h2 className="text-xl font-semibold">Thông tin thanh toán</h2>
          <Form cart={cartCheckOut} />
        </div>
        <div className="flex flex-col mt-10 md:mt-0 border border-[#ccc] p-2 md:w-full md:max-w-[300px] lg:max-w-[500px] bg-[#fafafa]">
          <h3 className="text-center text-xl font-semibold border-b px-2 py-2">
            Đơn Hàng của bạn
          </h3>
          <TotalPrice />
          <CheckOut />
        </div>
      </div>
    </div>
  );
};

function Cart({ item }) {
  const cart = productData.getProductBySlug(item.slug);

  return (
    <div className="w-full md:flex flex items-center gap-x-4 my-1  py-2 border-b text-base  font-medium px-2 ">
      <h3 className="md:basis-6/12 relative flex items-center gap-x-4 flex-1">
        <img src={item.image} alt="" className="w-[80px]" />
        <div className="flex flex-col md:flex-row flex-1 ">
          <span className="font-bold text__over-1">{cart.title}</span>
          <div className="flex md:hidden gap-x-1 mt-1">
            <span>{item.quantity} </span>x <span>{item.price}</span>
          </div>
        </div>
      </h3>
      <p className="md:basis-2/12 hidden md:flex">{item.price}đ</p>
      <p className="md:basis-2/12 hidden md:flex md:ml-5">{item.quantity}</p>
      <p className="md:basis-2/12 ">{item.price * item.quantity}đ</p>
    </div>
  );
}

function TotalPrice() {
  const cartItems = useSelector((state) => state.cart.value);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cartItems.reduce((total, item) => total + +item.quantity * +item.price, 0)
    );
  }, [cartItems]);

  return (
    <div className="mt-2 text-base font-medium mx-10">
      <div className="flex items-center  gap-x-2 my-4 py-2 border-b">
        <p className="font-bold">Phí vận chuyển</p>
        <div className="flex items-center ml-auto text-xl ">
          <span className="mr-[2px]">20000</span>đ
        </div>
      </div>
      <div className="flex items-center  gap-x-2 my-4 py-2 border-b">
        <p className="font-bold">Tổng</p>
        <div className="flex items-center ml-auto text-xl ">
          <span className="mr-[2px]">{total + 20000}</span>đ
        </div>
      </div>
    </div>
  );
}
export default CheckOutPayment;
