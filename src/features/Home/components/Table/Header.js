import React, { useState } from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";

import TabBtn from "./TabBtn";
import LeaderBoardIcon from "assets/images/leader-board.svg";
import WorldIcon from "assets/images/world.svg";
import Select from "components/Select";
import { fetchResults, fetchResultsById, setResults } from "features/Home/resultsSlice";

const Header = (props) => {
  const { className } = props;
  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.name);

  const showLeaderBoard = () => {
    setActiveTab(0)
    dispatch(fetchResults());
  };

  const showHistory = () => {
    setActiveTab(1)
    if (username) {
      dispatch(fetchResultsById());
    } else {
      dispatch(setResults([]))
    }
  };

  return (
    <div className={className}>
      <div className="tab-btn">
        <TabBtn onClick={showLeaderBoard} active={0 === activeTab} imgSrc={LeaderBoardIcon}>
          Leader Board
        </TabBtn>
        <TabBtn onClick={showHistory} active={1 === activeTab} imgSrc={WorldIcon}>
          History
        </TabBtn>
      </div>
    </div>
  );
};

export default styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.border};

  .tab-btn {
    > div:first-child {
      margin-right: 20px;
    }
  }

  .filter {
    display: flex;

    ${Select}:first-child {
      margin-right: 12px;
    }
  }
`;
