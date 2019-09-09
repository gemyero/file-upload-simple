import React from 'react';
import axios from 'axios';

function App() {
  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = async function (event) {
          const buffer = event.target.result;
          await axios.post('http://localhost:4040', buffer, {
            headers: {
              'Content-Type': 'application/octet-stream'
            }
          });
        };
        reader.readAsArrayBuffer(file);
      }} />
    </div>
  );
}

export default App;
