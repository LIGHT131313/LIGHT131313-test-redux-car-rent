import Modal from '@mui/material/Modal';
import {
  CloseBtn,
  ModalWrap,
  styleBox,
  ImgModal,
  ModalTitleText,
  ModalTextSpan,
  ModalTextWrapper,
  ModalText,
  ModalTextDescr,
  ModalTitleAcc,
  ModalList,
  ModalConditionsWrap,
  ConditionsWrap,
  ConditionsSpan,
  ModalBtn,
} from './LearnMoreModal.styled';
import Box from '@mui/material/Box';
import { IoCloseOutline } from 'react-icons/io5';

export const LearnMoreModal = ({ open, close, advert }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    photoLink,
    address,
    rentalConditions,
    mileage,
  } = advert;

  const handleClick = () => {
    window.location.href = 'tel:+380730000000';
  };
  const minAge = rentalConditions.split('\n')[0];

  return (
    <ModalWrap>
      <Modal open={open} onClose={close} hidden={false}>
        <Box sx={styleBox}>
          <div>
            <CloseBtn type="button" onClick={close}>
              <IoCloseOutline size={24} />
            </CloseBtn>
            <ImgModal src={img || photoLink} alt={make} />
            <ModalTitleText>
              {make} <ModalTextSpan>{model}</ModalTextSpan>, {year}
            </ModalTitleText>
            <ModalTextWrapper>
              <ModalText>{address.split(',')[1]}</ModalText>
              <ModalText>{address.split(',')[2]}</ModalText>
              <ModalText>Id: {id}</ModalText>
              <ModalText>Year: {year}</ModalText>
              <ModalText>Type: {type}</ModalText>
              <ModalText>Fuel Consumption: {fuelConsumption}</ModalText>
              <ModalText>Engine Size: {engineSize}</ModalText>
            </ModalTextWrapper>
            <ModalTextDescr>{description}</ModalTextDescr>
            <ModalTitleAcc>Accessories and functionalities:</ModalTitleAcc>
            <ModalList>
              <ModalText>{accessories[0]}</ModalText>
              <ModalText>{accessories[1]}</ModalText>
              <ModalText>{accessories[2]}</ModalText>
              <ModalText>{functionalities[0]}</ModalText>
              <ModalText>{functionalities[1]}</ModalText>
              <ModalText>{functionalities[2]}</ModalText>
            </ModalList>
            <ModalTitleText>Rental Conditions: </ModalTitleText>
            <ModalConditionsWrap>
              <ConditionsWrap>
                {minAge.split(':')[0]} :
                <ConditionsSpan> {minAge.split(':')[1]}</ConditionsSpan>
              </ConditionsWrap>
              <ConditionsWrap>{rentalConditions.split('\n')[1]}</ConditionsWrap>
              <ConditionsWrap>{rentalConditions.split('\n')[2]}</ConditionsWrap>
              <ConditionsWrap>
                Mileage:
                <ConditionsSpan>
                  {mileage.toLocaleString('en-US')}
                </ConditionsSpan>
              </ConditionsWrap>
              <ConditionsWrap>
                Price: <ConditionsSpan>{rentalPrice.slice(1)}$</ConditionsSpan>
              </ConditionsWrap>
            </ModalConditionsWrap>
            <ModalBtn onClick={handleClick}>Rental car</ModalBtn>
          </div>
        </Box>
      </Modal>
    </ModalWrap>
  );
};
