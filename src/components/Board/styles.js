import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  min-width: 800px;
  border-radius: 20px;
  margin: auto;
  @media (max-width: 900px) {
    width: 50%;
    min-width: 320px;
    max-width: 500px;
  }
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    flex-direction: row;
  }
`;

export const PileContainer = styled.button`
  display: flex;
  outline: none;
  background: none;
  align-items: center;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const RestartButton = styled.button`
  width: 300px;
  height: 50px;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
  background: #4887ee;
  font-size: 26px;
  color: white;
`;

export const PileIndex = styled.div`
  width: 60px;
  height: 60px;
  background: #4887ee;
  border-radius: 10px;
  color: white;
  margin-bottom: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 10px;
  text-align: center;
`;

export const Subtitle = styled.p`
  margin: 10px;
  text-align: center;
  font-size: 20px;
`;
