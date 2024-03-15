import OurCollections from "./Components/OurCollections";
import OurClient from "./Components/OurClient";
import OurStories from "./Components/OurStories";
import { useState } from "react";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white relative scroll-smooth">
      <nav>
        <Navbar isAtBottom={isAtBottom}/>
      </nav>

      <main>
        <Home />
        <OurCollections />
        <OurClient />
        <OurStories />
      </main>

      <footer>
      <ContactUs setIsAtBottom={setIsAtBottom} />
      </footer>
    </div>
  );
}

export default App;
