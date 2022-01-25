import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { BsFillPersonFill, BsFillTrashFill } from "react-icons/bs";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../../redux/contactApi";
import { RootState } from "../../redux/store";

type Contacts = {
  name: string;
  phone: string;
};

interface Props {
  result: Contacts[];
}

export const ContactList = ({ result }: Props) => {
  let newData;
  const { data } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const searchValue = useSelector((state: RootState) => state);

  if (data && searchValue.reducerFilter.length > 0) {
    const normalizedFilter = searchValue.reducerFilter.map((id) =>
      id.name.toLowerCase()
    );
    newData = data.filter((id) =>
      id.name
        .toLowerCase()
        .includes(normalizedFilter[normalizedFilter.length - 1])
    );
  } else {
    newData = data;
  }

  return (
    <>
      {newData && (
        <ul className="list-group">
          {newData.map((contact: any) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={contact.id}
            >
              <BsFillPersonFill />
              <span>{contact.name}: </span>
              <span>{contact.phone}</span>
              <Button
                className="my-3"
                color="danger"
                size="sm"
                onClick={() => deleteContact(contact.id)}
              >
                <BsFillTrashFill />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
