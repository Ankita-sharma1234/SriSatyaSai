// import React, { useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
// import { Grid, Paper } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import HodDashboard from "./HodDashboard";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";

// const theme = createTheme();

// function VerifyDetailed() {
//   const id = useParams();
//   const [studentData, setStudentData] = useState(null);
//   console.log("ye dekho id ", id.id);
//   useEffect(() => {
//     axios
//       .get(`https://sssutmsapi.onrender.com/api/getstudentdetail/${id.id}`)
//       .then((response) => {
//         console.log("Chal raha hai ye to ", response.data.student.name);
//         console.log(response.data);
//         setStudentData(response.data.student);
//       })
//       .catch((error) => {
//         console.error("Error fetching student details:", error);
//       });
//   }, [id]);
//   console.log(studentData, "dfdnhdfdwfguygefygufgjyuygjghg");
//   /////////////////////datepicker/////////////////
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <HodDashboard />

//       <Container
//         className="shadow p-3 mb-3 bg-body rounded"
//         style={{ width: "80%", backgroundColor: "#e8e5d1", marginLeft: "20%" }}
//       >
//         <Paper style={{ width: "250px", marginLeft: "500px", height: "200px" }}>
//           <>
//             {studentData && studentData.Documents?.applicantPhoto && (
//               <img
//                 src={studentData.Documents.applicantPhoto}
//                 alt="Applicant Photo"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   borderRadius: "10%",
//                 }}
//               />
//             )}
//           </>
//         </Paper>

//         {/* <div style={{ display: "flex" }}> */}

//         <Container
//           className="shadow p-3 mb-3 bg-body rounded"
//           style={{
//             width: "80%",
//             backgroundColor: "#e8e5d1",
//             marginTop: "20px",
//             marginLeft: "80px",
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "black",
//               width: "100%",
//               borderRadius: "10px",
//             }}
//           >
//             <h5 style={{ padding: "10px", margin: 0, marginTop: "-3px" }}>
//               Student Details
//             </h5>
//           </div>

//           <br></br>
//           {studentData && (
//             <Grid
//               container
//               rowSpacing={1}
//               columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//             >
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Student Name: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.name}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Father's Name: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.fathersName}</b>
//                 </span>{" "}
//               </Grid>

//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Mother's Name: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b> {studentData.mothersName}</b>
//                 </span>{" "}
//               </Grid>

//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Gender: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b> {studentData.gender}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Date of Birth: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "inherit", color: "black" }}
//               >
//                 <b>
//                   <DatePicker
//                     selected={selectedDate || new Date(studentData.dob)}
//                     onChange={(date) => handleDateChange(date)}
//                     dateFormat="dd/MM/yyyy"
//                   />
//                 </b>
//               </Grid>

//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Category: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b> {studentData.category}</b>
//                 </span>{" "}
//               </Grid>

//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Domicile: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.domicile}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Contact No: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.mobile}</b>
//                 </span>{" "}
//               </Grid>

//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Email: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.email}</b>
//                 </span>{" "}
//               </Grid>

//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Last Exam Type: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.lastExamType}</b>
//                 </span>{" "}
//               </Grid>

