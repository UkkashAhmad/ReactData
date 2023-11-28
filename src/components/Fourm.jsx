import { useState } from "react";
import React from 'react';

function Fourm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [school, setSchool] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleSchool = (e) => {
    setSchool(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleSumbit = () => {
    console.log(name, school, age, gender, city);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <div style={styles.formContainer}>
      <label style={styles.label}>Name</label>
      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Enter Name"
        style={styles.input}
      />
      <br />

      <label style={styles.label}>Age</label>
      <input
        type="number"
        value={age}
        onChange={handleAge}
        placeholder="Enter Age"
        style={styles.input}
      />
      <br />

      <label style={styles.label}>School</label>
      <input
        type="text"
        value={school}
        onChange={handleSchool}
        placeholder="Enter School"
        style={styles.input}
      />
      <br />

      <label style={styles.label}>Select Gender</label>
      <br />

      <label htmlFor="Male" style={styles.radioButtonLabel}>
        Male
      </label>
      <input
        type="radio"
        name="gender"
        value="male"
        onChange={handleGender}
        style={styles.radioButton}
      />
      <label htmlFor="Female" style={styles.radioButtonLabel}>
        Female
      </label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked = {true}
        onChange={handleGender}
        style={styles.radioButton}
      />
      <br />

      <label style={styles.label}>City</label>
      <select
        name="city"
        onChange={handleCity}
        value={city}
        style={styles.select}
      >
        <option value="LHR">Lahore</option>
        <option value="RWP">Rawalpindi</option>
        <option value="ISB">Islamabad</option>
        <option value="SRG">Sargodha</option>
      </select>

      <button onClick={handleSumbit} style={styles.submitButton}>
        Submit
      </button>
    </div>
  );
}

const styles = {
  formContainer: {
    maxWidth: '400px',
    margin: 'auto',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    boxSizing: 'border-box',
  },
  radioButtonLabel: {
    marginRight: '10px',
  },
  radioButton: {
    marginRight: '5px',
  },
  select: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    boxSizing: 'border-box',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Fourm;
