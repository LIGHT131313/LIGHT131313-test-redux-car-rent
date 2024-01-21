// import { Filters } from 'components/Filters/Filters';
import { FavoritesAdvertsList } from 'components/FavoritesAdvertsList/FavoritesAdvertsList';
// import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectStore } from '../redux/adverts/selectors';

export default function FavoritesPage() {
  const { isLoading, error } = useSelector(selectStore);
  const showLoader = isLoading && !error;
  return (
    <section>
      {showLoader && <Loader />}
      {/* <Filters /> */}
      <FavoritesAdvertsList />
      {/* <LoadMoreBtn /> */}
    </section>
  );
}
