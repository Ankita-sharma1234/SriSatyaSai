import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

import phone from '../images/phone.png';
import mail from '../images/gmail.png';
import globe from '../images/worldwide.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import newspaper from '../images/newspaper.png'
const Footer = () => {
  return (
    <footer className="main-footer">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={7} md={6} sm={12}>
                <div className="footer-widget about-widget">
                  <div className="logo">
                    <a href="#">
                      <img
                        src="https://sssutms.co.in/cms/Areas/Website/Content/images/Logo.png"
                        alt="SSSUTMS Logo"
                        style={{ height: "80px", width: "350px", marginRight: "70px" }}
                      />
                    </a>
                  </div>
                  <div className="text">
                    <p>
                      Opp.Oilfed Plant, Bhopal-Indore Road,<br />
                      Sehore (M.P), Pin - 466001<br /><br />
                      <img src={phone} alt="Phone" height="20" width="20" /> (+91) 07562-292740 | 7562292720<br />
                      <img src={phone} alt="Phone" height="20" width="20" /> (+91) 7748900027 | 7748900028<br />
                      (From 10:00 AM to 5:00 PM only)
                      <h6 style={{ marginTop: "30px" }}>
                        <img src={mail} alt="Email" height="20" width="20" /> info@sssutms.co.in
                      </h6>
                      <h6>
                        <img src={globe} alt="Website" height="20" width="20" /> www.sssutms.co.in
                      </h6>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={5} md={6} sm={12}>
                <div className="footer-widget links-widget">
                  <h2>Useful Links</h2>
                  <ul className="footer-list">
                    <li>Approvals</li>
                    <li>
                      <a href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures">
                        Mandatory Disclosures
                      </a>
                    </li>
                    <li>
                      <a href="https://www.sssutms.co.in/cms/Website/Admission/UniversityAccountDetail">
                        Pay Fees
                      </a>
                    </li>
                    <li>Examination Notification</li>
                    <li>Career</li>
                    <li>AICTE Feedback</li>
                    <li>Results</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className="footer-widget gallery-widget">
                  <h2>Logins</h2>
                  <ul className="footer-list2">
                    <li>Student Login</li>
                    <li>Admin Login</li>
                    <li>Verify Marksheet</li>
                    <li>E-Pravesh 2023</li>
                    <li>Entrance Exam Form</li>
                    <li>Alumni Registration Form</li>
                    <li>Online Grievance for Student</li>
                  </ul>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="footer-widget info-widget">
                  <h2>Help Desk</h2>
                  <ul className="info-list">
                    <li>Fax No: +91-07562-292201</li>
                    <li>Last Updated On: Fri Mar, 11 2022</li>
                  </ul>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <img src={facebook} alt="Facebook" height="20" width="20" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={twitter} alt="Twitter" height="20" width="20" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={instagram} alt="Instagram" height="20" width="20" />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: "#e81e43", padding: "0px" }}>
        <h4 style={{ marginLeft: "50px", color: "black", fontFamily: "italic" }}>
         Latest Update
        </h4>
        <marquee direction="scroll">
                    <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Expert_Lect_Yoga_18022022_0318.jpeg"
              target="_blank"
            >
              EXPERT LECTURE ON YOGA IN DAILY ROUTINE |
            </a>
            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Examination/Results"
              target="_blank"
            >
              EXAMINATION RESULTS DECLARED |
            </a>
            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Download/E-Content"
              target="_blank"
            >
              E-Content |
            </a>

            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/1314"
              target="_blank"
            >
              APPOINTMENT (School of Homoeopathy) |
            </a>
            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/1312"
              target="_blank"
            >
              Exam form date Extended (Dec-2023) |
            </a>
            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/282"
              target="_blank"
            >
              Examination Form Notification November - December 2023 |
            </a>
            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/263"
              target="_blank"
            >
              Supplementary Examination form Notification Sep-2023 |
            </a>
            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/241"
              target="_blank"
            >
              NOTIFICATION |
            </a>
            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/240"
              target="_blank"
            >
              Examination Form Notification September-2023 As per NEP |
            </a>

            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/139"
              target="_blank"
            >
              Notification for Enrollment BHMS 1st Year 2022-23 |
            </a>

            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/134"
              target="_blank"
            >
              Bachelor of Ayurvedic Medicine &amp; Surgery (First Year) |
            </a>

            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/117"
              target="_blank"
            >
              Ph. D Entrance Examination -2023 |
            </a>
            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/116"
              target="_blank"
            >
              AMENDED ADMISSION NOTIFICATION-01 |
            </a>
            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/114"
              target="_blank"
            >
              B.sc Nursing (Semester) Examination Notification June-2023 |
            </a>
            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/113"
              target="_blank"
            >
              Supplementary Examination June-2023 (BHMS, B.sc Nursing ,Post
              Basic nursing) |
            </a>
            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/112"
              target="_blank"
            >
              B A M S EXAMINATION FORM NOTIFICATION – AUG 2023 |
            </a>
            <a
              style={{ color: "whitesmoke" }}
              href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures/DownloadLinks/File/111"
              target="_blank"
            >
              BHMS Examination Time Table June -2023 |
            </a>
        </marquee>
      </div>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="copyright">
                <span className="theme_color">Copyright</span> © 2023 SSSUTMS All Right Reserved
              </div>
            </Col>
            {/* <Col lg={6} md={12} sm={12}>
              <div className="social-links">
                             <a href="#">
                   <i>
                     <img src={facebook} height="20" width="20" />
                   </i>
                 </a>
                 <a href="#">
                   <i> <img src={twitter} height="20" width="20" /></i>
                 </a>
                 <a href="#">
                   <i> <img src={instagram} height="20" width="20" /></i>
               </a>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;