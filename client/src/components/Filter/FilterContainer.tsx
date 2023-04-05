import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";

import FilterButton from "./FilterButton";
import styled from "styled-components";

type Props = {
  handleSorting: () => void;
  handleFilter: () => void;
  sortOrder: string;
  filterState: boolean;
};

const FilterContainer = ({
  sortOrder,
  handleSorting,
  handleFilter,
  filterState,
}: Props) => {
  return (
    <FiltersContainer>
      <FilterButton onClick={handleSorting} label="Sort:">
        Date posted
        {sortOrder === "desc" ? <IoArrowDownOutline /> : <IoArrowUpOutline />}
      </FilterButton>
      <FilterButton onClick={handleFilter} label="Show:">
        {filterState === true ? (
          <span>Answered only</span>
        ) : (
          <span>All questions</span>
        )}
      </FilterButton>
    </FiltersContainer>
  );
};

export default FilterContainer;

const FiltersContainer = styled.div`
  display: flex;
  gap: 24px;
`;
