import axios from 'axios';
import productsData from '../data.json'; 

const API_BASE_URL = 'https://your-api-endpoint.com'; 

export const fetchProducts = async () => {
  try {
    // Temporarily simulate the API call with a 500ms delay 
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return data from a local JSON file 
    return { data: productsData };
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};