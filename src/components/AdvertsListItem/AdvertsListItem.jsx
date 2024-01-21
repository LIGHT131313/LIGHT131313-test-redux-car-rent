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
    <li>
      <div>
        <input
          type="checkbox"
          aria-label="isFavorite"
          checked={isFavorited}
          onChange={() => handleCheckboxChange()}
        ></input>
      </div>
      <img src={img || photoLink} alt={make} />
      <div>
        <h2>
          <span>
            <span>{make}</span> <span>{`${model},`}</span>
            <span> {year}</span>
          </span>
          <span>{rentalPrice}</span>
        </h2>
        <ul>
          <li>
            <p>{address.split(',').splice(-2, 2)[0]}</p>
            <p>{address.split(',').splice(-2, 2)[1]}</p>
            <p>{rentalCompany}</p>
          </li>
          <li>
            <p>{type}</p>
            <p>{model}</p>
            <p>{mileage}</p>
            <p>{functionalities[0]}</p>
          </li>
        </ul>
      </div>
      <button aria-label="LearnMore" disabled={isLoading} onClick={handleOpen}>
        LearnMore
      </button>
      <LearnMoreModal open={open} close={handleClose} advert={advert} />
    </li>
  );
};
