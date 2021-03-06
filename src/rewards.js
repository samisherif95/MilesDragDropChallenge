import React from "react";
import { useDrag } from "react-dnd";

export const Items = {
  REWARD: "reward",
};

function Rewards({ name, idx, changeRewardPos, createID, catID }) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: Items.REWARD },
    begin: (monitor) => ({
      type: Items.REWARD,
      idx: idx,
      name: name,
      catID: catID,
      createID: createID,
    }),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className={`reward-item-${name}`}
      ref={drag}
      style={{
        opacity: isDragging ? 0.5: 1,
        fontWeight: "bold",
        cursor: "move",
      }}
    >
      {name}
      {
        changeRewardPos ? 
          <span className="deletebutton" onClick={() => changeRewardPos(createID)}> X</span>
        : null
      }
    </div>
  );
}

export default Rewards;
