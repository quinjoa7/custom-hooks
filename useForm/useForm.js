import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    //destructure properties to use from the event
    const { name, value } = target;
    //use name to reference what property to change from the state (computed propertys)
    setFormState({ ...formState, [name]: value });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    //we spread formState so we can destructure directly wen calling this hook
    ...formState,
    formState,
    onResetForm,
    onInputChange,
  };
};
