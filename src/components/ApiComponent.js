import React, { useState, useEffect } from 'react';
import axios from 'axios'; // 確保 axios 被引入

function ApiComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // 使用 useEffect 在組件掛載時執行 API 請求
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="api-section">
      <h2>API Call Example</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <ul className="api-list">
          {data.map((item) => (
            <li key={item.id} className="api-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiComponent;
