export const defaultHeaders = {
  'Content-Type': 'application/json',
  'x-api-key': 'reqres-free-v1',
} as const;

export const getBookstoreAuthHeaders = (token: string) => ({
  Authorization: `Bearer ${token}`,
}) as const;

