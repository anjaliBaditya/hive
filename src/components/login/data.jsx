import React, { useEffect, useState } from 'react';

const sampleData = [
  {
    id: 1,
    name: 'react',
    html_url: 'https://github.com/facebook/react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    stargazers_count: 171000,
    owner: {
      login: 'facebook',
    },
  },
  {
    id: 2,
    name: 'vue',
    html_url: 'https://github.com/vuejs/vue',
    description: '🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
    stargazers_count: 183000,
    owner: {
      login: 'vuejs',
    },
  },
  // Add more sample repos if needed
];

const StarredRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setRepos(sampleData);
      setLoading(false);
    }, 1000);
  }, [username]);

  if (loading) {
    return <div className="text-center text-3xl p-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-3xl p-10 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-10">Starred Repositories of {username}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{repo.name}</h2>
            <p className="text-gray-700 mb-4">{repo.description}</p>
            <a href={repo.html_url} className="text-blue-500 hover:underline">
              {repo.html_url}
            </a>
            <p className="text-gray-500 mt-2">⭐ {repo.stargazers_count} stars</p>
            <p className="text-gray-500">Owner: {repo.owner.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <StarredRepos username="exampleUser" />
    </div>
  );
};

export default App;