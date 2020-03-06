import React from 'react';
import './App.css';
import './components/PersonCard';
import PersonCard from './components/PersonCard';

const App = () =>
{
  return (
    <div className="App">
      <PersonCard fName = "Jane" lName = "Doe" age = {45} hairColor = "Black" />
      <PersonCard fName = "John" lName = "Smith" age = {88} hairColor = "Brown" />
      <PersonCard fName = "Millard" lName = "Fillmore" age = {50} hairColor = "Brown" />
      <PersonCard fName = "Maria" lName = "Smith" age = {62} hairColor = "Brown" />      
    </div>
  );
}

export default App;