import axios from "axios";
import { languageVersions } from "../frontend/src/constants.js"; // adjust if needed

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
});

export const executeCode = async (language, sourceCode) => {
    try {
        const response = await API.post("/execute", {
            language: language,
            version: languageVersions[language],
            files: [
                {
                    content: sourceCode
                }
            ]
        });
        return response.data; // will contain run output
    } catch (err) {
        console.error("Execution failed:", err.response?.data || err.message);
        throw err;
    }
};