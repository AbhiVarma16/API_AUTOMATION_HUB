import axios from 'axios';
import { API_URLS } from '../../utils/config';
import { getBookstoreAuthHeaders } from '../../utils/headers';
import { generateBookstoreToken } from '../../utils/generateToken';

let token: string;

beforeAll(async () => {
  const name = 'Abhishek Varma';
  const email = `abhishek${Date.now()}@test.com`;
  token = await generateBookstoreToken(name, email);
});

test('Create and then cancel an order', async () => {
  const headers = getBookstoreAuthHeaders(token);
  // Step 1: Create order
  const createResponse = await axios.post(`${API_URLS.BOOKSTORE}/orders`, {
    bookId: 1,
    customerName: `Abhishek Varma ${Date.now()}`
  }, { headers});

  expect(createResponse.status).toBe(201);
  const newOrderId = createResponse.data.orderId;

  // Step 2: Cancel the order
  const cancelResponse = await axios.delete(`${API_URLS.BOOKSTORE}/orders/${newOrderId}`, { headers });
  expect(cancelResponse.status).toBe(204);

  console.log(`Order ${newOrderId} cancelled successfully.`);
});

