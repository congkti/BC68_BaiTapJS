/**
 * JS BUỔI 5: HÀM - BÀI TẬP TÍNH TIỀN UBER
 */
// tạo hàng để dễ dàng thay đổi sau này
const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";
const VAT_TAX = 10; //thuế VAT 10%
// tách hàm tính tiền từng mức giá để dễ dàng điều chỉnh nâng giá sau này
// kiểm tra loại xe người dùng để trả về giá tiền phù hợp
const kiemTraGiaTienKmDauTien = (loaiXe) => {
  // Hàm lấy giá tiền km đầu tiên
  switch (loaiXe) {
    case UBER_CAR:
      return 8000;
    case UBER_SUV:
      return 9000;
    case UBER_BLACK:
      return 10000;
  }
};

// Hàm lấy giá tiền km 1 đến 19
const kiemTraGiaTienKmTu1Den19 = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7500;
    case UBER_SUV:
      return 8500;
    case UBER_BLACK:
      return 9500;
  }
};

// Hàm lấy giá tiền km trên 19
const kiemTraGiaTienKmTu19TroLen = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7000;
    case UBER_SUV:
      return 8000;
    case UBER_BLACK:
      return 9000;
  }
};

// Hàm lấy giá tiền chờ
const kiemTraGiaTienCho = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 2000;
    case UBER_SUV:
      return 3000;
    case UBER_BLACK:
      return 3500;
  }
};
// nhập bill
const TEN_TAI_XE = "Nguyễn Văn B";
const MA_TAI_XE = "58178";
// hàm kiểm tra style theo loại xe
const GET_STYLE_XE = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return "success";
    case UBER_SUV:
      return "gold";
    case UBER_BLACK:
      return "dark";
  }
};
function vnd(num) {
  return (num = num.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  }));
}
function nhapBill(idNhap, NoiDungNhap) {
  document.getElementById(idNhap).innerHTML = NoiDungNhap;
}
// kiểm tra form nhập
function kiemTraDauVao() {
  console.log("chạy kiểm tra");
  let car1 = document.getElementById("uberX").checked;
  let car2 = document.getElementById("uberSUV").checked;
  let car3 = document.getElementById("uberBlack").checked;
  console.log(car1, car2, car3);
  let soKm = document.getElementById("txt-km").value * 1;
  if (!car1 && !car2 && !car3) {
    alert("Chọn loại xe!");
    return false;
  } else if (soKm <= 0) {
    alert("Số Km không được nhập 0");
    return false;
  } else {
    return true;
  }
}

