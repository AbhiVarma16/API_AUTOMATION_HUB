import axios from 'axios';
import { API_URLS } from './config';

export async function generateBookstoreToken(clientName: string, clientEmail: string): Promise<string> {
  const response = await axios.post(`${API_URLS.BOOKSTORE}/api-clients`, {
    clientName,
    clientEmail,
  });

  return response.data.accessToken;
}
