

let obj1 = {
    Name: "saurabh",
    age: 23,
    college: "Mait",
    Address : {
        HouseNo:45,
        City : "Delhi",
        Pincode : "4567890"
    },
    Interships : ["Edslash", "Coding Thinker "]
}

let obj2 = obj1;

obj2.Name = "Yash";

console.log(obj1);

console.log(obj2);