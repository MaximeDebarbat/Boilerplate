
import { FcGoogle } from "react-icons/fc";
import { useTranslations } from "next-intl";

import { useAuth } from "@/context/AuthContext";
import { useUI } from "@/context/UIContext";


const GoogleLoginButton = () => {

    const { signInWithGoogle } = useAuth();
    const { showAlert } = useUI();
    const translation = useTranslations('general');

    const handleClick = () => {
      signInWithGoogle().then(() => {
        showAlert('success', translation('authentication.google.alert.login'));
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
        <span>Login with Google</span>
      </button>
    );
  };
  
  export default GoogleLoginButton;
  