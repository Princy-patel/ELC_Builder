// import classes from '../index.css'
import CollectionImg1 from "../../assets/Collection_img1.jpg";
import CollectionImg2 from "../../assets/Collection_img2.jpg";
import CollectionImg3 from "../../assets/Collection_img3.jpg";

function OurCollections() {
  const details = [
    {
      image: CollectionImg1,
      title: "Home Accent",
      description:
        "Traditional or formal rooms require symmetrical balance,which is the art of mirroring and matching each side of a room.",
    },
    {
      image: CollectionImg2,
      title: "Functional Furniture",
      description:
        "The visual weights of lines, colors, forms, and textures are balanced without requiring exact duplication.",
    },
    {
      image: CollectionImg3,
      title: "Timeless staples",
      description:
        "Radial balance is achieved when there is a central focal  point with other elements radiating from or around it.",
    },
  ];

  return (
    <div className="h-screen w-full p-20 flex-col justify-center">
      <h1 className="m-20 pt-20 text-4xl text-center  leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Our Collections
      </h1>

      <div className="flex justify-between">
        {details.map((data,index) => (
          
            <div key={index} className="relative flex-auto w-1/3">
              <img
                src={data.image}
                alt="Collection Image"
                className="w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <h6 className="font-bold text-3xl">{data.title}</h6>
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  );
}

export default OurCollections;
