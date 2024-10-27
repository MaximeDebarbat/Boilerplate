
import { FcGoogle } from "react-icons/fc";
import { useTranslations } from "next-intl";

import { useAuth } from "@/context/AuthContext";
import { useUI } from "@/context/UIContext";


const GoogleLogoutButton = () => {

    const { logout } = useAuth();
    const { showAlert } = useUI();
    const translation = useTranslations('general');

    const handleClick = () => {
        logout().then(() => {
            showAlert('success', translation('authentication.google.alert.logout'));
        }).catch((error) => {
            showAlert('error', translation(`authentication.error.${error.code}`));
        });
    };
    
    return (
      <button
        onClick={()=>(handleClick())}
        className="btn btn-accent flex items-center space-x-2"
      >
        <FcGoogle size={30} />
        <span>Logout</span>
      </button>
    );
  };
  
  export default GoogleLogoutButton;
  