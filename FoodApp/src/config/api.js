import axios from 'axios';

import {API_ADDRESS} from '@env';

const baseURL = API_ADDRESS || '/';

const Axios = axios.create({
  baseURL,
});

export default Axios;
