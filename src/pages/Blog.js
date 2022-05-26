import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import productData from "../data/products";
const Blog = () => {
  return (
    <div className="w-full max-w-[1280px] px-[10px] md:px-6 lg:px-8 mx-auto font-base mt-10">
      <h2 className="mx-auto text-center font-semibold text-2xl mb-10">
        Tin Tức
      </h2>
      <div className="flex lg:gap-x-5">
        <div className="flex flex-col lg:basis-[70%] px-5">
          {posts.length > 0 &&
            posts.map((item, index) => <Post key={index} item={item} />)}
        </div>
        <ProP />
      </div>
    </div>
  );
};

export function Post({ item }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-2 mb-8 md:flex-row md:gap-x-5">
      <img src={item.img} alt="" className="w-full md:max-w-[300px]" />
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text__over-1">{item.title}</h2>
        <p>{item.desc}</p>
        <div className="flex items-center mt-5">
          <div className="flex items-center mr-auto text-sm">
            <AiOutlineUser />
            <span className="ml-[6px]">by thaiviet</span>
          </div>
          <button
            onClick={() => navigate(`/${item.slug}`)}
            className="bg-d  outline-none border-none text-w px-4 py-[6px]"
          >
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProP() {
  const pro = productData.getProducts(0, 4);
  return (
    <div className="hidden lg:flex lg:basis-[30%] lg:px-5 flex-col">
      <h2 className="text-xl font-bold text-center mx-auto">
        Sản Phẩm Đánh giá cao
      </h2>
      <div className="flex mt-10 flex-col gap-y-5">
        {pro.length > 0 &&
          pro.map((item) => <ProItem key={item.id} item={item} />)}
      </div>
    </div>
  );
}
function ProItem({ item }) {
  return (
    <div className="flex gap-x-4  text-sm font-medium ">
      <img src={item.image} alt="" className="w-[120px]" />
      <div className="flex flex-1 flex-col gap-y-1">
        <p className="text__over-1 mt-2 text-base">{item.title} </p>
        <p>{item.price}đ</p>
      </div>
    </div>
  );
}
export default Blog;

export const posts = [
  {
    slug: "bai-viet-1",
    img: "/img/slide/slide6.png",
    title: "Tác Dụng Của Tinh Dầu Treo Xe Ô Tô",
    desc: "Với nhiều tính năng tiện ích, không gian nội thất ô tô là nơi mang lại sự thoải mái cho bác tài cũng như hàng khách trên ô tô. Tuy nhiên, trong quá trình sử dụng, sự bất cẩn trong việc ăn uống, hút thuốc, mùi xe, mùi ẩm mốc trong mùa mưa,… những mùi này được tích tụ theo thời gian khiến không ít người ám ảnh bởi những mùi này khi bước vào xe",
  },
  {
    slug: "bai-viet-2",
    img: "/post3.jpg",
    title: "Tinh dầu là gì? Gồm những loại nào? Những công dụng của tinh dầu",
    desc: "Tinh dầu được sử dụng rộng rãi với nhiều mục đích khác nhau, được ví như một biện pháp thiên nhiên an toàn, hiệu quả để chăm sóc sức khỏe. Vậy tinh dầu là gì? Gồm những loại nào? Công dụng của tinh dầu ra sao? Hãy cùng tham khảo trong bài viết dưới đây nhé!",
  },
  {
    slug: "bai-viet-3",
    img: "/post6.jpg",
    title: "Tinh dầu thiên nhiên: Vừa đa năng lại tốt cho sức khỏe!",
    desc: "Tinh dầu thiên nhiên là những chiết xuất tinh túy nhất từ các loại hoa cỏ và thảo dược như sả chanh, hoa bưởi, hoa oải hương… Đây không chỉ là liệu pháp làm đẹp tự nhiên mà còn giúp bạn dọn dẹp nhà cửa và cải thiện sức khỏe rất tốt.",
  },
];
