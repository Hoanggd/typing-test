import React from "react";
import styled from "styled-components/macro";

import TabBtn from "./TabBtn";
import LeaderBoardIcon from "assets/images/leader-board.svg";
import WorldIcon from "assets/images/world.svg";
import Select from "components/Select";

const Header = (props) => {
  const { className } = props;
  
  const handleFilter = (value) => {
    console.log(value)
  }
  const handleSort = (value) => {
    console.log(value)
  }

  return (
    <div className={className}>
      <div className="tab-btn">
        <TabBtn active imgSrc={LeaderBoardIcon}>
          Leader Board
        </TabBtn>
        <TabBtn imgSrc={WorldIcon}>Global Chanllenge</TabBtn>
      </div>
      <div className="filter">
        <Select
          fontSize="0.875rem"
          width="70px"
          height="30px"
          listItem={["Time", "Score"]}
          onClick={handleFilter}
        />
        <Select
          fontSize="0.875rem"
          width="100px"
          height="30px"
          listItem={["Ascending", "Descending"]}
          onClick={handleSort}
        />
      </div>
    </div>
  );
};

export default styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.border};

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
