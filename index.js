// Chuyển từ độ C sang độ F
// let a = +prompt("Nhập vào đây độ C: ");
// let result;
// function changeF(a){
//     result = a  *  9 / 5 + 32
//     return result;
// };
// changeF(a);
// console.log(result)

// Chuyển từ mét sang feet:
// let a = +prompt("Nhập vào đây số mét: ");
// let b = 3.2808
// let result;
// function cal(){
//     result = a * b;
//     return result;
// }
// cal();
// console.log(`Số feet tương ứng là: ` + result)

//tính diện tích hình vuông
// let a = +prompt("Nhập vào độ dài cạnh a: ");
// function calS(){
//     a = a * a;
//     return a;
// }
// calS(a);
// console.log("Diện tích hình vuông là " + a)

//tính diện tích hình chữ nhật
// let a = +prompt("Nhập vào độ dài cạnh a: ");
// let b = +prompt("Nhập vào độ dài cạnh b: ");
// function calS(){
//     result = a * b;
//     return result;
// }
// calS();
// alert(result)

//tính diện tích hình tam giác vuông khi biết 2 cạnh kề a,b:
// let a = +prompt("Nhập vào độ dài cạnh a: ");
// let b = +prompt("Nhập vào độ dài cạnh b: ");
// function calS(){
//     result = a * b / 2;
//     return result;
// }
// calS();
// alert(result)

// Giải phương trình bậc 1.
// let a = +prompt("Nhập vào số a: ");
// let b = +prompt("Nhập vào số b: ");
// function giai_pt_bac_nhat(a, b)
// {
//     if (a == 0 && b == 0){
//         alert('Phương trình vô số nghiệm');
//     }
//     else if (a != 0 && b == 0){
//         alert('Phương trình có nghiệm x = 0');
//     }
//     else if (a == 0 && b != 0){
//         alert("Phương trình vô nghiệm");
//     }
//     else {
//         alert('Phương trình có nghiệm x = ' + (-b/a));
//     }
// }
// giai_pt_bac_nhat(a, b);

// Giải ptb2:
// let x1;
// let x2;
// let a = +prompt("Nhập vào số a: ");
// let b = +prompt("Nhập vào số b: ");
// let c = +prompt("Nhập vào số c: ");
// let delta = b * b - 4 * a * c;
// //Nghiệm phân biệt
// if (delta > 0){
//     x1 = (-b + Math.sqrt(delta)) / (2*a);
//     x2 = (-b - Math.sqrt(delta)) / (2*a);
//     alert(`Hai nghiệm phân biệt là ${x1}, ${x2}`)
// }
// //Nghiệm kép
// else if (delta = 0){
//     x1 = - b / (2 * a)
//     x2 = - b / (2 * a)
//     alert(`Có 2 nghiệm kép là x1 = x2 = ${x1}`)
// }
// //Nghiệm ảo
// else{
//     let phanthuc = (-b/(2*a)).toFixed(2);
//     let phanao = (Math.sqrt(-delta) / (2*a)).toFixed(2)
//     alert(`Phương trình có nghiệm ảo. Nghiệm của phương trình là: ${phanthuc} + ${phanao} và ${phanthuc} - ${phanao}`)
// }

// Kiểm tra xem một số nhập vào có phải là tuổi của một người không. Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.
// let a = +prompt("Nhập vào số a: ");
// function cal(){
//     if( a > 0 && a< 120){
//         alert("Đây là tuổi của 1 người")
//     }
//     else{
//         alert("Đây không phải tuổi của 1 người")
//     }
// }
// cal();


// Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác
// let a = +prompt("Nhập vào số a: ");
// let b = +prompt("Nhập vào số b: ");
// let c = +prompt("Nhập vào số c: ");
// function cal(){
//     if(a,b,c > 0 && a + b > c && b + c > a && a + c > b){
//         alert("Đây là 3 cạnh của 1 tam giác")
//     }
//     else{
//         alert("Đây không phải là 3 cạnh của 1 tam giác")
//     }
// }
// cal();

// Viết chương trình tính giá điện
// let soDienTieuThu = +prompt("Nhập vào số điện tiêu thụ trong tháng: ");
// let giaDien = 3000;
// function cal(){
//     result = soDienTieuThu * giaDien;
//     return result;
// }
// cal();
// alert(`Số tiền điện bạn phải trả là: ${result}`)

//Viết chương trình tính thuế thu nhập cá nhân:
// let tienLuong = +prompt("Nhập lương của bạn: ")
// let tax = 0
// function cal(){
//     if (tienLuong <=5000){
//         tax = 0.05 * tienLuong;
//     }
//     else if( tienLuong <= 10000){
//         tax = 0.1 * tienLuong;
//     }
//     else if ( tienLuong <= 20000){
//         tax = 0.15 * tienLuong;
//     }
//     else {
//         tax = 0.2 * tienLuong;
//     }
//     return tax;
// }
// cal();
// alert(`Thuế thu nhập của bạn là: ${tax}` )

//Tính lãi suất ngân hàng
function calculateCompoundInterest(principal, months, interestRate) {
    interestRate = interestRate / 100;

    // Tính lãi mẹ đẻ lãi con
    let totalAmount = principal * Math.pow(1 + interestRate, months);

    // Làm tròn đến 2 chữ số thập phân
    totalAmount = parseFloat(totalAmount.toFixed(2));

    return totalAmount;
}

function calculateAndDisplayInterest() {
    // Nhập số tiền ban đầu
    let principal = prompt("Nhập số tiền ban đầu:");

    // Chuyển đổi input thành số
    principal = parseFloat(principal);

    // Kiểm tra tính hợp lệ của số tiền ban đầu
    if (isNaN(principal) || principal < 0) {
        alert("Vui lòng nhập một số tiền hợp lệ.");
        return;
    }

    // Nhập số tháng cho vay
    let months = prompt("Nhập số tháng cho vay:");

    // Chuyển đổi input thành số
    months = parseInt(months);

    // Kiểm tra tính hợp lệ của số tháng
    if (isNaN(months) || months <= 0) {
        alert("Vui lòng nhập một số tháng hợp lệ.");
        return;
    }

    // Nhập lãi suất hàng tháng
    let interestRate = prompt("Nhập lãi suất hàng tháng (%):");

    // Chuyển đổi input thành số
    interestRate = parseFloat(interestRate);

    // Kiểm tra tính hợp lệ của lãi suất
    if (isNaN(interestRate) || interestRate < 0) {
        alert("Vui lòng nhập một lãi suất hợp lệ.");
        return;
    }

    // Tính toán lãi mẹ đẻ lãi con
    let totalAmount = calculateCompoundInterest(principal, months, interestRate);

    // Hiển thị kết quả
    alert(`Tổng số tiền sau ${months} tháng là: ${totalAmount.toFixed(2)} VND`);
}

calculateAndDisplayInterest();
