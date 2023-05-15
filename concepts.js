let a = 5;//global context 
function add(num1, num2){
    const result = num1 + num2 + a;//function conterxt
    return result;//function conterxt
};
const sum = add(4,5);
console.log(sum);