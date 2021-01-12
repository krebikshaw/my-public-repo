const BASE_URL = 'https://api.github.com/users/krebikshaw/repos';

const getReposAPI = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      // Authorization: 'token b158363e582e00aa4a76f8b6827ba0d3a9db0367',
      'content-type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
    },
  }).then((res) => res.json());
};

export { getReposAPI };
