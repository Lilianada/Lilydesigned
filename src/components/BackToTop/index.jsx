import React, { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import "./style.scss";

export default function BackToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn && (
        <div className="backToTop">
          <div className="iconPosition iconStyle" onClick={goToTop}>
            <BsArrowUpShort size={32} />
          </div>
        </div>
      )}
    </>
  );
}
