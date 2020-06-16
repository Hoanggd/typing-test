import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";

import Body from "./Body";
import Header from "./Header";
import { fetchResults } from "features/Home/resultsSlice";
import {Subtitle2} from 'components/Typography';

const Table = (props) => {
  const { className } = props;

  const results = useSelector((state) => state.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResults());
  }, [dispatch]);

  return (
    <div className={className}>
      <Header />
      {results.length ? (
        <Body results={results} />
      ) : (
        <Subtitle2 class="warning">You need to login to view history</Subtitle2>
      )}
    </div>
  );
};

Table.propTypes = {};

export default styled(Table)`
  background: ${(props) => props.theme.divider};
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  border-radius: 20px;
  padding: 1% 5%;
  min-height: 350px;

  > ${Subtitle2} {
    margin-top: 12px;
  }
`;
