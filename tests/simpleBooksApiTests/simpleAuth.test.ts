import axios from 'axios';
import { API_URLS } from '../../utils/config';

test('Generate API token successfully', async () => {
  const response = await axios.post(`${API_URLS.BOOKSTORE}/api-clients`, {
    clientName: "Abhishek",
    clientEmail: `abhishek_${Date.now()}@example.com`
  });

  const apiKey = response.data.accessToken;
  console.log('API Key:', apiKey);

  expect(response.status).toBe(201);
  expect(apiKey).toBeDefined();
});
