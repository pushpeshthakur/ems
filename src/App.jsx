import React from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { useEffect } from 'react';
import { useState , useContext} from 'react';
import { AuthContext } from './context/AuthProvider';

const App = () => {

    // useEffect(() =>{
    //     // setLocalStorage()
    //     getLocalStorage()
    // })

    const [user, setUser] = useState(null)

    const handleLogin = (email, password) => {
        if(email == 'admin@me.com' && password == '123'){
            setUser('admin')
            console.log('Admin logged in')
        } else if (email == 'employee@me.com' && password == '123'){
            setUser('employee')
            console.log('Employee logged in')
        } else {
            alert('Invalid credentials')
        }
    }
    
    const data = useContext(AuthContext)
    console.log(data)

    return (
        <>
        {!user ? <Login handleLogin={handleLogin}/> : ''}
        {user == 'admin' ? <AdminDashboard />  : ""}
        {user == 'employee' ? <EmployeeDashboard /> : ""}
        </>
    )
}
export default App;