// function makeDough(material){
//      return setTimeout(() => {
//         let dough = material+ "🥠";
//         console.log(dough);
//         return dough;
//      }, 2000);
// }

// let mydough = makeDough("maida");
//  console.log(mydough);

function makeDough(material) {

    let doughPromise = new Promise(function(resolve,reject){
        setTimeout(() => {
            let dough = material + "🥠";
            // console.log(dough);
           resolve(dough);
        }, 2000);
    })

    return doughPromise;
   
}

function bakePizza(dough) {

    let BakePromise = new Promise(function(resolve,reject){
        setTimeout(() => {
            let bakedPizza = "bakedPizza" + "🧇";
            // console.log(dough);
           resolve(bakedPizza)
        }, 2000);
    })

    return BakePromise;
   
}

function addTopings(bakedPizza) {

    let pizzaPromise = new Promise(function(resolve,reject){
        setTimeout(() => {
            let pizza = "Pizza"+"🍕";
            // console.log(dough);
           resolve(pizza);
        }, 2000);
    })

    return pizzaPromise;
   
}

// console.log("Pizza is started ")

// makeDough("maida").then(function(dough){
//  console.log(dough)
//  return bakePizza(dough);
// }).then(function(bakedPizza){
//     console.log(bakedPizza)
//     return addTopings(bakedPizza);
// }).then(function(pizza){
//     console.log(pizza);
// }).catch(function(error){
//     console.log(error)
// })

// console.log("Pizza is end ")

console.log("pizza started");
 async function makePizza(){
   let dough = await makeDough("maida");
   console.log(dough);
   let bakedPizza = await bakePizza(dough);
   console.log(bakedPizza);
   let pizza = await addTopings(bakedPizza);
   console.log(pizza);
}

makePizza();

console.log("pizza end")