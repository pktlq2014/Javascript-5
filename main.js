// những hàm được return không nhất thiết phải return, để bình thường vẫn được
// nếu không có return thì nên dùng forEach, return thì dùng map, tính toán thì nên dùng reduce



// chèn vào đầu, giữa, cuối dùng: splice (còn có thể dùng để xóa)
// -> giá trị xóa và thêm bao nhiêu cũng được, chứ không nhất thiết phải 1

// chèn vào cuối dùng push, chèn vào đầu dùng shjft

// filter cũng hỗ trợ value và index giúp lặp qua và lấy all object nào thỏa điều kiện
// còn find thì chỉ lấy duy nhất 1 thằng và thằng đó là thằng phát hiện, tìm thấy đầu tiên 
// và thỏa điều kiện đầu tiên), ngoài ra filter cũng có thể dùng để xóa: VD xóa 3 thì lọc < 3 && > 3

// pop giúp lấy ra phần tử cuối cùng trong mảng A và xóa nó ra khỏi mảng A 
// sau đó gán phần tử cuối cùng lấy được này cho mảng B

// shift giúp lấy ra phần tử đầu tiên trong mảng A và xóa nó ra khỏi mảng A 
// sau đó gán phần tử đầu tiên lấy được này cho mảng B

// slice(1,5) giúp lấy ra all phần tử bắt đầu từ vị trí 1 đến < 5 nghĩa là từ 1 -> 4

// indexOf lấy ra vị trí chữ cái đầu tiên của từ or chuỗi con giống, tồn tại và nằm trong chuỗi cha
// VD: A = 'web', B = 'abcedfweb qwerfqweb' -> KQ: 6 -> chỉ lấy ra được 1 vị trí chữ cái xuất hiện đầu tiên

// replace giúp thay thế 1 chuỗi chỉ định tồn tại trong chuỗi gốc thành 1 chuỗi khác
// A = ("web", "vanty"), B = "abcasdweb qwedaweb" -> KQ: abcasdvanty qwedaweb
// -> chỉ thay thế được 1 vị trí chuỗi phát hiện đầu tiên mà thôi

// KẾT HỢP INDEXOF + REPLACE ĐỂ THAY THẾ ALL

// convert từ chuỗi -> mảng dùng split("")
// convert từ mảng -> chuỗi lại để so sánh dùng join("")

// forEach giúp duyệt qua all object, vừa trả về object vừa trả về index của object này

// every cũng giống với forEach đều có value và index nhưng nó được phép return để kiểm tra điều kiện
// kiểm tra hết toàn bộ all object, kiểm tra 1 thuộc tính có giá trị bất kỳ mà all object đều phải có
// nếu all object đều có thuộc tính giống với giá trị này 
// thì trả về true, ngược lại có 1 trong all object không giống, thì trả về false

// some cũng giống với forEach và every đều có value và index 
// nhưng nó được phép return để kiểm tra điều kiện
// kiểm tra hết toàn bộ all object, kiểm tra 1 thuộc tính có giá trị bất kỳ mà 1 trong các object có
// chỉ cần 1 object có thuộc tính giống với giá trị này 
// thì trả về true, ngược lại thì trả về false
// khác với every chỉ cần 1 object trong all object tồn tại thuộc tính có giá trị này là true rồi

// map giúp duyệt qua all object, ngoài ra còn giúp chỉnh sửa dữ liệu của thuộc tính trong mỗi object
// hoặc có thể thêm thuộc tính mới vào object
// ngoài ra map còn giúp lấy ra 1 or nhiều thuộc tính bất kỳ nằm trong all object để lưu vào 1 mảng mới

// reduce giúp duyệt qua all object, lấy giá trị của 1 thuộc tính bất kỳ nằm trong all object
// ra tính toán và trả về giá trị tổng cộng sau khi duyệt qua xong all object
// tính toán thì dùng thằng này
// 0 là giá trị mặc định ban đầu để tính toán, thay vì để biến count = 0 thì hàm này hỗ trợ sẵn
// 1 biến trong hàm, giá trị mặc định này có thể là chuỗi, số float, mảng cũng được



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
var item1 = arr3.slice(1, 3);
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
var arr5 = arr4.filter(function (value) {
    return value > 40 && value < 60;
});
console.log("test 15: " + arr5);

var arr6 = [
    {
        id: 1,
        name: "thiennv",
        school: "fpoly"
    },
    {
        id: 2,
        name: "dungnv",
        school: "fpoly"
    },
    {
        id: 3,
        name: "longnv",
        school: "zpoly"
    }
]
var arr7 = arr6.filter(function (item) {
    return item.school === "fpoly";
});
console.log("test 16: ");
console.log(arr7);

