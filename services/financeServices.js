import axios from 'axios';
import API_ENDPOINTS from '../constants/apiEndpoints.js';

class FinanceServices {
  fetchSupportedTokens = async (id) => {
    return axios.get(`${API_ENDPOINTS.TOKENS}?chainId=${id}`);
  };

  fetchQuote = async (paramsObject) => {
    return axios.get(API_ENDPOINTS.QUOTES, { params: paramsObject });
  };

  createTransaction = async (paramsObject) => {
    return axios.get(API_ENDPOINTS.PARAMS, { params: paramsObject });
  };
}

export default FinanceServices;
