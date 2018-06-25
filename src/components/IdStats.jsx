import React from "react";
import StatsFollowers from "./StatsFollowers";
import StatsFollowing from "./StatsFollowing";
import StatsTweets from "./StatsTweets";
import { globalStyles } from "./App"

function IdStats(){
  const idStatsStyles = {
    margin: 0,
    padding: 0,
    width: "100%",
    listStyle: 'none',
    display: "flex",
    alignItems: 'flex-end',
    justifyContent: "space-around",
    paddingTop: 20
  }

  return(
    <ul style={idStatsStyles}>
      <StatsTweets/>
      <StatsFollowing/>
      <StatsFollowers/>
    </ul>
  );
}

export default IdStats;
