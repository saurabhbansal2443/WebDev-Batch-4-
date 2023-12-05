

function makeDough(material, callBack1) {

    setTimeout(() => {
        let dough = material + "🫓";
        console.log("Dough is ready")
        callBack1(dough);
    }, 2000);
}

function bakePizza(dough, callback2) {

    setTimeout(() => {
        let bakedPizza = dough + "🧇"
        console.log("Pizza is Baked");
        callback2(bakedPizza);
    }, 3000);
}

function addTopings(bakedPizza, callback3) {
    setTimeout(() => {
        let pizza = bakedPizza + "🥦";
        console.log("Pizza is ready");
        callback3(pizza);
    }, 3000);
}


console.log("Pizza is started ")

makeDough("maida",(dough)=>{
    console.log(dough);
    bakePizza(dough,(bakedPizza)=>{
        console.log(bakedPizza);
        addTopings(bakedPizza,(pizza)=>{
            console.log(pizza);
        })
    })
})

console.log("Pizza is end ")