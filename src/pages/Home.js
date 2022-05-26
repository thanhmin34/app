import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Section from "../components/Section";
import productData from "../data/products";
const Home = () => {
  const pro = productData.getAllProducts();
  const [loading, setLoading] = useState(true);
  const [productSaler, setProductSaler] = useState([]);
  const [other, setOther] = useState([]);
  const [news, setnews] = useState([]);
  useEffect(() => {
    const saler = pro.filter((e) => e.cart === "yêu thích").slice(0, 8);

    const other = pro.filter((e) => e.bought === true).slice(0, 8);
    const news = pro.filter((e) => e.cart === "new").slice(0, 8);

    setProductSaler(saler);
    setOther(other);
    setnews(news);
  }, [pro]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout();
    };
  }, []);
  console.log(other);
  return (
    <>
      <div className="w-full mx-auto mb-5">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          grabCursor={"true"}
          slidesPerView={"auto"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {slides.length > 0 &&
            slides.map((item) => (
              <SwiperSlide key={item.id}>
                <Slider item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* <Info />
      <Banner img="https://tinhdaukimvui.com.vn/wp-content/uploads/2020/04/tinh-dau-tram-125ml.jpg" /> */}

      <Section title="Sản Phẩm Bán Chạy" data={other} />

      <div className=" w-full max-w-[1280px] px-[15px] md:px-6  xl:px-8 mx-auto md:my-5  lg:my-16">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          grabCursor={"true"}
          breakpoints={{
            320: {
              minWidth: 320,
              slidesPerView: 1,
            },
            640: {
              minWidth: 640,
              slidesPerView: 2,
            },
            1000: {
              minWidth: 1000,
              slidesPerView: 3,
            },
          }}
        >
          {slide2.map((item, index) => (
            <SwiperSlide key={index}>
              <Slides img={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Section title="Đang Giảm Giá" data={productSaler} />

      <div className="w-full max-w-[1280px] px-[10px] md:px-3 lg:px-5 xl:px-8 mx-auto gap-5 md:my-5 lg:my-16">
        <div className="w-full my-5">
          <img
            src="/img/slide/slide1.png"
            alt=""
            className="border-relex-btn w-full "
          />
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <div className="flex">
            <img
              src="/img/slide/slide5.png"
              alt=""
              className="border-relex-btn w-full"
            />
          </div>
          <div className="flex">
            <img
              src="/img/slide/sli.jpg"
              alt=""
              className="border-relex-btn w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Section title="Sản Phẩm Mới " data={news} />
      <div className="mb-20"></div>
    </>
  );
};

const slides = [
  {
    id: 1,
    img: "/img/slide/slide1.png",
  },
  {
    id: 2,
    img: "/img/slide/slide2.png",
  },
  {
    id: 3,
    img: "/img/slide/slide4.png",
  },
];

// function Banner({ img }) {
//   return (
//     <div className="w-full my-10 md:my-16 xl:my-20">
//       <img src={img} alt="" />
//     </div>
//   );
// }

function Slides({ img }) {
  return (
    <div className="flex overflow-hidden cursor-pointer ">
      <img
        src={img}
        alt=""
        className="border-relex-btn w-full h-full object-cover"
      />
    </div>
  );
}
// function Info() {
//   return (
//     <div className=" w-full max-w-[1280px] mx-auto px-[10px] md:px-4 lg:px-5 xl:px-8 mt-5 text-[#333]">
//       <h1 className="text-center text-5xl font-bold  mb-3">Giới Thiệu</h1>
//       <p className="text-lg font-bold text-center px-4">
//         Tinh dầu Tràm Huế Kim Vui – Chất lượng tạo nên sự khác biệt
//       </p>
//       <div className="flex flex-col mt-10  ">
//         <div className="flex flex-col font-bold text-base">
//           <span className="text-xl font-bold px-6 text-">Về chúng tôi</span>
//           <p className="text-justify text-[15px] font-normal mb-4">
//             Từ thời vua chúa xa xưa, dầu tràm xứ Huế đã đi vào tiềm thức người
//             Việt như một loại dược liệu xức ngoài da tốt số một, một thứ biệt
//             dược có thể dùng cho cả làn da non nớt, mẫn cảm nhất như trẻ sơ
//             sinh. Để gìn giữ tinh túy đó của ông cha, tinh dầu Kim Vui được kiến
//             tạo từ những năm 2000 với mục tiêu hòa quyện tinh hoa truyền thống
//             với dòng chảy thời đại để cho ra đời sản phẩm tinh dầu thiên nhiên
//             chất lượng uy tín nhất.
//           </p>

//           <button className="flex items-center justify-center w-full max-w-[132px] px-4 py-[6px] bg-[#68b943] text-w rounded-2xl">
//             Xem thêm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Home;

const slide2 = [
  { img: "/img/slide/slide6.png" },
  { img: "/img/slide/slide4.png" },
  { img: "/img/slide/slide2.png" },
  { img: "/img/slide/slide3.png" },
];
