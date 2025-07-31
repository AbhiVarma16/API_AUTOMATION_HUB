import axios from 'axios';
import { generateToken } from '../../utils/tokenHelper';
import { getBookstoreAuthHeaders } from '../../utils/headers';
import { API_URLS } from '../../utils/config';

let headers: Record<string, string>;

beforeAll(async () => {
  const token = await generateToken('Abhishek Varma', `abhishek${Date.now()}@mail.com`);
  headers = getBookstoreAuthHeaders(token);
});

test('Place order without token', async () => {
  try {
    await axios.post(`${API_URLS.BOOKSTORE}/orders`, {
      bookId: 1,
      customerName: "Abhishek Varma"
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      expect(error.response.status).toBe(401);
      console.log("Unauthorized request blocked as expected");
    } else {
      throw error;
    }
  }
});

test('Place order with missing bookId', async () => {
  try {
    await axios.post(`${API_URLS.BOOKSTORE}/orders`, {
      customerName: "Abhishek Varma"
    }, {
      headers
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      expect(error.response.status).toBe(400);
      console.log("Bad request due to missing bookId handled");
    } else {
      throw error;
    }
  }
});

test('Place order with invalid token', async () => {
  try {
    await axios.post(`${API_URLS.BOOKSTORE}/orders`, {
      bookId: 1,
      customerName: "Abhishek Varma"
    }, {
      headers: { Authorization: `Bearer 1234` }
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      expect(error.response.status).toBe(401);
      console.log("Invalid token rejected");
    } else {
      throw error;
    }
  }
});
