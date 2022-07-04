import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const Details = styled.div`
  width: 90%;
`;

export const Button = styled.button`
  margin-top: 16px;
  width: 100%;
  background-color: rgb(32, 52, 73);
  color: white;
  border: 0px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: black;
  }
`;

export const ProductName = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ProductCategory = styled.h3`
  margin: 4px 0px 8px;
  text-align: left;
  font-weight: 100;
`;

export const ProductPrice = styled.h4`
  margin: 0px;
  text-align: right;
`;
