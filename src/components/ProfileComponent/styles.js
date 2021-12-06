import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .profile-avatar {
    & img {
      width: 150px;
      height: 150px;
      border-radius: 100%;
      border: 3px solid white;
    }
  }
  .profile-name {
    text-align: center;
    font-family: "Raleway", Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: bold;
  }
  .profile-desc {
    max-width: 200px;
    text-align: center;
    font-family: "Inter", Arial, Helvetica, sans-serif;
    font-size: 12px;
  }
`;
