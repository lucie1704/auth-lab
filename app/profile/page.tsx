'use client';

import { ExtendedSession } from '@/src/lib/types/next-auth';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Profile() {
  const { data: session } = useSession() as { data: ExtendedSession };

  const [repos, setRepos] = useState([]);
  const [githubUsername, setGithubUsername] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session || !session.accessToken) {
      setLoading(false);
      return;
    }

    const fetchRepos = async () => {
      try {
        // 1. Get the GitHub username
        const res = await fetch('https://api.github.com/user', {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });
        const userData = await res.json();
        setGithubUsername(userData.login);

        const repoRes = await fetch(
          `https://api.github.com/users/${userData.login}/repos`,
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );
        const reposData = await repoRes.json();
        setRepos(reposData);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }

      setLoading(false);
    };

    fetchRepos();
  }, [session]);

  if (!session) {
    return <div>You are not signed in.</div>;
  }

  return (
    <div className="flex justify-center items-center my-16">
      <div className="max-w-md w-full text-gray-900 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 flex items-center space-x-6">
          <img
            className="w-20 h-20 rounded-full border-2 border-gray-300"
            src={session?.user?.image || 'default.png'}
            alt="Profile Picture"
          />
          <div>
            <h2 className="text-xl font-semibold">{session?.user?.name}</h2>
            <p>{session?.user?.email}</p>
          </div>
        </div>

        {/* GITHUB LAYOUT */}
        <div className="p-6">
          <div className="flex items-center">
            <FaGithub className="mr-2" />
            <p>Vous êtes connecté via GitHub</p>
          </div>

          <h3 className="text-lg font-semibold mt-4">
            {githubUsername ?? ''}'s Repositories
          </h3>
          {loading ? (
            <p>Loading repositories...</p>
          ) : repos.length === 0 ? (
            <p>No repositories found.</p>
          ) : (
            <ul className="mt-4 space-y-2">
              {repos.map(repo => (
                <li key={repo.id} className="text-gray-700">
                  {repo.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
