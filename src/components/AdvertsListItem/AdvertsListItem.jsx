import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavorites,
  selectIsLoading,
} from '../../redux/adverts/selectors';
import { useEffect, useState } from 'react';
import { LearnMoreModal } from 'components/LearnMoreModal/LearnMoreModal';
import {
  addFavorite,
  removeFavorite,
} from '../../redux/adverts/favoritesSlice';
import {
  ListItem,
  ListImgWrap,
  ListImg,
  ListTitleWrap,
  ListTitle,
  ListTitleSpan,
  ListTextWrapper,
  ListText,
  LearnMoreBtn,
  LearnMoreBtnText,
  ListCheckWrap,
  LabelCheck,
  InputCheck,
  FavoriteIconStyle,
  FavoriteBorderIconStyle,
} from './AdvertsListItem.styled';
import sprite from 'img/sprite.svg';

export const AdvertsListItem = ({ advert }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    photoLink,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = advert;

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavorites);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const isAdvInFavorites = favorites.some(favorite => favorite.id === id);
    setIsFavorited(isAdvInFavorites);
  }, [favorites, id]);

  const handleCheckboxChange = () => {
    if (isFavorited) {
      dispatch(removeFavorite({ advert }));
    } else {
      dispatch(addFavorite({ advert }));
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ListItem>
      <ListImgWrap>
        <ListCheckWrap>
          <LabelCheck>
            <InputCheck
              type="checkbox"
              aria-label="isFavorite"
              checked={isFavorited}
              onChange={() => handleCheckboxChange()}
            ></InputCheck>
            {isFavorited ? (
              <FavoriteIconStyle>
                <use href={`${sprite}#icon-normal-heart`}></use>
              </FavoriteIconStyle>
            ) : (
              <FavoriteBorderIconStyle>
                <use href={`${sprite}#icon-normal-heart`}></use>
              </FavoriteBorderIconStyle>
            )}
          </LabelCheck>
        </ListCheckWrap>
        <ListImg src={img || photoLink} alt={make} />
      </ListImgWrap>
      <ListTitleWrap>
        <ListTitle>
          {make} <ListTitleSpan>{model},</ListTitleSpan> {year}
        </ListTitle>
        <ListTitle>{rentalPrice}</ListTitle>
      </ListTitleWrap>
      <ListTextWrapper>
        <ListText>{address.split(',')[1]}</ListText>
        <ListText>{address.split(',')[2]}</ListText>
        <ListText>{rentalCompany}</ListText>
        <ListText>{type}</ListText>
        <ListText>{model}</ListText>
        <ListText>{mileage}</ListText>
        <ListText>{functionalities[0]}</ListText>
      </ListTextWrapper>
      <LearnMoreBtn
        aria-label="LearnMore"
        disabled={isLoading}
        onClick={handleOpen}
      >
        <LearnMoreBtnText>Learn More</LearnMoreBtnText>
      </LearnMoreBtn>
      <LearnMoreModal open={open} close={handleClose} advert={advert} />
    </ListItem>
  );
};
