// let age = 25 ;


// if(age>18){
//     console.log("Eligible");
// }else{
//     console.log("Not Eligible");
// }

// let a = 14 ;
// let b = 6 ;

// if(a>b){
//     console.log(a);
// }else{
//     console.log(b);
// }

// let length = 3 ;
// let breadth = 4 ;

// let area = length * breadth;
// let peri = 2 * ( length + breadth);

// if(area>peri){
//     console.log("Area ", area);
// }else{
//     console.log("Perimeter ",peri);
// }

// let n = 4 ;

// if(n%2==0){
//     console.log("Even")
// }else{
//     console.log("Odd");
// }

// let n = 0 ;

// if(n>0){
//     console.log("Positive ")
// }else if (n<0){
//     console.log("Negative");
// }else{
//     console.log("Zero");
// }

// let n = 32 ;

// if(n%5==0){
//     console.log("True ");
// }else{
//     console.log("False");
// }

// let a = 55 ;
// let b = 17 ;
// let c = 9 ;

// if(a>b){
//     if(a>c){
//         console.log(a);
//     }else{
//         console.log(c);
//     }
// }else if (b>c){
//     console.log(b);
// }else{
//     console.log(c);
// }

// let a = 6 ;
// let b = 5 ;
// let c = 4 ;

// if(a==b){
//     if(b==c){
//         console.log("Equilateral");
//     }else{
//         console.log("Iso");
//     }
// }else if ( b==c ){
//     console.log("iso");
// }else if ( a==c ){
//     console.log("iso");
// }else{
//     console.log('scalene')
// }

// let a = 4 ;
// let b = 4 ;
// let c = 6 ;

// if(a==b && b==c){
//     console.log("equilateral")
// }else if ( a==b || b==c || c==a ){
//     console.log("iso");
// }else{
//     console.log("scalene")
//}

// if(a>b && a>c){
//     console.log(a);
// }else if ( b>a && b>c){
//     console.log(b);
// }else{
//     console.log(c);
// }

// let n = 11 ;

// if( n==1 ){
//     console.log("January");
// }else if( n==2 ){
//     console.log("Feburary");
// }else if( n==3 ){
//     console.log("March");
// }else if( n==4 ){
//     console.log("April");
// }else if( n==5 ){
//     console.log("May");
// }else if( n==6 ){
//     console.log("June");
// }else if( n==7 ){
//     console.log("July");
// }else if( n==8 ){
//     console.log("August");
// }else if( n==9 ){
//     console.log("September");
// }else if( n==10 ){
//     console.log("October");
// }else if( n==11 ){
//     console.log("November");
// }else if( n==12 ){
//     console.log("December");
// }else{
//     console.log("Invalid")
// }


// let m = 6 ;
// let year = 2004 ;

// if( m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12  ){
//     console.log("31 Days ")
// }else if ( m==4 || m==6 || m==9 || m==11){
//     console.log("30 Days ");
// }else if ( m==2 && year%4 ==0 ){
//     console.log("29 Days ")
// }else if ( m==2 ){
//     console.log("28 Days ")
// }else{
//     console.log("Invalid");
// }

// let sub1 = 78 ;
// let sub2 = 79 ;
// let sub3 = 91 ;
// let sub4 = 95 ;
// let sub5 = 95 ;

// let p = (sub1 + sub2 + sub3 + sub4 + sub5 )/5;

// if(p>90){
//     console.log("Garde A")
// }else if(p>80){
//     console.log("Garde B")
// }else if(p>70){
//     console.log("Garde C")
// }else if(p>60){
//     console.log("Garde D")
// }else if(p>50){
//     console.log("Garde E")
// }else if(p>40){
//     console.log("Garde F")
// }

// let h = 65 ;
// let c = 0.5 ;
// let ts = 6500 ;

// if( h>50 && c<0.7 && ts>5600){
//     console.log('Grade 10 ');
// }else if ( h>50 && c<0.7 ){
//     console.log("Grade 9 ");
// }else if ( c<0.7 && ts>5600){
//     console.log("Grade 8 ")
// }else if ( h>50 && ts>5600){
//     console.log("Garde 7");
// }else if (h>50 || ts>5600 || c<0.7){
//     console.log("Grade 6");
// }else{
//     console.log("Grade 5");
// }

// let status = "m";
// let age = 55 ;
// let gender = "f";


// if(((status == 'm' || status == "M") || (age>30 && (gender == 'M' || gender == 'm' )) || (age>25 && (gender=='f' || gender=='F')))){
//     console.log("Hired")
// }else{
//     console.log("Not Hired")
// }

// let str1 = "hello";
// let str2 = "hello";

// console.log(str1 == str2 )

// let a = 5;
// let b = 5 ;
// let c = 5 ;

// if ( a==b && b==c ){
//     console.log("True");
// }else{
//     console.log("False");
// }

// let price = 20 ;

// let qua = 200 ;

// if(qua >100 ){
//     let actualcost = price * qua ;
//     console.log(actualcost*0.9)
// }else{
//     console.log(price * qua);
// }


let bs = 6000;

let gs1 = bs + bs*0.2 + bs*0.8;
let gs2 = bs + bs*0.25 + bs*0.9;
let gs3 = bs + bs*0.3 + bs*0.95;

if(bs<=10000){
    console.log(gs1);
}else if(bs<=20000){
    console.log(gs2);
}else{
    console.log(gs3);
}