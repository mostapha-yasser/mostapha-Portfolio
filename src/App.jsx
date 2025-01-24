import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { DeviceProvider } from "./context/DeviceContext"; // Import the DeviceContext

const App = () => {
  return (
    <DeviceProvider> 
      <BrowserRouter>
        <div className="relative z-0 bg-main">
          <div className="bg-hero-pattern">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </DeviceProvider>
  );
};

export default App;
