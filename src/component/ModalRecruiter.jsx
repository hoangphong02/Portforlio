import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import imageDB from "../asset/image/recruiter-dashboard.png";
import imageJob from "../asset/image/recruiter-job-3.png";
import imageJob2 from "../asset/image/recruiter-job.png";
import imageJob3 from "../asset/image/recruiter-job2.png";
import imageJob4 from "../asset/image/recruiter-update-job.png";
import imagePackage from "../asset/image/recruiter.png";
import imageVerify from "../asset/image/verify-email-recruiter.png";
import imageViewCV from "../asset/image/page-view-cv.png";

export function ModalRecruiter({ open, handleClose }) {
  return (
    <Modal show={open} onHide={handleClose} size="xl">
      <Modal.Body>
        <div>
          <h1>View demo Recruitment Platform</h1>
          <a href="https://tuyendung.vjobs.vn/">Link website</a>
          <div>
            <h2>
              The website is currently live, and due to security concerns
              regarding recruiter accounts, I am unable to provide a direct
              demo. Therefore, I can only demonstrate the issue through
              illustrative images. I kindly ask for your understanding.
            </h2>
          </div>
          <div>
            <h1>Page dashboard</h1>
            <img src={imageDB} alt="" loading="lazy" />
          </div>
          <div>
            <h1>Page Jobs</h1>
            <img src={imageJob} alt="" loading="lazy" />
            <img src={imageJob2} alt="" loading="lazy" />
          </div>
          <div>
            <h1>Page Details Jobs</h1>
            <img src={imageJob3} alt="" loading="lazy" />
          </div>
          <div>
            <h1>Page Update Jobs</h1>
            <img src={imageJob4} alt="" loading="lazy" />
          </div>
          <div>
            <h1>Page Manage Package Vip</h1>
            <img src={imagePackage} alt="" loading="lazy" />
          </div>
          <div>
            <h1>Page Verify Email</h1>
            <img src={imageVerify} alt="" loading="lazy" />
          </div>
          <div>
            <h1>Page View CV</h1>
            <img src={imageViewCV} alt="" loading="lazy" />
          </div>
          <div>
            <h1>And there are also a few other pages...</h1>
            <h2>
              The website is currently live, and you can register a recruiter
              account to gain a more detailed perspective. Thank you very much!
            </h2>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
