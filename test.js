// (1)
// const toDoList = document.querySelector(".#do")
// document.style.backgroundcolor = "red"

// (7)
let school = {
    name: "name",
    location: "location",
    students: [
        {
            "name": "Yunusa",
            "age": 20,
            "grade": "A"
        },
        {
            "name": "Moses",
            "age": 22,
            "grade": "B"
        },
        {
            "name": "Alex",
            "age": 26,
            "grade": "A"
        }
    ]
}
console.log(school);


// (8)
class product{
        constructor(name, price, quantity){
            this.name = name
            this.price = price
            this.quality = quantity
        }
    
        increaseQuantity(amount){
            return this.quantity += amount
        }
    
        decreaseQuantity(amount){
            if (amount > this.quantity){
                return (`Invalid Quantity`)
            }
    
            return this.quantity -= amount
        }
    }
    
    class Inventory{
        constructor(){
            this.products = []
        }
        addProduct(product){
            return this.products.push(product)
        }
        removeProduct(product){
            return this.products.filter((item)=> item !== product)
        }
        totalProduct(){
            return this.products.length
        }
    }

    const product1 = new product("iphone", 2000000, 80)
console.log(product1.increaseQuantity(10));
console.log(product1.decreaseQuantity(3));

const product2 = new product("laptop", 700000, 90)

const newProduct = new Inventory()
newProduct.addProduct(product1)
newProduct.removeProduct(product2)

console.log(newProduct.totalProduct());



// (2)
let number = [5,6,7,8,9,10,11,12]
for(let p = 0; p < number.length; p++); {
    let sum = number[p]
    // let (let p = 0; p < 12; p++)
    
}
console.log(sum * p);