//               {/* <Grid
//                 item
//                 xs={6}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Address: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={6}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   {studentData.currentAddress &&
//                     studentData.currentAddress.address1}
//                 </span>{" "}
//               </Grid> */}
//               <Grid
//                 item
//                 xs={12}
//                 style={{ fontFamily: "italic", fontSize: "20px", color: "red" }}
//               >
//                 <b>Course Details:- </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={2}
//                 style={{
//                   fontFamily: "italic",
//                   color: "black",
//                 }}
//               >
//                 <b>Course Type: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={4}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.courseType}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={2}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Course Name : </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={4}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.courseName}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={2}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Course Branch: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={9}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.courseBranch}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 style={{ fontFamily: "italic", fontSize: "20px", color: "red" }}
//               >
//                 <b>Professional Details:- </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Aadhar Number: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.professional.AadharNumber}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Fathers Income: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.professional.FathersIncome}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>FathersOccupation: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.professional.FathersOccupation}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Handicapped: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.professional.Handicapped}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Medium: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.professional.Medium}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Mothers Income: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.professional.MothersIncome}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Mothers Occupation: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.professional.MothersOccupation}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Parent Mobile: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.professional.ParentMobile}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Samagra ID: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.professional.SamagraId}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Scholarship Required: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.professional.ScholarshipRequired}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Qualification: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.qualification}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Qualification Percentage: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.qualificationPercentage}%</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 style={{ fontFamily: "italic", fontSize: "20px", color: "red" }}
//               >
//                 <b>Academic Details:- </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Graduation Exam Type: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.graduationExamType}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Graduation Marks Obtain: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.graduationMarksObtain}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Graduation Max Marks: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.graduationMaxMarks}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Graduation Passing Year: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.graduationPassingYear}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Graduation Percentage: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.graduationPercentage}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Graduation Roll No.: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.graduationRollNo}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Other Board: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.otherBoard}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Other Exam Type: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.otherExamType}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Other Marks Obtain: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.otherMarksObtain}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Other Max Marks: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.otherMaxMarks}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Other Passing Year: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.otherPassingYear}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Other Percentage: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.otherPercentage}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Other Roll No: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.otherRollNo}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Other School: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.otherSchool}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b> Post Graduation Exam Type: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.postGraduationExamType}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Post Graduation Marks Obtain: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.postGraduationMarksObtain}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Post Graduation Max Marks: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.postGraduationMaxMarks}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Post Graduation Passing Year: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.postGraduationPassingYear}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Post Graduation Percentage: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.postGraduationPercentage}%</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Post Graduation Roll No: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.postGraduationRollNo}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Tenth Board: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.tenthBoard}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Tenth Exam Type: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.tenthExamType}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Tenth Marks Obtain: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.tenthMarksObtain}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Tenth Max Marks: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.tenthMaxMarks}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Tenth Passing Year: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.tenthPassingYear}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Tenth Percentage: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.tenthPercentage}%</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Tenth Roll No: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.tenthRollNo}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Tenth School: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.tenthSchool}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Twelfth Board : </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.twelfthBoard}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Twelfth Exam Type: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.twelfthExamType}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Twelfth Marks Obtain : </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.twelfthMarksObtain}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Twelfth Max Marks: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.twelfthMaxMarks}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Twelfth Passing Year: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.twelfthPassingYear}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Twelfth Percentages: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.twelfthPercentage}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Twelfth Roll No: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.twelfthRollNo}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Twelfth School: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.academicDetails.twelfthSchool}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 style={{ fontFamily: "italic", fontSize: "20px", color: "red" }}
//               >
//                 <b>Address Details:- </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Current Address: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Address 1: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.address?.address1}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Address 2: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.address.address2}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Country: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.address?.country}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>District: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.address.district}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Pin Code: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.address.pinCode}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>State: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <span style={{ color: "black", marginLeft: "20px" }}>
//                   <b>{studentData.address.state}</b>
//                 </span>{" "}
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 style={{ fontFamily: "italic", fontSize: "20px", color: "red" }}
//               >
//                 <b>Documents:- </b>
//               </Grid>

//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Aadhar Card: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 {studentData && studentData.Documents?.aadharCard && (
//                   <a
//                     href={studentData.Documents.aadharCard}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Signature
//                   </a>
//                 )}
//               </Grid>

