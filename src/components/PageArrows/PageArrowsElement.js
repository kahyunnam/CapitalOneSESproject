import styled from 'styled-components';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const Arrows = styled.div`
  text-align: center;
  
`;

export const RightArrow = styled(FaArrowAltCircleRight)`
  color: rgba(255, 255, 255, 0.5); 
  font-size: 65px;
  cursor: pointer;
  padding: 10px 10px 10px 10px;

  &:hover{
    color: rgba(255, 189, 224, 0.7);      
    transition: 0.2s ease-in-in-out;
    transform: scale(1.1);
  }
`;

export const LeftArrow = styled(FaArrowAltCircleLeft)`
  color: rgba(255, 255, 255, 0.5); 
  font-size: 65px;
  cursor: pointer;
  padding: 10px 10px 10px 10px;

  &:hover{
    color: rgba(255, 189, 224, 0.5);  
    transition: 0.2s ease-in-in-out;
    transform: scale(1.1);
  }
`;
