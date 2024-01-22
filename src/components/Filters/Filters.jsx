import { FilterLabel, FilterBtnText, FilterBtn } from './Filters.styled';

export const Filters = () => {
  return (
    <div>
      <form>
        <FilterLabel htmlFor="make">Car brand</FilterLabel>
        <FilterBtn type="submit">
          <FilterBtnText>Search</FilterBtnText>
        </FilterBtn>
      </form>
    </div>
  );
};
