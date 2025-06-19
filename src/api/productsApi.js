import axios from 'axios';
import productsData from '../data.json'; 

const API_BASE_URL = 'https://your-api-endpoint.com'; // It can be omitted if not used

export const fetchProducts = async () => {
  try {
    // In practice, this would be an API call:
    // const response = await axios.get(`${API_BASE_URL}/products`);
    // return response.data;
    
    // Temporarily simulate the API call with a 500ms delay 
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return data from a local JSON file 
    return { data: productsData };
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};