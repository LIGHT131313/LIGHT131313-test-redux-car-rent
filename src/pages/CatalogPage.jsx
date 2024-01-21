import { useDispatch, useSelector } from 'react-redux';
// import { selectStore } from '../redux/adverts/selectors';
import { useEffect } from 'react';
import { fetchAdverts } from '../redux/adverts/operations';

import { AdvertsList } from 'components/AdvertsList/AdvertsList';
// import { Filters } from 'components/Filters/Filters';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { selectPageLimit } from '../redux/adverts/selectors';
import { setPage } from '../redux/adverts/advertsSlice';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const pageLimit = useSelector(selectPageLimit);
  // const { items, isLoading, error } = useSelector(selectStore);

  // const showLoader = isLoading && !error;
  // const listEmpty = !isLoading && !items.length;

  useEffect(() => {
    dispatch(setPage(1));
    dispatch(fetchAdverts({ page: 1, limit: pageLimit }));
  }, [dispatch, pageLimit]);

  return (
    <section>
      {/* <Filters /> */}
      <AdvertsList />
      <LoadMoreBtn />
    </section>
  );
}
