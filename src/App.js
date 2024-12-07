import "./App.css";
import Header from "./component/Header";
import SectionAbout from "./component/SectionAbout";
import SectionContact from "./component/SectionContact";
import SectionProject from "./component/SectionProject";
import SectionSkill from "./component/SectionSkill";
import SectionTop from "./component/SectionTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="app" id="home">
      <Header />
      <SectionTop />
      <SectionAbout />
      <SectionProject />
      <SectionSkill />
      <SectionContact />
      <ToastContainer
        toastStyle={{
          fontSize: "14px",
        }}
      />
    </div>
  );
}

export default App;
