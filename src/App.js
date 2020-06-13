import React from 'react';
import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Category from './category';
import Rewards from './rewards';

function App() {
  const rewards = ["R1", "R2", "R3", "R4", "R5"];
  const categories = ["C1", "C2", "C3", "C4", "C5"];
  // using hooks makes it simpler so no need for writing classes to set state
  const [initializedRewards, setInitializedRewards] = useState(() => {
    let savedrewards = window.localStorage.getItem("savedRewards") || [];
    if (savedrewards.length !== 0) {
      savedrewards = JSON.parse(savedrewards);
    }
    return savedrewards;
  });
  const [AmountOfRewards, setAmountOfRewards] = useState(() => {
    let savedAmountOfRewards = window.localStorage.getItem("numberRewards") || 0;
    if (savedAmountOfRewards !== 0) {
      savedAmountOfRewards = JSON.parse(savedAmountOfRewards);
    }
    return savedAmountOfRewards;
  });

  useEffect(() => {
    //must serialize(turn into a string) the object or array for storage, toString method also works
    window.localStorage.setItem("savedRewards", JSON.stringify(initializedRewards));
    window.localStorage.setItem("numberReward", JSON.stringify(AmountOfRewards));
  }, [initializedRewards, AmountOfRewards]); //useEffect will happen with any change of these two variables

  function showRewards(catID) {
    console.log(initializedRewards);
    return initializedRewards.map((reward, idx) => {
      if (reward.catID === catID) {
        return (
          <Rewards
            key={idx}
            name={reward.name}
            createID={reward.createID}
            idx={reward.idx}
            catID={catID}
            changeRewardPos={changeRewardPos}
          />
        );
      }
    });
  }

  //Not fully implemented as of now removes last added reward
  function undoReward(){
  	let currRewards = Object.assign([], initializedRewards);
  	currRewards.pop()
  	setInitializedRewards(currRewards)
  }

  // creates new reward in specific category depending on ID and item is the current rewward
  function createNewRewardObject(categoryIdx, item) {
    let currRewards = Object.assign([], initializedRewards);// all the curr rewards 
    let rewardID = item.idx;

    // checks if any of the previous rewards placed are the same for that category
    //if not then creates new reward
    if (
      !currRewards.some((reward) => {
        return reward.idx === rewardID && reward.catID === categoryIdx;
      })
    ) {
      let newReward = {
        name: item.name,
        idx: item.idx,
        createID: AmountOfRewards + 1,
        catID: categoryIdx,
      };

      currRewards.push(newReward);
      setInitializedRewards(currRewards);
      setAmountOfRewards(AmountOfRewards + 1);
    }
  }

  //updates the position of the reward if changed
  function changeRewardPos(createID, categoryIdx) {
    let currRewards = Object.assign([], initializedRewards);
    let rewardIdx = currRewards.findIndex((reward) => reward.createID === createID);

    if (categoryIdx !== undefined) {
      let reward = currRewards[rewardIdx];
      //checks if we can move to chosen column if yes then reasigns the reward category ID
      //to the new category column
      if (
        !currRewards.some((item) => {
          return item.idx === reward.idx && item.catID === categoryIdx;
        })
      ) {
        console.log(reward);
        reward.catID = categoryIdx;
      }// the next else is if the reward is already found  in the category column
      else {
        return;
      }
      //this else is for the option of deleting
    } else {
      currRewards.splice(rewardIdx, 1);
    }
    //each change updates initialized rewards
    setInitializedRewards(currRewards);
  }


  return (
    <div className="App">
      <div className="table">
        <div className="rewards">
          <span className="rewardTitle">Rewards</span>
          {rewards.map((name, idx) => {
            return <Rewards key={idx} idx={idx} name={name} />;
          })}
        </div>
        <div className="categories">
          <span className="categoryTitle">Categories</span>
          <div className="categoryContent">
            {categories.map((name, idx) => {
              return (
                <Category
                  key={idx}
                  name={name}
                  index={idx}
                  showRewards={showRewards}
                  createNewRewardObject={createNewRewardObject}
                  changeRewardPos={changeRewardPos}
                />
              );
            })}
          </div>
        </div>
        <button onClick={undoReward}>UNDO</button>
      </div>
    </div>
  );
}

export default App;
