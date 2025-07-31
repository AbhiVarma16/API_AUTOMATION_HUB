import axios from 'axios';
import { API_URLS } from '../../utils/config';
import { generateToken } from '../../utils/tokenHelper';
import { getBookstoreAuthHeaders } from '../../utils/headers';

let headers: Record<string, string>;

interface Order {
  id: string;
  bookId: number;
  customerName: string;
}

beforeAll(async () => {
  const token = await generateToken('Abhishek Varma', `abhishek${Date.now()}@mail.com`);
  headers = getBookstoreAuthHeaders(token);
});

test('Get list of user orders', async () => {
  const response = await axios.get<Order[]>(`${API_URLS.BOOKSTORE}/orders`, { headers });

  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);

  console.log("Orders List:");
  response.data.forEach((order, index) => {
    console.log(`Order ${index + 1}:\n  ID: ${order.id}\n  BookID: ${order.bookId}\n  Customer: ${order.customerName}\n`);
  });
});
