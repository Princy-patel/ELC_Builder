import { useEffect } from "react";
import PropTypes from "prop-types";
import map from "../../assets/map.avif";

function ContactUs({ setIsAtBottom }) {
  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-zinc-100 text-black flex flex-col lg:flex-row">
      <div className="lg:w-1/4 bg-zinc-500 flex flex-col justify-center items-center p-6 lg:p-12">
        <h1 className="text-3xl lg:text-4xl font-bold italic text-zinc-100 mb-6">
          CONTACT US
        </h1>
        <div className="mb-4">
          <h6 className="text-right font-medium text-zinc-100">
            Email Address
          </h6>
          <p className="text-right text-zinc-100">hello@reallyGreatesite.com</p>
        </div>
        <div>
          <h6 className="text-right font-medium text-zinc-100">Phone Number</h6>
          <p className="text-right text-zinc-100">+(123) 456 7890</p>
        </div>
      </div>
      <div className="lg:w-3/4 bg-green-500">
        <img src={map} alt="" className="w-full h-auto lg:h-full" />
      </div>
    </div>
  );
}

ContactUs.propTypes = {
  setIsAtBottom: PropTypes.func.isRequired,
};

export default ContactUs;
