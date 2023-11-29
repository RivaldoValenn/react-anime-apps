export const fetchData = async ({ path, params }) => {
  try {
    const queryParams = new URLSearchParams(params).toString();
    const url = `https://api.jikan.moe/v4/${path}${queryParams ? `?${queryParams}` : ''}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    throw error;
  }
};



export const searchData = async (q) => {
  try {
    const url = await fetchData(`https://api.jikan.moe/v4/anime?q=${q}`);
    return url;
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    throw error;
  }
}