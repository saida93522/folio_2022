import { Link } from "@nextui-org/react";
import { ReactComponent as GitHubIcon } from "../../assets/icons_github.svg";
import { ReactComponent as GmailIcon } from "../../assets/icons_gmail.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons_linkedin.svg";

const NavbarLeft = () => {
  const socialLinks = [
    {
      icon: GitHubIcon,
      link: "https://github.com/saida93522",
    },
    {
      icon: GmailIcon,
      link: "mailto:saidahussen4@gmail.com",
    },
    {
      icon: LinkedinIcon,
      link: "https://www.linkedin.com/in/saida-hussen",
    },
  ];

  return (
    <nav className="nav mix-blend-mode-exclusion overflow-hidden">
      <ul className="w-6 absolute bottom-0 pointer-events-auto flex flex-col items-center">
        {socialLinks.map((item, key) => (
          <Link
            key={key}
            href={`${item.link}`}
            target="_blank"
            css={{ color: "$navColor" }}
            className="nav-left-item pb-2"
          >
            <item.icon className="w-4 md:w-6" fill={{ color: "$navColor" }} />
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarLeft;
