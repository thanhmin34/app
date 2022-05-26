import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BuyWith from "../components/BuyWith";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartItemsSlide";
import { toast } from "react-toastify";
import productData from "../data/products";
const ProductDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [number, setNumber] = useState(1);
  const [checked, setChecked] = useState(2);
  const pro = productData.getProductBySlug(slug);

  useEffect(() => {
    setProduct(pro);
  }, [pro]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const hanldeChange = (change) => {
    if (change === "+") setNumber(number + 1);
    if (change === "-") {
      if (number > 1) {
        setNumber((pre) => pre - 1);
      } else {
        setNumber(1);
      }
    }
  };
  const hanldeAddToCart = (cart) => {
    dispatch(
      addToCart({
        image: cart.image,
        quantity: number,
        price: cart.pricesale,
        name: cart.name,
        title: cart.title,
        slug: cart.slug,
      })
    );
    toast.success("thêm sản phẩm thành công", { position: "top-right" });
  };

  return (
    <>
      <div className="w-full max-w-[1280px] px-[15px] md:px-6  xl:px-8 mx-auto mt-10">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-10">
          <div className="flex flex-col lg:flex-row  ">
            <div className=" w-full lg:basis-9/12 ">
              <img className="w-full object-cover" alt="" src={product.image} />
            </div>
          </div>
          <div className="body">
            <div className="flex flex-col mt-3 text-base  font-semibold px-2 gap-y-3">
              <h2 className="text-xl text-center uppercase font-bold text-c ">
                {product.title}
              </h2>
              <div className="flex items-center gap-x-4 text-xl ">
                <span className="font-normal">Giá:</span>
                <div className="flex relative text-d mr-2 ">
                  {product.pricesale || 137000}
                  <span className="absolute top-0 -right-[10px]">₫</span>
                </div>
              </div>

              <div className="flex items-center border border-[#ccc] w-full max-w-[120px] text-base font-medium select-none">
                <div
                  onClick={() => hanldeChange("-")}
                  className="px-4 py-2 cursor-pointer text-xl hover:opacity-80"
                >
                  -
                </div>
                <span className="px-4 py-2 flex-1 text-center">{number}</span>
                <div
                  onClick={() => hanldeChange("+")}
                  className="px-4 py-2 cursor-pointer text-xl hover:opacity-80"
                >
                  +
                </div>
              </div>
              <div className="flex items-center gap-x-4 justify-start text-w font-medium text-base">
                <button
                  onClick={() => hanldeAddToCart(pro)}
                  className="bg-d px-4 rounded-sm py-2 border-none outline-none hover:opacity-80"
                >
                  Thêm Vào Giỏ
                </button>
                <Link
                  to="/san-pham"
                  className="cursor-pointer bg-d px-4 rounded-sm py-2 border-none outline-none hover:opacity-80"
                >
                  Tiếp Tục Mua Hàng
                </Link>
              </div>
              <div className="flex font-medium text-base flex-col">
                <ul className="flex gap-x-2">
                  {listIntro.map((item) => (
                    <li
                      onClick={() => setChecked(item.id)}
                      key={item.id}
                      className="px-2 py-2 border-b hover:opacity-80 cursor-pointer"
                    >
                      {item.display}
                    </li>
                  ))}
                </ul>

                <div className="flex text-sm font-normal mt-5 ">
                  {checked === 1 ? (
                    <p className="text-justify  ">
                      Theo Y học cổ truyền, “ Lục phủ ngũ tạng ” đều thu nhỏ
                      trong lòng bàn chân. Đó cũng là nơi bắt đầu của ba “ Kinh
                      túc tam âm ” – Tỳ, gan, thận và là nơi cuối cùng của “
                      Kinh túc tam dương ” – Vị, mật, bàng quang. Bàn chân là
                      gốc của cơ thể, tham gia vào quá trình vận hành khí huyết.
                      Giúp cơ thể tiếp âm hàng ngày trong việc cân bằng cơ thể
                      với trời đất. Giúp nâng đỡ cơ thể vững vàng, di chuyển dễ
                      dàng. Vì vậy có thể chữa bách bệnh thông qua việc tác động
                      vào các huyệt đạo bàn chân Liên hệ với lục phủ ngũ tạng,
                      nối liền các bộ phận quan trọng, các tạng phủ trong cơ thể
                      như tâm (tim) – can (gan) – tỳ (lách) – phế (phổi) – thận
                      đều có các huyệt tương ứng ở bàn chân. Người lớn tuổi,
                      Muối thảo mộc ngâm chân Cung Đình sẽ giúp bạn cải thiện
                      tình trạng này một cách hiệu quả, giúp bạn trị dứt điểm
                      những cơn đau nhức chân, trị mùi khó chịu, giúp bạn có
                      giấc ngủ ngon mỗi đêm.
                    </p>
                  ) : checked === 2 ? (
                    <ul className="flex flex-col gap-y-2  list-disc px-4 ">
                      <li>
                        100% nguyên liệu từ thiên nhiên, không có hóa chất.
                      </li>
                      <li>Thân thiện với làn da.</li>
                      <li>
                        Hiệu quả rõ rệt ngay tuần đầu tiên dùng sản phẩm đều
                        đặn.
                      </li>
                      <li>Cách sử dụng đơn giản.</li>
                    </ul>
                  ) : (
                    <ul className="flex flex-col gap-y-2 list-disc px-4 ">
                      <li>
                        Kích thích tuần hoàn máu và giúp khí huyết điều hòa.
                      </li>
                      <li>
                        Giúp tạo tinh thần thoải mái, giúp ngủ ngon và hỗ trợ
                        chứng mất ngủ.
                      </li>
                      <li>Chống lạnh bàn chân vào mùa đông.</li>
                      <li>
                        Loại bỏ những mùi hôi khó chịu, giữ cho đôi chân luôn
                        sạch sẽ.
                      </li>
                      <li>Giảm phù nề bàn chân cho phụ nữ mang thai.</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BuyWith />
    </>
  );
};

const listIntro = [
  { id: 1, display: "Giới Thiệu" },
  { id: 2, display: "Chi Tiết Sản Phẩm" },
  { id: 3, display: "Công Dụng" },
];
export default ProductDetail;
