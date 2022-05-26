import React, { useEffect, useState } from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import BuyWith from "../components/BuyWith";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.value);

  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalProduct(
      cartItems.reduce((total, item) => total + +item.quantity, 0)
    );
    setTotalPrice(
      cartItems.reduce((total, item) => total + +item.quantity * +item.price, 0)
    );
  }, [cartItems]);
  return (
    <>
      <div className="w-full flex flex-col max-w-[1280px] mx-auto px-[15px] md:px-3 lg:px-5 xl:px-8 md:flex-row md:gap-x-5 my-10 lg:my-20">
        {cartItems.length === 0 ? (
          <div className="flex flex-col mx-auto my-20 items-center justify-center">
            <span className="text-base font-medium">
              Giỏ hàng bạn đang trống
            </span>
            <Link
              to="/san-pham"
              className="mt-4 w-full max-w-[180px] px-2 py-2 border-d border outline-none rounded-lg text-d gap-x-[2px] hover:opacity-80 items-center justify-center flex"
            >
              <AiOutlineArrowLeft />
              <span> Mua sản phẩm ngay</span>
            </Link>
          </div>
        ) : (
          <>
            <div className="basis-full text-base font-semibold text-f md:basis-9/12  md:px-4">
              <h2 className="mb-5">
                Giỏ hàng của bạn có
                <span className="text-d ml-1">{cartItems.length} sản phẩm</span>
              </h2>
              <div className="flex flex-col">
                {cartItems.length > 0 &&
                  cartItems.map((item, index) => (
                    <CartItem key={index} item={item} />
                  ))}
                <Link
                  to="/san-pham"
                  className="my-10 w-full max-w-[180px] px-2 py-2 border-d border outline-none rounded-lg text-d gap-x-[2px] hover:opacity-80 items-center justify-center flex"
                >
                  <AiOutlineArrowLeft />
                  <span>Tiếp tục mua hàng</span>
                </Link>
              </div>
            </div>
            <div className="basis-full mt-5 py-4 text-sm font-normal md:basis-3/12 md:px-4 ">
              <div className="hidden lg:flex items-center justify-between mb-5 ">
                <p className="text-[#57585a]">Tổng sản phẩm</p>
                <span className="text-base font-bold">{cartItems.length}</span>
              </div>
              <div className="hidden lg:flex items-center justify-between mb-5 ">
                <p className="text-[#57585a]">Tổng tiền hàng</p>
                <span className="text-base font-bold">{totalPrice}đ</span>
              </div>
              <div className="flex items-center justify-between mb-5">
                <p className="text-[#57585a]">Thành tiền</p>
                <span className="text-base font-bold">{totalPrice}đ</span>
              </div>
              <div className="mx-10 border-b mb-4 mt-2"></div>
              <Link
                to="/checkout"
                className="cursor-pointer w-full max-w-[320px] md:max-w-full px-2 py-[12px] text-base font-bold bg-d border outline-none rounded-lg text-w gap-x-[2px] hover:opacity-80 items-center justify-center flex"
              >
                Đặt Hàng
              </Link>
            </div>
          </>
        )}
      </div>
      <BuyWith />
    </>
  );
};

export default Cart;
