import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { Filters } from 'components/Filters/Filters';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

export default function CatalogPage() {
  return (
    <section>
      <Filters />
      <AdvertsList />
      <LoadMoreBtn />
    </section>
  );
}
