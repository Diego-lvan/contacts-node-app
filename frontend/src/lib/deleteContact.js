import axios from "axios";
axios.defaults.withCredentials = true;
const URL = process.env.REACT_APP_BASE_URL;
const deleteContact = async (e, number, setContactChanged, contactChanged) => {
  const res = await axios.delete(`${URL}contacts/delete/${number}`);
  if (res.data.status === 204) {
    setContactChanged(!contactChanged);
  }
};

export default deleteContact;
