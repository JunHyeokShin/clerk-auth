import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Home</h1>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4 dark:bg-gray-800">
        <Link href="https://www.clerk.com" className="text-xl text-blue-700 font-bold dark:text-blue-300">
          clerk.com
        </Link>
        <p className="mb-2 dark:text-gray-300">
          This is a demo of Clerk authentication. Clerk is more than a "sign-in box." Integrate complete user management UIs and APIs, purpose-built for React,
          Next.js, and the Modern Web.
        </p>
      </div>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4 dark:bg-gray-800">
        <Link href="https://www.tailwindcss.com" className="text-xl text-blue-700 font-bold dark:text-blue-300">
          tailwindcss.com
        </Link>
        <p className="mb-2 dark:text-gray-300">
          Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and
          rotate-90 that can be composed to build any design, directly in your markup.
        </p>
      </div>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4 dark:bg-gray-800">
        <Link href="https://api.github.com" className="text-xl text-blue-700 font-bold dark:text-blue-300">
          api.github.com
        </Link>
        <p className="mb-2 dark:text-gray-300">Explore github repositories using Fetch API</p>
      </div>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4 dark:bg-gray-800">
        <Link href="http://localhost:3000/api/courses" className="text-xl text-blue-700 font-bold dark:text-blue-300">
          Backend API
        </Link>
        <p className="mb-2 dark:text-gray-300">Provide Backend API service that provide extensive courses information in web development</p>
      </div>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4 dark:bg-gray-800">
        <Link href="https://github.com/JunHyeokShin/clerk-auth" className="text-xl text-blue-700 font-bold dark:text-blue-300">
          Github Repository
        </Link>
        <p className="mb-2 dark:text-gray-300">github repository</p>
      </div>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4 dark:bg-gray-800">
        <Link href="https://clerk-auth-woad.vercel.app/" className="text-xl text-blue-700 font-bold dark:text-blue-300">
          Web service at vercel.com
        </Link>
        <p className="mb-2 dark:text-gray-300">Web service at vercel.com</p>
      </div>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4 dark:bg-gray-800">
        <Link href="https://hcjdemo-six.vercel.app/" className="text-xl text-blue-700 font-bold dark:text-blue-300">
          HCJ Demo Homepage
        </Link>
        <p className="mb-2 dark:text-gray-300">HTML, CSS, Javascript Demo website</p>
      </div>
    </>
  );
}
