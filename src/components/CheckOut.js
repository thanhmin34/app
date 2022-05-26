import React, { useEffect, useState } from "react";

const CheckOut = () => {
  const [checked, setChecked] = useState(1);

  useEffect(() => {}, [checked]);

  return (
    <div className="flex flex-col  mt-5 font-bold text-base ">
      {checkout.length > 0 &&
        checkout.map((item) => (
          <div key={item.id} className="flex items-center my-2 ml-5">
            <input
              type="radio"
              onChange={() => setChecked(item.id)}
              checked={checked === item.id}
            />
            <span className="ml-2">{item.name}</span>
          </div>
        ))}

      {checked === 1 ? (
        ""
      ) : (
        <div className="w-full text-lg font-medium mt-1 md:text-base px-2">
          <h3 className="">
            <strong>Chủ tài khoản:</strong> Nguyễn Tiến Dũng
          </h3>
          <div className="flex  gap-x-2 mt-2 items-center">
            <span className="text-sm">Ngân hàng Techcombank:</span>
            <strong>19036725356019</strong>
          </div>
        </div>
      )}
    </div>
  );
};

const checkout = [
  {
    id: 1,
    name: "Trả tiền mặt khi nhận hàng",
  },
  {
    id: 2,
    name: "Thanh toán bằng thẻ ngân hàng",
  },
];
export default CheckOut;
