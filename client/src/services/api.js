const BASE_URL = 'http://localhost:5126/api';

export async function getWorkItems() {
  const res = await fetch(`${BASE_URL}/workitems`);
  if (!res.ok) throw new Error('Failed to fetch work items');
  return res.json();
}

export async function createWorkItem(title, description) {
  const res = await fetch(`${BASE_URL}/workitems`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description }),
  });
  if (!res.ok) throw new Error('Failed to create work item');
  return res.json();
}
