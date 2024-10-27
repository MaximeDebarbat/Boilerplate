
import { useAuth } from "@/context/AuthContext"
import GoogleLoginButton from "@/components/authentication/googleLogin"
import GoogleLogoutButton from "@/components/authentication/googleLogout"

const GoogleButton = () => {

    const { user } = useAuth();

    return (
        <div>
            {user ? <GoogleLogoutButton /> : <GoogleLoginButton />}
        </div>
    );
}

export default GoogleButton;