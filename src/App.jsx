import OurCollections from './Components/OurCollections'
import OurClient from './Components/OurClient'
import OurStories from './Components/OurStories'
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white relative">
      <Navbar />
      <Home />
      <OurCollections/>
      <OurClient/>
      <OurStories/>
      </div>
  )
}

export default App;
