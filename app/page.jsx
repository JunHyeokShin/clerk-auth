import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4">
        <Link href="https://www.clerk.com" className="text-xl text-blue-700 font-bold">
          clerk.com
        </Link>
        <p className="mb-2">
          This is a demo of Clerk authentication. Clerk is more than a "sign-in box." Integrate complete user management UIs and APIs, purpose-built for React,
          Next.js, and the Modern Web.
        </p>
      </div>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4">
        <Link href="https://www.tailwindcss.com" className="text-xl text-blue-700 font-bold">
          tailwindcss.com
        </Link>
        <p className="mb-2">
          Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and
          rotate-90 that can be composed to build any design, directly in your markup.
        </p>
      </div>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4">
        <Link href="https://api.github.com" className="text-xl text-blue-700 font-bold">
          api.github.com
        </Link>
        <p className="mb-2">Explore github repositories using Fetch API</p>
      </div>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4">
        <Link href="http://localhost:3000/api/courses" className="text-xl text-blue-700 font-bold">
          Backend API
        </Link>
        <p className="mb-2">Provide Backend API service that provide extensive courses information in web development</p>
      </div>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4">
        <Link href="https://github.com/JunHyeokShin/clerk-auth" className="text-xl text-blue-700 font-bold">
          Github Repository
        </Link>
        <p className="mb-2">github repository</p>
      </div>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4">
        <Link href="https://clerk-auth-woad.vercel.app/" className="text-xl text-blue-700 font-bold">
          Web service at vercel.com
        </Link>
        <p className="mb-2">Web service at vercel.com</p>
      </div>
      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4">
        <Link href="https://hcjdemo-six.vercel.app/" className="text-xl text-blue-700 font-bold">
          HCJ Demo Homepage
        </Link>
        <p className="mb-2">HTML, CSS, Javascript Demo website</p>
      </div>
    </>
  );
}
