import axios, { AxiosResponse } from 'axios';
import { API_URLS } from '../../utils/config';
import { defaultHeaders } from '../../utils/headers';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserListResponse {
  data: User[];
}

test('Get list of users', async () => {
  const response: AxiosResponse<UserListResponse> = await axios.get(`${API_URLS.REQRES}/users?page=2`, { headers: defaultHeaders });
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data.data)).toBe(true);
  
  console.log('List of Users:');
  response.data.data.forEach((user, index) => {
    console.log(`${index + 1}. ${user.first_name} ${user.last_name} - ${user.email}`);
  });
});
