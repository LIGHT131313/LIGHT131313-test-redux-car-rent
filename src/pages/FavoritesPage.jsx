// import { Filters } from 'components/Filters/Filters';
import { FavoritesAdvertsList } from 'components/FavoritesAdvertsList/FavoritesAdvertsList';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

export default function FavoritesPage() {
  // const dispatch = useDispatch();
  // const pageLimit = useSelector(selectPageLimit);
  // const { items, isLoading, error } = useSelector(selectStore);

  // const showLoader = isLoading && !error;
  // const listEmpty = !isLoading && !items.length;

  // useEffect(() => {
  //   dispatch(fetchAdverts({ page: 1, limit: pageLimit }));
  // }, [dispatch, pageLimit]);

  return (
    <section>
      {/* <Filters /> */}
      <FavoritesAdvertsList />
      <LoadMoreBtn />
    </section>
  );
}
