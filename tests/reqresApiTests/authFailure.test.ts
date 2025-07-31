import axios from 'axios';
import { API_URLS } from '../../utils/config';
import { defaultHeaders } from '../../utils/headers';

test('Login fails with missing password', async () => {
  await expect(
    axios.post(
      `${API_URLS.REQRES}/login`,
      { email: 'eve.holt@reqres.in' },
      { headers: defaultHeaders }
    )
  ).rejects.toMatchObject({
    response: {
      status: 400,
      data: {
        error: 'Missing password',
      },
    },
  });
});
