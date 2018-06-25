import React from "react";
import StatsFollowers from "./StatsFollowers";
import StatsFollowing from "./StatsFollowing";
import StatsTweets from "./StatsTweets";
import { globalStyles } from "./App"

function IdStats(){
  const idStatsStyles = {
    display: "flex",
    justifyContent: "space-between"
  }

  return(
    <ul style={globalStyles}>
      <li><StatsTweets/></li>
      <li><StatsFollowing/></li>
      <li><StatsFollowers/></li>
    </ul>
  );
}

export default IdStats;
