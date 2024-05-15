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

function xoaForm(elInput, elOutput) {
  let input = document.querySelector(elInput);
  let output = document.querySelector(elOutput);
  input.value = "";
  input.focus();
  output.style.opacity = "0";
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
    document.querySelector("#v-pills-bai01 .result").style.opacity = "1";
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
    document.querySelector("#v-pills-bai02 .result").style.opacity = "1";
    hienThiTinhTrungBinh.innerHTML = giaTriTrungBinh.toLocaleString("vi-VN");
  }
};
