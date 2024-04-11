import { socialLinks } from "../data";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState();
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        {socialLinks.map(({ id, link, icon }) => {
          return (
            <li className="social-icon__item" key={id}>
              <a
                className="social-icon__link"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
      <p>
        &copy;<span>{year}</span> Hains | All Rights Reserved
      </p>
    </footer>
  );
};
export default Footer;
