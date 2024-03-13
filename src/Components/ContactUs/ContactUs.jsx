import { useEffect } from "react";
import PropTypes from "prop-types";

function ContactUs({ setIsAtBottom }) {
  useEffect(() => {
    const handleScroll = function () {
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
    <div className="h-screen w-full bg-zinc-100 text-black flex justify-between">
      <div className="self-start mt-[7vw] ml-[7vw]">
        <h3 className="text-[2vw] italic uppercase tracking-tight font-medium">
          Studio name
        </h3>
        <h1 className="text-[3vw] font-semibold">Connect with Us</h1>
      </div>

      <div className="self-end mb-[7vw] mr-[7vw]">
        <div className="p-[0.9vw]">
          <h6 className="text-right font-medium">Mailing Address</h6>
          <p className="text-right">123, Anywhere., Any City, ST 12345</p>
        </div>
        <div className="p-[0.9vw]">
          <h6 className="text-right font-medium">Email Address</h6>
          <p className="text-right">hello@reallyGreatesite.com</p>
        </div>
        <div className="p-[0.9vw]">
          <h6 className="text-right font-medium">Phone Number</h6>
          <p className="text-right">(123) 456 7890</p>
        </div>
      </div>
    </div>
  );
}

ContactUs.propTypes = {
  setIsAtBottom: PropTypes.func.isRequired,
};

export default ContactUs;
