"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "orem ipsum dolor sit amet consectetur adipisicing elit. Odit earum asperiores ut labore alias suscipit quae doloribus quis amet nostrum.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Guddu Shakar Paul",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91-7637092553",
    },
    {
      fieldName: "Experiece",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "live:.cid.f71ae9793909f0a6",
    },
    {
      fieldName: "Email",
      fieldValue: "guddupaul145@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Bengali",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "orem ipsum dolor sit amet consectetur adipisicing elit. Odit earum asperiores ut labore alias suscipit quae doloribus quis amet nostrum.",
  items: [
    {
      company: "Dotsquares Pvt. Ltd.",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "C-DAC(CINE)",
      position: "Full Stack Developer(Apprentice)",
      duration: "2023-2024",
    },
    {
      company: "Web Mobi360",
      position: "Web Developer(Intern)",
      duration: "2023-2023",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "orem ipsum dolor sit amet consectetur adipisicing elit. Odit earum asperiores ut labore alias suscipit quae doloribus quis amet nostrum.",
  items: [
    {
      institution: "Gurucharan College",
      degree: "Bsc.CS",
      bootcamp: "2020 - 2023",
    },
    {
      institution: "Gurucharan College",
      degree: "Bsc.CS",
      bootcamp: "2020 - 2023",
    },
    {
      institution: "Gurucharan College",
      degree: "Bsc.CS",
      bootcamp: "2020 - 2023",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum adipisci non tempore ab magnam voluptatem atque, molestiae nemo aliquid corrupti?",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return <motion.div initial = {{opacity: 0}} animate= {{opacity:1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <Tabs defaultValue = "experience" className= "flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value= "experience">Experience</TabsTrigger>
          <TabsTrigger value= "education">Education</TabsTrigger>
          <TabsTrigger value= "skills">Skills</TabsTrigger>
          <TabsTrigger value= "about">About Me</TabsTrigger>
        </TabsList>

        {/* content  */}
        <div className="min-h-[70vh] w-full">
          {/* experience  */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul>
                  {experience.items.map((item, index) => {
                    return <li key={index} className="bg-[#232329] h-184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className = "text-xl max-w-[260px] min-h[60px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        {<>
                          {/* // dot  */}
                          <span className = "w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                          </>
                        }
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* education  */}
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul>
                  {education.items.map((item, index) => {
                    return <li key={index} className="bg-[#232329] h-184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className = "text-xl max-w-[260px] min-h[60px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        {<>
                          {/* // dot  */}
                          <span className = "w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institute}</p>
                          </>
                        }
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flexcol gap-[30px]">
              <div>
                <h3>{skills.title}</h3>
                <p>{skills.description}</p>
              </div>
              <ul>
                {skills.skillList.map((skill, index) => {
                  return <li></li>
                })}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="about" className="w-full">about</TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>;
};

export default Resume;
