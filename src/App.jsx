import { useState } from "react";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white relative scroll-smooth">
      <nav>
        <Navbar isAtBottom={isAtBottom} />
      </nav>

      <main>
        <Home />
      </main>

      <footer>
        <ContactUs setIsAtBottom={setIsAtBottom} />
      </footer>
    </div>
  );
}

export default App;
