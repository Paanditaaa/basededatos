import axios from "axios";

const API_URL = "http://localhost:3000"; // Adjust port if necessary

export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/usuarios`);
    return response.data;
};
