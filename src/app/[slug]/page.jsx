"use client";
import React from "react";
import { courseDetails } from "../data";
import { FaClock, FaLayerGroup  } from "react-icons/fa";
import Link from "next/link";

const page = ({ params }) => {
  const { slug } = React.use(params);
  const course = courseDetails.find((course) =>
    course.title.toLowerCase().includes(slug.toLowerCase())
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
      <div className="flex items-center justify-center w-[100%] min-h-screen">
        <div className="bg-[#2C3444] p-6 rounded-md space-y-4 w-[630px]">
           <h1 className="text-4xl text-amber-500 text-center">{course.title}</h1>
           <div className="flex items-center justify-center gap-3">
            <span className="inline-flex gap-2 items-center  bg-[#227BFE] py-2 px-3 rounded-md"><FaClock/> {course.duration} </span>
            <span className="inline-flex gap-2 items-center  bg-[#227BFE] py-2 px-3 rounded-md"><FaLayerGroup /> {course.level} </span>
           </div>
           <h1 className="text-3xl text-center font-medium">Projects You Can Build:</h1>
           <div className="bg-[#444B5C] py-2 rounded-lg space-y-3">
              {course.projects.map((project,index)=>(
                <p key={index} className="text-center text-lg"> {project.title}</p>
              ))}
           </div>

           <Link href='/' className="w-full flex items-center justify-center">
            <button className="cursor-pointer border border-amber-500 px-4 py-2 rounded hover:bg-amber-500 hover:text-black text-lg transition-all duration-500">Back to Course</button>
            </Link>
           
        </div>
      </div>
    </div>
  );
};

export default page;
