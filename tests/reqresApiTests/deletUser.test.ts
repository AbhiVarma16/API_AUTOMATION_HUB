import axios from 'axios';
import { defaultHeaders } from '../../utils/headers';
import { API_URLS } from '../../utils/config';

test('Delete user and try to fetch again', async () => {
  const response = await axios.delete(`${API_URLS.REQRES}/users/2`, { headers: defaultHeaders });
  console.log('Delete Status:', response.status);
  expect(response.status).toBe(204);

  const response1 = await axios.get(`${API_URLS.REQRES}/users/2`, { headers: defaultHeaders });
  console.log(response1.data.data);
});
