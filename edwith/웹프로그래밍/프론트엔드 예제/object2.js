var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object(); // 변수 4개를 콤마를 사용하여 한번에 생성하고 할당.

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

console.log(myObj);

var obj = {
    name : "chan jun",
    age : 27,
    "long name" : "Chan Jun Park"
};

for(key in obj) {
    console.log(obj[key]);
}