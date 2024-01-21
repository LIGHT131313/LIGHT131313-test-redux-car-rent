import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/adverts/selectors';
import { List, ListMes } from './AdvertsList.styled';
import { AdvertsListItem } from 'components/AdvertsListItem/AdvertsListItem';

export const AdvertsList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <>
      {adverts.length > 0 ? (
        <List>
          {adverts.map(advert => (
            <AdvertsListItem key={advert.id} advert={advert} />
          ))}
        </List>
      ) : (
        <ListMes>No matches</ListMes>
      )}
    </>
  );
};
