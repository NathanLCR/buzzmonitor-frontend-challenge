import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  left: 80%;
  @media (max-width: 900px) {
    left: 70%;
  }
`;

export const MenuTitle = styled.button`
  width: 100px;
  height: 60px;
  background: transparent;
  outline: none;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  font-size: 14px;
`;

export const Menu = styled.div`
  position: absolute;
  margin: 5px;
  width: 120px;
`;

export const Item = styled.button`
  width: 100%;
  height: 40px;
  display: block;
  background: transparent;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  font-size: 14px;
`;
