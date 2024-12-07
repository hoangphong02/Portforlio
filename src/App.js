import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import SectionAbout from "./component/SectionAbout";
import SectionContact from "./component/SectionContact";
import SectionProject from "./component/SectionProject";
import SectionService from "./component/SectionService";
import SectionTop from "./component/SectionTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="app" id="home">
      <Header />
      <SectionTop />
      <SectionAbout />
      <SectionService />
      <SectionProject />
      <SectionContact />
      <Footer />
      <ToastContainer
        toastStyle={{
          fontSize: "14px",
        }}
      />
    </div>
  );
}

export default App;
