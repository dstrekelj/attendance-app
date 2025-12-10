import { createContext } from 'react';

const initialValue = {
    user: null,
}

export const AuthContext = createContext(initialValue);
