import axios from 'axios';


const API_KEY = '51b79f43073a680f4585b83d0347822f';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async(city,country) => {
       try {
              let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
              return response.data;
       } catch (error) {
              console.log('erroe while calling api', error.message);
              return error.responses;
       }
}