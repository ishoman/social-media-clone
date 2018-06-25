import React from "react";
import StatsFollowers from "./StatsFollowers"
import StatsFollowing from "./StatsFollowing"
import StatsTweets from "./StatsTweets"

function IdStats(){
  return(
    <ul>
      <li><StatsTweets/></li>
      <li><StatsFollowing/></li>
      <li><StatsFollowers/></li>
    </ul>
  );
}

export default IdStats;
