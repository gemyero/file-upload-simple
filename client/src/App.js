import React from 'react';
import axios from 'axios';

function App() {
  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={async (e) => {
        const file = e.target.files[0];
        const buffer = await file.arrayBuffer();
        await axios.post('http://localhost:4040', buffer, {
          headers: {
            'Content-Type': 'application/octet-stream'
          }
        });
      }} />
    </div>
  );
}

export default App;
