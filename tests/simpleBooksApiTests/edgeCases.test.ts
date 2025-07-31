import axios from 'axios';
import { API_URLS } from '../../utils/config';
import { generateToken } from '../../utils/tokenHelper';
import { getBookstoreAuthHeaders } from '../../utils/headers';

let headers: Record<string, string>;

beforeAll(async () => {
  const token = await generateToken('Abhishek Varma', `abhishek${Date.now()}@mail.com`);
  headers = getBookstoreAuthHeaders(token);
});

test('Place order with non-existent book ID', async () => {
  try {
    await axios.post(`${API_URLS.BOOKSTORE}/orders`, {
      bookId: 9999,
      customerName: "Ghost Book"
    }, { headers });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      expect(error.response.status).toBe(400);
      console.log("Properly handled invalid book ID");
    } else {
      throw error;
    }
  }
});

test('Get order with invalid order ID', async () => {
  try {
    await axios.get(`${API_URLS.BOOKSTORE}/orders/invalid123`, { headers });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      expect(error.response.status).toBe(404);
      console.log("Invalid order ID not found (404)");
    } else {
      throw error;
    }
  }
});

test('Cancel order with invalid ID', async () => {
  try {
    await axios.delete(`${API_URLS.BOOKSTORE}/orders/invalid123`, { headers });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      expect(error.response.status).toBe(404);
      console.log("Properly rejected deleting non-existent order");
    } else {
      throw error;
    }
  }
});
