// import logo from './logo.svg';
import {useState} from 'react';
import SkillList from "./SkillList"
import NewSkillForm from "./NewSkillForm"
import './App.css';

function App() {
  const [skills, setSkills] = useState([
    {name: "HTML", level: 5},
    {name: "CSS", level: 3},
    {name: "Javascript", level: 4},
    {name: "Python", level: 2},
  ]);
  
  function handleAddSkill(newSkills){
    setSkills((skills) => [...skills, newSkills])
  }

  return (
    <div className="App">
     <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>
      <NewSkillForm handleAddSkill={handleAddSkill}/>
    </div>
  );
}

export default App;
