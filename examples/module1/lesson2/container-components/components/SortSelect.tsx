type Props = {
  sortOption?: 'name' | 'created' | string;
  setSortOption: React.Dispatch<React.SetStateAction<'name' | 'created' | string>>;
}

export const SortSelect = ({ sortOption, setSortOption }: Props) => (
  <label className="flex flex-col">
        Sort by
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border h-7 mt-1"
        >
          <option value="">Initial</option>
          <option value="name">Name</option>
          <option value="created">Created Date</option>
        </select>
      </label>
);