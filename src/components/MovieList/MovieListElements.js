import styled from 'styled-components';

export const Titles = styled.div`
  text-align: center;
  cursor: pointer;
  padding: 20px 20px 20px 20px;
  
`;

export const TitleSpacer = styled.div`
padding: 20px 20px 20px 20px;

`;

export const Poster = styled.div`

  cursor: pointer;
  top: 45%;
  left: -20%;
  position: relative;
  
`;

export const Info = styled.div`

  cursor: pointer;
  top: 45%;
  left: 20%;
  position: relative;
  color: #ffffff;

  
`;

export const MovieInfo = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #00FFFF
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const MovieInfoWrapper = styled.div`
  color: #00FFFF;
  // opacity: 0.5;
  width: 60%;
  height: 75%;
  margin: 0 auto;
  background-image: linear-gradient(#332fba, #2d2f74);
  border-radius: 25px;

  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;


