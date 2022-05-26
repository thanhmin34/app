import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart, removeItem, updateItem } from "../redux/CartItemsSlide";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(item.quantity);
  // const [priceItem, setPriceItem] = useState(item.quantity * item.price);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const hanldeChange = (opt) => {
    if (opt === "+") {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
    }
    if (opt === "-") {
      dispatch(
        updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 })
      );
    }
  };
  const hanldeDeleteCart = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="flex py-4 gap-x-2 border-b">
      <div className="flex">
        <img src={item.image} alt="" className="w-20" />
      </div>
      <div className="flex text-sm font-normal flex-1 flex-col gap-y-4">
        <p className="text__over-1">{item.title}</p>
        <div className="flex items-center border border-[#ccc] w-full max-w-[84px] md:max-w-[124px] text-base font-medium">
          <div
            onClick={() => hanldeChange("-")}
            className="px-2 md:px-4 py-2 cursor-pointer text-xl hover:opacity-80"
          >
            -
          </div>
          <span className="px-1 md:px-4 py-2 md:flex-1 text-center mx-auto">
            {quantity}
          </span>
          <div
            onClick={() => hanldeChange("+")}
            className="px-2 md:px-4 py-2 cursor-pointer text-xl hover:opacity-80"
          >
            +
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 md:px-5 lg:px-20 text-[#221f21] font-medium text-base">
        <p>Price</p>
        <span className="text-d">{item.quantity * item.price}đ</span>
      </div>
      <div className="flex px-4 py-2 text-xl text-c items-center justify-center">
        <span
          onClick={() => hanldeDeleteCart(item)}
          className="p-2 cursor-pointer"
        >
          <MdDelete />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
