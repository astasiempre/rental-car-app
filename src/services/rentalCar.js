import axios from 'axios';

const rentalCarInstance = axios.create({
  baseURL: 'https://65cc5b43dd519126b83e4f56.mockapi.io/api/v1/'
});
export const fetchRentalCarData = async () => {
    const { data } = await rentalCarInstance.get('/adverts');
    console.log(data)
  return data;
}