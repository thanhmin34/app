import React from "react";
import Star from "./icon/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "swiper/css/navigation";
import propTypes from "prop-types";

const Section = ({ title, data, img }) => {
  return (
    <div className="mt-[70px]">
      <h2 className="text-[30px] font-medium leading-[39px] text-center text-basic mb-[50px] ">
        {title}
      </h2>
      <div className="s1:grid grid-cols-2 gap-[30px] mb-[50px] hidden ">
        {img.length > 0 &&
          img.map((item, index) => <Images key={index} src={item.src} />)}
      </div>
      <div className="grid grid-cols-1 gap-[30px] mb-[50px] s1:hidden  ">
        {img.length > 0 &&
          img
            .slice(0, 1)
            .map((item, index) => <Images key={index} src={item.src} />)}
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={4}
        navigation
        breakpoints={{
          1240: {
            minWidth: 1240,
            slidesPerView: 4,
          },

          678: {
            minWidth: 678,
            slidesPerView: 3,
          },
          320: {
            minWidth: 300,
            slidesPerView: 2,
          },
        }}
      >
        {data.length > 0 &&
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductItem src={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

Section.propTypes = {
  data: propTypes.array.isRequired,
  title: propTypes.string,
};

export function Images({ src }) {
  return (
    <div className="pb-[45.45%] relative">
      <img
        src={src}
        alt=""
        className="absolute top-0 left-0 right-0 object-cover h-full w-full"
      />
    </div>
  );
}

export function ProductItem(item) {
  return (
    <div className="flex flex-col relative cursor-pointer hover-product  transition-all duration-300   outline-none border-0 border-none ">
      {item.src.card === "New" ? (
        <div className=" absolute top-[30px] left-[20px] bg-[#00AFAA] text-w rounded-[2px] z-10">
          <p className="px-3 h-[20px] flex items-center justify-center ">New</p>
        </div>
      ) : (
        <div className=" absolute top-[30px] left-[20px] bg-primary text-w rounded-[2px] z-10 h-5">
          <p className="px-3 h-5 flex items-center justify-center ">HIT</p>
        </div>
      )}
      {item.src.card2 ? (
        <div className=" flex items-center justify-center absolute top-[56px] left-[20px] bg-[#F01914] text-w rounded-[2px] z-10">
          <span className="font-medium text-[12px] px-[10px] leading-5 h-5">
            {item.src.card2}
          </span>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col pt-[78.43%] relative">
        <img
          src={item.src.value}
          alt=""
          className="absolute top-0 left-0 right-0 object-cover w-full h-full"
        />
      </div>
      <div className="flex items-center justify-center   my-5 md:my-1 px-5">
        <div className="flex items-center ">
          {new Array(5).fill(0).map((item, index) => (
            <div key={index}>
              <Star />
            </div>
          ))}
        </div>
        <span className="text-[11px] leading-[13px] font-[400] text-[#023047] border-b ml-[12px]">
          40 Reviews
        </span>
      </div>
      <h3 className="text-center text-[#023047] font-[600] text-[16px] leading-[21px] mb-[5px] px-[26px] text-overflow-2">
        Sun Protection face lorem ipsum Sit dolor amet consectetur
      </h3>
      <span className="text-[14px] leading-[17px] font-[400] text-[#023047] opacity-70 text-center mb-5 md:my-1">
        Louis Widmer
      </span>
      <div className="flex items-center px-[20px] justify-center mb-[32px] md:mb-2 text-center">
        {item.src.price ? (
          <span className="font-medium text-[16px] md:text-sm text-[#023047] opacity-70 flex items-center ">
            {item.src.price} <span className="ml-[2px]">SAR</span>
          </span>
        ) : (
          ""
        )}
        {item.src.price ? (
          <span className="flex items-center justify-start ml-[10px]  text-[#E92728] text-[18px] font-[600] text-center md:text-sm">
            {item.src.priceSale} <p className="ml-[2px]">SAR</p>
          </span>
        ) : (
          <span className="flex items-center justify-center  md:ml-0 md:flex-1  text-[#01AEAB] text-[18px] font-[600] md:text-sm text-center">
            {item.src.priceSale} <p className="ml-[2px] text-center">SAR</p>
          </span>
        )}
      </div>

      <div className="product-items flex items-center justify-center gap-[5px] px-[10px] py-[30px] md:py-[10px] xl:opacity-0  xl:overflow-hidden transition-all duration-200">
        <button className=" btn-add w-full max-w-[160px] px-2 md:max-w-[140px] h-[40px] text-[15px] leading-5 text-w bg-[#01AEAB] hover:opacity-80 md:text-[12px]">
          Add to cart
        </button>
        <button className="bg-[#01AEAB] h-10 w-12 flex items-center justify-center hover:opacity-80  like-btn s:hidden">
          <svg
            width="20"
            height="20"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.116 18C9.82798 18 9.55029 17.8957 9.33388 17.7061C8.51655 16.9914 7.72855 16.3198 7.03332 15.7274L7.02977 15.7243C4.99148 13.9873 3.23133 12.4873 2.00665 11.0096C0.637653 9.35765 0 7.79138 0 6.08032C0 4.41788 0.570044 2.88418 1.60501 1.76153C2.65233 0.625613 4.08941 0 5.65197 0C6.81985 0 7.88939 0.369224 8.83082 1.09733C9.30594 1.46486 9.7366 1.91466 10.116 2.43932C10.4956 1.91466 10.9261 1.46486 11.4013 1.09733C12.3428 0.369224 13.4123 0 14.5802 0C16.1426 0 17.5798 0.625613 18.6272 1.76153C19.6621 2.88418 20.232 4.41788 20.232 6.08032C20.232 7.79138 19.5945 9.35765 18.2255 11.0094C17.0008 12.4873 15.2409 13.9872 13.2029 15.724C12.5064 16.3173 11.7172 16.99 10.898 17.7064C10.6817 17.8957 10.4039 18 10.116 18ZM5.65197 1.18516C4.42436 1.18516 3.29662 1.67509 2.47621 2.56481C1.6436 3.46796 1.18501 4.71641 1.18501 6.08032C1.18501 7.5194 1.71986 8.80644 2.91906 10.2534C4.07814 11.652 5.80216 13.1212 7.79832 14.8224L7.80203 14.8255C8.49988 15.4202 9.29097 16.0944 10.1143 16.8144C10.9426 16.0931 11.7349 15.4177 12.4342 14.8221C14.4302 13.1209 16.154 11.652 17.3131 10.2534C18.5122 8.80644 19.047 7.5194 19.047 6.08032C19.047 4.71641 18.5884 3.46796 17.7558 2.56481C16.9355 1.67509 15.8077 1.18516 14.5802 1.18516C13.6809 1.18516 12.8552 1.47103 12.1262 2.03475C11.4765 2.53734 11.0239 3.17268 10.7586 3.61723C10.6221 3.84583 10.382 3.98228 10.116 3.98228C9.85005 3.98228 9.60987 3.84583 9.47342 3.61723C9.20823 3.17268 8.75565 2.53734 8.1058 2.03475C7.37677 1.47103 6.55111 1.18516 5.65197 1.18516Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Section;
