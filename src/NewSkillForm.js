import React from "react";
import "./NewSkillForm.css";
import {useState} from 'react';

function NewSkillForm(props) {

    const [skill, setSkill] = useState({name: "", level: 1});

    function handleChange(e) {
        setNewSkill({...NewSkillForm, [e.target.name]: e.target.valie})
    }

    function handleAdd(e) {
        e.preventDefault()
        props.handleAddSkill(newSkill)
        setNewSkill({name: "", level: 1});
    }

}


function NewSkillForm() {
  return (
    <form className="NewSkillForm" onSubmit={handleAdd}>
            <label>Skill</label>
            <input 
              name="name"
              type="text"
              placeholder="New Skill" 
              value={newSkill.name} 
              onChange={handleChange}
              required
            />
            <label>Level</label>
            <select id="level" name="level" value={newSkill.level} onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
  );
}

export default NewSkillForm;