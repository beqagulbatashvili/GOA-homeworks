import { createContext, useContext, useEffect, useState } from "react";

const BooksContext = createContext();
export const useBooks = () => useContext(BooksContext);

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const BooksProvider = ({children}) => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        try {
            const res = await fetch(`${API_URL}/books`);

            if (!res.ok) {
                throw new Error("Something went wrong");
            }

            const result = await res.json();
            setBooks(result);
        } catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getBooks();
    }, []);
}
