import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import SectionAbout from "./component/SectionAbout";
import SectionContact from "./component/SectionContact";
import SectionProject from "./component/SectionProject";
import SectionService from "./component/SectionService";
import SectionTop from "./component/SectionTop";

function App() {
  return (
    <div className="app">
      <Header />
      <SectionTop />
      <SectionAbout />
      <SectionService />
      <SectionProject />
      <SectionContact />
      <Footer />
    </div>
  );
}

export default App;