function tinhTienTaxi() {
  console.log("nút tính tiền");
  //   lấy dữ liệu loại xe, số km, thời gian chờ
  let loaiXe = document.querySelector('input[type="radio"]:checked').value;

  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  console.log(loaiXe, soKm, thoiGianCho);
  let giaTienKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  let giaTienKmTu1Den19 = kiemTraGiaTienKmTu1Den19(loaiXe);
  let giaTienKmTu19TroLen = kiemTraGiaTienKmTu19TroLen(loaiXe);
  let giaTienCho = kiemTraGiaTienCho(loaiXe);
  // TH 1 : Đi 1km == > số KM người dùng đi * giaTienKmDauTien If (sokm <= 1 && sokm > 0)
  // Th2 : Đi trong khoảng từ 1 đen 19km =>1 * giaTienKmDauTien + (sokm - 1) * giaTienKmTu1Den19
  // TH3 : Đi trong khoảng từ 19km trở lên =>giaTienKmDauTien + 18 * giaTienKmTu1Den19 + (sokm - 19) * giaTienKmTu19TroLen
  // tính gia tien cho => if (thoiGianCho > 3) =>math.floor( (thoiGianCho - 3) / 3)
  // /////////////////////////////////
  let tongTien = 0;
  let tienCho = 0;
  // debugger; //set 1 điểm debug
  if (soKm <= 1 && soKm > 0) {
    tongTien = soKm * giaTienKmDauTien;
  } else if (soKm > 1 && soKm <= 19) {
    tongTien = giaTienKmDauTien + (soKm - 1) * giaTienKmTu1Den19;
  } else {
    tongTien =
      giaTienKmDauTien +
      18 * giaTienKmTu1Den19 +
      (soKm - 19) * giaTienKmTu19TroLen;
  }
  // tính tiền chờ
  if (thoiGianCho > 3) {
    // cứ mỗi 3 phút thì bị phạt một lần giá chờ
    tienCho = Math.floor(thoiGianCho / 3) * giaTienCho;
    console.log("lần chờ", Math.floor(thoiGianCho / 3));
    console.log("bang gia cho ", giaTienCho);
    console.log("tinh tien cho", tienCho);
  } else {
    tienCho = 0;
  }
  tongTien += tienCho;
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerText = vnd(tongTien);

  // toLocaleString( "vi", {style: "currency", currency: "VND", } )
  // Nhập dữ liệu vô hóa đơn
  let ngayInBill = new Date().toLocaleString("vi-VN", {
    timeStyle: "medium",
    dateStyle: "short",
  });
  // nhập thông tin header
  nhapBill(
    "billLogoLoaiXe",
    `
      <h4 class="bg-${GET_STYLE_XE(
        loaiXe
      )} text-white mt-1 px-2 py-4 text-center d-flex align-items-center justify-content-center rounded" >
      <i class="fa fa-taxi" aria-hidden="true"></i> 
      TAXI&nbsp;&nbsp; <small>${loaiXe}</small>
      </h4>
    `
  );
  nhapBill(
    "billInfoLeft",
    `
    - Loại xe: ${loaiXe}<br />
    - Tổng quảng đường đi: ${soKm}km<br />
    - Tổng thời gian chờ: ${thoiGianCho} phút
  `
  );
  nhapBill(
    "billInfoRight",
    `
    - Ngày in: ${ngayInBill} <br />
    - Tài xế: ${TEN_TAI_XE} - MS: ${MA_TAI_XE}
  `
  );
  nhapBill(
    "billTitle",
    `
  <strong class="text-${GET_STYLE_XE(loaiXe)}">THÔNG TIN THANH TOÁN</strong>
  `
  );
  // nhập body table
  let soKmDauTien = 0;
  let soKmTu1Den19 = 0;
  let soKmTren19 = 0;
  if (soKm > 0 && soKm <= 1) {
    soKmDauTien = soKm;
    soKmTu1Den19 = 0;
    soKmTren19 = 0;
  } else if (soKm > 1 && soKm <= 19) {
    soKmDauTien = 1;
    soKmTu1Den19 = soKm - 1;
    soKmTren19 = 0;
  } else if (soKm > 19) {
    soKmDauTien = 1;
    soKmTu1Den19 = 18;
    soKmTren19 = soKm - 19;
  } else return false;
  // Chi tiết	   Sử dụng   	Đơn giá    	Thành tiền
  console.log(soKmDauTien, giaTienKmDauTien);
  console.log(soKmTu1Den19, giaTienKmTu1Den19);
  console.log(soKmTren19, giaTienKmTu19TroLen);
  nhapBill(
    "billBodyTbl",
    `
          <tr>
            <td>KM đầu tiên</td>
            <td>${soKmDauTien} <small>km</small></td>
            <td>${giaTienKmDauTien.toLocaleString(
              "vi"
            )} <small>đ/km</small></td>
            <td>${vnd(soKmDauTien * giaTienKmDauTien)}</td>
          </tr>
          <tr>
            <td>Từ 1 đến 19km</td>
            <td>${soKmTu1Den19} <small>km</small></td>
            <td>${giaTienKmTu1Den19.toLocaleString(
              "vi"
            )} <small>đ/km</small></td>
            <td>${vnd(soKmTu1Den19 * giaTienKmTu1Den19)}</td>
          </tr>
          <tr>
            <td>Trên 19km</td>
            <td>${soKmTren19} <small>km</small></td>
            <td>${giaTienKmTu19TroLen.toLocaleString(
              "vi"
            )} <small>đ/km</small></td>
            <td>${vnd(soKmTren19 * giaTienKmTu19TroLen)}</td>
          </tr>
          <tr>
            <td>
              Phụ thu tiền chờ
              <small>(cứ mỗi 3 phút chờ, phụ thu sẽ được tính 1 lần)</small>
            </td>
            <td>${Math.floor(thoiGianCho / 3)} <small>lần</small></td>
            <td>${giaTienCho.toLocaleString("vi")} <small>đ/lần</small></td>
            <td>${vnd(tienCho)}</td>
          </tr>
  
  `
  ); //end body tbl

  // nhập tổng, tfoot
  let tienThueVat = Math.round((tongTien * VAT_TAX) / 100);
  console.log("thuex", (tongTien * VAT_TAX) / 100);
  nhapBill("billTongTien", vnd(tongTien));
  nhapBill("billThueVat", vnd(tienThueVat));
  nhapBill("billTongThanhToan", vnd(tongTien + tienThueVat));
  // nhapBill("", "");

  document.getElementById("tongTienBangChuDemo").innerHTML =
    VNnum2words(tongTien + tienThueVat) + " đồng";
  document.getElementById("tongTienBangChu").innerHTML =
    VNnum2words(tongTien + tienThueVat) + " đồng";
} //en function tinhTienTaxi()
document.getElementById("btnTinhTien").onclick = () => {
  let check = kiemTraDauVao();
  if (check) {
    tinhTienTaxi();
  }
};
document.getElementById("btnInHoaDon").onclick = () => {
  let check = kiemTraDauVao();
  if (check) {
    $("#invoiceModal").modal("show");
    tinhTienTaxi();
  }
};

