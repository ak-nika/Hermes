import { footerLinks } from "../constants";

const FooterIcons = () => {
  return (
    <>
      {footerLinks.map((link) => (
        <a key={link.id} href={link.link}>
          <img src={link.img} alt={link.name} />
        </a>
      ))}
    </>
  );
};

export default FooterIcons;
