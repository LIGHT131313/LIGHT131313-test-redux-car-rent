import styled from 'styled-components';

export const List = styled.ul`
  /* box-shadow: ${p => p.theme.boxSh.one}, ${p => p.theme.boxSh.two},
    ${p => p.theme.boxSh.three};
  border-radius: ${p => p.theme.borRad};
  padding-top: ${p => p.theme.spacing(1)};
  padding-right: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(1)};
  padding-left: ${p => p.theme.spacing(3)};
  background-color: ${p => p.theme.colors.green};
  height: 100%; */
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-gap: ${p => p.theme.spacing(4)};
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ListMes = styled.p`
  margin-top: ${p => p.theme.spacing(2)};
  margin-left: ${p => p.theme.spacing(2)};
`;
