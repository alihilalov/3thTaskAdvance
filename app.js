const employeeDetails = {
  fullname: "Hakan Calhanoglu",
  position: "Mid-Dev",
  yearsOfExperiment: "2years",
  skills: ["html", "css", "git", "js", "react"],
  contact: {
    email: "hakancalhan@gmail.com",
    phone: 2132123,
  },
};
//delete email
delete employeeDetails.contact.email;
//add  department
employeeDetails["depertmant"] = "Marketing";
console.log(employeeDetails);

//part2
const { fullname } = employeeDetails;
employeeDetails["employeeName"] = fullname;
delete employeeDetails.fullname;
console.log(employeeDetails);
const { employeeName, ...rest } = employeeDetails;
console.log(rest);

//part3
const projectScores = [
  { projectId: 0, score: 99 },
  { projectId: 1, score: 88 },
  { projectId: 2, score: 77 },
  { projectId: 3, score: 66 },
];
console.log(projectScores[0]);

//part4

const personalInfo = {
  homeAddress: "Baku",
  emergencyCall: "8723128",
  maritalStatus: "Alone",
};

const completeEmployeeProfile = { ...employeeDetails, ...personalInfo };
console.log(completeEmployeeProfile);
