import React from "react";
import searchIcon from "../../assets/icons/search.svg";
import { Form, Button, TextInput } from "./SearchForm.styles";

const SearchForm = ({ onChange }) => {
  return (
    <Form>
      <TextInput placeholder="Search" onChange={onChange} />
      <Button>
        <img src={searchIcon} />
      </Button>
    </Form>
  );
};

export default SearchForm;
