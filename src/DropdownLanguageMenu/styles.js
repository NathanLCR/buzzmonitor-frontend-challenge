import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  margin: 10px;
  margin-right: 5px;
  @media (max-width: 650px) {
    display: flex;
    flex-direction: row;
  }
`;

export const MenuTitle = styled.button`
  width: 120px;
  height: 60px;
  background: transparent;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

export const Menu = styled.div`
  width: 110px;
  @media (max-width: 650px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Item = styled.button`
  width: 120px;
  height: 40px;
  display: block;
  background: #f62e4b;
  margin-bottom: 5px;
  border-radius: 15px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  @media (max-width: 650px) {
    margin-left: 10px;
  }
`;
