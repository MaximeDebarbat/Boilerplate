
import { useAuth } from "@/context/AuthContext"
import GoogleLoginButton from "@/components/authentication/googleLogin"
import GoogleLogoutButton from "@/components/authentication/googleLogout"

const GoogleButton = ({text="Login with google"}) => {

    const { user } = useAuth();

    return (
        <div>
            {user ? <GoogleLogoutButton /> : <GoogleLoginButton text={text} />}
        </div>
    );
}

export default GoogleButton;