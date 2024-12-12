import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import imageMB from "../asset/image/mobile.jpg";

export function ModalApp({ open, handleClose }) {
  return (
    <Modal show={open} onHide={handleClose} size="md">
      <Modal.Body>
        <div>
          <h1>View demo Loyalty Program App</h1>
          <div>
            <h2>
              The app has been officially released on the App Store and Google
              Play. You can now download and experience it. Thank you so much
              for your support!
            </h2>
          </div>
          <div>
            <img src={imageMB} alt="" loading="lazy" />
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
