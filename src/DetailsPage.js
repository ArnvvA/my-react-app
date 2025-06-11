import React, { useState } from 'react';

function DetailsPage() {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Field 1: ${field1}\nField 2: ${field2}`);
    // Add your logic here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>DETAILS</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Field 1:
              <input
                type="text"
                value={field1}
                onChange={e => setField1(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Field 2:
              <input
                type="text"
                value={field2}
                onChange={e => setField2(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </header>
    </div>
  );
}

export default DetailsPage;