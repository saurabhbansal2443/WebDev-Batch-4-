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


let n = 5;

for (let i = 1; i <= n; i++) {
    let p = i;
    let diff = n-1 ;
    for (let j = 1; j <= i; j++) {
        process.stdout.write(p + '\t');
        p = p + diff;
        diff--;

    }
    console.log();
}