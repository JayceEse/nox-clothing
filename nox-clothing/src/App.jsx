import { Navbar, Footer, Dropdown } from "./componets/index.js";
import { Header, About, Contact } from "./containers/index.js";
import "./index.css";

function App() {
  return (
    <div className="font-robotoCondensed">
      <Navbar />
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
