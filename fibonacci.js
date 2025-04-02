 const fibonacci = (num) => {
        if (num > 40) {
          throw new Error("Number must be equal or less than 40");
        }
        return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
      };
  export default fibonacci;