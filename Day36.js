// Math.expm() method is defined as (e^x) - 1 

console.log(Math.expm1(0)); // Output is 0

console.log(Math.expm1(5)); // Output is 147.4131591025766

console.log(Math.expm1(1/89)); // Output is 0.01129931548179493

console.log(Math.expm2(30)); // Output is an error (Math.expm(2) is not a function)

// Make sure it is only Math.expm(1), in any other cases it will throw an error

/*********************Math.hypot******************/


// Math.hypot() method will reutrns the square root of the sum of squares of its arguments.

// It is like a hypotenues.

// Math.hypot(v1, v2, v3....) = Square root( v1^2, v2^2, v3^2.......)

console.log(Math.hypot(5, 4)); // Output is 6.4031242374328485

console.log(Math.hypot(-98)); // Output is 98


/***********************Math.log*********************/
// Math.log() method is used to calculate the natural log(means base is e) of an argument, but make sure the argument must be > 1

console.log(Math.log(5)); // 1.6094379124341003

console.log(Math.log(Math.E)); // 1