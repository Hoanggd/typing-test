import React from "react";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";

import { Subtitle1 } from "../Typography";

import { setUser } from "features/Auth/userSlice";

const User = ({ className }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setUser({
      name: '',
      photoUrl: ''
    }))
  }

  return (
    <div className={className}>
      <Subtitle1>{user.name}</Subtitle1>
      <div className="img">
        <img src={user.photoUrl} alt="profile" />
      </div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default styled(User)`
  display: flex;
  align-items: center;
  margin-right: 24px;
  cursor: pointer;
  position: relative;
  padding: 12px;

  ${Subtitle1} {
    margin-right: 12px;
  }

  :hover button {
    transform: scale(1, 1);
  }

  button {
    padding: 12px 24px;
    border-radius: 6px;
    border: 1px solid ${({theme}) => theme.border };
    background: ${({theme}) => theme.modal};
    color: ${({theme}) => theme.title};
    cursor: pointer;
    transform: scale(0, 0);
    transition: .2s ease-in-out;

    position: absolute;
    right: 0;
    bottom: -40px;
    box-shadow: ${({theme}) => theme.boxShadow};

    :hover {
      background: ${({theme}) => theme.primary}
    }
  }

  .img {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    overflow: hidden;
    border: 1px solid ${({theme}) => theme.border};

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