var arr8 = [1, 2, 3, 4, 5];
// 2: thêm phần tử vào trước vị trí 2
// 0: trước vị trí 2 xóa đi 0 phần tử, nếu là 1 thì xóa đi số 3, nếu là 2 thì xóa đi số 3, 4
// nếu là 3 thì 3, 4, 5
// các số phía sau (15, 16, 17) là các phần tử thêm, có thể thêm bao nhiêu số tùy thích
// arr8.splice(2, 0, 15, 16, 17);
arr8.splice(2, 0, 15, 16, 17);
console.log("test 17: " + arr8);
arr8.splice(2, 2, 1);
console.log("test 18: " + arr8);
arr8.splice(3, 2);
console.log("test 19: " + arr8);

// xóa phần tử 'fu'
var arr9 = ['fpoly', 'fu', 'fschool', 'fu', 'thschool', 'fu'];
// dùng filter
var arr10 = arr9.filter(function (value) {
    return value !== 'fu';
});
console.log("test 20: " + arr10);

// dùng splice
for (var i = 0; i < arr9.length; i++) {
    if (arr9[i] === 'fu') {
        arr9.splice(i, 1);
    }
}
console.log("test 21: " + arr9);

// tìm tất cả các vị trí xuất hiện 'fu'
var arr11 = ['fpoly', 'fu', 'fschool', 'fu', 'thschool', 'fu'];
var arr12 = [];
arr11.forEach(function (value, index) {
    if (value === 'fu') {
        arr12.push(index);
    }
});
console.log("test 22: " + arr12);
// cách khác, áp dụng thư viện nhưng chỉ tìm được 1 vị trí xuất hiện 'fu' 
// phát hiện đầu tiên mà thôi
var arr13 = _.findIndex(arr11, function (value) {
    return value === 'fu';
});
console.log("test 28: " + arr13);

// lấy ra vị trí chữ cái xuất hiện đầu tiên của từ or chuỗi giống với chuỗi chỉ định trong chuỗi A
// chuỗi or từ phải tồn tại or giống với chuỗi nằm trong chuỗi chỉ định
// chỉ lấy ra được vị trí phát hiện đầu tiên của từ chỉ định giống với chuỗi A  
var arr14 = "helloweb pt14313-web";
console.log("test 35: " + arr14.indexOf('web'));

// thay thế duy nhất 1 chuỗi chỉ định xuất hiện trong chuỗi A thành chuỗi khác
var arr15 = arr14.replace("web", "vanty");
console.log("test 36: " + arr15);

