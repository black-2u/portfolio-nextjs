import {
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaSkype,
  FaTelegram,
} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from next/image
import { devil, socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          layout="fill" // Use layout fill to ensure the image covers its container
          objectFit="cover" // Adjust object-fit to cover the container
          className="opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() => {
            window.open("mailto:blackwang104@gmail.com");
          }}
        />
      </div>
      <div className="flex mt-16 md:flex-row-reverse flex-col justify-between items-center">
        <div className="social-media">
          <Link href="www.linkedin.com/in/aleksey-mosyaev-b74459313/">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/black-2U/">
            <FaGithub />
          </Link>
          <Link href="https://t.me/Black_2U">
            <FaTelegram />
          </Link>
        </div>
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} {devil}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
