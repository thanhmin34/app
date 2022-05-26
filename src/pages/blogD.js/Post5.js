import React from "react";

import { ProP } from "../Blog";

const Post1 = () => {
  return (
    <div className="w-full max-w-[1280px] px-[10px] md:px-6 lg:px-8 mx-auto font-base mt-10 md:mt-20">
      <div className="flex lg:gap-x-5">
        <div className="flex flex-col lg:basis-[70%] px-5">
          <h2 className="mx-auto text-center font-semibold text-2xl mb-5">
            Tác Dụng Của Tinh Dầu Treo Xe Ô Tô
          </h2>

          <p className="mt-4">
            Với nhiều tính năng tiện ích, không gian nội thất ô tô là nơi mang
            lại sự thoải mái cho bác tài cũng như hàng khách trên ô tô. Tuy
            nhiên, trong quá trình sử dụng, sự bất cẩn trong việc ăn uống, hút
            thuốc, mùi xe, mùi ẩm mốc trong mùa mưa,… những mùi này được tích tụ
            theo thời gian khiến không ít người ám ảnh bởi những mùi này khi
            bước vào xe.
          </p>
          <img
            src="https://tinhdaukimvui.com.vn/wp-content/uploads/2020/03/cach-ly-truc-bach.jpg"
            alt=""
          />
          <span>Tác dụng của tinh dầu treo xe ô tô:</span>
          <div className="body flex flex-col font-medium text-sm">
            <h3 className="text-xl font-semibold my-2">Công dụng dầu tràm</h3>
          </div>
          <div className="body flex flex-col font-medium text-base">
            <h3 className="text-xl font-semibold my-2">
              Cách sử dụng Dầu tràm:
            </h3>
            <div className="mb-20">
              1. Các cách dùng tinh dầu tràm Huế cơ bản <br></br>- Thoa hai bên
              thái dương, xương ức, xương sống… <br></br>- Xông dầu trong phòng
              làm việc, phòng ăn, phòng ngủ… - Xông, hít, ngửi dầu vào vùng mũi
              họng. <br></br>- Tắm nước ấm có pha thêm dầu. <br></br>- Để trị
              mụn, dùng miếng vải cotton nhúng vào dầu tràm trà và thoa trực
              tiếp lên đầu mụn, thoa dầu tràm trà 2 lần/ngày, trước lúc đi ngủ
              và sau khi thức dậy vào buổi sáng. <br></br>- Đối với các vùng da
              dễ bị mụn như trán, mũi và cằm, thoa dầu tràm trà trực tiếp lên
              vùng chữ T. Nếu da mặt bị mụn trầm trọng, nhỏ 3 – 4 giọt dầu tràm
              trà vào sữa rửa mặt và sử dụng hàng ngày. <br></br>- Nhỏ nhiều
              giọt tinh dầu tràm trà vào bồn nước và ngâm mình giúp cơ thể thư
              giãn sau khi làm việc hoặc chơi thể thao. <br></br>- Nhỏ 3 giọt
              tinh dầu tràm trà vào cốc nước ấm hoặc kem đánh răng, dùng dung
              dịch này súc miệng từ 2-3 lần/ ngày sẽ chống hôi miệng, viêm lợi.
              Nhưng không được uống dung dịch này <br className="mt-1"></br>2.
              Sử dụng Tinh dầu tràm Huế cho trẻ sơ sinh: <br></br>- Tắm cho Trẻ
              sơ sinh: nhỏ vài giọt tinh dầu tràm Hoa Nén vào thau tắm đã có
              nước ấm <br></br>- Sau khi tắm xoa một ít dầu vào lưng để giữ ấm
              cho bé, đồng thời để bé cảm thấy thoải mái, thư giãn - Sổ mũi,
              cảm: Thoa dầu vào xung quanh nơi bé ngủ như Nôi, Mùng, hoặc nhỏ
              mấy giọt tinh dầu tràm vào khăn mùi xoa để ở cổ hoặc gần mũi cho
              bé hít thở… <br></br>- Trị ho: Xoa dầu sau lưng và trước ngực cho
              bé như Massage <br></br>- Trị kiến, muỗi cắn: Bôi ngay chỗ bị cắn
              của bé. Tránh bôi trực tiếp vào mặt, trán và thái dương <br></br>-
              Trị Đau bụng: Xoa quanh vùng rốn
            </div>
          </div>
        </div>
        <ProP />
      </div>
    </div>
  );
};

export default Post1;
