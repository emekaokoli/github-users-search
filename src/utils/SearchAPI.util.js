const api = 'https://api.github.com';

const headers = {
  Accept: 'application/json',
  Authorization: process.env.REACT_APP_GITHUB_TOKEN,
};

export const searchUsers = (query, page, per_page) =>{
return fetch(
  `${api}/search/users?q=${query}&type:users&since=${page}&per_page=${per_page}`,
  {
    ...headers,
  }
);
}
// parse the response headers and return next page, last page, and first page and last page
export function parseLinkHeader(headers) {
  if (!headers || !headers.length) {
    return {};
  }

  const links = {};
  headers.split(',').forEach(header => {
    const parts = header.split(';');
    const url = parts[0].replace(/<(.*)>/, '$1').trim();
    const name = parts[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  });

  return links;
}

export const fetchUser = (username) =>
  fetch(`${api}/users/${username}`, {
    ...headers,
  });