//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Applicant Signature: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 {studentData && studentData.Documents?.applicantSignature && (
//                   <a
//                     href={studentData.Documents.applicantSignature}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Signature
//                   </a>
//                 )}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Domicile Certificate: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 {studentData && studentData.Documents?.domicileCertificate && (
//                   <a
//                     href={studentData.Documents.domicileCertificate}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Ceretificate
//                   </a>
//                 )}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Income Certificate: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 {studentData && studentData.Documents?.incomeCertificate && (
//                   <a
//                     href={studentData.Documents.incomeCertificate}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Signature
//                   </a>
//                 )}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>10th Marksheet: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 {studentData && studentData.Documents?.marksheet10th && (
//                   <a
//                     href={studentData.Documents.marksheet10th}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Marksheet
//                   </a>
//                 )}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>12th Marksheet: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 {studentData && studentData.Documents?.marksheet12th && (
//                   <a
//                     href={studentData.Documents.marksheet12th}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Marksheet
//                   </a>
//                 )}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Migration Certificate: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 {studentData && studentData.Documents?.migrationCertificate && (
//                   <a
//                     href={studentData.Documents.migrationCertificate}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Marksheet
//                   </a>
//                 )}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Other Certificate: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 {studentData && studentData.Documents?.otherCertificate && (
//                   <a
//                     href={studentData.Documents.otherCertificate}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Certificate
//                   </a>
//                 )}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Post Graduate Certificate: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 {studentData &&
//                   studentData.Documents?.postgraduateCertificate && (
//                     <a
//                       href={studentData.Documents.postgraduateCertificate}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       View Certificate
//                     </a>
//                   )}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>Transfer Certificate: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 {studentData && studentData.Documents?.transferCertificate && (
//                   <a
//                     href={studentData.Documents.transferCertificate}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Certificate
//                   </a>
//                 )}
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 <b>UnderGraduate Certificate: </b>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 style={{ fontFamily: "italic", color: "black" }}
//               >
//                 {studentData &&
//                   studentData.Documents?.undergraduateCertificate && (
//                     <a
//                       href={studentData.Documents.undergraduateCertificate}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       View Ceretificate
//                     </a>
//                   )}
//               </Grid>
//             </Grid>
//           )}
//           <br></br>
//         </Container>
//         {/* </div> */}
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default VerifyDetailed;



