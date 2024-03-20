import FirstClient from "../../assets/FirstClient.jpg";
import SecondClient from "../../assets/SecondClient.jpg";
import ThirdClient from "../../assets/ThirdClient.jpg";

function OurClient() {
  const details = [
    {
      image: FirstClient,
      title: "Princy Patel",
      description:
        "I absolutely loved the work. I would definitely recommend Design to anyone.",
    },
    {
      image: SecondClient,
      title: "Jungkook",
      description:
        "Overall an excellent piece of work by Design. Truly overwhelmed by the complete Design",
    },
    {
      image: ThirdClient,
      title: "Anjali Sharma",
      description:
        "Getting our house interior done by DesignCafe is one of the wonderful decision which we had taken.",
    },
  ];

  return (
    <div className="min-h-screen w-full max-md:mb-4">
      <h1 className="text-[10vw] text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Our Clients
      </h1>
      <div className="grid-cols-1 sm:grid md:grid-cols-3">
        {details.map((data, index) => (
          <div
            key={index}
            className="mx-3 mt-6 w-1/2 h-1/2 h-min flex flex-col rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 place-self-center"
          >
            <a href="#!">
              <img
                className="rounded-t-lg w-full"
                src={data.image}
                alt="Skyscrapers"
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                {data.title}
              </h5>
              <p className="mb-4 text-[1vw]">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurClient;
