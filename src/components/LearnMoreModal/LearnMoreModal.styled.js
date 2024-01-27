import styled from 'styled-components';

export const styleBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '540px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '24px',
  padding: '40px',
};

export const ModalWrap = styled.div`
  /* padding: 400px
  background-color: #fff;
  border-radius: 24px;
  color: #121417;
  position: relative;
  width: 100%;
  height: 100%;

  padding-bottom: 40px; */
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  color: #121417;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const ImgModal = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 24px;
  margin-bottom: 14px;
`;

export const ModalTitleText = styled.p`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 8px;
`;

export const ModalTextSpan = styled.span`
  color: #3470ff;
`;

export const ModalTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;
`;

export const ModalText = styled.p`
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

export const ModalTextDescr = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 24px;
`;

export const ModalTitleAcc = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
`;

export const ModalList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ModalConditionsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;
export const ConditionsWrap = styled.div`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const ConditionsSpan = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

export const ModalBtn = styled.button`
  background: #3470ff;
  border-radius: 12px;
  padding: 12px 50px 12px 50px;
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 44px;

  &:hover {
    background: #0b44cd;
  }
`;
