function isEvenOrOdd() {
    const date = new Date();
    const day = date.getDate();
    return day % 2 === 0 ? "Even" : "Odd";
}

console.log(isEvenOrOdd());
