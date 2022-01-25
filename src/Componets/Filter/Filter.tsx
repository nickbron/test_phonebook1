import { useDispatch } from "react-redux";
import { filterItem } from "../../redux/contacts-reducer";
import { AppDispatch } from "../../redux/store";

export const Filter = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className=" input-group-lg w-50 my-sm-3">
        Find contacts by name:
        <input
          type="text"
          className="form-control "
          name="filter"
          autoComplete="off"
          onChange={(e) => dispatch(filterItem(e.target.value))}
          // value={filter}
          placeholder="Search Value"
        />
      </div>
    </>
  );
};
