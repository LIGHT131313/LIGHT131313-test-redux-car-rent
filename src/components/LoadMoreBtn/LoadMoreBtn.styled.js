import styled from 'styled-components';

export const LoadMBtn = styled.button`
  display: block;
  margin: 0 auto;
  background-color: transparent;
  color: #3470ff;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  transition: 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);
  font-style: normal;

  &:is(:hover, :focus) {
    color: #0b44cd;
  }
`;

export const TextLoadMBtn = styled.p`
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
`;
