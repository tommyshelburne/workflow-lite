import { useState, useEffect } from 'react';
import { getWorkItems, createWorkItem } from './services/api';
import './App.css';

function App() {
  const [workItems, setWorkItems] = useState([]);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getWorkItems()
      .then(setWorkItems)
      .catch((err) => setError(err.message));
  }, []);

  async function handleCreate(e) {
    e.preventDefault();
    try {
      const newItem = await createWorkItem(title, description);
      setWorkItems((prev) => [newItem, ...prev]);
      setTitle('');
      setDescription('');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="container">
      <h1>WorkFlow Lite</h1>

      <form className="create-form" onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {error && <p className="error">{error}</p>}

      <ul className="work-item-list">
        {workItems.map((item) => (
          <li key={item.id} className="work-item">
            <div className="work-item-title">{item.title}</div>
            {item.description && (
              <div className="work-item-description">{item.description}</div>
            )}
            <div className="work-item-status">{item.status}</div>
          </li>
        ))}
        {workItems.length === 0 && !error && (
          <li className="empty">No work items yet.</li>
        )}
      </ul>
    </div>
  );
}

export default App;
