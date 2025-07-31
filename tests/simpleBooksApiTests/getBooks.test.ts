import axios from 'axios';
import { API_URLS } from '../../utils/config';

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

test('Get list of available books and validate data', async () => {
  const response = await axios.get<Book[]>(`${API_URLS.BOOKSTORE}/books`);
  const books = response.data;

  expect(Array.isArray(books)).toBe(true);
  expect(books.length).toBeGreaterThan(0);

  books.forEach((book) => {
    expect(book).toHaveProperty('id');
    expect(book).toHaveProperty('name');
    expect(book).toHaveProperty('type');
    expect(book).toHaveProperty('available');
  });

  console.log(JSON.stringify(books, null, 2));
});
