import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(10px, 1fr));
  grid-gap: 30px;
  margin: 70px 50px;
`;
