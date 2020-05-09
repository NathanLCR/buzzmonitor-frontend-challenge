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

export const Title = styled.h1`
  margin: 10px;
  text-align: center;
`;

export const Subtitle = styled.p`
  margin: 10px;
  text-align: center;
  font-size: 20px;
`;
