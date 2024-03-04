import React from "react";
import animation from "../../public/animation.gif";
import SectionTitle from "../Shared/SectionTitle";

const About = () => {
  return (
    <div id="about" name='abouts' className="my-16 text-black ">
  
      <div className="max-w-7xl mx-auto p-4">
        <SectionTitle
          title={"About Me"}
          subText={"Details about me"}
        ></SectionTitle>

        <div className="  flex flex-wrap   md:flex-nowrap  md:items-center md:justify-center gap-12  md:mt-8 p-4">
          <div className="md:w-1/2 ">
            <img
              className="rounded-lg shadow-2xl shadow-[#040c16]"
              src={animation}
              alt=""
            />
          </div>

          <div className="text-[14px] md:text-[16px] leading-5 font-semibold opacity-90 md:w-1/2 md:leading-7 text-justify">
            <p>
              Hello! I'm Md.Jewel Rana, from Dhaka, Bangladesh. I recently
              completed a Bachelor's degree in Computer Science and Engineering
              from Southeast University.{" "}
            </p>
            <p>
              I have acquired a solid comprehension of fundamental software
              development principles and practices. My educational background,
              coupled with practical experience in constructing applications
              using MongoDB, Express.js, React, and Node.js, equips me with the
              ability to create resilient and expandable solutions.
            </p>
            <br />
            <p>
              I invest a significant amount of time in staying up-to-date with
              the latest trends and honing my skills. If you have an exciting
              project in mind, I'm all ears! Feel free to explore my resume
              below to gain a better understanding of my skills and experience.
              Let's connect and bring your project to life together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
