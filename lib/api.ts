const API_BASE_URL =
  process.env.API_BASE_URL || 'https://smartwaytechnoway.com/api';
// const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:5000/api';


// ✅ GET ALL DATA (FIXED CACHE ISSUE)
export const getData = async (endpoint: string) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    next: { revalidate: 10 }, // 🔥 auto refresh every 10 sec
    // OR use: cache: 'no-store' (for instant update)
  });

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
};


// ✅ GET BY ID (also fix cache here)
export const getById = async (endpoint: string, id: string) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
    next: { revalidate: 10 }, // 🔥 important
  });

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
};


// ✅ POST JSON DATA (no cache)
export const submitData = async (endpoint: string, data: any) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    cache: 'no-store', // ✅ always no cache
  });

  if (!response.ok) throw new Error("Failed to submit data");

  return response.json();
};


// ✅ POST FORM DATA (no cache)
export const submitFormData = async (endpoint: string, formData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: 'POST',
    body: formData,
    cache: 'no-store', // ✅ important
  });

  if (!response.ok) throw new Error("Failed to submit data");

  return response.json();
};