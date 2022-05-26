import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className=" bg-[#407710] text-w py-20  w-full  ">
        <div className="px-[15px] md:px-6 xl:px-8 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 md:gap-8 w-full  max-w-[1280px] mx-auto">
          <div className="flex mb-10 flex-col">
            <h2 className="text-lg font-bold">
              Nhận thông tin các chương trình khuyến mãi
            </h2>
            <div className="flex w-full max-w-[500px] mt-4 px-4 py-2 border-relex border-[#ccc]">
              <input
                type="text"
                className="w-full px-2 py-2 outline-none border-none text-w font-medium text-base bg-[#407710]"
                placeholder="Nhập địa chỉ email"
              />
              <button className="w-full max-w-[84px] px-2 py-1 hover:opacity-80 border-relex-btn">
                Đăng ký
              </button>
            </div>
            <div className="flex items-center gap-x-2">
              <ul className="social flex flex-col gap-y-2  mt-4 ">
                <h2>Kết nối với chúng tôi</h2>
                <div className="flex items-center gap-x-4 ">
                  <li>
                    <a href="/">
                      <img
                        src="	https://pubcdn2.ivymoda.com/images/ic_fb.svg"
                        alt=""
                        className="w-6 h-6"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="https://pubcdn2.ivymoda.com/images/ic_instagram.svg"
                        alt=""
                        className="w-7 h-7"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="https://pubcdn2.ivymoda.com/images/ic_gg.svg"
                        alt=""
                        className="w-6 h-6"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="https://pubcdn2.ivymoda.com/images/ic_ytb.svg"
                        alt=""
                        className="w-6 h-6"
                      />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <Wrapper h1="CÔNG TY TNHH SẢN XUẤT TINH DẦU THÁI VIỆT" desc={desc1} />
          <Wrapper h1="CHÍNH SÁCH HỖ TRỢ" desc={desc2} />

          <div className="flex  flex-col">
            <h1 className="text-lg mb-5">FANPAGE</h1>
            <div className="mt-5 relative w-full px-2">
              <img src="/img/slide/slide1.png" alt="" />
              <a
                href="/"
                className="absolute right-4 bottom-2 flex item-center justify-center py-[2px] bg-w z-10  px-2 gap-x-1 text-[#333]"
              >
                <div className="text-[#385898] relative top-[4px]">
                  <FaFacebookSquare />
                </div>
                <span>Like Page</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-w py-[10px] w-full   px-[15px] md:px-6  xl:px-8 bg-[#68b943] h-10 leading-10 flex items-center justify-center">
        <span className="max-w-[1280px] mx-auto w-full flex  items-center justify-center">
          ©TinhDauThaiViet All rights reserved
        </span>
      </div>
    </>
  );
};

function Wrapper({ h1, desc }) {
  return (
    <div className="flex flex-col mb-10">
      <h2 className="text-lg mb-5">{h1}</h2>
      <div className="flex flex-col text-base gap-y-1">
        {desc.length > 0 &&
          desc.map((item) => (
            <p key={item} className="">
              {item}
            </p>
          ))}
      </div>
    </div>
  );
}

const desc1 = [
  "Địa Chỉ: Thôn Phước Lộc, xã Lộc Tiến, huyện Phú Lộc, tỉnh Thừa Thiên Huế",
  "Người đại diện: Nguyễn Tiến Dũng",
  "Số Điện Thoại: 0984 080 155",
  "Email: Tinhdauthaiviet@gmail.com",
];

const desc2 = [
  "Chính sách & Quy định chung",
  "Quy định và hình thức thanh toán",
  "Chính sách vận chuyển",
  "Chính sách đổi/trả hàng và hoàn tiền",
  "Chính sách bảo mật thông tin",
];
export default Footer;
