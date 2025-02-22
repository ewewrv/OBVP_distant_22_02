const { execSync } = require('child_process');

function isEvenOrOdd() {
    const date = new Date();
    const day = date.getDate();
    return day % 2 === 0 ? "Even" : "Odd";
}

test('should return Even or Odd based on the current date', () => {
    const result = isEvenOrOdd();
    const expected = new Date().getDate() % 2 === 0 ? "Even" : "Odd";
    expect(result).toBe(expected);
});
