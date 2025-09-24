import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-200 p-5 text-center w-full fixed bottom-0 left-0 right-0 dark:bg-gray-800 dark:text-white">
      <p className="m-0">
        Desarrollado por <strong>adriangz10</strong>
      </p>
      <div className="social-links mt-2">
        <a
          href="https://www.linkedin.com/in/adriiangomez10"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-2"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://github.com/adriangz10"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-2"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            alt="GitHub"
            className="w-8 h-8"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
