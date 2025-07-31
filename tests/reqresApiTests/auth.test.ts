import axios from "axios";
import { API_URLS } from "../../utils/config";
import { defaultHeaders } from '../../utils/headers';

test("Login API returns token", async () => {
  const response = await axios.post(
    `${API_URLS.REQRES}/login`,
    {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
    { headers: defaultHeaders }
  );

  console.log("API Response:", response.data);
  expect(response.status).toBe(200);
  expect(response.data.token).toBeDefined();
});
