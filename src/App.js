//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const touchDownHome = event => {
    setHomeScore( homeScore + 7)
  }
  const fieldGoalHome = event => {
    setHomeScore( homeScore + 3)
  }
  const touchDownAway = event => {
    setAwayScore(awayScore + 7)
  }
  const fieldGoalAway = event => {
    setAwayScore(awayScore + 3)
  }
  const resetHome = event => {
    setHomeScore(0)
  }

  const resetAway = event => {
    setAwayScore(0)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">Score: {homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">Score: {awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={touchDownHome} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={fieldGoalHome} className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick={resetHome}>Reset</button>
        </div>
        <div className="awayButtons">
          <button onClick={touchDownAway}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={fieldGoalAway}className="awayButtons__fieldGoal">Away Field Goal</button>
          <button onClick={resetAway}>Reset</button>
        </div>
      </section>
    </div>
  );
}

export default App;
