import axios from "axios";

const instace = axios.create({
    baseURL: "https://restcountries.com/v3.1"
});


export default instace;