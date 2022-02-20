export const isEmpty = (fields, setMessage) => {
  let isEmpty = false;
  fields.forEach((field) => {
    if (!field) {
      setMessage("Empty fields");
      isEmpty = true;
    }
  });
  return isEmpty === true ? true : false;
};

export const handleInputChange = (
  e,
  refLabel,
  maxLength,
  setInput,
  newValue
) => {
  if (e.target.value.length > maxLength) {
    return (refLabel.current.innerText = "Too many characters");
  }
  refLabel.current.innerText = "";
  setInput(newValue);
};
