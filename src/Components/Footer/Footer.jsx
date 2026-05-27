import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const footerLinks = [
  ["Audio Description", "Investor Relations", "Legal Notices"],
  ["Help Centre", "Jobs", "Cookie Preferences"],
  ["Gift Cards", "Terms of Use", "Corporate Information"],
  ["Media Centre", "Privacy", "Contact Us"],
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="/">
            <FaFacebookF />
          </a>

          <a href="/">
            <FaInstagram />
          </a>

          <a href="/">
            <FaTwitter />
          </a>

          <a href="/">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links */}
        <div className={styles.linksContainer}>
          {footerLinks.map((column, index) => (
            <div key={index} className={styles.linkColumn}>
              {column.map((link, idx) => (
                <a href="/" key={idx} className={styles.link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className={styles.copyRight}>© 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
