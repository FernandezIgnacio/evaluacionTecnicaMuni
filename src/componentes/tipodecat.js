import React from "react";
import { useHistory } from "react-router-dom";

const category = () => {
    const UserProfileButton = () => {
        const history = useHistory();
        const goToUserProfile = () => {
          history.push("/category"); 
        };
      };
}  
    <div className="Categoria">
        return <button onClick={goToUserProfile}>Categoria</button>
    </div>

export default category