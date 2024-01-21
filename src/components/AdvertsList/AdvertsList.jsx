import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/adverts/selectors';
import { List } from './AdvertsList.styled';
import { AdvertsListItem } from 'components/AdvertsListItem/AdvertsListItem';

export const AdvertsList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <>
      <List>
        {adverts.map(advert => (
          <AdvertsListItem key={advert.id} advert={advert} />
        ))}
      </List>
    </>
  );
};
