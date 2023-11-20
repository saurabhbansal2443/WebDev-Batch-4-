// let n = 5;

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(j+'\t');
//     }
//     console.log();
// }

// let n = 5;

// let count = 1 ;

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(count+'\t');
//         if(count==1){
//             count=0;
//         }else{
//             count=1;
//         }
//     }
//     console.log();
// }


// let n = 7;

// for (let i = 1; i <= n; i++) {
//     let p = i;
//     let diff = n-1 ;
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(p + '\t');
//         p = p + diff;
//         diff--;

//     }
//     console.log();
// }

// let n= 7 ;

// for(let i=0;i<=n;i++){ //rows

//     for(let j=1;j<=(n-i);j++){ //spaces 
//         process.stdout.write( '\t');  
//     }

//     for(let j=1;j<=(i);j++){ //stars 
//         process.stdout.write( "*"+'\t');  
//     }

//     console.log();

// }

// let n = 5 

// let nst = 1 ;
// let nsp = n-1 ;

// for(let i=1;i<=(2*n-1);i++){ //rows

//     for(let j=1;j<=(nsp);j++){ //saces 
//         process.stdout.write( '\t');  
//     }
//     for(let j=1;j<=(nst);j++){ //stars 
//         process.stdout.write( "*"+'\t');  
//     }

//     if(i<n){
//         nst++;
//         nsp--;
//     }else{
//         nst--;
//         nsp++;
//     }

//     console.log();

// }

// let n = 5 

// let nst = 1 ;
// let nsp = n-1 ;

// for(let i=1;i<=(n);i++){ //rows

//     for(let j=1;j<=(nsp);j++){ //saces 
//         process.stdout.write( '\t');  
//     }
//     for(let j=1;j<=(nst);j++){ //stars 
//         process.stdout.write( "*"+'\t');  
//     }

//    nsp--;
//    nst+=2;
//     console.log();

// }

// let n = 5 

// let nst = 1 ;
// let nsp = n-1 ;

// for(let i=1;i<=(2*n-1);i++){ //rows

//     for(let j=1;j<=(nsp);j++){ //saces 
//         process.stdout.write( '\t');  
//     }
//     for(let j=1;j<=(nst);j++){ //stars 
//         process.stdout.write( "*"+'\t');  
//     }

//    if(i<n){
//     nst+=2;
//     nsp--;
//    }else{
//     nst-=2;
//     nsp++;
//    }
//     console.log();

// }

let n = 5 

let nst = 1 ;
let nsp = 2*n-3 ;

for(let i=1;i<=(2*n-1);i++){ //rows

    for(let j=1;j<=(nst);j++){ //stars 
        process.stdout.write( "*"+'\t'); 
        if(i==n && j==1){
            j++;
        } 
    }
    for(let j=1;j<=(nsp);j++){ //saces 
        process.stdout.write( '\t');  
    }
    for(let j=1;j<=(nst);j++){ //stars 
        process.stdout.write( "*"+'\t');  
    }
   if(i<n){
    nst+=1;
    nsp-=2
   
   }else{
    nst-=1;
    nsp+=2
    
   }
    console.log();

}




