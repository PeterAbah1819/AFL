//AFL Task 8



const arr = [1, 2, 3, 4, 5, 6, 9, 34, 91, 19, 401, 0];

const even = arr.filter(number => {
  return number % 2 == 0;
});

console.log(even);