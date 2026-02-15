// const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:5000/api';
const API_BASE_URL = 'http://localhost:5000/api';

export const getData = async (endpoint: string) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};

export const getById = async (endpoint: string, id: string) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};

export const submitData = async (endpoint: string, data: any) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error("Failed to submit data");
  return response.json();
};
