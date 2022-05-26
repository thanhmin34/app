import React from "react";

import { ProP } from "../Blog";

const Post1 = () => {
  return (
    <div className="w-full max-w-[1280px] px-[10px] md:px-6 lg:px-8 mx-auto font-base mt-10 md:mt-20">
      <div className="flex lg:gap-x-5">
        <div className="flex flex-col lg:basis-[70%] px-5">
          <h2 className="mx-auto text-center font-semibold text-2xl mb-5">
            Tinh dầu tràm có tác dụng gì? Phân loại, cách dùng, giá bán ra sao?
          </h2>

          <p className="mt-4">
            Tinh dầu tràm gồm có nhiều loại, mỗi loại lại có tác dụng riêng. Tùy
            theo mục đích và nhu cầu mà chúng ta sẽ có cách dùng tinh dầu tràm
            phù hợp. Vậy tinh dầu tràm gồm những loại nào? Cách dùng tinh dầu
            tràm ra sao? Giá bán tinh dầu tràm là bao nhiêu? Chúng ta cùng theo
            dõi bài viết này để biết được câu trả lời.
          </p>
          <img src="/post6.jpg" className="w-full my-5 " alt="" />

          <div className="body flex flex-col font-medium text-sm">
            <h3 className="text-xl font-semibold my-2">
              Tổng quan về tinh dầu tràm
            </h3>
            <span>
              Tràm (Melaleuca) là một chi thực vật tương đối lớn. Đa số thành
              viên của chi Tràm có lớp vỏ cây giống như giấy, dễ bị tróc ra
              thành từng mảnh và cây đều có khả năng sản sinh tinh dầu. Tinh dầu
              tràm thường được chiết xuất thông qua phương pháp chưng cất hơi
              nước và được chiết xuất từ các bộ phận của cây tràm như lá, thân,
              cành.
            </span>
          </div>
          <div className="body flex flex-col font-medium text-base">
            <h3 className="text-xl font-semibold my-2">
              Phân loại tinh dầu Tràm và tác dụng
            </h3>
            <p>
              Trong số hơn 200 loài thuộc chi tràm, nổi bật lên 3 loài cho chất
              lượng tinh dầu tốt nhất và có vai trò quan trọng nhất trong liệu
              pháp tinh dầu, đó là Melaleuca alternifolia (tràm trà), Melaleuca
              cajuputi (tràm gió) và Melaleuca quinquenervia (tràm năm gân).
              Tinh dầu từ ba loại tràm kể trên đã được nghiên cứu kỹ về hoạt
              tính điều trị và đều được sử dụng trong liệu pháp tinh dầu.
            </p>
          </div>
          <div className="body flex flex-col font-medium text-base">
            <h3 className="text-xl font-semibold my-2">
              Cách dùng tinh dầu tràm
            </h3>
            <p className="px-2">
              - Giữ ấm, trị ho, ngăn ngừa và hỗ trợ điều trị một số bệnh về
              đường hô hấp (viêm mũi, viêm xoang, viêm phế quản…) <br></br> -
              Massage tinh dầu tràm gió hoặc tràm năm gân vào vùng cổ, ngực,
              thái dương, lòng bàn chân. Lưu ý, với trẻ nhỏ thì nên dùng loại
              tinh dầu tràm xoa đặc biệt đã được điều chế cùng dầu dẫn để thẩm
              thấu tốt hơn. <br></br> - Nhỏ một vài giọt tinh dầu tràm vào ly
              nước nóng để xông mũi, sau đó sử dụng chính ly nước đó để súc
              họng, giúp kháng khuẩn, làm sạch khoang mũi họng.
            </p>
          </div>
          <div className="body flex flex-col font-medium text-base">
            <h3 className="text-xl font-semibold my-2">
              Trị táo bón, khó tiêu
            </h3>
            <p className="px-2">
              Lấy một vài giọt tinh dầu tràm, massage nhẹ nhàng vùng bụng theo
              chiều kim đồng hồ, từ trong ra ngoài. Việc này giúp cho vùng bụng
              được làm nóng, từ đó giúp máu lưu thông nhanh, quá trình co bóp dạ
              dày hoạt động mạnh, đẩy hơi ra ngoài, hỗ trợ quá trình tiêu hóa.
            </p>
          </div>
          <Display title="Làm sạch không khí, ngăn ngừa và làm dịu vết côn trùng cắn" />
          <div className="body flex flex-col font-medium text-base">
            <h3 className="text-xl font-semibold my-2">
              Trị mụn, làm sạch, ngừa và hỗ trợ điều trị viêm da
            </h3>
            <p className="px-2">
              - Chấm một giọt tinh dầu tràm trà lên nốt mụn mới mọc. Mụn sẽ tiêu
              đi nhanh chóng nhờ khả năng kháng khuẩn, làm sạch cực cao của tràm
              trà. <br></br> - Nhỏ vài giọt tinh dầu tràm vào nước tắm, massage
              nhẹ nhàng. Tinh dầu tràm sẽ lấy đi lớp bụi bẩn trên da, làm sạch
              da, ngăn ngừa viêm da. <br></br> - Massage bằng tinh dầu tràm đặc
              biệt sau khi tắm để thư giãn làn da, ngừa viêm.
            </p>
          </div>
          <img
            src="/post5.jpg"
            className="w-full md:max-w-[700px] mx-auto mb-32 mt-5"
            alt=""
          />
        </div>
        <ProP />
      </div>
    </div>
  );
};

function Display({ title, desc }) {
  return (
    <div className="body flex flex-col font-medium text-base">
      <h3 className="text-xl font-semibold my-2">{title}</h3>
      <p className="px-2">
        - Xoa một lớp tinh dầu tràm xoa đặc biệt lên vùng cánh tay, chân, trán
        (những vùng quần áo không che tới) trước khi đi ngủ hoặc trước khi đi ra
        ngoài để hạn chế muỗi đốt.<br></br> - Chấm một giọt tinh dầu tràm lên
        nốt côn trùng cắn để làm dịu vết cắn.<br></br> - Nhỏ vài giọt tinh dầu
        tràm vào đèn xông tinh dầu để xông phòng, xông không gian, ngăn chặn sự
        xâm nhập của muỗi và các loại côn trùng. Lưu ý, nên dùng loại tinh dầu
        tràm xông XK chuyên dụng để đạt hiệu quả tốt nhất.
      </p>
    </div>
  );
}
export default Post1;
