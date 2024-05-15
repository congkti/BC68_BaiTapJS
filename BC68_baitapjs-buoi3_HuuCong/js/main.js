/**
 * BÀI TẬP CHÍNH JS BUỔI 3
 * Handler: Bùi Hữu Công
 */
///////////////////////////////////////////
// global - Increase/decrease numbers

function changeValue(id, buocNhay = 1) {
  let input = document.querySelector(id + " input");
  console.log("input", input);
  document.querySelector(id + " .increase").onclick = () => {
    console.log("tăng", id);
    input.value * 1 >= 1
      ? (input.value = input.value * 1 + buocNhay * 1)
      : (input.value = 1);
  };
  document.querySelector(id + " .decrease").onclick = () => {
    console.log("giảm", id);
    input.value * 1 >= 1
      ? (input.value = input.value * 1 - buocNhay * 1)
      : (input.value = 0);
  };
}

changeValue("#numberLuongCB", 100);
changeValue("#numberNgayLam");

changeValue("#numberSoThuNhat");
changeValue("#numberSoThuHai");
changeValue("#numberSoThuBa");
changeValue("#numberSoThuTu");
changeValue("#numberSoThuNam");

changeValue("#numberTienUSD");
changeValue("#numberTyGia");

changeValue("#numberChieuDai");
changeValue("#numberChieuRong");

function xoaForm(elInput, elOutput) {
  let input = document.querySelector(elInput);
  let output = document.querySelector(elOutput);
  input.value = "";
  input.focus();
  output.style.opacity = "0";
}
function xoaForm2(elInput, elOutput1, elOutput2) {
  let input = document.querySelector(elInput);
  let output1 = document.querySelector(elOutput1);
  let output2 = document.querySelector(elOutput2);
  input.value = "";
  input.focus();
  output1.style.opacity = "0";
  output2.style.opacity = "0";
}
function showElement(elm) {
  document.querySelector(elm).style.opacity = "1";
}
// .toLocaleString("vi-VN")
// .toLocaleString("vi-VN", {style:"currency", currency:"VND"})
// =========================================================
// Bài 1: tính tiền lương Nhân viên
/** =================[ Sơ đồ 3 khối ]===============
 *
 * ĐẦU VÀO: Người dùng Nhập số ngày làm việc + Lương căn bản theo ngày mặc định là 100.000
 *
 *
 * QUÁ TRÌNH XỬ LÝ:
 * - DOM để lấy đối tượng lấy dữ liệu số ngày làm, Lương căn bản 1 ngày
 * - DOM và gắn sự kiện cho nút Tính lương và tính lương thực tế
 * - Kiểm tra dữ liệu nhập vào có phải number hoặc chưa nhập? Nếu bỏ trống hoặc nhập không phải number sẽ thông báo + xóa để nhập lại
 * - Lương thực tế = Lương căn bản ngày x Số ngày làm
 * - DOM đến thẻ kết quả để hiển thị kết quả Lương thực tế
 *
 *
 * ĐẦU RA: Hiển thị lương thực tế nhận được của nhân viên trên giao diện
 *
 */
let luongCB = document.getElementById("luongCanBan");
let soNgayLam = document.getElementById("soNgayLam");
let hienThiTinhLuong = document.querySelector("#v-pills-bai01 .result .salary");
// console.log(hienThiTinhLuong);

document.getElementById("btnTinhTienLuong").onclick = () => {
  if (!soNgayLam.value || isNaN(soNgayLam.value)) {
    alert(
      `Số ngày làm = ${soNgayLam.value}. Vui lòng nhập số và không được để trống!!`
    );
    xoaForm("#soNgayLam", "#v-pills-bai01 .result");
  } else {
    let luongThucNhan = luongCB.value * soNgayLam.value;
    // console.log(luongThucNhan);
    showElement("#v-pills-bai01 .result");
    hienThiTinhLuong.innerHTML = luongThucNhan.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }
};
// =========================================================
// Bài 2: Tính giá trị trung bình của 5 số thực
/** =================[ Sơ đồ 3 khối ]===============
 *
 * ĐẦU VÀO: Người dùng nhập 5 số thực bất kỳ và form nhập
 *
 *
 * QUÁ TRÌNH XỬ LÝ:
 * - Viết hàm để kiểm tra dữ liệu nhậm vào có phải Number? Validate thông báo khi user đang nhập bằng sự kiện .onChange
 * - DOM và gắn sự kiện cho nút Tính giá trị trung bình
 * - DOM đến các thẻ tương ứng để lấy dữ liệu 5 số số thực đã nhập
 * - Kiểm tra loại bỏ TH không nhập cả 5 số
 * - Tính Giá trị trung bình = Tổng 5 số / 5
 * - DOM đến thẻ kết quả để hiển thị kết quả Giá trị TB
 *
 *
 * ĐẦU RA: Hiển thị Giá trị trung bình của 5 số trên giao diện
 */
