// chèn vào giữa dùng: splice (còn có thể dùng để xóa), cuối dùng push, đầu dùng shjft
// filter cũng có thể dùng để xóa: VD xóa 3 thì lọc < 3 && > 3
// tìm vị trí của 1 phần tử mong muốn thì dùng forEach()
var lang = ["vietnam", "chinese", "japan"];
console.log("test 1: ");
console.log(lang);
var str = lang.toString();
console.log("test 2: ");
console.log(str);
var str2 = lang.join("-");
// or var str2 = _.join(lang. "-");
console.log("test 4: " + str2);
var arr = [];
arr.push(50);
arr.push(60);
arr.push(70);
arr.push(80);
console.log("test 5: " + arr);
// lấy ra phần tử cuối cùng trong mảng và xóa nó đi
var item = arr.pop();
console.log("test 6: " + arr);
console.log("test 7: " + item);
var arr2 = [];
arr2.push(50);
arr2.push(60);
arr2.push(70);
arr2.push(80);
console.log("test 8: " + arr2);
// lấy ra phần tử đầu trong mảng và xóa nó đi
var item = arr2.shift();
console.log("test 9: " + arr2);
console.log("test 10: " + item);
var arr3 = [];
arr3.push(50);
arr3.push(60);
arr3.push(70);
arr3.push(80);
console.log("test 11: " + arr3);
// lấy phần tử bắt đầu từ vị trí 1 và < 3
var item1 = arr3.slice(1,3);
console.log("test 12: " + arr3);
console.log("test 13: " + item1);
var arr4 = [13, 45, 15, 55, 96];
// var arr5 = [];
// console.log("test 14: " + arr5);
// for(var i = 0; i < arr4.length; i++) {
//     if(arr4[i] > 40 && arr4[i] < 60) {
//         arr5.push(arr4[i]);
//     }
// }
// hoặc
var arr5 = arr4.filter(function(value){
    return value > 40 && value < 60;
});
console.log("test 15: " + arr5);
var arr6 = [
    {
        id : 1,
        name : "thiennv",
        school : "fpoly"
    },
    {
        id : 2,
        name : "dungnv",
        school : "fpoly"
    },
    {
        id : 3,
        name : "longnv",
        school : "zpoly"
    }
]
var arr7 = arr6.filter(function(item){
    return item.school === "fpoly";
});
console.log("test 16: ");
console.log(arr7);
var arr8 = [1, 2, 3, 4, 5];
// 2: thêm phần tử vào trước vị trí 2
// 0: trước vị trí 2 xóa đi 0 phần tử, nếu là 1 thì xóa đi số 3, 2 thì xóa đi số 3, 4, 3 thì 3, 4, 5
// các số phía sau (15, 16, 17) là các phần tử thêm, có thể thêm số nữa cũng được
arr8.splice(2, 0, 15, 16, 17);
console.log("test 17: " + arr8);
arr8.splice(2, 2, 1);
console.log("test 18: " + arr8);
arr8.splice(3, 2);
console.log("test 19: " + arr8);
// xóa phần tử 'fu'
var arr9 = ['fpoly', 'fu', 'fschool', 'fu', 'thschool', 'fu'];
// dùng filter
var arr10 = arr9.filter(function(value) {
    return value !== 'fu';
});
console.log("test 20: " + arr10);
// dùng splice
for(var i = 0; i < arr9.length; i++) {
    if(arr9[i] === 'fu') {
        arr9.splice(i, 1);
    }
}
console.log("test 21: " + arr9);
// tìm các vị trí xuất hiện 'fu'
var arr11 = ['fpoly', 'fu', 'fschool', 'fu', 'thschool', 'fu'];
var arr12 = [];
arr11.forEach(function(value, index) {
    if(value === 'fu') {
        arr12.push(index);
    }
});
console.log("test 22: " + arr12);
// cách khác, áp dụng thư viện nhưng chỉ tìm được duy nhất 1 vị trí phần tử cần tìm mà thôi
var arr13 = _.findIndex(arr11, function(value) {
    return value === 'fu';
});
console.log("test 28: " + arr13);
// tìm vị trí xuất hiện đầu tiên của từ or chuỗi chỉ định trong chuỗi A
// nguyên chuỗi chứ không phải là chữ cái đầu tiên của chuỗi
var arr14 = "helloweb pt14313-web";
console.log("test 35: " + arr14.indexOf('web'));
// thay thế duy nhất 1 chuỗi chỉ định xuất hiện trong chuỗi A thành chuỗi khác
var arr15 = arr14.replace("web", "vanty");
console.log("test 36: " + arr15);
// thay thế toàn bộ chuỗi chỉ định xuất hiện trong chuỗi A thành chuỗi khác
// kết hợp indexOf + replace
var arr16 = "helloweb pt14313-web";
while(arr16.indexOf('web') !== -1) {
    arr16 = arr16.replace('web', 'vanty');   
}
console.log("test 37: " + arr16);
var arr17 = "ABCBA";
// convert từ chuỗi -> mảng dùng split("")
// thằng 17 sau khi dùng split("") vẫn là chuỗi không phải là mảng nha
var arr18 = arr17.split("");
var arr19 = arr18.reverse();
// convert từ mảng -> chuỗi lại để so sánh dùng join("")
arr19 = arr19.join("");
if(arr19 === arr17) {
    console.log("test 38 ok - " + arr19 + " - " + arr17);
}
else {
    console.log("test 38 not ok - " + arr19 + " - " + arr17);
}
var arr20 = "nguy";
var arr21 = 3;
var arr22 = "";
for(var i = 0; i < arr20.length; i++) {
    if(i < arr21) {
        arr22 += arr20[i];
    }
    else{
        arr22 += ".";
    }
}
arr22 += ".";
console.log("test 39: " + arr22);


//                                      DATE 
var now = new Date();
console.log("test 30: " + now);
// convert về DD-MM-YYYY (dùng thư viện nên phải import vào)
var date = moment('1991-02-03').format('DD/MM/YYYY');
console.log("test 29: " + date);
// convert ngày-tháng-năm chỉ định sang Date
var birthDate = Date.parse("1991-02-03");
console.log("test 23: " + birthDate);
var convert = new Date(birthDate);
console.log("test 24: " + convert);
// tìm thứ thông qua ngày-tháng-năm
var days = ["Sunday", "Monday", "TuesDay", "Wednesday", "Thursday", "Friday", "Saturday"];
var birthDay = new Date("1997-10-20");
console.log("test 25: " + days[birthDay.getDay()]);
// tìm hours, minutes, date, seconds từ ngày A đến ngày B
var date1 = moment('2020-03-15T09:31:28');
var date2 = moment('2020-03-16T09:32:42');
console.log("test: 31: " + date2.diff(date1, 'hours'));
console.log("test: 32: " + date2.diff(date1, 'minutes'));
console.log("test: 33: " + date2.diff(date1, 'days'));
console.log("test: 34: " + date2.diff(date1, 'seconds'));
//                                      ÁP DỤNG THƯ VIỆN (import vào)
// đảo random các vị trí or các phần tử trong mảng
var shuffArr = _.shuffle([1, 2, 3, 4]);
console.log("test 26: " + shuffArr);
// tìm ra các số khác trong mảng A từ mảng B 
// -> số nào tồn tại trong mạng A mà không tồn tại trong mảng B sẽ dc return về và lấy giá trị đó
console.log("test 27: " + _.difference([1, 2, 3, 4, 5], [2, 4 ,5 ,6]));
