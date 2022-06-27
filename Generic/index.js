function gen(a, b) {
    return [a, b];
}
console.log(gen(1, 2));
console.log(gen("11", "2"));
///generic Array
console.log(gen([11], [2]));
console.log(gen(["11"], ["2"]));
