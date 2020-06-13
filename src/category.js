import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from './rewards';

function Category({name, index, showRewards, changeRewardPos, createNewRewardObject}) {
  console.log(createNewRewardObject);
  const [collectedProps, drop] = useDrop({
    accept: ItemTypes.REWARD,
    //checks if there is a category Id for the reward(item) and if yes then changes the 
    // category column if no creates a new reward(item) in that category column
    drop: (item, monitor) => {
      item.catID !== undefined ? changeRewardPos(item.createID, index) : createNewRewardObject(index, item);
    }
  });
  return (
    <div className="category-item">
      <div className="category-name">{name}</div>
      <div className="category-lane" ref={drop}>
        {showRewards(index)}
      </div>
    </div>
  );
}

export default Category;
