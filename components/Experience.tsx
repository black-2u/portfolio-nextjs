import React from "react";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

import HTMLlogo from "../public/icons/html.png";
import CSSlogo from "../public/icons/cssLogo.png";
import JSlogo from "../public/icons/js.png";
import Pythonlogo from "../public/icons/python.png";
import TypeScriptlogo from "../public/icons/ts.png";
import SHADCNlogo from "../public/icons/shacnUI.png";
import JQERYlogo from "../public/icons/jqury.png";
import SASSlogo from "../public/icons/sass.png";
import Framerlogo from "../public/icons/frammer.png";
import GSAPlogo from "../public/icons/gsapicon.png";
import NEXTlogo from "../public/icons/next.png";
import Reactlogo from "../public/icons/re.svg";
import Bootstraplogo from "../public/icons/boos.png";
import Tailwindlogo from "../public/icons/tail.svg";
import MaterialUIlogo from "../public/icons/mui.png";
import VSCodeLogo from "../public/icons/vscode.png";
import GitHubLogo from "../public/icons/github.png";
import GitLogo from "../public/icons/git.png";
import ChatGPTLogo from "../public/icons/chatgpt.jpg";
import Figmalogo from "../public/icons/figma.png"; // Reusing ChatGPTLogo for Figma

const skills = [
  {
    category: "Programming Languages",
    items: [
      { logo: HTMLlogo, name: "HTML" },
      { logo: CSSlogo, name: "CSS" },
      { logo: JSlogo, name: "JavaScript" },
      { logo: Pythonlogo, name: "Python" },
      { logo: TypeScriptlogo, name: "TypeScript" },
    ],
  },
  {
    category: "Libraries",
    items: [
      { logo: SHADCNlogo, name: "SHADCN/UI" },
      { logo: JQERYlogo, name: "JQuery" },
      { logo: SASSlogo, name: "SASS" },
      { logo: Framerlogo, name: "Framer Motion" },
      { logo: GSAPlogo, name: "GSAP" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { logo: NEXTlogo, name: "NEXT.js" },
      { logo: Reactlogo, name: "React" },
      { logo: Bootstraplogo, name: "Bootstrap" },
      { logo: Tailwindlogo, name: "Tailwind CSS" },
      { logo: MaterialUIlogo, name: "Material-UI" },
    ],
  },
  {
    category: "Technical Tools",
    items: [
      { logo: Figmalogo, name: "Figma" },
      { logo: VSCodeLogo, name: "VS Code" },
      { logo: GitHubLogo, name: "GitHub" },
      { logo: GitLogo, name: "Git" },
      { logo: ChatGPTLogo, name: "ChatGPT" },
    ],
  },
];

const Experience = () => {
  return (
    <div className="py-20 w-full mt-[8rem]" id="Topskills">
      <h1 className="text-4xl font-bold text-center mb-12">
        My <span className="text-purple">Top Skills</span>
      </h1>
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-4">
        {skills.map((skillCategory, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="flex flex-col p-6 gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-4">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-4 mt-2">
                  {skillCategory.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="mb-2"
                      />
                      <p className="text-gray-800 dark:text-white font-medium">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;