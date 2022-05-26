import React from "react";

const Contact = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-[10px] md:px-3 lg:px-4 xl:px-5 mt-20">
      <div className="flex flex-col">
        {/* <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.532664739995!2d107.60303691481295!3d16.448544488647535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a16f22fa08ed%3A0x5cdc85f4f3542f2!2zMSBOZ3V54buFbiBI4buvdSBCYSwgQW4gQ-G7sXUsIFRow6BuaCBwaOG7kSBIdeG6vywgVGjhu6thIFRoacOqbiBIdeG6vywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1652762748610!5m2!1svi!2s"
          frameBorder="0"
          className="w-full h-[400px]"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4722.0277381900905!2d107.96849393107921!3d16.274653307282605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314189d8a44071f9%3A0xde9def487edefff2!2zVGluaCBk4bqndSB0aMOhaSB2aeG7h3Q!5e0!3m2!1svi!2s!4v1653123147352!5m2!1svi!2s"
          title="map"
          className="w-full h-[400px]"
          frameBorder="0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-10">
        <div className="flex text-base flex-col px-4 gap-2 text-center">
          <h2 className="text-center">
            CÔNG TY TNHH SẢN XUẤT TINH DẦU KIM VUI
          </h2>
          <div className=" flex flex-col ">
            <span className="">
              <strong>Địa chỉ:</strong> Thôn Phước Lộc, xã Lộc Tiến, huyện Phú
              Lộc, tỉnh Thừa Thiên Huế
            </span>
            <span className="">
              <strong>Người đại diện: </strong> Nguyễn Tiến Dũng
            </span>
            <span className="">
              <strong>Điện thoại: </strong> 0984 080 155
            </span>
            <span className="">
              <strong>Email: </strong>
              <a href="mailto:tinhdauthaiviet@gmail.com">
                tinhdauthaiviet@gmail.com
              </a>
            </span>
            <div className="mt-5 flex items-center justify-center">
              <img src="/thaiviet1.jpg" alt="thaiviet" className="w-[300px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-2 mt-5 mb-32 w-full max-w-[460px] mx-auto">
          <h2 className="text-base font-bold">LIÊN HỆ</h2>
          <form action="" className="text-base font-medium">
            <div className="group-form w-full my-4">
              <input
                type="text"
                placeholder="Họ và Tên"
                className="outline-none border border-[#ccc] w-full px-2 py-2 focus:border-c"
              />
            </div>
            <div className="group-form w-full my-4">
              <input
                type="text"
                placeholder="Số điện thoại"
                className="outline-none border border-[#ccc] w-full px-2 py-2 focus:border-c"
              />
            </div>
            <div className="group-form w-full my-4">
              <input
                type="text"
                placeholder="Email"
                className="outline-none border border-[#ccc] w-full px-2 py-2 focus:border-c"
              />
            </div>
            <div className="group-form w-full my-4">
              <textarea
                type="text"
                style={{ height: "140px" }}
                placeholder="Nội dung"
                className="outline-none border border-[#ccc] w-full px-2 py-2 focus:border-c h-28"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
