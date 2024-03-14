import FirstClient from "../assets/FirstClient.jpg";
import SecondClient from "../assets/SecondClient.jpg";
import ThirdClient from "../assets/ThirdClient.jpg";

function OurClient() {
  const Details = [
    {
      image: FirstClient,
      Title: "Princy Patel",
      Description:
        "I absolutely loved the work. I would definitely recommend Design to anyone.",
    },
    {
      image: SecondClient,
      Title: "Jungkook",
      Description:
        "Overall an excellent piece of work by Design. Truly overwhelmed by the complete Design",
    },
    {
      image: ThirdClient,
      Title: "Anjali Sharma",
      Description:
        "Getting our house interior done by DesignCafe is one of the wonderful decision which we had taken.",
    },
  ];

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <h1 className="text-4xl text-center  leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Our Clients
      </h1>
      <div className="flex justify-between">
        {Details.map((data, index) => (
          <div key={index} className="w-1/3 h-[20em] m-20 ">
            <img
              src={data.image}
              alt="Collection Image"
              className="w-full h-full"
            />
              <div className="text-white text-center m-5">
                <h6 className="font-bold text-3xl p-4">{data.Title}</h6>
                <p>{data.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurClient;
