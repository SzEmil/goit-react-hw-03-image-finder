import axios from 'axios';

export const fetchPhoto = async searchQuery => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=1&key=31998219-af28b4c3092b69ebd942adff0&image_type=photo&orientation=horizontal&per_page=12`
  );
 
  return response.data.hits;
};