// thay thế toàn bộ chuỗi chỉ định xuất hiện trong chuỗi A thành chuỗi khác
// kết hợp indexOf + replace
var arr16 = "helloweb pt14313-web";
while (arr16.indexOf('web') !== -1) {
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
if (arr19 === arr17) {
    console.log("test 38 ok - " + arr19 + " - " + arr17);
}
else {
    console.log("test 38 not ok - " + arr19 + " - " + arr17);
}

var arr20 = "nguy";
var arr21 = 3;
var arr22 = "";
for (var i = 0; i < arr20.length; i++) {
    if (i < arr21) {
        arr22 += arr20[i];
    }
    else {
        arr22 += ".";
    }
}
arr22 += ".";
console.log("test 39: " + arr22);





confirm("test 40");
prompt("test 41");
var arr23 = [
    {
        id: 1,
        name: "A",
        coin: 100
    },
    {
        id: 2,
        name: "B",
        coin: 100
    },
    {
        id: 3,
        name: "C",
        coin: 100
    },
];
// forEach giúp duyệt qua all object, vừa trả về value vừa trả về index
arr23.forEach(function (value, index) {
    console.log("test 42: " + index + " - ");
    console.log(value);
});

// every cũng giống với forEach đều có value và index nhưng nó được phép return để kiểm tra điều kiện
// kiểm tra hết toàn bộ all object, kiểm tra 1 thuộc tính có giá trị bất kỳ mà all object đều phải có
// nếu all object đều có thuộc tính giống với giá trị này 
// thì trả về true, ngược lại có 1 trong all object không giống, thì trả về false
var arr24 = arr23.every(function (value, index) {
    return value.coin === 100;
});
console.log("test 43: " + arr24);

var arr26 = [
    {
        id: 1,
        name: "A",
        coin: 0
    },
    {
        id: 2,
        name: "C",
        coin: 0
    },
    {
        id: 3,
        name: "C",
        coin: 100
    },
];
// some cũng giống với forEach và every duyệt qua all object, nhưng nó hỗ trợ thêm kiểm tra điều kiện
// kiểm tra hết toàn bộ all object, kiểm tra 1 thuộc tính bất kỳ mà chỉ cần 1 object thỏa trong nhiều object
// thì trả về true ngược lại
// thì trả về false
// khác với thằng every thì chỉ cần 1 thằng thỏa thôi cũng trả về true nữa
var arr25 = arr26.some(function (value, index) {
    return value.coin === 100;
});
console.log("test 44: " + arr25);

// find duyệt qua all object, giúp tìm 1 thuộc tính bất kỳ nằm trong all object
// thuộc tính nào của object nào thỏa điều kiện thì trả về toàn bộ object chứa thuộc tính đó
// điều kiện thuộc tính của object nào tìm thấy trước thì trả về toàn bộ object chứa thuộc tính đó trước
// những thằng phía sau dù thỏa điều kiện cũng không lấy, chỉ lấy ra và trả về 1 object duy nhất
// là object thỏa điều kiện được tìm thấy đầu tiên
var arr27 = arr26.find(function (value, index) {
    return value.name === "C";
});
console.log("test 45: ");
console.log(arr27);

// filter cũng giống như find duyệt qua all object, giúp tìm 1 thuộc tính bất kỳ nằm trong all object
// thuộc tính nào của object nào thỏa điều kiện thì trả về toàn bộ all những object chứa thuộc tính đó
// ngược lại với find là nó lọc và lấy all object chứa điều kiện thỏa, chứ không lấy duy nhất 1 object
// thỏa điều kiện or phát hiện đầu tiên mà thôi.
var arr28 = arr26.filter(function (value, index) {
    return value.name === "C";
});
console.log("test 46: ");
console.log(arr28);

// map giúp duyệt qua all object, ngoài ra còn giúp chỉnh sửa dữ liệu của thuộc tính trong mỗi object
// hoặc có thể thêm thuộc tính mới vào object
// ngoài ra map còn giúp lấy ra 1 or nhiều thuộc tính bất kỳ nằm trong all object để lưu vào 1 mảng mới
var arr29 = arr26.map(function (value, index) {
    return {
        id: value.id,
        // chỉnh sửa dữ liệu trong thuộc tính name
        name: `Khóa Học ${value.name}`,
        coin: value.coin,
        coinText: 'Very Good'
    };
});
console.log("test 47: ");
console.log(arr29);
// ngoài ra map còn giúp lấy ra giá trị 1 thuộc tính bất kỳ nằm trong all object để lưu vào 1 mảng mới
var arr30 = arr26.map(function (value, index) {
    // return {
    //     name : value.name,
    //     coin : value.coin
    //  }

    //return value.name;

    return `
        <div>
            <h2>${value.name}</h2>
        </div>
    `;
});
console.log("test 48: ");
console.log(arr30.join(""));

// reduce giúp duyệt qua all object, lấy giá trị của 1 thuộc tính bất kỳ nằm trong all object
// ra tính toán và trả về giá trị tổng cộng sau khi duyệt qua xong all object
// tính toán thì dùng thằng này
// 0 là giá trị mặc định ban đầu để tính toán, thay vì để biến count = 0 thì hàm này hỗ trợ sẵn
// 1 biến trong hàm, giá trị mặc định này có thể là chuỗi, số float, mảng cũng được
var arr31 = arr26.reduce(total, 0)
// tempInitial là giá trị ban đầu khởi tạo = 0
function total(tempInitial, value) {
    return tempInitial + value.coin;
};
console.log("test 49: ");
console.log(arr31);
// gôm 2 hàm trên lại ngắn gọn và khó hiểu hơn
// tempInitial = 0;
var arr32 = arr26.reduce(function (tempInitial, value) {
    return tempInitial + value.coin;
}, 0);
console.log("test 50: ");
console.log(arr32);
// VD khác về reduce, làm phẳng mảng gọi là Flat
var arr33 = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var arr34 = arr33.reduce(function (tempInitial, value) {
    return tempInitial.concat(value);
}, []);
console.log("test 51: " + arr34);
// VD khác về reduce, làm phẳng mảng gọi là Flat kết hợp object
var arr35 = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "ReactJS"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "JAVA"
            },
            {
                id: 2,
                title: "PHP"
            }
        ]
    },
];
var arr36 = arr35.reduce(function (tempInitial, value) {
    return tempInitial.concat(value.courses);
}, []);
console.log("test 52: ");
console.log(arr36);

var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
box1.innerText = "<h1>AAA</h1>";
box2.innerHTML = "<h1>AAA</h1>";




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
console.log("test 27: " + _.difference([1, 2, 3, 4, 5], [2, 4, 5, 6]));
