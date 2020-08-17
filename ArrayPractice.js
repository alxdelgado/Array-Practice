const dogWalks = [4, 5, 2, 2, 6, 1, 3]; 
const reducer = (accumulator, currentValue) => accumulator + currentValue; 

function getDailyBread(idx) {
    const cashStack = dogWalks.map(idx => idx * 22);
    // console.log(cashStack)
    const total = cashStack.reduce(reducer);
    return `Trisha earned $${total} dollars today!`;
    
};

getDailyBread(); 