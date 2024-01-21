import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/adverts/selectors';
import { List, ListMes } from './FavoritesAdvertsList.styled';
import { AdvertsListItem } from 'components/AdvertsListItem/AdvertsListItem';

export const FavoritesAdvertsList = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length > 0 ? (
        <List>
          {favorites.map(favorite => (
            <AdvertsListItem key={favorite.id} advert={favorite} />
          ))}
        </List>
      ) : (
        <ListMes>Favorites Empty</ListMes>
      )}
    </>
  );
};
