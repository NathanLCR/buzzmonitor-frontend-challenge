import styled from 'styled-components';

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
