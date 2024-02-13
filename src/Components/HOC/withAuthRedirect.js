import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


let withAuthRedirect = (Component) => {

    let NewComponent = (props) => {
        let authUser = JSON.parse(localStorage.getItem("user"));
        const navigate = useNavigate();
        useEffect(() => {
            
            if(!authUser){
                navigate("/login")
            }

        }, [props]);
        
        // Render the wrapped component with its original props
        return <Component {...props} authUser = {authUser} />;
    };

    return NewComponent
}

export default withAuthRedirect;