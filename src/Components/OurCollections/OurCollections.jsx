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
    <div className="min-h-screen p-10 flex-col flex justify-center items-center max-md:p-2">
      <div>
        <h2 className="text-[3vw] font-bold max-md:text-[5vw]">
          Our Collection
        </h2>
      </div>
      <div className="flex max-md:flex-col justify-center items-center mt-10">
        {details.map((data, index) => {
          return (
            <>
              <div key={index} className="relative cursor-pointer">
                <div className="block rounded-lg bg-white text-white shadow-secondary-1 dark:bg-surface-dark">
                  <img
                    className="rounded-lg w-full h-full"
                    src={data.image}
                    alt=""
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      <h6 className="font-bold text-[3vw] md:text-[2vw]">
                        {data.title}
                      </h6>
                      <p className="text-[2vw] md:text-[1vw]">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default OurCollections;
