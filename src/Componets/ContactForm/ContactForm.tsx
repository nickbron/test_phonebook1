import { toast } from "react-hot-toast";
import React, { useState } from "react";
import { Input } from "reactstrap";
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from "../../redux/contactApi";

interface Props {
  onSubmit?: (contact: { name: string; phone: string }) => void;
}

export const ContactForm = ({ onSubmit }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { data } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const handleFormReset = () => {
    setName("");
    setPhone("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    return (
      data?.find((contact) => contact.name.toLowerCase() === name.toLowerCase())
        ? toast.error(` ${name} is already in contacts.`)
        : createContact({ name, phone }),
      handleFormReset()
    );
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    let target = e.target as HTMLInputElement;
    target.name === "name"
      ? setName(e.currentTarget.value)
      : setPhone(e.currentTarget.value);
  };

  return (
    <div>
      <div className=" input-group-lg">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            className="form-control w-50"
            name="name"
            onChange={handleChange}
            value={name}
            placeholder="Input Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          />
          <Input
            type="tel"
            name="number"
            className="form-control w-50 my-sm-3"
            onChange={handleChange}
            value={phone}
            placeholder="Input Phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />

          <button type="submit" className="btn btn-primary">
            Add contact
          </button>
        </form>
      </div>
    </div>
  );
};
