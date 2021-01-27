import axios from "axios";
import { BASE_URL } from "./secret";

export default axios.create({
    baseURL : BASE_URL,
})