import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/adverts/operations';
import { selectStore } from '../../redux/adverts/selectors';
import { setPage } from '../../redux/adverts/advertsSlice';
import { LoadMBtn } from './LoadMoreBtn.styled';
import { Loader } from 'components/Loader/Loader';

export const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const { page, items, pageLimit, isLoading, error } = useSelector(selectStore);

  const showBtn = !(items.length < pageLimit * page);
  const showLoader = isLoading && !error;

  const handleLoadMore = () => {
    const nextPage = page + 1;

    dispatch(setPage(nextPage));
    dispatch(fetchAdverts({ page: nextPage, limit: pageLimit }));
  };

  return (
    <>
      {showLoader && <Loader />}
      {showBtn && (
        <LoadMBtn type="button" onClick={handleLoadMore}>
          Load more
        </LoadMBtn>
      )}
    </>
  );
};
