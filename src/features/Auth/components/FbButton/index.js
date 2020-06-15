import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as FbIcon } from "assets/images/fb-icon.svg";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useDispatch } from "react-redux";

import { fetchFbUser } from "../../userSlice";

const FbButton = (props) => {
  const { className } = props;
  const dispatch = useDispatch();

  const responseFacebook = async (response) => {
    dispatch(fetchFbUser(response));
  };

  return (
    <FacebookLogin
      appId="949254395526144"
      callback={responseFacebook}
      fields="name,email,picture.type(large)"
      render={(renderProps) => (
        <button onClick={renderProps.onClick} className={className}>
          <FbIcon />
          <span>| Login via Facebook</span>
        </button>
      )}
    />
  );
};

export default styled(FbButton)`
  background: ${({ theme }) => theme.facebook};
  border: none;
  border-radius: 6px;
  padding: 12px 12px;

  display: flex;
  justify-content: center;

  color: rgba(255, 255, 255, 0.85);

  display: flex;
  align-items: center;

  svg {
    margin-right: 6px;
    opacity: 0.85;
  }

  cursor: pointer;
`;
