import { API_URLS } from "../../utils/config";
import { defaultHeaders } from "../../utils/headers";

const axios = require("axios");

test("Print all user fields (page 2)", async () => {
  const response = await axios.get(`${API_URLS.REQRES}/users?page=1`, { headers: defaultHeaders });

  expect(response.status).toBe(200);
  const users = response.data.data;

  console.log("📋 Full User Details:\n");

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    console.log(`User ${i + 1}:`);
    console.log(`  ID        : ${user.id}`);
    console.log(`  First Name: ${user.first_name}`);
    console.log(`  Last Name : ${user.last_name}`);
    console.log(`  Email     : ${user.email}`);
    console.log(`  Avatar    : ${user.avatar}`);
    console.log("-----------------------------");
  }
});
