//InterFaces
interface students {
  name: string;
  id: number;
  age?: number;
}

let std1: students;
std1 = {
  name: "Jaffar",
  id: 10,
};

let std2: students = {
  name: "Aman",
  id: 222,
  age: 20,
};

console.log(std1, "interface");
console.log(std2, "interface optional");

interface anotherStudents {
  className: string;
}

//Union
let std3: students | anotherStudents;
// std3 = {
//   className: "web and mobile",
// };

std3 = {
  name: "jaffar",
  age: 20,
  id: 2000,
};
console.log(std3, " union interface");

//InterSection

let std4: students & anotherStudents;
std4 = {
  name: "jaffar aman",
  id: 5220,
  className: "web and mobile",
};

console.log(std4, " intersection interface");

export {};
