const BASE_URL = 'http://localhost:5126/api';

export async function getWorkItems() {
  const res = await fetch(`${BASE_URL}/workitems`);
  if (!res.ok) throw new Error('Failed to fetch work items');
  return res.json();
}
