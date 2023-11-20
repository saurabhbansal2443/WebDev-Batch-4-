
// let n = 100 ;


// for(let i =1 ; i<=n ;i++ ){
   
//     if(i%2==0){
//     console.log(i);
//     }
// }

// let n = 6 ;

// let ans = 0;

// for(let i=1 ;i<=n;i++){
//     ans = ans + i ;
// }

// console.log(ans);

// let n = 10 ;

// let ft = 0 ;
// let st = 1 ;

// for(let i=1 ; i<=n;i++){
//     let tt = ft + st ;

//     console.log(ft);

//     ft = st ;
//     st = tt ;
// }

// let n = 7 ;


// for(let i=1 ; i<=10 ; i++){

//     console.log(n , " X " , i , " = " , n*i);
// }

// let n = 4 ;
// let x = 3 ;

// let ans =1 ;

// for(let i=1 ; i<=x ; i++){
//     ans = ans * n;
// }
// console.log(ans);

// let sum = 0 ;

// for(let i=1 ; i<=100;i++){

//     if(i%2==0){
//         sum = sum + i ;
//     }
// }

// console.log(sum);

// let count = 0 ;

// let n = 6 ;

// for(let i=1 ; i<=n;i++){
//     if(n%i==0){
//         count++;
//     }
// }

// if(count==2){
//     console.log("Prime Number");
// }else{
//     console.log("Not Prime ")
// }

// let n = 7 ;
// let m = 20 ;

// for(let k=n;k<=m;k++){

//   let count = 0 ;

//   for(let i=1;i<=k;i++){

//     if(k%i==0){
//         count++;
//     }
//   }

//   if(count==2){
//     console.log(k);
//   }
// }

// let i = 1 ;

// while(i<=4){
//     console.log(i);
//     i++;
// }
//  console.log(i);

// let i =1 ;

// while(i<=100){

//     console.log(i);
//     i+=2;
// }

// let n = 567;

// let count = 0 ;

// while(n>0){
//     n=Math.floor(n/10);
   
//     count++; 
// }

// console.log(count);

// let n = 567;

// let count = 0 ;

// while(n>0){

//     count=count*10 + n%10; 
//     n=Math.floor(n/10); 
// }

// console.log(count);

// let n = 153 ;

// let x = n ;

// let count = 0 ;

// while(n>0){
//     let d = n%10 ;
//     count = count + d*d*d;

//     n=Math.floor(n/10);
// }

// if(count==x){
//     console.log("Armstronmg")
// }else{
//     console.log("Not ");
// }

let input = process.argv;

console.log(input);
