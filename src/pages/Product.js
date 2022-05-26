import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineCaretRight } from "react-icons/ai";
import ProductItem from "../components/ProductItem";

import productData from "../data/products";
const Product = () => {
  const [checked, setChecked] = useState(null);
  const [products, setProduct] = useState([]);
  const proAll = productData.getAllProducts();

  useEffect(() => {
    setProduct(proAll);
  }, [proAll]);
  const hanldeClick = (slug) => {
    if (slug) {
      const categ = proAll.filter((item) => item.categorySlug === slug);
      setProduct(categ);
    } else {
      setProduct(proAll);
    }
    setChecked(slug);
  };

  return (
    <div className="w-full bg-[#f5f5f5]">
      <div className="w-full max-w-[1280px] px-[10px] md:px-3 lg:px-5 xl:px-8 mx-auto  pt-5 pb-10">
        <div className="flex items-center gap-x-2 text-[#666] text-sm">
          <Link to="/">Trang chủ</Link> <span>/</span>
          <p className="text-b">Sản phẩm</p>
        </div>

        <div className="flex mt-10 gap-x-5 w-full">
          <div className="basis-3/12 lg:basis-2/12 text-base p-2 hidden md:block">
            <div className="flex items-center gap-x-2 mb-5 border-b pb-4">
              <AiOutlineMenuUnfold />
              <h2 className="text-xl font-bold ">Danh mục</h2>
            </div>
            <ul className="flex flex-col gap-y-2 font-medium text-sm">
              {category.map((item, index) => (
                <li
                  key={item.id}
                  className="flex items-center gap-x-1 py-2 cursor-pointer "
                >
                  <span
                    onClick={() => hanldeClick(item.categorySlug)}
                    // className={`${item.slug === checked ? "text-d" : ""}`}
                  >
                    {item.display}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-20 basis-full md:basis-9/12 lg:basis-10/12 sm:grid-cols-3 grid grid-cols-2 md:grid-col-2 lg:grid-cols-4 xl:grid-cols-5 gap-[10px] p-2 ">
            {products.length > 0 &&
              products.map((item, index) => (
                <ProductItem key={index} item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

const category = [
  {
    id: 1,
    display: "Tinh Dầu",
    categorySlug: "tinh-dau",
  },
  {
    id: 2,
    display: "Tinh Dầu Treo",
    categorySlug: "tinh-dau-treo",
  },
  {
    id: 3,
    display: "Xit Phòng ",
    categorySlug: "xit-phong",
  },
  {
    id: 4,
    display: "Vitamin",
    categorySlug: "vitamin",
  },
  {
    id: 5,
    display: "Sản Phẩm Khác ",
    categorySlug: "khac",
  },
];
