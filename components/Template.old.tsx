import Link from "next/link";
import React, { useRef } from "react";

type Props = {};

const Template = (props: Props) => {
  return (
      <div className="h-[89.1vh] w-[63vh] bg-white p-8 text-base text-slate-900">
        {/* header - Basic info, contact & profiles */}
        <div className="mb-6 flex gap-8">
          <div className="shrink-0 grow-0 basis-[60%]">
            <h2 className="text-accent mb-2 text-7xl font-semibold">
              Shinjith P R
            </h2>
            <h4 className="mb-3 text-sm font-medium text-slate-700">
              Web Developer from Kerala, India
            </h4>
            <p className="text-xs text-slate-700">
              Experienced Full Stack Developer, proficient at driving innovation
              within collaborative teams by utilizing cutting-edge technology.
              With over 1½ years of professional experience, I am looking for
              possibilities for skill development and significant contributions
              to ideas.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-xs text-slate-800">
            <Link href="mailto:shinjithkanhangad@gmail.com">
              shinjithkanhangad@gmail.com
            </Link>
            <Link href="tel:+918921345282">+91 8921345282</Link>
            <Link href="https://github.com/shinjith-dev">
              github.com/shinjith-dev
            </Link>
            <Link href="https://shinjith.dev">shinjith.dev</Link>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="shrink-0 grow-0 basis-[60%]">
            {/* Experiences  */}
            <div className="mb-5 space-y-4">
              <h4 className="text-accent font-semibold underline">
                Experience
              </h4>
              <div>
                <Link
                  href="https://www.tghtech.com/"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                >
                  <h5 className="mb-1 text-lg font-semibold">TGH Tech</h5>
                </Link>
                <p className="mb-2 text-sm">
                  <span className="font-medium">Developer</span> &middot;{" "}
                  <span className="text-xs text-slate-600">
                    December 2022 - April 2024
                  </span>
                </p>
                <p className="text-xs text-slate-700">
                  I spent over 1½ year at TGH Tech as a Frontend Web Developer,
                  crafting web interfaces for startups and mid-sized businesses.
                  This role allowed me to master coding techniques and strategic
                  approaches to web development.
                </p>
              </div>

              <div>
                <h5 className="mb-1 text-lg font-semibold">
                  IBM Developer Skills Network
                </h5>
                <p className="mb-2 text-sm">
                  <span className="font-medium">Intern</span> &middot;{" "}
                  <span className="text-xs text-slate-600">November 2022</span>
                </p>
                <p className="text-xs text-slate-700">
                  An internship that covered the fundamentals of web development
                  using Angular, certified by IBM.
                </p>
              </div>
            </div>

            {/* Education  */}
            <div className="mb-5 space-y-4">
              <h4 className="text-accent font-semibold underline">Education</h4>
              <div>
                <p className="mb-1.5 text-sm font-medium">
                  Bachelor of Technology in Computer Science
                </p>
                <Link
                  href="https://lbscek.ac.in/"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                >
                  <h5 className="mb-1 font-semibold">
                    LBS College of Engineering
                  </h5>
                </Link>
                <p className="mb-2 text-xs text-slate-600">April 2024</p>
              </div>

              <div>
                <p className="mb-1.5 text-sm font-medium">Higher studies</p>
                <h5 className="mb-1 font-semibold">JNV Kasaragod</h5>
                <p className="mb-2 text-xs text-slate-600">April 2024</p>
              </div>
            </div>

            {/* Projects  */}
            <div className="mb-5 space-y-4">
              <h4 className="text-accent font-semibold underline">Projects</h4>
              <div>
                <Link
                  href="https://pomtick.pages.dev/"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                >
                  <h5 className="mb-1 font-semibold">Pomtick</h5>
                </Link>
                <p className="text-xs text-slate-700">
                  Pomtick is a pomodoro timer app that works across multiple
                  platforms. Designed to improve productivity of completing
                  task; with a classy themeable interface.
                </p>
              </div>
              <div>
                <Link
                  href="https://github.com/shinjith-dev/academic-ai"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                >
                  <h5 className="mb-1 font-semibold">Academic AI</h5>
                </Link>
                <p className="text-xs text-slate-700">
                  An AI assistant that focuses on assigning tasks for pupils to
                  complete based on the curriculum. It effortlessly improves
                  students&apos; performance by lowering stress and providing
                  appropriate time periods for homework, exam preparation, etc.
                </p>
              </div>
              <div>
                <Link
                  href="https://movie-loft.netlify.app/"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                >
                  <h5 className="mb-1 font-semibold">Movie Loft</h5>
                </Link>
                <p className="text-xs text-slate-700">
                  Movie Loft is a web-based movie database client with a minimal
                  user interface. It can be useful to obtain information about
                  movies, television shows, and their specifics.
                </p>
              </div>
            </div>
          </div>

          {/* Skills  */}
          <div>
            <div className="mb-5 space-y-4">
              <h4 className="text-accent font-semibold underline">Skills</h4>
              <div>
                <h5 className="mb-1.5 text-sm font-semibold">
                  Programming Languages
                </h5>
                <p className="text-xs text-slate-700">
                  JavaScript, TypeScript, C, HTML, CSS, Java, Python, Bash
                </p>
              </div>
              <div>
                <h5 className="mb-1.5 text-sm font-semibold">
                  Libraries & Frameworks
                </h5>
                <p className="text-xs text-slate-700">
                  Next.js, React, React Native, Tauri, Electronjs, NodeJs,
                  Docusaurus, Material UI, Tailwind, Bootstrap
                </p>
              </div>

              <div>
                <h5 className="mb-1.5 text-sm font-semibold">
                  Tools & Platforms
                </h5>
                <p className="text-xs text-slate-700">
                  Git, Github, Netlify, Render, AWS Amplify, Cloudflare
                </p>
              </div>
            </div>

            {/* Soft skills  */}
            <div className="mb-5 space-y-4">
              <h4 className="text-accent font-semibold underline">
                Soft Skills
              </h4>
              <ul className="flex flex-col gap-1 text-sm font-medium text-slate-700">
                <li>
                  <p>Designing</p>
                </li>
                <li>
                  <p>Problem solving</p>
                </li>
                <li>
                  <p>Creative thinking</p>
                </li>
                <li>
                  <p>Observation</p>
                </li>
              </ul>
            </div>

            {/* Language proficiency  */}
            <div className="mb-5 space-y-4">
              <h4 className="text-accent font-semibold underline">
                Language Proficiency
              </h4>
              <ul className="flex flex-col gap-1 text-sm font-medium text-slate-700">
                <li>
                  <p>English</p>
                </li>
                <li>
                  <p>Malayalam</p>
                </li>
                <li>
                  <p>Hindi</p>
                </li>
              </ul>
            </div>

            {/* Interests  */}
            <div className="mb-5 space-y-4">
              <h4 className="text-accent font-semibold underline">Interests</h4>
              <p className="text-sm text-slate-700">
                Art, traveling, novels & stories, designs, movies
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Template;
