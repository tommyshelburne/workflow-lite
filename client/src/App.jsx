import { useState, useEffect } from 'react';
import { getWorkItems } from './services/api';
import './App.css';

function App() {
  const [workItems, setWorkItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWorkItems()
      .then(setWorkItems)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container">
      <h1>WorkFlow Lite</h1>

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
