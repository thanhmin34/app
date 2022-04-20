import React from "react";
import Items from "../components/Items";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Slider from "../components/Slider";
import FreeCar from "../components/svg/FreeCar";
import Headphone from "../components/svg/Headphone";
import Payment from "../components/svg/Payment";
import Watch from "../components/svg/Watch";

const Home = () => {
  return (
    <div className="page-container px-2 ">
      <a
        className="fixed bottom-5 right-5 z-10 animate-bounce"
        href="tel:9200067"
      >
        <Watch />
      </a>
      <Slider />
      <div className="flex flex-col mt-[70px] ">
        <h2 className="text-[30px] font-medium leading-[39px] text-center text-basic mb-[50px]">
          Shop by Offers
        </h2>
        <div className="grid grid-cols-4 gap-20 px-10">
          <Image src="/free.png" />
          <Image src="/sale.png" />
          <Image src="/best.png" />
          <Image src="/shop.png" />
        </div>
        <div className="mt-[70px]">
          <img src="/2.png" alt="" />
        </div>
      </div>

      <Section title="Shop by Beauty Offers" data={data1} img={imgs1} />
      <Section title="Shop by Mother & Child Offers" data={data2} img={imgs2} />
      <Section title="Shop by Vitamins & Suplements" data={data3} img={imgs3} />
      <Section2 title="shop by personal care" data1={data4} img={data3} />
      <Section3 title="Shop by Brands" data1={data4} img={data3} />
      <div className="mt-10 relative">
        <img src="/slider2.png" alt="" />
        <div className="absolute top-[50%] translate-y-[-50%] left-[197px]">
          <h1 className="font-medium text-[30px] leading-[42px] text-basic w-full max-w-[480px] px-10 text-center">
            To Exchange your Prescription request
          </h1>
          <button className="px-10 py-[10px] bg-primary text-w text-center ml-[160px] mt-5 hover:opacity-80">
            Order Now
          </button>
        </div>
      </div>
      <div className="mt-[80px] grid grid-cols-3 gap-[30px] ">
        {Arr1.length > 0 &&
          Arr1.map((item, index) => (
            <Items
              title={item.title}
              desc={item.desc}
              icon={item.icon}
              key={index}
            />
          ))}
        {/* <Items
          title="Free Shipping"
          desc="Free shipping on all US order or order above $200"
          icon={<FreeCar />}
        />
        <Items
          icon={<Headphone />}
          title="Support 24/7"
          desc="Contact us 24 hours a day, 7 days a week"
        />
        <Items
          icon={<Payment />}
          title="Payment Secure"
          desc="We ensure secure payment with PEV"
        /> */}
      </div>
    </div>
  );
};

function Image({ src }) {
  return (
    <div className="pt-[78%] relative">
      <img
        src={src}
        alt=""
        className="absolute top-0 left-0 right-0 object-cover h-full w-full"
      />
    </div>
  );
}

const imgs1 = [
  { src: "/venus.png" },
  { src: "/himalava.png" },
  { src: "/flormar.png" },
  { src: "/nivea.png" },
];
const imgs2 = [
  { src: "/h1.png" },
  { src: "/h2.png" },
  { src: "/h3.png" },
  { src: "/h4.png" },
];
const imgs3 = [
  { src: "/5.png" },
  { src: "/6.png" },
  { src: "/7.png" },
  { src: "/8.png" },
];
const data4 = [{ src: "/care1.png" }, { src: "/care2.png" }];

const data1 = [
  {
    value: "/sp1.png",
    card: "Hit",
    card2: "SALE - 30%",
    price: "30.00",
    priceSale: "20.00",
  },
  {
    value: "/sp2.png",
    card: "New",
    card2: "SALE - 30%",
    price: "30.00",
    priceSale: "20.00",
  },
  {
    value: "/sp3.png",
    card: "Hit",
    card2: "SALE - 30%",
    price: "30.00",
    priceSale: "20.00",
  },
  {
    value: "/sp4.png",
    card: "Hit",
    card2: "SALE - 30%",
    price: "30.00",
    priceSale: "20.00",
  },
];
const data2 = [
  {
    value: "/sp5.png",
    card: "Hit",
    card2: "SALE - 30%",
    price: "30.00",
    priceSale: "20.00",
  },
  {
    value: "/sp6.png",
    card: "New",
    priceSale: "20.00",
  },
  {
    value: "/sp7.png",
    card: "Hit",
    card2: "SALE - 30%",
    price: "30.00",
    priceSale: "20.00",
  },
  {
    value: "/sp8.png",
    card: "New",
    priceSale: "20.00",
  },
];
const data3 = [
  {
    value: "/h5.png",
    card: "Hit",
    card2: "SALE - 30%",
    price: "30.00",
    priceSale: "20.00",
  },
  {
    value: "/h6.png",
    card: "New",
    priceSale: "20.00",
  },
  {
    value: "/h7.png",
    card: "Hit",
    card2: "SALE - 30%",
    price: "30.00",
    priceSale: "20.00",
  },
  {
    value: "/h8.png",
    card: "New",
    priceSale: "20.00",
  },
];
const Arr1 = [
  {
    title: "Free Shipping",
    desc: "Free shipping on all US order or order above $200",
    icon: <FreeCar />,
  },
  {
    title: "Support 24/7",
    desc: "Contact us 24 hours a day, 7 days a week",
    icon: <Headphone />,
  },
  {
    title: "Payment Secure",
    desc: "We ensure secure payment with PEV",
    icon: <Payment />,
  },
];

export default Home;
