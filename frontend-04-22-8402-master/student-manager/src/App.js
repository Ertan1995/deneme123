import { useState } from 'react';
import './App.css';

const App = () => {

  const [firstName, stateFirstName] = useState();
  const [lastName, stateLastName] = useState();
  const [age, stateAge] = useState();

  const [firstNameInput, stateFirstNameInput] = useState();
  const [lastNameInput, stateLastNameInput] = useState();
  const [ageInput, stateAgeInput] = useState();


  return (
    <main className="app">
      <div className='student-form-text'>
        <h1>Student Form</h1>
      </div>
      <div className='form'>
        <input type="text" onChange={(event) => (stateFirstNameInput(event.target.value))} placeholder='Lütfen adınızı giriniz' value={stateFirstName} />
        <input type="text" onChange={(event) => (stateLastNameInput(event.target.value))} placeholder='Lütfen soyadınızı giriniz' value={stateLastName} />
        <input type="text" onChange={(event) => (stateAgeInput(event.target.value))} placeholder='Lütfen yaşınızı giriniz' value={stateAge} />
      </div>
      <div className='gonder-buton'>
        <button onClick={gonder}>GÖNDER</button>

      </div>

      <div className='List'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </main>
  );
}

export default App;
