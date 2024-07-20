/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((data) => {
    if (data.profession === "developer") console.log(data);
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((data) => {
    if (data.profession == "developer") console.log(data);
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  arr.forEach((data) => {
    console.log(data);
  });
}

function removeAdmin() {
  //Write your code here, just console.log
  let filteredArr = arr.filter((data) => data.profession !== "admin");
  console.log(filteredArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 4, name: "Priyanka", age: "28", profession: "Teacher" },
    { id: 5, name: "Deepsikha", age: "23", profession: "Student" },
    { id: 6, name: "Kriti", age: "22", profession: "Swimmer" },
  ];

  let result = arr.concat(arr2);

  console.log(result);
}
