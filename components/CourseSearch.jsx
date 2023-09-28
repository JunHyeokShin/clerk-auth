"use client";

import { useState } from "react";

const CourseSearch = ({ getSearchResult }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResult(courses);
  };

  return (
    <form onSubmit={handleSubmit} className="m-2">
      <input
        type="text"
        placeholder="Search courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-red-100 py-2 px-4 m-2 rounded-lg dark:bg-slate-500 dark:text-gray-300"
      />
      <button type="submit" className="p-2 m-2 text-white bg-blue-700 hover:bg-blue-800 rounded-lg dark:bg-blue-900 dark:hover:bg-blue-800">
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
