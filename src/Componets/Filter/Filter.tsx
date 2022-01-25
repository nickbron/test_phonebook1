import { useDispatch } from "react-redux";
import { filterItem } from "../../redux/contacts-reducer";
import { AppDispatch } from "../../redux/store";

export const Filter = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="form-group  my-sm-4 ">
        <label htmlFor="inputFilter"> Find contacts by name:</label>
        <input
          type="text"
          className="form-control w-50 "
          name="filter"
          id="inputFilter"
          autoComplete="off"
          onChange={(e) => dispatch(filterItem(e.target.value))}
          // value={filter}
          placeholder="Search Value"
        />
      </div>
    </>
  );
};
