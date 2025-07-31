import axios, { AxiosResponse } from 'axios';
import { API_URLS } from '../../utils/config';
import { defaultHeaders } from '../../utils/headers';


interface UpdateUserResponse {
  first_name?: string;
  last_nam?: string;
  updatedAt: string;
}

test('Update user with PUT', async () => {
  const response: AxiosResponse<UpdateUserResponse> = await axios.put(
    `${API_URLS.REQRES}/users/2`,
    {
      first_name: 'xxxx',
      last_nam: 'SDET',
    },
    { headers: defaultHeaders }
  );

  console.log('Updated User:', response.data);
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('updatedAt');
});
