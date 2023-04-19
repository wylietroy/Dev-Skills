import React from "react";
import "./SkillListItem.css";

function SkillListItem({skill}) {
  return (
    <div className="SkillListItem">
        <li>{skill.name}</li>
        <li className="level">Level {skill.name}</li>
    </div>
  );
}

export default SkillListItem;
