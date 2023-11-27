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
let a = +prompt("Nhập vào độ dài cạnh a: ");
function calS(){
    a = a * a;
    return a;
}
calS(a);
console.log("Diện tích hình vuông là " + a)