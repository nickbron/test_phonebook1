import { Toaster } from "react-hot-toast";
import * as React from "react";
import { ContactForm } from "Componets/ContactForm/ContactForm";
import { ContactList } from "Componets/ContactList/ContactList";
import { Filter } from "Componets/Filter/Filter";

const ContactsView = () => {
  return (
    <div className="container">
      <Toaster />
      <div className="row">
        <ContactForm />
        <div className=" p-0 pl-sm-3 pl-md-0 pr-sm-4"></div>
        <Filter />
        <ContactList result={[]} />
        <div className="p-0 pl-sm-3 pl-md-0 pr-sm-4"></div>
      </div>
    </div>
  );
};

export default ContactsView;
