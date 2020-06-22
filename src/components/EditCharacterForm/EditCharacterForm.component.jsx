import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { editingComplete } from "../../store/actions";
import { Form, NameInput } from "./EditCharacterForm.styles";

const EditCharacterForm = ({ data, onComplete }) => {
  const dispatch = useDispatch();
  const { id, name } = data;
  const inputRef = useRef(null);
  const [value, setValue] = useState(name);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function onChange(e) {
    const { target } = e;
    setValue(target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(editingComplete({ id, name: value }));
    onComplete(value);
  }

  function onBlur() {
    dispatch(editingComplete({ id, name: value }));
  }

  return (
    <Form onSubmit={onSubmit}>
      <NameInput
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={inputRef}
      />
    </Form>
  );
};

export default EditCharacterForm;
