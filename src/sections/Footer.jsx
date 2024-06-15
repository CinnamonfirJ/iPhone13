import { copyright } from "../assets/icons";
import logo from "../assets/images/footer-logo.png";
import {
  communityLinks,
  links,
  platformLinks,
  resourcesLinks,
} from "../constants";
const Footer = () => {
  return (
    <footer>
      <div className=' flex  justify-between items-start max-md:flex-col'>
        <div>
          <img src={logo} alt='' width={250} />
          <div className=' flex gap-4 m-6'>
            {links.map((item) => (
              <a href={item.href} target='_blank' rel='noopener noreferrer'>
                <img src={item.imgURL} alt='socials' width={32} height={32} />
              </a>
            ))}
          </div>
        </div>

        <div className=' flex flex-col gap-4 font-montserrat mb-12'>
          <h3 className=' font-bold text-xl text-slate-400'>Resources</h3>
          {resourcesLinks.map((item) => (
            <a href={item.href}>{item.text}</a>
          ))}
        </div>
        <div className=' flex flex-col gap-4 font-montserrat mb-12'>
          <h3 className=' font-bold text-xl text-slate-400'>Platform</h3>
          {platformLinks.map((item) => (
            <a href={item.href}>{item.text}</a>
          ))}
        </div>
        <div className=' flex flex-col gap-4 font-montserrat mb-12'>
          <h3 className=' font-bold text-xl text-slate-400'>Community</h3>
          {communityLinks.map((item) => (
            <a href={item.href}>{item.text}</a>
          ))}
        </div>
      </div>

      <div className=' flex justify-between items-center mt-12 max-md:flex-col max-md:gap-6'>
        <div className=' flex gap-2 '>
          <img src={copyright} alt='copyright' width={20} height={20} />
          <p>CopyRight. All rights reserved</p>
        </div>
        <div>
          <p>🚀 Created with 💙 By Jesse Wisdom</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
