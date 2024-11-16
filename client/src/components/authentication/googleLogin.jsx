
import { FcGoogle } from "react-icons/fc";
import { useTranslations } from "next-intl";

import { useAuth } from "@/context/AuthContext";
import { useUI } from "@/context/UIContext";


const GoogleLoginButton = ({text="Login with Google"}) => {

    const { signInWithGoogle } = useAuth();
    const { showAlert, hideModal } = useUI();
    const translation = useTranslations('general');

    const handleClick = () => {
      signInWithGoogle().then(() => {
        showAlert('success', translation('authentication.google.alert.login'));
        hideModal();
      }).catch((error) => {
        showAlert('error', translation(`authentication.error.${error.code}`));
      });
    };

    return (
      <button
        onClick={()=>(handleClick())}
        className="btn flex items-center space-x-2"
      >
        <FcGoogle size={30} />
        <span>{text}</span>
      </button>
    );
  };
  
  export default GoogleLoginButton;
  