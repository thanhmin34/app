import React from "react";

import { ProP } from "../Blog";

const Post1 = () => {
  return (
    <div className="w-full max-w-[1280px] px-[10px] md:px-6 lg:px-8 mx-auto font-base mt-10 md:mt-20 mb-20">
      <div className="flex lg:gap-x-5">
        <div className="flex flex-col lg:basis-[70%] px-5">
          <h2 className="mx-auto text-center font-semibold text-2xl mb-5">
            Tác Dụng Của Tinh Dầu Treo Xe Ô Tô
          </h2>

          <p className="mb-4">
            Với nhiều tính năng tiện ích, không gian nội thất ô tô là nơi mang
            lại sự thoải mái cho bác tài cũng như hàng khách trên ô tô. Tuy
            nhiên, trong quá trình sử dụng, sự bất cẩn trong việc ăn uống, hút
            thuốc, mùi xe, mùi ẩm mốc trong mùa mưa,… những mùi này được tích tụ
            theo thời gian khiến không ít người ám ảnh bởi những mùi này khi
            bước vào xe.
          </p>
          <span>Tác dụng của tinh dầu treo xe ô tô:</span>
          <img src="/post1.jpg" alt="" className="w-full  mx-auto" />

          <div className="body flex flex-col font-medium text-base mt-5">
            <p>
              Tinh dầu nói chung và Tinh dầu treo xe hơi nói riêng đều có tính
              kháng khuẩn, khử mùi rất hiệu quả, có thể làm sạch không khí trong
              khoảng thời gian ngắn, nhưng hương thơm lại rất tinh tế và bền
              lâu.
            </p>
            <img
              src="/post3.jpg"
              alt=""
              className="w-full max-w-[500px] mx-auto my-5"
            />

            <p className="px-5 mt-5">
              - Mùi hương dịu nhẹ, thanh mát của tinh dầu treo ô tô giúp tinh
              thần thoải mái, nhẹ nhàng do đó nó có tác động tích cực trong việc
              thư giãn tinh thần, giải tỏa những căng thẳng giúp bạn thêm tỉnh
              táo, tăng sự tập trung trên mỗi chuyến đi. Chưa dừng ở đó tinh dầu
              treo xe còn kích thích hoạt động của các giác quan chống lại các
              cơn buồn nôn do say xe rất hiệu quả. Đây chắc hẳn là một tin vui
              cho những ai đang phải vật vã, chết đi sống lại mỗi khi bước lên ô
              tô phải không nào? <br></br>- Giá trị cốt lõi của tinh dầu treo xe
              ô tô nằm ở khả năng thanh lọc không khí, làm sạch, mát không khí,
              khử mùi và kháng khuẩn.
            </p>
          </div>
          <span className="text-xl font-bold mt-5 mb-2">
            Cách sử dụng tinh dầu treo ô tô:
          </span>
          <img
            src="/post2.jpg"
            alt=""
            className="w-full max-w-[500px] mx-auto my-5"
          />
          <p className="px-4">
            <strong>
              Khi bạn đã sở hữu một lọ tinh dầu treo xe, bạn phải thực hiện qua
              6 bước để có thể sử dụng lọ tinh dầu thơm này:
            </strong>
            <br></br>Bước 1: Bạn xoay nắp gỗ đậy lọ tinh dầu treo và lấy chiếc
            nắp ra <br></br>Bước 2: Sau khi lấy nắp gỗ ra bạn sẽ thấy 1 nắp nhựa
            màu trắng, bạn lấy nắp nhựa trắng ra. <br></br>Bước 3: Bạn dùng kim
            châm từ 3-10 lỗ vào nắp nhựa trắng <br></br>Bước 4: Đậy nắp nhựa kín
            vào cổ lọ, sau đó vặn kín nắp gỗ lại <br></br>Bước 5: Chốc ngược để
            tinh dầu trong lọ chảy vào và làm ướt nắp gỗ <br></br>Bước 6: Bạn
            treo lọ tinh dầu thiên nhiên lên kính chiếu hậu của chiếc xe, hoặc
            tại vị trí nào đó trong phòng, tủ quần áo hay phòng tắm… để hương
            thơm được khuếch tán và sẵn sàng tận hưởng mùi thơm thanh mát từ
            chiếc lọ.
          </p>
        </div>
        <ProP />
      </div>
    </div>
  );
};

export default Post1;
