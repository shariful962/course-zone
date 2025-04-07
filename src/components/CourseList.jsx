import { FaCode } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import {courses} from '@/app/data'
import Link from "next/link";

const CourseList = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-16 container mx-auto">
      <div className="pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course,index)=>(
                <div key={index} className="text-center bg-[#2E2F3F] rounded-lg py-8 space-y-8 hover:-translate-y-2.5 cursor-pointer transition-all duration-500">
                    <span className="inline-block">{course.icon}</span>
                    <h1 className="text-4xl font-medium">{course.title}</h1>
                    <Link href={`/${course.id}`}>
                    <button className="cursor-pointer border border-amber-500 px-4 py-2 rounded hover:bg-amber-500 hover:text-black text-lg transition-all duration-500">Explore Course</button>
                    </Link>
                </div>
            ))}
            
        </div>
      </div>
    </div>
  )
}

export default CourseList
