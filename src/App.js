import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Steps from "./components/Steps";

// Similarly, the App component holds the components that make up the application, and these are then exported so that they can be imported into index.js

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
    </div>
  );
}

export default App;
