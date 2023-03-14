import { Navbar, Footer } from "./componets/index.js";
import { Header } from "./containers/index.js";
import "./index.css";

function App() {
  return (
    <div className="font-robotoCondensed">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
