import React from "react";
function Footer() {
  // Replace links with your social media profiles
  const icons = [
    {
      name: "fab fa-github",
      label: "GitHub",
      link: "https://github.com/FrankM89",
    },
    {
      name: "fab fa-linkedin",
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/your-username",
    },
  ];
  return (
    <footer className="bg-gray-800 text-gray-400 py-4">
      <div className="container mx-auto flex justify-center">
        {icons.map((icon) => (
          <a
            href={icon.link}
            key={icon.name}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 hover:text-white"
          >
            <i className={icon.name}></i>
            <span className="ml-2 font-medium">{icon.label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
export default Footer;
