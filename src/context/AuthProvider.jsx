import React, {createContext, useState} from 'react';

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    // const [user,setUser] = useState(null)

    return (
        <div>
            <AuthContext.Provider value='pushpesh'>
                {children}
            </AuthContext.Provider>
        </div>
    )       
}

export default AuthProvider;