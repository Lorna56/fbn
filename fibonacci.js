const fibonacci = (num) => {
    
    return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
  };
  
  export default fibonacci;