import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faInstagram, faLinkedinIn, faSkype, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
  const [menuPreview, setMenuPreview] = useState(false);

  const socialIcons = [
    { icon: faGithubAlt, url: "https://github.com/Raiden126" },
    { icon: faLinkedinIn, url: "https://github.com/Raiden126" },
    { icon: faInstagram, url: "https://github.com/Raiden126" },
    { icon: faEnvelope, url: "https://github.com/Raiden126" },
    { icon: faSkype, url: "https://github.com/Raiden126" }
  ];

  const navMenuItems = [
    "Home","About","Projects","Skills", "Contact Me"
  ]

  const handleMenu = () => {
    setMenuPreview(!menuPreview);
  }

  return (
    <nav className="h-20 w-full flex justify-between items-center px-4 sm:px-8 md:px-14">
      <ul className="flex space-x-4 sm:space-x-6 md:space-x-7">
        {socialIcons.map((item, index) => (
          <li className="text-xl" key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={item.icon} />
            </a>
          </li>
        ))}
      </ul>
      <div>
        <FontAwesomeIcon icon={faBars} className='text-3xl' onClick={handleMenu} />
        {menuPreview && (
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center'>
            <FontAwesomeIcon icon={faXTwitter} className='text-white text-3xl absolute top-5 right-5 cursor-pointer' onClick={handleMenu} />
            <ul className="text-white text-2xl space-y-4 flex flex-col items-center">
              {navMenuItems.map((item, index) => (
                <li key={index}>
                  <a>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
