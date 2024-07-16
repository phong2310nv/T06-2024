//Câu 7:
const calculateProduct = (a = 0, b = 1, c = 1) => a * b * c;
console.log("Câu 7:", calculateProduct(1, 2, 3));

//Câu 8:
const calculateProductOfTwo = (a, b) => a * b;
const total = calculateProductOfTwo(2, 2) + calculateProductOfTwo(3, 3);
console.log("Câu 8: ", total);

//Câu 9:
const findBigger = (a, b) => (a > b ? a : b);
console.log("Câu 9:", findBigger(99, 100));const employee = {
    name: "John",
    rank: "A",
};

const calculateSalary = (employee) => {
    switch (employee.rank) {
        case "A": return 100000;
        case "B": return 50000;
        case "C": return 10000;
        case "D": return 5000;
        default: return "Rank không hợp lệ";
    }
};

console.log(`Câu 10: Lương của ${employee.name} là: ${calculateSalary(employee)}`);

//Câu 11:
const calculateTrapezoidArea = (a, b, h) => ((a + b) * h) / 2;
console.log("Câu 11: ", calculateTrapezoidArea(4, 5, 6));
const solveQuadraticEquation = (a, b, c) => {
    if (a === 0) {
        return b === 0 ? "PT vô nghiệm" : `Nghiệm duy nhất của PT là: x = ${-c / b}`;
    }
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
        return "PT Vô nghiệm";
    }
    const sqrtDelta = Math.sqrt(delta);
    const x1 = (-b + sqrtDelta) / (2 * a);
    const x2 = (-b - sqrtDelta) / (2 * a);
    return delta === 0 ? `PT có nghiệm kép là: x = ${x1}` : `PT có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
};

console.log("Câu 12: ", solveQuadraticEquation(4, 5, 3));
//Câu 13:

const displayValue = (value) => {
    console.log(value);
};

const processTextWithCallback = (text, callback) => {
    console.log("text", text);
    callback(100);
    console.log("Kết thúc");
};
