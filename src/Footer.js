import React from "react";

const Footer = () => {
  return (
    <footer class="footer bg-gray-200 p-5 text-center w-full">
      <p class="m-0">
        Desarrollado por <strong>adriangz10</strong>
      </p>
      <div class="social-links mt-2">
        <a
          href="https://www.linkedin.com/in/adriiangomez10"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block mx-2"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
            alt="LinkedIn"
            class="w-8 h-8"
          />
        </a>
        <a
          href="https://github.com/adriangz10"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block mx-2"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            alt="GitHub"
            class="w-8 h-8"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
