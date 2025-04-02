const fibonacci = (num) => {
    if (num > 40 || num < 0) {
      throw new Error("Input out of range / Not an integer");
    }
    return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
  };
  export default fibonacci;