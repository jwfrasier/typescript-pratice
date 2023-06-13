type Employee = {
  id: number;
  name: string;
  height: string;
  seasonal?: boolean;
};

interface Manager extends Employee {
  securityClearance: string;
}

// implicity type definition
const number = 1;
const teacher = "joe";
// explicit type definition

const newNumber: Number = 1;
const student: string = "Cameron";
const hot: boolean = true;
const Dustin: Employee = {
  id: 1,
  name: "Dustin",
  height: "5-11",
};

const Justin: Manager = {
  id: 1,
  name: "Justin",
  height: "5-11",
  securityClearance: "sec 1",
  seasonal: true,
};

const Daniel: Manager = {
  id: 1,
  name: "Daniel",
  height: "5-11",
  securityClearance: "sec 1",
};

const employees: Employee[] = [];

employees.push(Justin, Dustin, Daniel);

employees.forEach((thing) => {
  console.log(thing.name);
});

// Es6 Functions, arrow function
const Kim = (personsName: string, secondPerson: string): string => {
  const greeting = "Hello " + personsName + secondPerson;
  return greeting;
};
const sayHiToCameron = Kim("Cameron", "Maxwell");

type EmployeeToRender = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
};
const employeesToRender = [
  {
    id: 1,
    first_name: "Doris",
    last_name: "Walcar",
    email: "dwalcar0@seesaa.net",
    gender: "Female",
    ip_address: "81.139.209.159",
  },
  {
    id: 2,
    first_name: "Kanya",
    last_name: "Strettle",
    email: "kstrettle1@privacy.gov.au",
    gender: "Female",
    ip_address: "101.26.242.73",
  },
  {
    id: 3,
    first_name: "Kenna",
    last_name: "Meeks",
    email: "kmeeks2@lulu.com",
    gender: "Female",
    ip_address: "24.61.210.41",
  },
  {
    id: 4,
    first_name: "Caro",
    last_name: "Buckthought",
    email: "cbuckthought3@g.co",
    gender: "Female",
    ip_address: "91.121.89.54",
  },
];

const renderEmployeeNamesJustin = (employeeList: EmployeeToRender[]): void => {
  employeeList.forEach((employee) => console.log(employee.first_name));
  return;
};
//
// Justin
const renderEmployeeNamesDaniel = (employeeList: EmployeeToRender[]): void => {
  employeeList.forEach((employee) => console.log(employee.first_name));
  return;
};
// Daniel

const renderEmployeeNamesDustin = (employeeList: EmployeeToRender[]): void => {
  employeeList.forEach((employee) => console.log(employee.first_name));
  return;
};
// Dustin

const renderEmployeeNamesMax = (employeeList: EmployeeToRender[]): void => {
  employeeList.forEach((employee) => console.log(employee.first_name));
  return;
};
// Max
// Cam
const renderEmployeeNamesCam = (employeeList: EmployeeToRender[]): void => {
  employeeList.forEach((employee) => console.log(employee.first_name));
  return;
};

const renderEmployeeNamesJoe = (employeeList: EmployeeToRender[]): void => {
  employeeList.forEach((employee) => console.log(employee.first_name));
  return;
};
