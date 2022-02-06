import React ,{useEffect,useState} from 'react';
function Logout(props) {
    useEffect(() => {
        sessionStorage.removeItem('token');
        sessionStorage.clear()
        props.history.push("/login");
    },[]);

    return (
        <div className="Dashboard">
            
        </div>
    );
}

export default Logout;