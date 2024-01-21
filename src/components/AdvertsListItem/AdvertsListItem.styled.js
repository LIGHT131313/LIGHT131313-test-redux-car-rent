import styled from 'styled-components';

export const ListItem = styled.li`
  width: 274px;
`;

export const ListImgWrap = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;

export const ListCheckWrap = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const LabelCheck = styled.label`
  position: relative;
  display: inline-block;
`;

export const InputCheck = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const ListImg = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const ListTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ListTitle = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListTitleSpan = styled.span`
  color: #3470ff;
`;

export const ListTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListText = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::after {
    content: '';
    width: 0px;
    height: 16px;
    border-left: 1px solid rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }

  &:last-child::after {
    content: none;
  }
`;

export const LearnMoreBtn = styled.button`
  width: 274px;
  height: 44px;
  border-radius: 12px;
  background: #3470ff;

  &:hover {
    background: #0b44cd;
  }
`;

export const LearnMoreBtnText = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;