function checkInputNumber(inputID) {
  let input = document.getElementById(inputID);
  if (!input.value || isNaN(input.value)) {
    alert(
      `Đang nhập giá trị = ${input.value}. Vui lòng nhập số thực và không được để trống. Nếu để trống sẽ tính với giá trị bằng 0 !!!`
    );
    input.value = "";
    input.focus();
  }
}

document.getElementById("btnTinhTrungBinh").onclick = () => {
  let soThuNhat = document.getElementById("soThuNhat").value * 1;
  let soThuHai = document.getElementById("soThuHai").value * 1;
  let soThuBa = document.getElementById("soThuBa").value * 1;
  let soThuTu = document.getElementById("soThuTu").value * 1;
  let soThuNam = document.getElementById("soThuNam").value * 1;
  let hienThiTinhTrungBinh = document.querySelector(
    "#v-pills-bai02 .result .salary"
  );
  let tongNamSo = soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam;
  if (tongNamSo == 0) {
    alert("Chưa nhập số nào mà tính gì?");
    document.getElementById("soThuNhat").focus();
  } else {
    let giaTriTrungBinh = tongNamSo / 5;
    showElement("#v-pills-bai02 .result");
    hienThiTinhTrungBinh.innerHTML = giaTriTrungBinh.toLocaleString("vi-VN");
  }
};
// =========================================================
// Bài 3: Quy đổi tiền USD sang VND theo tỷ giá hiện tại
/** =================[ Sơ đồ 3 khối ]===============
 *
 * ĐẦU VÀO: Người dùng nhập vào số tiền USD cần đổi, Tỷ giá mặc định là 23.500, khách hàng nhập tỷ giá mới nếu cần
 *
 *
 * QUÁ TRÌNH XỬ LÝ:
 * - DOM và gắn sự kiện cho nút Quy đổi tiền
 * - DOM đến các thẻ tương ứng để lấy dữ liệu số tiền USD cần chuyển
 * - Kiểm tra dữ liệu nhập vào có phải là Number
 * - Tính Giá trị quy đổi VND = Số tiền USD x Tỷ giá
 * - DOM đến thẻ kết quả để hiển thị kết quả Giá trị VND
 *
 *
 *
 * ĐẦU RA: Hiển thị Giá trị VND sau chuyển đổi trên giao diện
 *
 */
document.getElementById("btnQuyDoiTien").onclick = () => {
  let soTienUSD = document.getElementById("tienUSD").value * 1;
  let tyGiaUsdVnd = document.getElementById("tyGiaUsdVnd").value * 1;
  if (!soTienUSD || isNaN(soTienUSD)) {
    alert(
      `Tiền USD = ${soTienUSD}. Vui lòng nhập số tiền và không được để trống!!`
    );
    xoaForm("#tienUSD", "#v-pills-bai03 .result");
  } else {
    let soTienVND = soTienUSD * tyGiaUsdVnd;
    showElement("#v-pills-bai03 .result");
    document.querySelector("#v-pills-bai03 .result .salary").innerHTML =
      soTienVND.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  }
};
// =========================================================
// Bài 4: Tích chu vi, Diện tích Hình chữ nhật
/** =================[ Sơ đồ 3 khối ]===============
 *
 * ĐẦU VÀO: Người dùng nhập chiều dài và chiều rộng của hình chữ nhật
 *
 *
 * QUÁ TRÌNH XỬ LÝ:
 * - Dùng hàm kiểm tra dữ liệu nhập vào đảm bảo là number
 * - DOM và gắn sự kiện cho nút Tính Diện tích, chu vi
 * - Kiểm tra dữ liệu rỗng hoặc bằng 0 yêu cầu nhập lại
 * - Tính Chu vi = (Dài + Rộng)x2
 * - Tính Diện tích = Dài x Rộng
 * - DOM đến thẻ kết quả để hiển thị kết quả Diện tích và Chu vi
 *
 *
 * ĐẦU RA: Hiển thị Diện tích và Chu vi của hình chữ nhật trên giao diện
 *
 */
