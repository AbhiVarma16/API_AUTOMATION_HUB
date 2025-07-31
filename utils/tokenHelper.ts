import axios, { AxiosResponse } from 'axios';
import { API_URLS } from './config';

let token: string | null = null;

interface TokenResponse {
  accessToken: string;
}

export async function generateToken(clientName: string = 'Abhishek', clientEmail: string = `abhi${Date.now()}@example.com`): Promise<string> {
  if (token) return token;

  try {
    const response: AxiosResponse<TokenResponse> = await axios.post(`${API_URLS.BOOKSTORE}/api-clients`, {
      clientName,
      clientEmail
    });

    token = response.data.accessToken;
    return token;
  } catch (err: any) {
    console.error('Error generating token:', err.message);
    throw err;
  }
}