// Bài tập về nhà: làm phần còn lại : tính tiền chờ + In hóa đơn. Deadline thứ 3 tuần sau 21/05/2024

// BC68_Cong_Bai_tap_BuoiXXX
// alert(VNnum2words(10000));
// =======Print #01: Open 1 Window mới > Load nội dung in vào > Print
function printContent(contentId) {
  // Lấy nội dung của phần tử có id là contentId
  let content = document.getElementById(contentId).innerHTML;

  // Tạo một cửa sổ mới
  let printWindow = window.open(
    "",
    "",
    "width=1200,height=700,top=20,left=100"
  );

  // Viết nội dung vào cửa sổ mới và thêm các thẻ HTML cơ bản
  printWindow.document.write("<html><head><title>In hóa đơn</title>");
  printWindow.document.write("<link rel='stylesheet' href='./css/print.css'>");
  printWindow.document.write("</head><body >");
  printWindow.document.write(
    "<div class='w-100 p-3 m-0'>" + content + "</div>"
  );
  printWindow.document.write(
    "<button class='btn btn-dark mx-3' id='clickPrint'>Print</button></body></html>"
  );
  // chờ load hoàn chỉnh mới chạy lệnh in
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 500);
}
document.getElementById("btnPrintBill").addEventListener("click", () => {
  printContent("vungInBill"); //id phần tử cha của phần tử cần in
});
// =========END Print #01====================================

// ===============Print #02: CHỌN ĐỐI TƯỢNG > IN
function selectElementContents(el) {
  var body = document.body,
    range,
    sel;
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    sel.removeAllRanges();
    try {
      range.selectNodeContents(el);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(el);
      sel.addRange(range);
    }
  } else if (body.createTextRange) {
    range = body.createTextRange();
    range.moveToElementText(el);
    range.select();
  }
}

// selectElementContents(document.getElementById("tblInvoicex"));
document.getElementById("btnPrintBillxxx").addEventListener("click", () => {
  // chọn nội dung cần in
  selectElementContents(document.getElementById("tblInvoice"));
  // lệnh in chưa đc --> ko có in vùng chọn
  // window.print();
  // sau khi chọn -> nhấn Ctrl+P để có tùy chọn in vùng chọn
});
// =================END Print #02
