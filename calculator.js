console.log('Calculator App');

let a = 3, b = 4;

console.log("addition: ",a+b);

console.log("subtraction: ",a-b);

console.log("multiplication: ",a*b);

console.log("division: ",a/b);

const power = (a,b) => {
  let ans = 1;
  while(b){
    if(b&1) ans*=a;
    a*=a;
    b>>=1;
  }
  return ans;
}

console.log("power of: ", power(a,b));
