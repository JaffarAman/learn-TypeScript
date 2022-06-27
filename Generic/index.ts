function gen<T>(a: T, b: T) {
  return [a, b];
}

console.log(gen<number>(1, 2));
console.log(gen<string>("11", "2"));

///generic Array
console.log(gen<Array<number>>([11], [2]));
console.log(gen<Array<string>>(["11"], ["2"]));

function getUser<T extends { id: string }>(user: T) {
  return user.id;
}

function foo(a: any, b: any) {
  return a + b;
}
