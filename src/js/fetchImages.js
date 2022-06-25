import axios from 'axios';

export async function getImg(searchValue, pagination) {
  const params = new URLSearchParams({
    key: '28105456-e5cf9b64fe6b174952de01477',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    pagination,
  });

  try {
    const response = await axios({
      method: 'get',
      url: `https://pixabay.com/api/?${params}`,
    });
    return response.data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
