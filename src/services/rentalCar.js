// import axios from 'axios';

// const rentalCarInstance = axios.create({
//   baseURL: 'https://65cc5b43dd519126b83e4f56.mockapi.io/api/v1/'
// });
// export const fetchRentalCarData = async (page = 1, per_page = 12 ) => {
//   const { data } = await rentalCarInstance.get('/adverts', {
//     params: {
//       page, 
//       per_page, 
//     }
//     });
//     console.log(data)
//   return data;
// }

import axios from 'axios';

const rentalCarInstance = axios.create({
  baseURL: 'https://65cc5b43dd519126b83e4f56.mockapi.io/api/v1/'
});

export const fetchRentalCarData = async (page = 1, limit = 12) => {
  try {
    const response = await rentalCarInstance.get('/adverts', {
      params: {
        page: page, 
        limit: limit, 
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching rental car data:', error);
    throw error;
  }
};

export const fetchAllRentalCarData = async () => {
  try {
    const response = await rentalCarInstance.get('/adverts', {
     
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching rental car data:', error);
    throw error;
  }
};