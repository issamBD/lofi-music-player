import React from "react";
import styled from "styled-components";

const Nav = ({ libraryStatues, setLibraryStatues }) => {
  return (
    <Container>
      <h1 id="logo">Lo Fi</h1>
      <h1
        id="library"
        onClick={() => {
          setLibraryStatues(!libraryStatues);
        }}
      >
        Library
      </h1>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  width: 55%;
  margin: 0 auto;
  padding: 20px 0;
  font-size: 14px;
  color: rgb(65, 65, 65);
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
  #logo {
    float: left;
    padding-top: 5px;
  }

  #library {
    float: right;
    border: solid 2px rgb(65, 65, 65);
    padding: 5px;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: rgb(65, 65, 65);
    }
  }
`;
