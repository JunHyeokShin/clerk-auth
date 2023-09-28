import Link from "next/link";
import React from "react";

// async function fetchCourses() {
//   const response = await fetch("http://localhost:3000/api/courses");
//   const courses = response.json();

//   return courses;
// }

const Courses = async ({ courses }) => {
  // const courses = await fetchCourses();

  return (
    <div className="grid-1">
      {courses?.map((course) => (
        <div key={course.id} className="bg-blue-200 p-4 m-4 rounded-lg dark:bg-blue-950">
          <h2 className="text-xl font-bold dark:text-white">{course.title}</h2>
          <small className="dark:text-gray-300">Level: {course.level}</small>
          <p className="mb-4 dark:text-gray-300">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg mb-4 dark:text-gray-300 dark:bg-blue-900 dark:hover:bg-blue-800"
          >
            Go to Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
