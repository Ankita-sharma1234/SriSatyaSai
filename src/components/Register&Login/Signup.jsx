import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "./firebase";
import swal from "sweetalert";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [name, setName] = useState("");
  const [fathersname, setFathersname] = useState("");
  const [mothersname, setMothersname] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [emailRegisteredMessage, setEmailRegisteredMessage] = useState("");
  const otpInputRef = useRef(null);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/i;
  const [otp2, setOtp2] = useState("");

  const [showOtpInput, setShowOtpInput] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    otp2: "",
    showRegistrationForm: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };





  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
          console.log("Recaptcha verified");
        },
        defaultCountry: "IN",
      }
    );
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + formData.mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        setShowOtpInput(true);

        swal({
          title: "OTP Sent Successfully",
          text: `OTP sent your Mobile No.  ${formData.mobile} please enter otp!!!! `,
          icon: "success",
          showConfirmButton: false,
          timer: 10000,
        });
      })
      .catch((error) => {
        console.log("SMS not sent");
        console.log(error)
      });
  };
  const onSubmitOTP = (e) => {
    e.preventDefault();
    const code = formData.otp2;
    console.log(code, "submit");

    if (window.confirmationResult && code) {
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          const user = result.user;
          console.log(JSON.stringify(user));
          if (result.success) {
            swal({
              title: "Congratulations",
              text: "Registration done successfullly!",
              icon: "success",
              showConfirmButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                alert("confirmed");
              }
            });
          } else {
            console.log("Registration update failed");
          }
        })
        .catch((error) => {
          // Handle error
          console.error("Error confirming OTP:", error);
          swal({
            title: "ERROR",
            text: "Error confirming OTP. Please try again.",
            icon: "ERROR",
            showConfirmButton: true,
          });
        });
    } else {
      console.error("Confirmation result or OTP code is missing.");
    }
  };





  const sendEmail = async (e) => {
    e.preventDefault();
    setVerificationMessage("");

    if (
      !name ||
      !email ||
      !dob ||
      !fathersname ||
      !mothersname ||
      !mobile ||
      (!otpSent && !email) ||
      !emailRegex.test(email)
    ) {
      setVerificationMessage(
        <span style={{ color: "red" }}>
          All required fields must be filled in, or email must be in a valid
          format.
        </span>
      );

      return;
    } else if (mobile && mobile.length !== 10) {
      setVerificationMessage(
        <span style={{ color: "red" }}>Mobile Number must be of 10 digits</span>
      );
      return;
    }
    if (!otpSent) {
      const res = await fetch("https://sssutmsapi.onrender.com/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await res.json();

      if (data.status === 201) {
        setShow(true);
        setOtpSent(true);
        setVerificationMessage("");
        // otpInputRef.current.focus();
      } else if (data.status === 401) {
        console.log(setEmailRegisteredMessage, "dhgqdgqgdu");
      }
    } else {
      const res = await fetch("https://sssutmsapi.onrender.com/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      });

      const data = await res.json();
      console.log("verify", data);
      if (data.status === 200) {
        // setIsOtpVerified(true);
        setVerificationMessage(
          "Registered successfully, Check Your Mail for ID and Password"
        );
        const registerRes = await fetch(
          "https://sssutmsapi.onrender.com/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              dob,
              fathersname,
              mothersname,
              mobile,
            }),
          }
        );
        const registerData = await registerRes.json();

        if (registerData.status === 200) {
          setVerificationMessage();
          navigate("/studentlogin");
        } else if (registerData.status === 401) {
          swal({
            icon: "error",
            title: "Error",
            text: "Mobile number must be 10 digits",
          });
        }
      } else if (data.status === 401) {
        setVerificationMessage("Invalid OTP");
      } else {
        console.log("Error:", data.message);
      }
    }
  };
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 10000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show]);




















  
  return (
    <>
      {show ? (
        <Alert status="success">
          <AlertIcon />
          {otpSent ? "OTP Sent Successfully" : "This Email"}
        </Alert>
      ) : null}
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={["100%", "100%", "80%"]}
          maxW={"2xl"}
          py={2}
          px={[4, 6]}
        >
          <Stack align={"center"}>
            <Heading fontSize={["2xl", "4xl"]} textAlign={"center"}>
              {" "}
              STUDENT SIGN UP
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="fathersname" isRequired>
                <FormLabel>Fathers Name</FormLabel>
                <Input
                  type="text"
                  name="fathersname"
                  value={fathersname}
                  autoComplete="off"
                  onChange={(e) => setFathersname(e.target.value)}
                />
              </FormControl>
              <FormControl id="mothersname" isRequired>
                <FormLabel>Mothers Name</FormLabel>
                <Input
                  type="text"
                  name="mothersname"
                  value={mothersname}
                  autoComplete="off"
                  onChange={(e) => setMothersname(e.target.value)}
                />
              </FormControl>
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type="number"
                  name="mobile"
                  value={mobile}
                  autoComplete="off"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </FormControl>

              <FormControl id="dob" isRequired>
                <FormLabel>DOB</FormLabel>
                <Input
                  type="Date"
                  name="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  autoComplete="off"
                />
              </FormControl>

              {otpSent && (
                <FormControl id="otp2" isRequired>
                  <FormLabel>Enter OTP</FormLabel>
                  <Input
                    type="number"
                    name="otp2"
                    value={otp2}
                    onChange={(e) => setOtp(e.target.value)}
                    ref={otpInputRef}
                  />
                </FormControl>
              )}
              <Button colorScheme="blue" type="submit" onClick={sendEmail}>
                {otpSent ? "Verify OTP" : "Send OTP"}
              </Button>
              {verificationMessage && (
                <div className="mt-2">
                  <Alert
                    variant={
                      verificationMessage === "Invalid OTP"
                        ? "danger"
                        : "success"
                    }
                    style={{
                      color:
                        verificationMessage === "Invalid OTP" ? "red" : "green",
                      fontWeight: "bold",
                    }}
                  >
                    {verificationMessage}
                  </Alert>
                </div>
              )}
              {emailRegisteredMessage && (
                <div className="mt-2">
                  <Alert variant="danger">{emailRegisteredMessage}</Alert>
                </div>
              )}
              <p>
                Already have an account? <Link to="/studentlogin"> SignIn</Link>
              </p>
              {/* <FormControl id="OTP" isRequired>
                <FormLabel>OTP</FormLabel>
                <Input type="number" />
              </FormControl> */}

              {/*
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sent Otp
                </Button>
              </Stack> */}
              {/* <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack> */}
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Row className="form-input">
          <Col xs={12} md={6}>
            <form onSubmit={onSignInSubmit}>
              <div id="sign-in-button"></div>
              <Input
                style={{ marginTop: "8px" }}
                type="number"
                name="mobile"
                placeholder="Mobile No."
                required
                autoComplete="off"
                value={formData.mobile}
                onChange={handleChange}
              />
                              <Button style={{ marginTop: "8px" }} type="submit">
                  Submit
                </Button>
            </form>
          </Col> 
          {showOtpInput && (
            <Col xs={12} md={6}>
              <form onSubmit={onSubmitOTP}>
                <Input
                  style={{ marginTop: "8px" }}
                  type="number"
                  name="otp2"
                  placeholder="OTP No."
                  required
                  value={formData.otp2}
                  onChange={handleChange}
                />
                <Button style={{ marginTop: "8px" }} type="submit">
                  Submit
                </Button>
              </form>
            </Col>
          )}
        </Row>
    </>
  );
}
