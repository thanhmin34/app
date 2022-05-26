import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const hanldeSlug = async () => {
    await navigate(`/san-pham/${item.slug}`);
  };

  return (
    <div className="flex relative flex-col  rounded-lg shadow-lg hover:-translate-y-[1px]  cursor-pointer ">
      <div className="relative pt-[100%]">
        <img
          src={item?.image}
          alt=""
          className="absolute top-0 left-0 right-0 object-cover w-full h-full "
        />
      </div>
      <div className="body-item font-medium text-lg mt-2">
        <p className="text-center text__over-1 text-c">
          {item?.title || "Tinh dầu tràm huế"}
        </p>
        <div className="flex items-center justify-center gap-x-4 text-center text-base font-medium mt-2 mb-1">
          <div className="relative text-d ">
            <span>{item?.pricesale || 500.0}</span>

            <span className=" text-[10px] absolute -top-2">đ</span>
          </div>
          <div className="relative text-[#bbb] ">
            <span className="line-through text-sm">{item?.price || 500.0}</span>

            <span className=" text-[10px] absolute -top-2">đ</span>
          </div>
        </div>
        <button
          onClick={hanldeSlug}
          className="py-2 text-base my-3 mx-auto  w-full max-w-[122px] bg-w text-d outline-none border border-d flex items-center justify-center"
        >
          Mua hàng
        </button>
      </div>
      {item?.sale ? (
        <div className="absolute top-0 -right-0 px-2  bg-e text-w text-xs w-10 h-10 flex flex-col justify-center items-center sale-item">
          <span>Giảm</span>
          <span>{item.sale}%</span>
        </div>
      ) : (
        ""
      )}

      {item?.cart ? (
        <div className="absolute top-0 -left-1 px-2 bg-d text-w text-xs border-r new-item">
          <span>{item.cart}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

ProductItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default ProductItem;
