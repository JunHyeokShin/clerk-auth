import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const username = "JunHyeokShin";

async function fetchRepo(name) {
  const url = `https://api.github.com/repos/${username}/${name}`;
  const response = await fetch(url);
  const repo = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <div>
      <h3 className="text-xl font-bold dark:text-white">
        <Link href={repo.html_url}>{repo.name}</Link>
      </h3>
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
    </div>
  );
};

export default Repo;
