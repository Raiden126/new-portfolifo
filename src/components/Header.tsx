import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
  faSkype,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const Header = () => {
  const [menuPreview, setMenuPreview] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const socialIcons = [
    { icon: faGithubAlt, url: "https://github.com/Raiden126" },
    { icon: faLinkedinIn, url: "https://github.com/Raiden126" },
    { icon: faInstagram, url: "https://github.com/Raiden126" },
    { icon: faEnvelope, url: "https://github.com/Raiden126" },
    { icon: faSkype, url: "https://github.com/Raiden126" },
  ];

  const navMenuItems = [
    { route: "/", name: "Home" },
    { route: "/about", name: "About" },
    { route: "/projects", name: "Projects" },
    { route: "/skills", name: "Skills" },
    { route: "/contact", name: "Contact Me" },
  ];

  const handleMenu = () => {
    setMenuPreview(!menuPreview);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`h-24 w-full fixed top-0 bg-gradient-to-r from-[#5ae79a] from-10% via-[#42fde7] via-70% to-[#2cddd4] ${
      isScrolled
        ? "shadow-lg bg-gradient-to-r from-[#5ae79a] from-10% via-[#42fde7] via-70% to-[#2cddd4]"
        : ""
    }`} style={{border: 'none'}}>
      <div
        className={`h-full w-full flex justify-between items-center px-4 sm:px-8 md:px-14 transition-all duration-300 ${
          isScrolled
            ? "shadow-lg bg-gradient-to-r from-[#5ae79a] from-10% via-[#42fde7] via-70% to-[#2cddd4]"
            : ""
        }`}
      >
        <ul className="flex space-x-5 sm:space-x-6 md:space-x-7">
          {socialIcons.map((item, index) => (
            <li className="text-xl" key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="sm:text-xl md:text-2xl text-2xl"
                />
              </a>
            </li>
          ))}
        </ul>
        <div>
          <FontAwesomeIcon
            icon={faBars}
            className="text-3xl cursor-pointer"
            onClick={handleMenu}
          />
          {menuPreview && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center animate-fadeIn">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-white text-3xl absolute top-5 right-5 cursor-pointer"
                onClick={handleMenu}
              />
              <ul className="text-white text-2xl space-y-4 flex flex-col items-center">
                {navMenuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.route}
                      className="font-mono font-thin hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
