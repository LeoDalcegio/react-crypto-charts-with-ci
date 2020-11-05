import axios from 'axios';

const apiKey = '5d81f89828316061fdbfb458ec0627683bb388e0fc5964369c068c136e3e35cc';

export const cryptoHttp = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data',
  headers: {
    authorization: `Apikey ${apiKey}`
  }
});