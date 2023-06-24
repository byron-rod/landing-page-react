import CustomNavbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import BodyContainer from "./Components/BodyContainer/bodyConteiner";
import React from "react";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <CustomNavbar />
      <div className="content-container">
        <BodyContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;   
