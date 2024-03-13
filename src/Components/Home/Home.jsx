import classes from "./home.module.css";

function Home() {
  return (
    <div
      className={`h-screen w-full relative bg-no-repeat ${classes.home_image}`}
    >
      <div className="absolute bottom-0 px-4 py-3 bg-zinc-900/60 w-full h-screen flex flex-col gap-20 justify-center items-center">
        <div>
          <h1 className="text-white text-[8vw] font-['Roboto_Condensed'] leading-none tracking-tight text-center">
            Furniture, decore,
          </h1>
          <h1 className="text-white text-[8vw] font-['Roboto_Condensed'] leading-none tracking-tight text-center">
            and beyond
          </h1>
        </div>

        <div className="border-b-2">
           <a href="#">SHOP NOW</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
