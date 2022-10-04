/*bài 1: Tính tiền lương nhân viên
lương 1 ngày: 100.000
cho người dùng nhập vào số ngày
công thức tính lương: lương 1 ngày * số ngày làm*/
// input: ngayluong=20, luong 1 ngay=100000
var ngayLuong = 20;
var luong1ngay = 100000;
//output: Lương
//step1: tạo biến nhập ngày lương(ngayLuong), lương 1 ngày(luong1ngay)
//step2: tạo biến nhận giá trị ngày lương nhân với lương 1 ngày(tienLuong)
//step3: in ra màn hình kết quả
var tienLuong = ngayLuong*luong1ngay;
console.log("Lương =", tienLuong);
//kết thúc bài 1

/*bài 2: Tính giá trị trung bình của 5 số nhập vào*/
//input: 5 số
var so1 = 5;
var so2 = 10;
var so3 = 100;
var so4 = 54;
var so5 = 2346;
// output: số trung bình của 5 số
//step1: tạo biến nhập 5 số(so1,so2,so3,so4,so5)
//step2: tạo biến nhận giá trị số trung bình với công thức tổng 5 số chia 5(soTrungbinh)
//step3: in ra màn hình kết quả
var soTrungbinh = (so1+so2+so3+so4+so5) / 5;
console.log('Số trung bình của 5 số = ', soTrungbinh);
// kết thúc bài 2


/*bài 3: Quy đổi tiền
viết chương trình cho người dùng nhập số tiền USD đổi sang số tiền VNĐ */
//input: số tiền usd=20$, giá đổi sang VNĐ 23.500VNĐ
var soTienUSD = 20;
var giaDoi = 23500;
// output: số tiền VNĐ sau khi đổi
var tienVND = soTienUSD*giaDoi;
//step1: tạo biến nhập số tiền USD, giá đổi tiền
//step2: tạo biến nhận giá trị tiền đỔi theo công thức
//step3: in ra màn hình kết quả
console.log('Số tiền VNĐ =', tienVND);
//end bài 3

/*bài 4: Tính diện tích và chu vi hình chữ nhật
cho chiều rộng, chiều dài hình chữ nhật, tính diện tích chu vi hình chữ nhật*/
//input: chiều dài 20, chiều rộng 10
var chieuDai = 20;
var chieuRong = 10;
//output: Chu vi, diện tích
var chuVi = (chieuDai+chieuRong)*2;
var dienTich = chieuDai*chieuRong ;
//Step1: tạo biến chiều dài(chieuDai), chiều rộng(chieuRong)
//Step2: tạo biến chu vi(chuVi), diện tích(dienTich) nhận giá trị theo công thức
//step3: in ra màn hình kết quả
console.log('Chu vi hình chữ nhật = ', chuVi);
console.log('Diện tích hình chữ nhật = ', dienTich);
//end bài 4

/*bài 5: tính tổng hai ký số
nhập vào số có hai chữ số, tính tổng hai chữ số đó */
//input: số có hai chữ số
var soCantinh = 73;
//output: Tổng của hai chữ số
var tongHaichuso = (soCantinh - (soCantinh % 10)) / 10 + soCantinh % 10;
//Step1: tạo biến nhận số có hai chữ số(soCantinh)
//Step2: tạo biến nhận giá trị tổng hai chữ số (tongHaichuso) theo công thức: số đơn vị là số dư của số cần tính chia hết cho 10, số hàng chục là kết quả chia hết của số cần tính trừ đi số dư chia cho 10
//step3: in ra màn hình kết quả
console.log('Tổng hai chữ số cần tính = ', tongHaichuso);
//end bài 5
