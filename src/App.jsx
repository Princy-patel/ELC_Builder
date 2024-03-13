import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white relative">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