import React,{useState,useEffect} from "react";
import HodDashboard from "./HodDashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "react-bootstrap";
import { Grid, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";

const theme = createTheme();
const VerifyDetailed = () => {
  

  const id = useParams();
  const [studentData, setStudentData] = useState(null);
  console.log("ye dekho id ", id.id);
  useEffect(() => {
    axios
      .get(`https://sssutmsapi.onrender.com/api/getstudentdetail/${id.id}`)
      .then((response) => {
        console.log("Chal raha hai ye to ", response.data.student.name);
        console.log(response.data);
        setStudentData(response.data.student);
      })
      .catch((error) => {
        console.error("Error fetching student details:", error);
      });
  }, [id]);
  console.log(studentData, "dfdnhdfdwfguygefygufgjyuygjghg");
  /////////////////////datepicker/////////////////
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <ThemeProvider theme={theme}>
      <HodDashboard />

      <Container
        className="shadow p-3 mb-3 bg-body rounded"
        style={{ width: "80%", backgroundColor: "#e8e5d1", marginLeft: "20%" }}
      >
        <Paper style={{ width: "250px", marginLeft: "400px", height: "200px" }}>
        <>
            {studentData && studentData.Documents?.applicantPhoto && (
              <img
                src={studentData.Documents.applicantPhoto}
                alt="Applicant Photo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10%",
                }}
              />
            )}
          </>
        </Paper>

        {/* <div style={{ display: "flex" }}> */}

        <Container
          className="shadow p-3 mb-3 bg-body rounded"
          style={{
            width: "80%",
            backgroundColor: "#e8e5d1",
            marginTop: "20px",
            marginLeft: "80px",
           
          }}
        >
          <div
            style={{
              //   backgroundColor: "black",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                padding: "10px",
                fontFamily:'cursive',
                color:'black',
                margin: 0,
                marginTop: "-3px",
              }}
            >
              <b style={{marginRight:'500px'}}>Personal Details</b>
            </h2>
            <hr></hr>
          </div>
          {studentData && (
          <>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid
                item
                xs={2}
                style={{
                  fontFamily: "italic",
                  color: "black",
                  fontSize: "20px",
                }}
              >
                <b> Name: </b>
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  fontFamily: "italic",
                  color: "black",
                  fontSize: "20px",
                }}
              >
                <span style={{ color: "green", marginLeft: "20px", fontSize: '20px' }}>
                  <b>{studentData.name}</b>
                  {/* <b>Aman</b> */}
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={2}
                style={{
                  fontFamily: "italic",
                  color: "black",
                  fontSize: "20px",
                }}
              >
                <b>Gender: </b>
              </Grid>
              <Grid
                item
                xs={4}
                style={{ fontFamily: "italic", color: "black" }}
              >
                <span style={{ color: "green", marginLeft: "20px", fontSize: '20px' }}>
                  <b>{studentData.gender}</b>
                  {/* <b>Female</b> */}
                </span>{" "}
              </Grid>
            </Grid>
            <Grid
              container
              // rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              marginTop={1}
            >
                <Grid
                  item
                  xs={2}
                  style={{
                    fontFamily: "italic",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  <b>Domicile: </b>
                </Grid>
                <Grid item xs={4} style={{ fontFamily: "inherit", color: "green" }}>
                  <b style={{ marginLeft: "20px" }}>{studentData.domicile}</b>
                  
                </Grid>

                <Grid
                  item
                  xs={2}
                  style={{
                    fontFamily: "italic",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  <b>Category: </b>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ fontFamily: "italic", color: "black" }}
                >
                  <span style={{ color: "green", marginLeft: "20px", fontSize: '20px' }}>
                    <b> {studentData.category}</b>
                    {/* <b>Gen</b> */}
                  </span>{" "}
                </Grid>
              </Grid>
              <Grid
                container
                // rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                marginTop={1}
              >
                <Grid
                  item
                  xs={2}
                  style={{
                    fontFamily: "italic",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  <b>DOB: </b>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ fontFamily: "italic", color: "green" }}
                >
                  {/* <span style={{ color: "black", marginLeft: "20px", fontSize: '20px' }}> */}
                  <b >
                  <DatePicker
                    selected={selectedDate || new Date(studentData.dob)}
                    onChange={(date) => handleDateChange(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                </b>
                  {/* </span>{" "} */}
                </Grid>
                <Grid
                  item
                  xs={2}
                  style={{
                    fontFamily: "italic",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  <b>Contact No: </b>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ fontFamily: "italic",  }}
                >
                  <span style={{ color: "green", marginLeft: "20px", fontSize: '20px' }}>
                    <b>{studentData.mobile}</b>
                    {/* <b>9876543210</b> */}
                  </span>{" "}
                </Grid>
              </Grid>
              <Grid
                container
                // rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                marginTop={1}
              >
                <Grid
                  item
                  xs={2}
                  style={{
                    fontFamily: "italic",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  <b>Email: </b>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ fontFamily: "italic", color: "black" }}
                >
                  <span style={{ color: "green",  fontSize: '20px' }}>
                    <b>{studentData.email}</b>
                    {/* <b>anjalichaturvedi0002@gmail.com</b> */}
                  </span>{" "}
                </Grid>

                <Grid
                  item
                  xs={2}
                  style={{
                    fontFamily: "italic",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  <b>LastExamType</b>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ fontFamily: "italic", color: "black" }}
                >
                  <span style={{ color: "green", marginLeft: "20px", fontSize: '20px' }}>
                    <b>{studentData.lastExamType}</b>
                    {/* <b>VerifyDetailedular</b> */}
                  </span>{" "}
                </Grid>
              </Grid>
              <Grid
                container
                // rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                marginTop={1}
              >
                <Grid
                  item
                  xs={2}
                  style={{
                    fontFamily: "italic",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  <b>Mother's Name: </b>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ fontFamily: "italic", color: "black" }}
                >
                  <span style={{ color: "green", marginLeft: "20px", fontSize: '20px' }}>
                    <b> {studentData.mothersName}</b>
                    {/* <b>Rakhi</b> */}
                  </span>{" "}
                </Grid>

                <Grid
                  item
                  xs={2}
                  style={{
                    fontFamily: "italic",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  <b>Father's Name: </b>
                </Grid>

                <Grid
                  item
                  xs={4}
                  style={{ fontFamily: "italic", color: "black" }}
                >
                  <span style={{ color: "green", marginLeft: "20px", fontSize: '20px' }}>
                    <b> {studentData.fathersName}</b>
                    {/* <b>Mahesh</b> */}
                  </span>{" "}
                </Grid>
              </Grid></>
         )}
          <br></br>
        </Container>

        <Container
          className="shadow p-3 mb-3 bg-body rounded"
          style={{
            width: "80%",
            backgroundColor: "#e8e5d1",
            marginTop: "20px",
            marginLeft: "80px",
          }}
        >
          <div
            style={{
              //   backgroundColor: "black",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                padding: "10px",
                fontFamily:'cursive',
                color:'black',
                margin: 0,
                marginTop: "-3px",
              }}
            >
              <b style={{marginRight:'500px'}}>Course Details</b>
            </h2>
            <hr></hr>
          </div>
          {studentData && (
          <>
          <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            {/* <Grid item xs={12} style={{ fontFamily: "italic",fontSize:"20px", color: "red" }}>
                <b>Course Details:- </b>
              </Grid> */}
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Course Type: </b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
                <b>{studentData.courseType}</b>
                {/* <b>aaaaaaaaaaaaaaaaaaaaaa</b> */}
              </span>{" "}
            </Grid>
          </Grid>
          <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Course Name : </b>
            </Grid>
            <Grid
              item
              xs={9}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
                <b>{studentData.courseName}</b>
                {/* <b>Aeronautical </b> */}
              </span>{" "}
            </Grid>
          </Grid>
          <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Course Branch : </b>
            </Grid>
            <Grid
              item
              xs={9}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
                <b>{studentData.courseBranch}</b>
                {/* <b>Mechanical Branch</b> */}
              </span>{" "}
            </Grid>
          </Grid>
          </>)}
          <br></br>
        </Container>


 <Container
          className="shadow p-3 mb-3 bg-body rounded"
          style={{
            width: "80%",
            backgroundColor: "#e8e5d1",
            marginTop: "20px",
            marginLeft: "80px",
          }}
        >
          <div
            style={{
              //   backgroundColor: "black",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                padding: "10px",
                fontFamily:'cursive',
                color:'black',
                margin: 0,
                marginTop: "-3px",
              }}
            >
              <b style={{marginRight:'500px'}}>Address Details</b>
            </h2>
            <hr></hr>
          </div>
          {studentData && (
          <>
          <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b> Address1</b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
                {/* <b>{studentData.name}</b> */}
                <b>{studentData.address?.address1}</b>
              </span>{" "}
            </Grid>
          </Grid>
          <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Address2: </b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
                {/* <b>{studentData.fathersname}</b> */}
                <b>{studentData.address.address2}</b>
              </span>{" "}
            </Grid>
          </Grid>

          <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Country</b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.address?.country}</b>
                
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b> State: </b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.address.state}</b>
                {/* <b>Mp</b> */}
              </span>{" "}
            </Grid>
          </Grid>

          <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>District</b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.address.district}</b>
            
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Pin Code: </b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.address.pinCode}</b>
                
              </span>{" "}
            </Grid>
          </Grid>
          <br></br>
          </>)}
        </Container>

        <Container
          className="shadow p-3 mb-3 bg-body rounded"
          style={{
            width: "80%",
            backgroundColor: "#e8e5d1",
            marginTop: "20px",
            marginLeft: "80px",
          }}
        >
          <div
            style={{
              //   backgroundColor: "black",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                padding: "10px",
                fontFamily:'cursive',
                color:'black',
                margin: 0,
                marginTop: "-3px",
              }}
            >
              <b style={{marginRight:'400px'}}>Professional Details</b>
            </h2>
            <hr></hr>
          </div>
          {studentData && (
          <>
          <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "19px",
              }}
            >
              <b>Handicapped</b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "19px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.professional.Handicapped}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Medium: </b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.professional.Medium}</b>
              </span>{" "}
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b> Aadhar No.</b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.professional.AadharNumber}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Samagra Id: </b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.professional.SamagraId}</b>
              </span>{" "}
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b> Father Occ.</b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.professional.FathersOccupation}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Father Inc.</b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.professional.FathersIncome}</b>
              </span>{" "}
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Mother Occ.</b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.professional.MothersOccupation}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Mother Inc.</b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.professional.MothersIncome}</b>
              </span>{" "}
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b> Parent Mob.</b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.professional.ParentMobile}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Qualification </b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.qualification}</b>
              </span>{" "}
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Scholarship Required:</b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.professional.ScholarshipRequired}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Qualifying Percentage: </b>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.qualificationPercentage}%</b>
              </span>{" "}
            </Grid>
          </Grid>
          <br></br>
          </>)}
        </Container>

        <Container
          className="shadow p-3 mb-3 bg-body rounded"
          style={{
            width: "80%",
            backgroundColor: "#e8e5d1",
            marginTop: "20px",
            marginLeft: "80px",
          }}
        >
          <div
            style={{
              //   backgroundColor: "black",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                padding: "10px",
                fontFamily: 'cursive',
                color: 'black',
                margin: 0,
                marginTop: "-3px",
              }}
            >
              <b style={{marginRight:'500px'}}>Academic Details</b>
            </h2>
            <hr></hr>
          </div>
          {studentData && (
          <>
             <br></br>

          <h4 style={{color:'red'}}> 10th:</h4>
       
         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Exam Type</b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
               <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.tenthExamType}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Passing Year: </b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.tenthPassingYear}</b>
              </span>{" "}
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Max. Marks</b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.tenthMaxMarks}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Marks Obtained </b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.tenthMarksObtain}</b>
              </span>{" "}
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Percentage</b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.tenthPercentage}%</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Roll No </b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.tenthRollNo}</b>
              </span>{" "}
            </Grid>
          </Grid>
          <br></br>
          <h4 style={{color:'red'}}>12th:</h4>
          
         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Exam Type</b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.twelfthExamType}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Passing Year: </b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.twelfthPassingYear}</b>
              </span>{" "}
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Max. Marks</b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.twelfthMaxMarks}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Marks Obtained </b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.twelfthMarksObtain}</b>
              </span>{" "}
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Percentage</b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.twelfthPercentage}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Roll No </b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.twelfthRollNo}</b>
              </span>{" "}
            </Grid>
          </Grid>

          <br></br>

          <h4 style={{color:'red'}}> Under Graduation: </h4>
       
         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Exam Type</b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.graduationExamType}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Passing Year: </b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.graduationPassingYear}</b>
              </span>{" "}
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Max. Marks</b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.graduationMaxMarks}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Marks Obtained </b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.graduationMarksObtain}</b>
              </span>{" "}
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Percentage</b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.graduationPercentage}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Roll No </b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.graduationRollNo}</b>
              </span>{" "}
            </Grid>
          </Grid>
          <br></br>
          <h4 style={{color:'red'}}> Post Graduation: </h4>
         
         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Exam Type</b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.postGraduationExamType}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Passing Year: </b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.postGraduationPassingYear}</b>
              </span>{" "}
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Max. Marks</b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.postGraduationMaxMarks}</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Marks Obtained </b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.postGraduationMarksObtain}</b>
              </span>{" "}
            </Grid>
          </Grid>
          
         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Percentage</b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
               <b>{studentData.academicDetails.postGraduationPercentage}%</b>
              </span>{" "}
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Roll No </b>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <span style={{ color: "green", marginLeft: "20px" ,fontSize:'20px'}}>
                                  <b>{studentData.academicDetails.postGraduationRollNo}</b>
              </span>{" "}
            </Grid>
          </Grid>
        
          </>)}
        </Container>


 <Container
          className="shadow p-3 mb-3 bg-body rounded"
          style={{
            width: "80%",
            backgroundColor: "#e8e5d1",
            marginTop: "20px",
            marginLeft: "80px",
          }}
        >
          <div
            style={{
              //   backgroundColor: "black",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                padding: "10px",
                fontFamily:'cursive',
                color:'black',
                margin: 0,
                marginTop: "-3px",
              }}
            >
              <b style={{marginRight:'500px'}}>Document Details</b>
            </h2>
            <hr></hr>
          </div>
          {studentData && (
          <>
         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Aadhar Card: </b>
            </Grid>
            <Grid item xs={3}   style={{ fontFamily: "italic", color: "green" }}>
            <a
                    href={studentData.Documents.aadharCard}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View 
                  </a>
            </Grid>

            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Applicant Signature</b>
            </Grid>
            <Grid item xs={3}   style={{ fontFamily: "italic", color: "green" }}>
            <a
                    href={studentData.Documents.applicantSignature}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View 
                  </a>
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Domicile Certificate: </b>
            </Grid>
            <Grid item xs={3}   style={{ fontFamily: "italic", color: "green" }}>
            <a
                    href={studentData.Documents.domicileCertificate
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View 
                  </a>
            </Grid>

            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Income Certificate</b>
            </Grid>
            <Grid item xs={3}   style={{ fontFamily: "italic", color: "green" }}>
            <a
                    href={studentData.Documents.incomeCertificate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View 
                  </a>
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>10th Marksheet </b>
            </Grid>
            <Grid item xs={3}   style={{ fontFamily: "italic", color: "green" }}>
            <a
                    href={studentData.Documents.marksheet10th
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View 
                  </a>
            </Grid>

            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>12th Marksheet</b>
            </Grid>
            <Grid item xs={3}   style={{ fontFamily: "italic", color: "green" }}>
            <a
                    href={studentData.Documents.marksheet12th
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View 
                  </a>
            </Grid>
          </Grid>

          <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Migration Certificate </b>
            </Grid>
            <Grid item xs={3}   style={{ fontFamily: "italic", color: "green" }}>
            <a
                    href={studentData.Documents.migrationCertificate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View 
                  </a>
            </Grid>

            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Other Certtificate</b>
            </Grid>
            <Grid item xs={3}   style={{ fontFamily: "italic", color: "green" }}>
            <a
                    href={studentData.Documents.otherCertificate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View 
                  </a>
            </Grid>
          </Grid>

          <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>UG Certificate </b>
            </Grid>
            <Grid item xs={3}   style={{ fontFamily: "italic", color: "green" }}>
            <a
                    href={studentData.Documents.undergraduateCertificate
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View 
                  </a>
            </Grid>

            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>PG Certificate</b>
            </Grid>
            <Grid item xs={3}   style={{ fontFamily: "italic", color: "green" }}>
            <a
                    href={studentData.Documents.postgraduateCertificate
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View 
                  </a>
            </Grid>
          </Grid>

         <Grid
            container
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
          >
            <Grid
              item
              xs={3}
              style={{
                fontFamily: "italic",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Transfer Certificate </b>
            </Grid>
            <Grid item xs={3}   style={{ fontFamily: "italic", color: "green" }}>
            <a
                    href={studentData.Documents.transferCertificate
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View 
                  </a>
            </Grid>
          </Grid>
          <br></br>
          </>)}
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default VerifyDetailed;