let chieuDai = document.getElementById("chieuDaiHinhCN");
let chieuRong = document.getElementById("chieuRongHinhCN");
document.getElementById("btnTinhDienTich").onclick = () => {
  if (!chieuDai || chieuDai.value * 1 == 0) {
    alert(
      `Dài = ${chieuDai.value}. Chiều dài/rộng không được trống hoặc bằng 0. Vui lòng nhập lại chiều Dài !!`
    );
    chieuDai.value = "";
    chieuDai.focus();
    xoaForm2(
      "#chieuDaiHinhCN",
      "#v-pills-bai04 #rsDienTich",
      "#v-pills-bai04 #rsChuVi"
    );
  } else if (!chieuRong || chieuRong.value * 1 == 0) {
    alert(
      `Rộng = ${chieuRong.value}. Chiều dài/rộng không được trống hoặc bằng 0. Vui lòng nhập lại chiều Rộng !!`
    );
    chieuRong.value = "";
    chieuRong.focus();
    xoaForm2(
      "#chieuRongHinhCN",
      "#v-pills-bai04 #rsDienTich",
      "#v-pills-bai04 #rsChuVi"
    );
  } else {
    showElement("#v-pills-bai04 #rsDienTich");
    document.querySelector("#v-pills-bai04 #rsDienTich .salary").innerHTML =
      (chieuDai.value * chieuRong.value).toLocaleString("vi-VN") +
      " cm<sup>2</sup>";

    showElement("#v-pills-bai04 #rsChuVi");
    document.querySelector("#v-pills-bai04 #rsChuVi .salary").innerHTML =
      ((chieuDai.value * 1 + chieuRong.value * 1) * 2).toLocaleString("vi-VN") +
      " cm";
  }
};
// =========================================================
// Bài 5: Tích tổng 2 ký số
/** =================[ Sơ đồ 3 khối ]===============
 *
 * ĐẦU VÀO: Người dùng nhập số có hai chữ số
 *
 *
 * QUÁ TRÌNH XỬ LÝ:
 * - DOM và gắn sự kiện cho nút Tính Tổng 2 ký số
 * - DOM đến các thẻ tương ứng để lấy dữ liệu số tiền USD cần chuyển
 * - Kiểm tra số nhập vào có phải là Number --> làm tới bài 5 mới nhớ ra nếu chọn input type="number" thì trình duyệt validate sẵn ko cho nhập chữ!! :((( Ôi đời đen quá!!! :D
 * - Kiểm tra số đúng 2 chữ số và là số Nguyên:
 *   + kiểm tra hai chữ số bằng cách so sánh giá trị truyệt đối của nó với 10 và 100:  10 <= Math.abs(soNguyen) < 100 &&
 *   + Ktra số nguyên Number.isInteger(soNguyen) == true
 * - Tách từng số hàng đơn vị, chục:
 *    + hàng đơn vị = phép chia lấy dư cho 10 hangDonVi = (soNguyen % 10)
 *    + số hàng chục: dùng hàm Math.trunc() lấy phần nguyên
 *           hangChuc = Math.trunc(soNguyen/10)
 *      + cách 2: hangChuc = (soNguyen - hangDonVi)/10
 * - Tính Tổng Ký số = hangChuc + hangDonVi
 * - DOM đến thẻ kết quả để hiển thị kết quả Diện tích và Chu vi
 *
 *
 * ĐẦU RA: Hiển thị kết quả Tổng 2 ký số trên giao diện
 *
 */
document.getElementById("btnTinhTongKySo").onclick = () => {
  let soNguyen = document.getElementById("soNguyen").value * 1;
  // kiểm tra số nguyên 2 chữ số
  if (
    Number.isInteger(soNguyen) &&
    Math.abs(soNguyen) >= 10 &&
    Math.abs(soNguyen) < 100
  ) {
    let soHangDonVi = soNguyen % 10;
    let soHangChuc = Math.trunc(soNguyen / 10);
    showElement("#v-pills-bai05 .result");
    document.querySelector("#v-pills-bai05 .result .salary").innerHTML =
      soHangChuc + soHangDonVi;
  } else {
    alert("Nhập sai! Chỉ nhập số nguyên có 2 chữ số");
    xoaForm("#soNguyen", "#v-pills-bai05 .result");
  }
};
