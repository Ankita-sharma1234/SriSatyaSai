import React, { useState, useEffect } from "react";
import "./Button.css";
import { Container, Button, Form } from "react-bootstrap";
import { Grid } from "@mui/material";
import { State, City } from "country-state-city";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Table from "react-bootstrap/Table";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DatePicker from "react-datepicker";
import swal from "sweetalert";
import OnlyHeader from "./OnlyHeader";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const ButtonFun = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [hasErrors, sethasErrors] = useState()
  // ////////////////pagination table states/////////////////////////////
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const navigate = useNavigate()
  const [firstFunctionCalled, setFirstFunctionCalled] = useState(false);
  const [secondFunctionCalled, setSecondFunctionCalled] = useState(false);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const userData = JSON.parse(sessionStorage.getItem("currentUser"));
  const studentId = userData._id;

  /////////////////////////////////////////PERSONAL FORM API///////////////////////////////////////
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    mobile: "",
    category: "",
    email: "",
    qualification: "",
    lastExamPassingYear: "",
    passingYear: "",
    qualifyingExamPercentage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ////////////////////////////PERSONAL FORM API///////////////////////////////////////////////////////////////
  // //////////////////////////////PROFESSIONAL FORM API & Validation//////////////////////////////////////////////////

  const [formData1, setFormData1] = useState({
    Handicapped: "",
    Medium: "",
    Nationality: "",
    Domicile: "",
    ScholarshipRequired: "",
    FathersOccupation: "",
    MothersOccupation: "",
    FathersIncome: "",
    MothersIncome: "",
    SamagraId: "",
    AadharNumber: "",
    ParentMobile: "",
  });

  const [errors1, setErrors1] = useState({});

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error for the current field when it'eing edited
    setErrors1((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e) => {
    // Basic validation
    const newErrors1 = {};

    if (!formData1.Handicapped.trim()) {
      newErrors1.Handicapped = " Handicapped is required";
    }

    if (!formData1.Medium.trim()) {
      newErrors1.Medium = " Medium is required";
    }

    if (!formData1.Nationality.trim()) {
      newErrors1.Nationality = " Nationality is required";
    }

    if (!formData1.Domicile.trim()) {
      newErrors1.Domicile = " Domicile is required";
    }

    if (!formData1.ScholarshipRequired.trim()) {
      newErrors1.ScholarshipRequired = " ScholarshipRequired is required";
    }

    if (!formData1.FathersOccupation.trim()) {
      newErrors1.FathersOccupation = " FathersOccupation  is required";
    }

    if (!formData1.MothersOccupation.trim()) {
      newErrors1.MothersOccupation = " MothersOccupation is required";
    }

    if (!formData1.FathersIncome.trim()) {
      newErrors1.FathersIncome = " FathersIncomeis required";
    }

    if (!formData1.MothersIncome.trim()) {
      newErrors1.MothersIncome = " MothersIncome is required";
    }

    if (!formData1.SamagraId.trim()) {
      newErrors1.SamagraId = "SamagraId is required";
    } else if (!/^\d{9}$/.test(formData1.SamagraId.trim())) {
      newErrors1.SamagraId = "SamagraId must be a 9-digit number";
    } else {
      newErrors1.SamagraId = "";
    }

    if (!formData1.AadharNumber.trim()) {
      newErrors1.AadharNumber = "AadharNumber is required";
    } else if (!/^\d{12}$/.test(formData1.AadharNumber.trim())) {
      newErrors1.AadharNumber = "AadharNumber must be a 12-digit number";
    } else {
      newErrors1.AadharNumber = "";
    }

    if (!formData1.ParentMobile.trim()) {
      newErrors1.ParentMobile = "Parent Mobile is required";
    } else if (!/^\d{10}$/.test(formData1.ParentMobile.trim())) {
      newErrors1.ParentMobile = "Parent Mobile must be a 10-digit number";
    } else {
      newErrors1.ParentMobile = "";
    }

    setErrors1(newErrors1);

    if (Object.keys(newErrors1).length === 0) {

    }
  };


  // ///////////////////////////PROFESSIONAL FORM ////////////////////////////////////////////////
  // //////////////////////////////////ADDRESS FORM API & Validation////////////////////////////////////////

  const [formData2, setFormData2] = useState({
    address1: "",
    address2: "",
    country: "",
    state: "",
    district: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange4 = (e) => {

    const { name, value } = e.target;

    if (name === 'state') {
      console.log('Selected state:', value);
      if (value) {
        const countryCode = 'IN';
        try {
          const stateCities = City.getCitiesOfState(countryCode, value);
          setCities(stateCities);
        } catch (err) {
          console.log(err);
        }
      } else {
        setCities([]);
      }
    }
    setFormData2((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit1 = (e) => {
    // Basic validation
    const newErrors = {};

    if (!formData2.address1.trim()) {
      newErrors.address1 = "Address1 is required";
    }

    if (!formData2.address2.trim()) {
      newErrors.address2 = "Address2 is required";
    }

    if (!formData2.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!formData2.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData2.district.trim()) {
      newErrors.district = "District is required";
    }

    if (!formData2.pincode.trim()) {
      newErrors.pincode = "Pin Code is required";
    } else if (!/^\d{6}$/.test(formData2.pincode.trim())) {
      newErrors.pincode = "Pin Code must be a 6-digit number";
    } else {
      newErrors.pincode = "";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData2);
    }
  };

  /////////////////////////////ADDRESS FORM API/////////////////////////////////////
  ///////////////////////////////////////////STATE API///////////////////////////////////////
  useEffect(() => {
    const getAllStates = async () => {
      try {
        const statesData = await State.getStatesOfCountry("IN");
        setStates(statesData);
      } catch (err) {
        console.log(err);
      }
    };

    getAllStates();
  }, []);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    if (selectedState) {
      const countryCode = "IN";
      try {
        const stateCities = City.getCitiesOfState(countryCode, selectedState);
        setCities(stateCities);
      } catch (err) {
        console.log(err);
      }
    } else {
      setCities([]);
    }
  };


  // ///////////////////////////////////////////
  const [formData3, setFormData3] = useState({
    tenthSchool: "",
    tenthPassingYear: "",
    tenthRollNo: "",
    tenthBoard: "",
    tenthExamType: "",
    tenthMarksObtain: "",
    tenthMaxMarks: "",
    tenthPercentage: "",
    twelfthSchool: "",
    twelfthPassingYear: "",
    twelfthRollNo: "",
    twelfthBoard: "",
    twelfthExamType: "",
    twelfthMarksObtain: "",
    twelfthMaxMarks: "",
    twelfthPercentage: "",
    graduationCollege: "",
    graduationPassingYear: "",
    graduationRollNo: "",
    graduationUniversity: "",
    graduationExamType: "",
    graduationMarksObtain: "",
    graduationMaxMarks: "",
    graduationPercentage: "",
    postGraduationCollege: "",
    postGraduationPassingYear: "",
    postGraduationRollNo: "",
    postGraduationUniversity: "",
    postGraduationExamType: "",
    postGraduationMarksObtain: "",
    postGraduationMaxMarks: "",
    postGraduationPercentage: "",
    otherExam: "",
    otherSchool: "",
    otherPassingYear: "",
    otherRollNo: "",
    otherBoard: "",
    otherExamType: "",
    otherMarksObtain: "",
    otherMaxMarks: "",
    otherPercentage: "",
  });

  const [errors2, setErrors2] = useState({});

  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setFormData3((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error for the current field when it's being edited
    setErrors2((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit4 = (e) => {

    const errors2 = {};

    if (!formData3.tenthSchool.trim()) {
      errors2.tenthSchool = "tenthSchool is required";
    }

    if (!formData3.tenthPassingYear.trim()) {
      errors2.tenthPassingYear = "tenthPassingYear is required";
    }
    if (!formData3.tenthRollNo.trim()) {
      errors2.tenthRollNo = "tenthRollNo is required";
    }
    if (!formData3.tenthExamType.trim()) {
      errors2.tenthExamType = "tenthExamType is required";
    }
    if (!formData3.tenthMarksObtain.trim()) {
      errors2.tenthMarksObtain = "tenthMarksObtain is required";
    }
    if (!formData3.tenthMaxMarks.trim()) {
      errors2.tenthMaxMarks = " tenthMaxMarks is required";
    }
    if (!formData3.tenthPercentage.trim()) {
      errors2.tenthPercentage = "tenthPercentage is required";
    }
    if (!formData3.tenthBoard.trim()) {
      errors2.tenthBoard = "tenthBoard is required";
    }
    if (!formData3.twelfthSchool.trim()) {
      errors2.twelfthSchool = "twelthSchool is required";
    }
    if (!formData3.twelfthPassingYear.trim()) {
      errors2.twelfthPassingYear = "twelthPassingYear is required";
    }
    if (!formData3.twelfthRollNo.trim()) {
      errors2.twelfthRollNo = "twelthRollNo is required";
    }
    if (!formData3.twelfthBoard.trim()) {
      errors2.twelfthBoard = "twelthBoard is required";
    }
    if (!formData3.twelfthExamType.trim()) {
      errors2.twelfthExamType = "twelthExamtype is required";
    }
    if (!formData3.twelfthMarksObtain.trim()) {
      errors2.twelfthMarksObtain = "twelthMarksObtain is required";
    }
    if (!formData3.twelfthMaxMarks.trim()) {
      errors2.twelfthMaxMarks = "twelthMaxMarks is required";
    }
    if (!formData3.twelfthPercentage.trim()) {
      errors2.twelfthPercentage = "twelthPercentage is required";
    }
    if (!formData3.graduationCollege.trim()) {
      errors2.graduationCollege = "graduationCollege is required";
    }
    if (!formData3.graduationPassingYear.trim()) {
      errors2.graduationPassingYear = "graduationPassingYear is required";
    }
    if (!formData3.graduationRollNo.trim()) {
      errors2.graduationRollNo = "graduationRollNo is required";
    }
    if (!formData3.graduationUniversity.trim()) {
      errors2.graduationUniversity = "graduationUniversity is required";
    }
    if (!formData3.graduationExamType.trim()) {
      errors2.graduationExamType = "graduationExamType is required";
    }
    if (!formData3.graduationMarksObtain.trim()) {
      errors2.graduationMarksObtain = "graduationMarksObtain is required";
    }
    if (!formData3.graduationMaxMarks.trim()) {
      errors2.graduationMaxMarks = "graduationMaxMarks is required";
    }
    if (!formData3.graduationPercentage.trim()) {
      errors2.graduationPercentage = "graduationPercentage is required";
    }
    if (!formData3.postGraduationCollege.trim()) {
      errors2.postGraduationCollege = "postGraduationCollege is required";
    }
    if (!formData3.postGraduationPassingYear.trim()) {
      errors2.postGraduationPassingYear = "postGraduationPassingYear is required";
    }
    if (!formData3.postGraduationRollNo.trim()) {
      errors2.postGraduationRollNo = "postGraduationRollNo is required";
    }
    if (!formData3.postGraduationUniversity.trim()) {
      errors2.postGraduationUniversity = "postGraduationUniversity is required";
    }
    if (!formData3.postGraduationExamType.trim()) {
      errors2.postGraduationExamType = "postGraduationExamType is required";
    }

    if (!formData3.postGraduationMarksObtain.trim()) {
      errors2.postGraduationMarksObtain = "postGraduationMarksObtain is required";
    }
    if (!formData3.postGraduationMaxMarks.trim()) {
      errors2.postGraduationMaxMarks = "postGraduationMaxMarks is required";
    }
    if (!formData3.postGraduationPercentage.trim()) {
      errors2.postGraduationPercentage = "postGraduationPercentage is required";
    }





    setErrors2(errors2);

    if (Object.keys(errors2).length === 0) {
      console.log("Form submitted:", formData3);
    }
  };
  // /////////////////////////////////////photo & document validation/////////////////////////////////////////////////////////////////
  const [fileUrls, setFileUrls] = useState({
    applicantPhoto: '',
    applicantSignature: '',
    aadharCard: '',
    marksheet10th: '',
    marksheet12th: '',
    undergraduateCertificate: '',
    postgraduateCertificate: '',
    domicileCertificate: '',
    transferCertificate: '',
    incomeCertificate: '',
    migrationCertificate: '',
    otherCertificate: '',
  });


  const [errors7, setErrors7] = useState({
    applicantPhoto: '',
    applicantSignature: '',
    aadharCard: '',
    marksheet10th: '',
    marksheet12th: '',
    undergraduateCertificate: '',
    postgraduateCertificate: '',
    domicileCertificate: '',
    transferCertificate: '',
    incomeCertificate: '',
    migrationCertificate: '',
    otherCertificate: '',
  });


  const handleFileChange = async (fieldName, e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {

      const allowedTypes = ['image/jpeg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        setErrors7((prevErrors) => ({
          ...prevErrors,
          [fieldName]: 'Please choose a JPG or PNG file.',
        }));
        return;
      }


      // Upload file to Cloudinary
      const formData4 = new FormData();
      formData4.append('file', file);
      formData4.append('upload_preset', 'upload');

      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/ankitmewada/image/upload`,
        {
          method: 'POST',
          body: formData4,
        }
      );

      const cloudinaryData = await cloudinaryResponse.json();
      const fileUrl = cloudinaryData.secure_url;
      console.log('fkdjf', fileUrl)

      setFileUrls((prevFileUrls) => ({
        ...prevFileUrls,
        [fieldName]: fileUrl,
      }));

      // Clear any previous error
      setErrors7((prevErrors) => ({
        ...prevErrors,
        [fieldName]: '',
      }));
    }
    catch (error) {
      console.error('Error uploading file to Cloudinary:', error);
    }
  };


  const handleSubmit5 = () => {
    // Additional validation for required fields
    const requiredFields = [
      'applicantPhoto',
      'applicantSignature',
      'aadharCard',
      'marksheet10th',
      'marksheet12th',
      'undergraduateCertificate',
      'postgraduateCertificate',
      'domicileCertificate',
      'transferCertificate',
      'incomeCertificate',
      'migrationCertificate',
      'otherCertificate',
      // Add other required fields here
    ];

    let isFormValid = true;

    requiredFields.forEach((field) => {
      if (!fileUrls[field]) {
        setErrors7((prevErrors) => ({
          ...prevErrors,
          [field]: 'This field is required.',
        }));
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      console.log('Please fill out all required fields before submitting.');
      return;
    }

    // Your form submission logic here
    console.log('Form submitted successfully!');
  };


  const updateStudentData = async () => {
    try {
      const apiUrl = 'https://sssutmsapi.onrender.com/updatestudent';

      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({
          studentId,
          personalFormData: formData,
          professionalFormData: formData1,
          addressFormData: formData2,
          educationFormData: formData3,
          fileUrls

        }),
      });
      if (!response.ok) {

        const errorData = await response.json();
        //alert(`Error: ${errorData.errors.join(', ')}`);
        swal({
          icon: 'error',
          title: 'Error',
          text: `Error: ${errorData.errors.join(', ')}`,
        });
        return;

      }
      const data = await response.json();
      swal({
        title: "Success",
        text: "Enrollment Formed Filled Successfully!",
        icon: "success",
        buttons: "OK",
      });
      navigate('/payment')
      console.log('Student data updated successfully:', data);
    } catch (error) {
      swal({
        icon: 'error',
        title: 'Error',
        text: `Something went Wrong !`,
      });
    }
    //idhar nav lagaya tha ?nhiii  koi na 

    setSecondFunctionCalled(true);
    console.log('doosra bhi chal gya')
  };

  const handleMainSubmit = () => {
    handleSubmit();
    handleSubmit1();
    handleSubmit5();
    handleSubmit4();

    setFirstFunctionCalled(true)
  }





  const handleButtonClick = () => {
    if (!firstFunctionCalled) {
      console.log('ye if hai')
      handleMainSubmit()
    } else {
      console.log('ye handlebuttib chala')
      updateStudentData()
    }
  };

  /////////////////////datepicker///////////////// yahaa navigate krvana payment pr kro  yaha thodi 
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <OnlyHeader />
      <ThemeProvider theme={theme}>
        <div className="mericlass">
          <h3 style={{ marginLeft:"37%", marginTop: "70px" }}>University Enrollment Form</h3>
          <Container
            className="shadow p-3 bg-body rounded"
            style={{
              width: "100%",
              backgroundColor: "#e8e5d1",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "skyblue",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <h5
                style={{
                  padding: "10px",
                  margin: 0,
                  marginTop: "-3px",
                }}
              >
                Personal Details
              </h5>
            </div>

            <Grid container spacing={2} mt="5px">
              <Grid item xs={12} md={4}>
                <Form.Group controlId="name">
                  <Form.Label>
                    <b>
                      Name <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={userData?.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Grid>

              <Grid item xs={12} md={4}>
                <Form.Group controlId="father's name">
                  <Form.Label>
                    <b>
                      Father's Name <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="fatherName"
                    value={userData?.fathersName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={4}>
                <Form.Group controlId="father's name">
                  <Form.Label>
                    <b>
                      Mother's Name <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="fatherName"
                    value={userData?.mothersName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={4}>
                <Form.Group controlId="date of birth">
                  <Form.Label>
                    <b>Date of Birth <span style={{ color: 'red' }}> *</span></b>
                  </Form.Label>
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    // value={userData?.dob}
                    selected={selectedDate || new Date(userData?.dob)}
                    onChange={(date) =>
                      handleDateChange(date)}
                    name="date of birth"
                    required
                    readOnly={true}
                  />
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={4}>
                <Form.Group controlId="gender">
                  <Form.Label>
                    <b>
                      Gender <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="gender"
                    value={userData?.gender}
                    onChange={handleChange}
                  >
                    <option value="">--Select Gender--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={4}>
                <Form.Group controlId="mobile">
                  <Form.Label>
                    <b>
                      Mobile <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="mobile"
                    value={userData?.mobile}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={4}>
                <Form.Group controlId="category">
                  <Form.Label>
                    <b>
                      Category <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="category"
                    value={userData?.category}
                    onChange={handleChange}
                  >
                    <option value="">--Select Category--</option>
                    <option value="Gen">Gen</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>

                    <option value="OBC">OBC</option>
                    <option value="Minority">Minority</option>
                  </Form.Select>
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={4}>
                <Form.Group controlId="email">
                  <Form.Label>
                    <b>
                      Email <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={userData?.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={4}>
                <Form.Group controlId="qualification">
                  <Form.Label>
                    <b>
                      Qualification <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="qualification"
                    value={userData?.qualification}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={4}>
                <Form.Group controlId="last exam passing year">
                  <Form.Label>
                    <b>Last Exam Type <span style={{ color: 'red' }}> *</span></b>
                  </Form.Label>
                  <Form.Control
                    aria-label="Default select example"
                    name="last exam passing year"
                    value={userData?.lastExamType}
                    onChange={handleChange}

                  />


                </Form.Group>
              </Grid>
              <Grid item xs={12} md={4}>
                <Form.Group controlId="passing year">
                  <Form.Label>
                    <b>Passing Year<span style={{ color: 'red' }}> *</span></b>
                  </Form.Label>
                  <Form.Control
                    aria-label="Default select example"
                    name="passing year"
                    value={userData?.passingYear}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={4} mb={7}>
                <Form.Group controlId="qualifying exam percentage">
                  <Form.Label>
                    <b>
                      Qualifying Exam Percentage{" "}
                      <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="qualifying exam percentage"
                    value={userData?.qualificationPercentage}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Grid>
            </Grid>
          </Container>

          {/* //////////////////////////////////PROFESSIONAL DETAILS/////////////////////////////////////////////////////////////////////////////// */}
          <Container
            className="shadow p-3  bg-body rounded"
            style={{
              width: "100%",
              backgroundColor: "#e8e5d1",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "skyblue",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <h5 style={{ padding: "10px", margin: 0, marginTop: "-3px" }}>
                Professional Details
              </h5>
            </div>
            <br></br>

            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Form></Form>
                <Form.Group className="mb-3" controlId="Handicapped">
                  <Form.Label>
                    <b>
                      Handicapped <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="Handicapped"
                    value={formData1.Handicapped}
                    onChange={handleChange2}
                  >
                    <option value="">--Select Please--</option>
                    <option value="Yes">YES</option>
                    <option value="No">NO</option>
                  </Form.Select>
                  {errors1.Handicapped && (
                    <p style={{ color: "red" }}>{errors1.Handicapped}</p>
                  )}
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={4}>
                <Form.Group className="mb-3" controlId="Medium">
                  <Form.Label>
                    <b>
                      Medium <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="Medium"
                    value={formData1.Medium}
                    onChange={handleChange2}
                  >
                    <option value="">--Select Medium--</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </Form.Select>
                  {errors1.Medium && (
                    <p style={{ color: "red" }}>{errors1.Medium}</p>
                  )}
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={4}>
                <Form.Group className="mb-3" controlId="Nationality">
                  <Form.Label>
                    <b>
                      Nationality <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="Nationality"
                    value={formData1.Nationality}
                    onChange={handleChange2}
                  >
                    <option value="">-- Select Nationality--</option>
                    <option value="1">Indian</option>
                  </Form.Select>
                  {errors1.Nationality && (
                    <p style={{ color: "red" }}>{errors1.Nationality}</p>
                  )}
                </Form.Group>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
              //   mt={2}
              >
                <Form.Group className="mb-3" controlId="Domicile">
                  <Form.Label>
                    <b>
                      Domicile <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Select
                    name="Domicile"
                    value={formData1.Domicile}
                    onChange={handleChange2}
                  >
                    <option value="">--Select Domicile --</option>
                    <option value="MP">MP</option>
                    <option value="Other">Other </option>
                  </Form.Select>
                  {errors1.Domicile && (
                    <p style={{ color: "red" }}>{errors1.Domicile}</p>
                  )}
                </Form.Group>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
              //   mt={2}
              >
                <Form.Group className="mb-3" controlId="ScholarshipRequired">
                  <Form.Label>
                    <b>
                      Scholarship Required{" "}
                      <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Select
                    name="ScholarshipRequired"
                    value={formData1.ScholarshipRequired}
                    onChange={handleChange2}
                  >
                    <option value="">--Select Please--</option>
                    <option value="Yes">YES</option>
                    <option value="No">NO</option>
                  </Form.Select>
                  {errors1.ScholarshipRequired && (
                    <p style={{ color: "red" }}>{errors1.ScholarshipRequired}</p>
                  )}
                </Form.Group>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
              //   mt={2}
              >
                <Form.Group className="mb-3" controlId="FathersOccupation">
                  <Form.Label>
                    <b>
                      Father's Occupation <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="FathersOccupation"
                    value={formData1.FathersOccupation}
                    onChange={handleChange2}
                    required
                  />
                  {errors1.FathersOccupation && (
                    <p style={{ color: "red" }}>{errors1.FathersOccupation}</p>
                  )}
                </Form.Group>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
              //   mt={2}
              >
                <Form.Group className="mb-3" controlId="MothersOccupation">
                  <Form.Label>
                    <b>
                      Mother's Occupation <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="MothersOccupation"
                    value={formData1.MothersOccupation}
                    onChange={handleChange2}
                    required
                  />
                  {errors1.MothersOccupation && (
                    <p style={{ color: "red" }}>{errors1.MothersOccupation}</p>
                  )}
                </Form.Group>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
              //   mt={2}
              >
                <Form.Group className="mb-3" controlId="FathersIncome">
                  <Form.Label>
                    <b>
                      Father's Income <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="FathersIncome"
                    value={formData1.FathersIncome}
                    onChange={handleChange2}
                    required
                  />
                  {errors1.FathersIncome && (
                    <p style={{ color: "red" }}>{errors1.FathersIncome}</p>
                  )}
                </Form.Group>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
              //   mt={2}
              >
                <Form.Group className="mb-3" controlId="MothersIncome">
                  <Form.Label>
                    <b>
                      Mother's Income <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="MothersIncome"
                    value={formData1.MothersIncome}
                    onChange={handleChange2}
                    required
                  />
                  {errors1.MothersIncome && (
                    <p style={{ color: "red" }}>{errors1.MothersIncome}</p>
                  )}
                </Form.Group>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
              //   mt={2}
              >
                <Form.Group className="mb-3" controlId="SamagraId">
                  <Form.Label>
                    <b>
                      Samagra Id <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="SamagraId"
                    value={formData1.SamagraId}
                    onChange={handleChange2}
                    required
                  />
                  {errors1.SamagraId && (
                    <p style={{ color: "red" }}>{errors1.SamagraId}</p>
                  )}
                </Form.Group>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
              //   mt={2}
              >
                <Form.Group className="mb-3" controlId="AadharNumber">
                  <Form.Label>
                    <b>Aadhar Number</b><span style={{ color: "red" }}> *</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="AadharNumber"
                    value={formData1.AadharNumber}
                    onChange={handleChange2}
                    placeholder="0000-0000-0000"
                    required
                  />
                  {errors1.AadharNumber && (
                    <p style={{ color: "red" }}>{errors1.AadharNumber}</p>
                  )}
                </Form.Group>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
              //   mt={2}
              >
                <Form.Group className="mb-3" controlId="ParentMobile">
                  <Form.Label>
                    <b>
                      Parent Mobile <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="ParentMobile"
                    value={formData1.ParentMobile}
                    onChange={handleChange2}
                    required
                  />
                  {errors1.ParentMobile && (
                    <p style={{ color: "red" }}>{errors1.ParentMobile}</p>
                  )}
                </Form.Group>
              </Grid>
            </Grid>
          </Container>

          {/* ////////////////////////////////////////////////////ADDRESS DETAILS////////////////////////////////////////////////////////////////////////////////// */}
          <Container
            className="shadow p-3 bg-body rounded"
            style={{
              width: "100%",
              backgroundColor: "#e8e5d1",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "skyblue",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <h5 style={{ padding: "10px", margin: 0, marginTop: "-3px" }}>
                Address Details
              </h5>
            </div>

            <Grid container spacing={2} mt="5px">
              <Grid item xs={12} md={6}>
                <Form></Form>
                <Form.Group controlId="address1">
                  <Form.Label>
                    <b>
                      Address1 <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="address1"
                    value={formData2.address1}
                    onChange={handleChange4}
                    required
                    placeholder="House No, Street No or Road No"
                  />
                  {errors.address1 && (
                    <p style={{ color: "red" }}>{errors.address1}</p>
                  )}
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={6}>
                <Form.Group controlId="address2">
                  <Form.Label>
                    <b>
                      Address2 <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="address2"
                    value={formData2.address2}
                    onChange={handleChange4}
                    required
                    placeholder="Colony, Ward, Village, City"
                  />
                  {errors.address2 && (
                    <p style={{ color: "red" }}>{errors.address2}</p>
                  )}
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={6}>
                <Form.Group controlId="country">
                  <Form.Label>
                    <b>
                      Country <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="country"
                    value={formData2.country}
                    onChange={handleChange4}
                  >
                    <option value="">--Select Please--</option>
                    <option value="India">INDIA</option>
                    <option value="other">Other</option>
                  </Form.Select>
                  {errors.country && (
                    <p style={{ color: "red" }}>{errors.country}</p>
                  )}
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={6}>
                <Form.Group className="mb-3" controlId="State">
                  <Form.Label>
                    <b>
                      State <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <select
                    className="form-select"
                    id="inputState"
                    name="state"
                    value={formData2.state}
                    onChange={handleChange4}
                  >
                    <option value="">Select state</option>
                    {states.map((item, index) => (
                      <option key={index} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {errors.state && <p style={{ color: "red" }}>{errors.state}</p>}
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={6}>
                <Form.Group controlId="district">
                  <Form.Label>
                    <b>
                      District <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="district"
                    required
                    value={formData2.district}
                    onChange={handleChange4}
                  />
                  {errors.district && (
                    <p style={{ color: "red" }}>{errors.district}</p>
                  )}
                </Form.Group>
              </Grid>
              <Grid item xs={12} md={6}>
                <Form.Group controlId="pincode">
                  <Form.Label>
                    <b>
                      Pin Code <span style={{ color: "red" }}> *</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="pincode"
                    value={formData2.pincode}
                    onChange={handleChange4}
                    required
                  />
                  {errors.pincode && (
                    <p style={{ color: "red" }}> {errors.pincode}</p>
                  )}
                  {/*
                 <Form.Control.Feedback type="invalid">{errors.pincode}</Form.Control.Feedback> */}
                </Form.Group>
              </Grid>
            </Grid>
          </Container>

          {/* /////////////////////////////////////////////////ACADEMIC DETAILS///////////////////////////////////// */}


          <Container
            className="shadow p-3 mb-3 bg-body rounded"
            style={{ marginTop: "20px" }}
          >
            <div
              style={{
                backgroundColor: "skyblue",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <h5 style={{ padding: "10px", margin: 0, marginTop: "-3px" }}>
                Academic Details
              </h5>
            </div>
            <br></br>

            <Paper sx={{ width: "100%" }}>
              <TableContainer sx={{ maxHeight: "440px" }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h5>
                          <b>Exam </b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h5>
                          <b>School/College</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h5>
                          <b>Passing Year</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h5>
                          <b>Roll No</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h5>
                          <b>Name of Board/University</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h5>
                          <b>Exam Type</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h5>
                          <b>Marks Obtain</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h5>
                          <b>Max Marks</b>
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#e6ecf0" }}
                      >
                        <h5>
                          <b>%Age</b>
                        </h5>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">10th</TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="tenthSchool"
                          value={formData3.tenthSchool}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "150px",
                            height: "50px",
                            borderColor: formData3.tenthSchool ? "red" : "",
                          }}
                        ></input>
                        {errors2.tenthSchool && (
                          <p style={{ color: "red" }}>{errors2.tenthSchool}</p>
                        )}
                      </TableCell>


                      <TableCell align="left">
                        <input
                          type="number"
                          name="tenthPassingYear"
                          value={formData3.tenthPassingYear}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "180px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.tenthPassingYear && (
                          <p style={{ color: "red" }}>{errors2.tenthPassingYear}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="tenthRollNo"
                          value={formData3.tenthRollNo}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "200px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.tenthRollNo && (
                          <p style={{ color: "red" }}>{errors2.tenthRollNo}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="tenthBoard"
                          value={formData3.tenthBoard}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "150px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.tenthBoard && (
                          <p style={{ color: "red" }}>{errors2.tenthBoard}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <Form.Select

                        >
                          <option value="">--Select--</option>
                          <option value="Non Grading">Non Grading</option>
                          <option value="Others">Other Option</option>
                        </Form.Select>

                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="number"
                          name="tenthExamType"
                          value={formData3.tenthExamType}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "80px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.tenthExamType && (
                          <p style={{ color: "red" }}>{errors2.tenthExamType}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="number"
                          name="tenthMarksObtain"
                          value={formData3.tenthMarksObtain}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "80px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.tenthMarksObtain && (
                          <p style={{ color: "red" }}>{errors2.tenthMarksObtain}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="number"
                          name="tenthPercentage"
                          value={formData3.tenthPercentage}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "180px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.tenthPercentage && (
                          <p style={{ color: "red" }}>{errors2.tenthPercentage}</p>
                        )}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left">12th/Diploma</TableCell>

                      <TableCell align="left">
                        <input
                          type="text"
                          name="twelfthSchool"
                          value={formData3.twelfthSchool}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "150px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.twelfthSchool && (
                          <p style={{ color: "red" }}>{errors2.twelfthSchool}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="number"
                          name="twelfthPassingYear"
                          value={formData3.twelfthPassingYear}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "180px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.twelfthPassingYear && (
                          <p style={{ color: "red" }}>{errors2.twelfthPassingYear}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="twelfthRollNo"
                          value={formData3.twelfthRollNo}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "200px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.twelfthRollNo && (
                          <p style={{ color: "red" }}>{errors2.twelfthRollNo}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="twelfthBoard"
                          value={formData3.twelfthBoard}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "150px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.twelfthBoard && (
                          <p style={{ color: "red" }}>{errors2.twelfthBoard}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <Form.Select>
                          <option value="">--Select--</option>
                          <option value="1">Non Grading</option>
                          <option value="2">Other Option</option>
                        </Form.Select>

                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="number"
                          name="twelfthMarksObtain"
                          value={formData3.twelfthMarksObtain}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "80px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.twelfthMarksObtain && (
                          <p style={{ color: "red" }}>{errors2.twelfthMarksObtain}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="number"
                          name="twelfthMaxMarks"
                          value={formData3.twelfthMaxMarks}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "80px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.twelfthMaxMarks && (
                          <p style={{ color: "red" }}>{errors2.twelfthMaxMarks}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="number"
                          name="twelfthPercentage"
                          value={formData3.twelfthPercentage}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "180px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.twelfthPercentage && (
                          <p style={{ color: "red" }}>{errors2.twelfthPercentage}</p>
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Graduation</TableCell>

                      <TableCell align="left">
                        <input
                          type="text"
                          name="graduationCollege"
                          value={formData3.graduationCollege}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "150px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.graduationCollege && (
                          <p style={{ color: "red" }}>{errors2.graduationCollege}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="number"
                          name="graduationPassingYear"
                          value={formData3.graduationPassingYear}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "180px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.graduationPassingYear && (
                          <p style={{ color: "red" }}>{errors2.graduationPassingYear}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="graduationRollNo"
                          value={formData3.graduationRollNo}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "200px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.graduationRollNo && (
                          <p style={{ color: "red" }}>{errors2.graduationRollNo}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="graduationUniversity"
                          value={formData3.graduationUniversity}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "150px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.graduationUniversity && (
                          <p style={{ color: "red" }}>{errors2.graduationUniversity}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <Form.Select>
                          <option value="">--Select--</option>
                          <option value="1">Non Grading</option>
                          <option value="2">Other Option</option>
                        </Form.Select>

                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="number"
                          name="graduationExamType"
                          value={formData3.graduationExamType}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "80px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.graduationExamType && (
                          <p style={{ color: "red" }}>{errors2.graduationExamType}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="number"
                          name="graduationMarksObtain"
                          value={formData3.graduationMarksObtain}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "80px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.graduationMarksObtain && (
                          <p style={{ color: "red" }}>{errors2.graduationMarksObtain}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="number"
                          name="graduationMaxMarks"
                          value={formData3.graduationMaxMarks}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "180px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.graduationMaxMarks && (
                          <p style={{ color: "red" }}>{errors2.graduationMaxMarks}</p>
                        )}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left">Post Graduation</TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="postGraduationCollege"
                          value={formData3.postGraduationCollege}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "150px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.postGraduationCollege && (
                          <p style={{ color: "red" }}>{errors2.postGraduationCollege}</p>
                        )}
                      </TableCell>

                      <TableCell align="left">
                        <input
                          type="number"
                          name="postGraduationPassingYear"
                          value={formData3.postGraduationPassingYear}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "180px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.postGraduationPassingYear && (
                          <p style={{ color: "red" }}>{errors2.postGraduationPassingYear}</p>
                        )}
                      </TableCell>

                      <TableCell align="left">
                        <input
                          type="text"
                          name="postGraduationRollNo"
                          value={formData3.postGraduationRollNo}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "200px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.postGraduationRollNo && (
                          <p style={{ color: "red" }}>{errors2.postGraduationRollNo}</p>
                        )}
                      </TableCell>

                      <TableCell align="left">
                        <input
                          type="text"
                          name="postGraduationUniversity"
                          value={formData3.postGraduationUniversity}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "150px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.postGraduationUniversity && (
                          <p style={{ color: "red" }}>{errors2.postGraduationUniversity}</p>
                        )}
                      </TableCell>

                      <TableCell align="left">
                        <Form.Select>
                          <option value="">--Select--</option>
                          <option value="1">Non Grading</option>
                          <option value="2">Other Option</option>
                        </Form.Select>

                      </TableCell>

                      <TableCell align="left">
                        <input
                          type="number"
                          name="postGraduationMarksObtain"
                          value={formData3.postGraduationMarksObtain}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "80px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.postGraduationMarksObtain && (
                          <p style={{ color: "red" }}>{errors2.postGraduationMarksObtain}</p>
                        )}
                      </TableCell>

                      <TableCell align="left">
                        <input
                          type="number"
                          name="postGraduationMaxMarks"
                          value={formData3.postGraduationMaxMarks}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "80px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.postGraduationMaxMarks && (
                          <p style={{ color: "red" }}>{errors2.postGraduationMaxMarks}</p>
                        )}
                      </TableCell>

                      <TableCell align="left">
                        <input
                          type="number"
                          name="postGraduationPercentage"
                          value={formData3.postGraduationPercentage}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "180px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.postGraduationPercentage && (
                          <p style={{ color: "red" }}>{errors2.postGraduationPercentage}</p>
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Other</TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="otherSchool"
                          value={formData3.otherSchool}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "150px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.otherSchool && (
                          <p style={{ color: "red" }}>{errors2.otherSchool}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="otherPassingYear"
                          value={formData3.otherPassingYear}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "180px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.otherPassingYear && (
                          <p style={{ color: "red" }}>{errors2.otherPassingYear}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="otherRollNo"
                          value={formData3.otherRollNo}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "200px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.otherRollNo && (
                          <p style={{ color: "red" }}>{errors2.otherRollNo}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="otherBoard"
                          value={formData3.otherBoard}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "150px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.otherBoard && (
                          <p style={{ color: "red" }}>{errors2.otherBoard}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="otherExamType"
                          value={formData3.otherExamType}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "150px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.otherExamType && (
                          <p style={{ color: "red" }}>{errors2.otherExamType}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="otherMarksObtain"
                          value={formData3.otherMarksObtain}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "80px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.otherMarksObtain && (
                          <p style={{ color: "red" }}>{errors2.otherMarksObtain}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="otherMaxMarks"
                          value={formData3.otherMaxMarks}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "80px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.otherMaxMarks && (
                          <p style={{ color: "red" }}>{errors2.otherMaxMarks}</p>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          name="otherPercentage"
                          value={formData3.otherPercentage}
                          onChange={handleChange3}
                          onBlur={handleSubmit4}
                          style={{
                            borderRadius: "5px",
                            width: "180px",
                            height: "50px",
                          }}
                        ></input>
                        {errors2.otherPercentage && (
                          <p style={{ color: "red" }}>{errors2.otherPercentage}</p>
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[25, 50, 100]}
                component="div"
                count={2} // Replace with the actual count of your data
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Container>

          {/* /////////////////////////////////////////////DOCUMENTS & PHOTOS/////////////////////////////////////////// */}
          <Container
            className="shadow p-3 bg-body rounded"
            style={{
              width: "100%",
              backgroundColor: "#e8e5d1",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "skyblue",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <h5 style={{ padding: "10px", margin: 0, marginTop: "-3px" }}>
                Documents & Signature
              </h5>
            </div>
            <br></br>

            <Grid container>
              <Grid item xs={12}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <h5>
                      Applicant's Photo <span style={{ color: "red" }}> *</span>
                    </h5>
                  </div>

                  <div style={{ display: "flex" }}>
                    <input
                      type="file"
                      placeholder="choose"
                      onChange={(e) => handleFileChange("applicantPhoto", e)}
                    ></input>
                    <h6 style={{ backgroundColor: "#ffe6e6" }}>Maximum 1000KB</h6>
                  </div>
                </div>
                {errors7.applicantPhoto && (
                  <div style={{ color: 'red' }}>{errors7.applicantPhoto}</div>
                )}
                <hr></hr>

              </Grid>
              <Grid item xs={12}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <h5>
                      Applicant's Signature{" "}
                      <span style={{ color: "red" }}> *</span>
                    </h5>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input
                      type="file"
                      placeholder="choose"
                      onChange={(e) => handleFileChange("applicantSignature", e)}
                    ></input>
                    <h6 style={{ backgroundColor: " #ffe6e6" }}>
                      Maximum 1000KB
                    </h6>
                  </div>
                </div>
                {errors7.applicantSignature && (
                  <div style={{ color: 'red' }}>{errors7.applicantSignature}</div>
                )}
                <hr></hr>
              </Grid>

              <Grid item xs={12}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <h5>
                      Aadhar Card <span style={{ color: "red" }}> *</span>
                    </h5>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input
                      type="file"
                      placeholder="choose"
                      onChange={(e) => handleFileChange("aadharCard", e)}
                    ></input>
                    <h6 style={{ backgroundColor: " #ffe6e6" }}>
                      Maximum 1000KB
                    </h6>
                  </div>
                </div>
                {errors7.aadharCard && (
                  <div style={{ color: 'red' }}>{errors7.aadharCard}</div>
                )}
                <hr></hr>
              </Grid>
              <Grid item xs={12}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <h5>
                      Marksheet of 10th Examination <span style={{ color: "red" }}> *</span>
                    </h5>
                  </div>

                  <div style={{ display: "flex" }}>
                    <input
                      type="file"
                      placeholder="choose"
                      onChange={(e) => handleFileChange("applicantPhoto", e)}
                    ></input>
                    <h6 style={{ backgroundColor: "#ffe6e6" }}>Maximum 1000KB</h6>
                  </div>
                </div>
                {errors7.applicantPhoto && (
                  <div style={{ color: 'red' }}>{errors7.applicantPhoto}</div>
                )}
                <hr></hr>

              </Grid>

              <Grid item xs={12}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <h5>Marksheet of 12th Examination<span style={{ color: "red" }}> *</span></h5>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input
                      type="file"
                      placeholder="choose"
                      onChange={(e) => handleFileChange("marksheet12th", e)}
                    ></input>
                    <h6 style={{ backgroundColor: " #ffe6e6" }}>
                      Maximum 1000KB
                    </h6>
                  </div>
                </div>
                {errors7.marksheet12th && (
                  <div style={{ color: 'red' }}>{errors7.marksheet12th}</div>
                )}

                <hr></hr>
              </Grid>

              <Grid item xs={12}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <h5>Under Graduate Certificate<span style={{ color: "red" }}> *</span></h5>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input
                      type="file"
                      placeholder="choose"
                      onChange={(e) =>
                        handleFileChange("undergraduateCertificate", e)
                      }
                    ></input>
                    <h6 style={{ backgroundColor: " #ffe6e6" }}>
                      Maximum 1000KB
                    </h6>
                  </div>
                </div>
                {errors7.undergraduateCertificate && (
                  <div style={{ color: 'red' }}>{errors7.undergraduateCertificate}</div>
                )}

                <hr></hr>
              </Grid>

              <Grid item xs={12}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <h5>Post Graduate Certificate<span style={{ color: "red" }}> *</span></h5>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input
                      type="file"
                      placeholder="choose"
                      onChange={(e) =>
                        handleFileChange("postgraduateCertificate", e)
                      }
                    ></input>
                    <h6 style={{ backgroundColor: " #ffe6e6" }}>
                      Maximum 1000KB
                    </h6>
                  </div>
                </div>
                {errors7.postgraduateCertificate && (
                  <div style={{ color: 'red' }}>{errors7.postgraduateCertificate}</div>
                )}

                <hr></hr>
              </Grid>

              <Grid item xs={12}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <h5>Domicile Certificate<span style={{ color: "red" }}> *</span></h5>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input
                      type="file"
                      placeholder="choose"
                      onChange={(e) => handleFileChange("domicileCertificate", e)}
                    ></input>
                    <h6 style={{ backgroundColor: " #ffe6e6" }}>
                      Maximum 1000KB
                    </h6>
                  </div>
                </div>
                {errors7.domicileCertificate && (
                  <div style={{ color: 'red' }}>{errors7.domicileCertificate}</div>
                )}

                <hr></hr>
              </Grid>
              <Grid item xs={12}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <h5>Transfer Certificate<span style={{ color: "red" }}> *</span></h5>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input
                      type="file"
                      placeholder="choose"
                      onChange={(e) => handleFileChange("transferCertificate", e)}
                    ></input>
                    <h6 style={{ backgroundColor: " #ffe6e6" }}>
                      Maximum 1000KB
                    </h6>
                  </div>
                </div>
                {errors7.transferCertificate && (
                  <div style={{ color: 'red' }}>{errors7.transferCertificate}</div>
                )}

                <hr></hr>
              </Grid>

              <Grid item xs={12}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <h5>Income Certificate<span style={{ color: "red" }}> *</span></h5>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input
                      type="file"
                      placeholder="choose"
                      onChange={(e) => handleFileChange("incomeCertificate", e)}
                    ></input>
                    <h6 style={{ backgroundColor: " #ffe6e6" }}>
                      Maximum 1000KB
                    </h6>
                  </div>
                </div>
                {errors7.incomeCertificate && (
                  <div style={{ color: 'red' }}>{errors7.incomeCertificate}</div>
                )}

                <hr></hr>
              </Grid>

              <Grid item xs={12}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <h5>Migration Certificate<span style={{ color: "red" }}> *</span></h5>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input
                      type="file"
                      placeholder="choose"
                      onChange={(e) =>
                        handleFileChange("migrationCertificate", e)
                      }
                    ></input>
                    <h6 style={{ backgroundColor: " #ffe6e6" }}>
                      Maximum 1000KB
                    </h6>
                  </div>
                </div>
                {errors7.migrationCertificate && (
                  <div style={{ color: 'red' }}>{errors7.migrationCertificate}</div>
                )}

                <hr></hr>
              </Grid>

              <Grid item xs={12}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <h5>Other Certificate<span style={{ color: "red" }}> *</span></h5>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input
                      type="file"
                      placeholder="choose"
                      onChange={(e) => handleFileChange("otherCertificate", e)}
                    ></input>
                    <h6 style={{ backgroundColor: " #ffe6e6" }}>
                      Maximum 1000KB
                    </h6>
                  </div>
                </div>
                {errors7.otherCertificate && (
                  <div style={{ color: 'red' }}>{errors7.otherCertificate}</div>
                )}

                <hr></hr>
              </Grid>
            </Grid>
          </Container>


          <br></br>
          <Button
            style={{ marginLeft: "86%", width: "120px" }}
            type="submit"
            onClick={handleButtonClick}

          >
            Submit
          </Button>

          <br></br>
          <br></br>
        </div>
      </ThemeProvider>
    </>
  );
};

export default ButtonFun;
