import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white relative">
      <nav>
        <Navbar />
      </nav>

      <main>
        <Home />
      </main>

      <footer>
        <ContactUs />
      </footer>
    </div>
  );
}

export default App;
