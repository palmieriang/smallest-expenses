const url = `http://www.mocky.io/v2/5c62e7c33000004a00019b05`;

export const fetchExpenses = () => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Network error");
    }
    return response.json();
  });
};
