const BASE_API_URL = `https://api.github.com`;

export const fetchUserApi = async (word: string) => {
  const resp = await fetch(`${BASE_API_URL}/users/${word}`);
  return await resp.json();
  /*.then((data) => {
      setUser(data);
    })*/
};
