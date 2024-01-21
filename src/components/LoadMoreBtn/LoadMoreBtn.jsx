import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/adverts/operations';
import {
  selectAdverts,
  selectPage,
  selectPageLimit,
} from '../../redux/adverts/selectors';
import { setPage } from '../../redux/adverts/advertsSlice';

export const LoadMoreBtn = () => {
  const page = useSelector(selectPage);
  const adverts = useSelector(selectAdverts);
  const pageLimit = useSelector(selectPageLimit);

  const showBtn = !(adverts.length < pageLimit * page);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    const nextPage = page + 1;

    dispatch(setPage(nextPage));
    dispatch(fetchAdverts({ page: nextPage, limit: pageLimit }));
  };

  return (
    <>
      {showBtn && (
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </>
  );
};
