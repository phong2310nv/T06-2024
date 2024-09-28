//cau 1
const products = [
    {
        name: "san pham A",
        code: "MSP1",
        price: 500000,
        colors: ["red","green","yellow"],
        supplier: "cong ty X",
        stock: 100
    },
    {
        name: "san pham B",
        code: "MSP2",
        price: 700000,
        colors: ["blue","black"],
        supplier: "cong ty Y",
        stock: 50
    },
    {
        name: "san pham C",
        code: "MSP3",
        price: 12000,
        colors: ["orange"],
        supplier: "cong ty W",
        stock: 80
    },
    {
        name: "san pham D",
        code: "MSP4",
        price: 20000,
        colors: ["white"],
        supplier: "Hong ha",
        stock: 3
    },
    {
        name: "san pham E",
        code: "MSP5",
        price: 80000,
        colors: ["orange"],
        supplier: "Thien long",
        stock: 4
    }
];

products.forEach(product =>{
    const colors = product.colors.join("-");
    console.log(`san pham ${product.name}, msp ${product.code}: gia ban ${product.price} vnd, co cac mau ${colors}, duoc phan phoi boi ${product.supplier}`);
    console.log(`hang ton: ${product.stock}`);
});

//cau 2 
const products2 = [
    { code: "BC01", name: "product 1", price: 1000, colors: ["red", "blue"] },
    { code: "BC02", name: "product 2", price: 1500, colors: ["green"] },
    { code: "BC03", name: "product 3", price: 2000, colors: ["yellow", "black"] },
    { code: "BC04", name: "product 4", price: 2500, colors: ["white"] },
    { code: "BC05", name: "product 5", price: 3000, colors: ["gray"] },
];

const updatedProducts = products2.map( product => {
    let updatedProduct = { ...product };

    if (updatedProduct.code === "BC05"){
        updatedProduct.price += 2000;
    }

    if (updatedProduct.code === "BC04"){
        updatedProduct.colors = [...updatedProduct.colors, "purple" ];
    }

    updatedProduct.name = updatedProduct.name.toUpperCase();

    return updatedProduct;
});

console.log(updatedProducts);

//cau 3
const filteredProducts = products.filter(product => product.stock < 10 && product.price >= 8000);

console.log(filteredProducts);

//cau 4
const filteredProducts4 = products.filter(product =>
    product.supplier === "Hong ha" &&
    (product.price > 10000 || product.stock <6)
);

console.log(filteredProducts4);
  
//cau 5
const hasExpensiveProductFromThienLong = products.some(product =>
    product.supplier === "Thien long" && product.price > 10000
);

console.log(hasExpensiveProductFromThienLong);

//cau 6
const allProductsInStock = products.every(product => (product.stock > 0 || product.amount > 0));

console.log(allProductsInStock);

//cau 7
const updatedProductsWithLock = products.map(product => {
    return {
        ...product,
        locked: product.supplier === "Thien long" 
    };
});

console.log(updatedProductsWithLock);

//cau 8
const codeOfProductWithMoreThanTwoColors = products
.filter(product => product>colors.length > 2)
.map(product => product.code);

console.log(codeOfProductWithMoreThanTwoColors);

//cau 9
const sotedProductsByPrice = products.sort((a,b) => a.price - b.price);

console.log(sotedProductsByPrice);

//cau 10
const sortedProducts = products.sort((a,b) => {
    if (a.supplier < b.supplier){
        return -1;
    }
    if (a.supplier > b.supplier){
        return 1;
    }

    return a.colors.length - b.colors.length;
});

console.log(sortedProducts);

//cau 11
const productsObject = products.reduce((acc, product) => {
    acc[product.code] = product;
    return acc;
}, {});

console.log(productsObject);