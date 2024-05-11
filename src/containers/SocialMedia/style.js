import styled from "styled-components";

export const SocialMedia = styled.div`
  & .social-hover:hover {
    width: 105px;
  }
`;

export const MediaLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 55px;
  & .social-links {
    color: white;
  }
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 35px;
  @media (max-width: 400px) {
    font-size: 20px;
    width: 45px;
    height: 35px;
  }
`;
