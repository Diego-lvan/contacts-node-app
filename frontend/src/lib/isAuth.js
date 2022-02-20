import axios from "axios";
const isAuth = async (URL, setIsLogged, setLoading) => {
  setLoading(true);
  const res = await axios.get(`${URL}islogged`);
  setIsLogged(res.data.isAuth);
  setLoading(false);
};

export default isAuth;
