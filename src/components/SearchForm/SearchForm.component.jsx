import React from "react";
import searchIcon from "../../assets/icons/search.svg";
import { Form, Button, TextInput } from "./SearchForm.styles";

const SearchForm = ({ onChange, onFocus }) => {
  return (
    <Form>
      <TextInput placeholder="Search" onChange={onChange} onFocus={onFocus} />
      <Button>
        <img src={searchIcon} />
      </Button>
    </Form>
  );
};

export default SearchForm;
