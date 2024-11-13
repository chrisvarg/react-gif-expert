export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=sHWOpUtzDNMHxbZfNdH5IB70J66Yz12O&q=${category}&limit=10`;
  try {
    const resp = await fetch(url);
    const { data } = await resp.json();
    // id, title, url:images.downsized_medium.url

    const gifs = data.map(gif => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url
    }))
  //   console.log("data:", data);
    return gifs;
    
  } catch (error) {
    console.error(error);
  }
}