import React, { useState } from 'react';

function Details1({ field1, setField1, field2, setField2, handleSubmit }) {
  return (
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
  );
}

function Details2({ field3, setField3, field4, setField4, handleSubmit2 }) {
  return (
    <form onSubmit={handleSubmit2}>
      <div>
        <label>
          Field 3:
          <input
            type="text"
            value={field3}
            onChange={e => setField3(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Field 4:
          <input
            type="text"
            value={field4}
            onChange={e => setField4(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
}

function DetailsPage() {
  const [activeTab, setActiveTab] = useState('details1');
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [field4, setField4] = useState('');

  const handleSubmit1 = (e) => {
    e.preventDefault();
    alert(`Details 1:\nField 1: ${field1}\nField 2: ${field2}`);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    alert(`Details 2:\nField 1: ${field3}\nField 2: ${field4}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>DETAILS</h2>
        <div className="details-tabs">
          <button
            type="button"
            className={activeTab === 'details1' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('details1')}
          >
            Details 1
          </button>
          <button
            type="button"
            className={activeTab === 'details2' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('details2')}
          >
            Details 2
          </button>
        </div>
        {activeTab === 'details1' ? (
          <Details1
            field1={field1}
            setField1={setField1}
            field2={field2}
            setField2={setField2}
            handleSubmit={handleSubmit1}
          />
        ) : (
          <Details2
            field3={field3}
            setField3={setField3}
            field4={field4}
            setField4={setField4}
            handleSubmit2={handleSubmit2}
          />
        )}
      </header>
    </div>
  );
}

export default DetailsPage;