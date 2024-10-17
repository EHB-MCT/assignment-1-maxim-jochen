// apiService.js: Handles general API calls used across the app.

export const getData = async (url) => {
    const response = await fetch(url);
    return response.json();
  };