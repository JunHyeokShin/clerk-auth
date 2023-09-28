import Link from "next/link";
import { FaStar, FaRegStar, FaCodeBranch, FaEye } from "react-icons/fa";

const username = "JunHyeokShin";

async function fetchRepos() {
  const url = `https://api.github.com/users/${username}/repos`;

  const response = await fetch(url);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  // console.log(repos);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Github repositories of {username}</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="bg-gray-100 m-4 p-4 rounded-md dark:bg-gray-800">
            <Link href={`/repos/${repo.name}`}>
              <h3 className="text-xl font-bold dark:text-white">{repo.name}</h3>
              <p className="dark:text-gray-300">{repo.description}</p>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 dark:text-gray-300">
                  <FaStar />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1 dark:text-gray-300">
                  <FaCodeBranch />
                  {repo.forks_count}
                </span>
                <span className="flex items-center gap-1 dark:text-gray-300">
                  <FaEye />
                  {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
