import OurCollections from "./Components/OurCollections/OurCollections";
import OurClient from "./Components/OurClient/OurClient";
import OurStories from "./Components/OurStories/OurStories";
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
        <OurCollections />
        <OurClient />
        <OurStories setIsAtBottom={setIsAtBottom} isAtBottom={isAtBottom} />
      </main>

      <footer>
        <ContactUs setIsAtBottom={setIsAtBottom} />
      </footer>
    </div>
  );
}

export default App;
