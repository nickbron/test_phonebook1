import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { filterItem } from "../../redux/contacts-reducer";
import { AppDispatch } from "../../redux/store";

export const Filter = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  dispatch(filterItem(filter));

  return (
    <>
      <div className=" input-group-lg w-50 my-sm-3">
        Find contacts by name:
        <input
          type="text"
          className="form-control "
          name="filter"
          autoComplete="off"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          placeholder="Search Value"
        />
      </div>
    </>
  );
};
