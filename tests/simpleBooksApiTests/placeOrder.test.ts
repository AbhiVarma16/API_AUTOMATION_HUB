import axios, { AxiosResponse } from 'axios';
import { generateToken } from '../../utils/tokenHelper';
import { getBookstoreAuthHeaders } from '../../utils/headers';
import { API_URLS } from '../../utils/config';

let headers: Record<string, string>;

interface OrderResponse {
  created: boolean;
  orderId: string;
  bookId: number;
  customerName: string;
}


beforeAll(async () => {
  const token = await generateToken('Abhishek Varma', `abhishek${Date.now()}@mail.com`);
  headers = getBookstoreAuthHeaders(token);
});

test('Place a valid book order', async () => {
  const response: AxiosResponse<OrderResponse> = await axios.post(`${API_URLS.BOOKSTORE}/orders`, {
    bookId: 1,
    customerName: `Abhishek Varma ${Date.now()}`
  }, { headers });

  expect(response.status).toBe(201);
  expect(response.data).toHaveProperty('orderId');

  console.log("Order placed successfully. Order ID:", response.data.orderId);
  console.log(JSON.stringify(response.data, null, 2));
});
