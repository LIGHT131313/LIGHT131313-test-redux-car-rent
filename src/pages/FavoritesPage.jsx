import { Filters } from 'components/Filters/Filters';
import { FavoritesAdvertsList } from 'components/FavoritesAdvertsList/FavoritesAdvertsList';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

export default function FavoritesPage() {
  return (
    <section>
      <Filters />
      <FavoritesAdvertsList />
      <LoadMoreBtn />
    </section>
  );
}
