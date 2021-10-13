import { useState } from 'react';

function useForm(initialState = {}): any {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  return [values, handleInputChange, reset];
}

export default useForm;
