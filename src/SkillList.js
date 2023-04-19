import React from "react";
import SkillListItem from "./SkillListItem";

function SkillList(props) {
  return (
    <div className="SkillList">
        <ul>
            {props.skills.map((idx, skill) => (
                <SkillListItem key={idx + skill} index={idx} skill={skill} />
            ))}
        </ul>
    </div>
  );
}

export default SkillList;
