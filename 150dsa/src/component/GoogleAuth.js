import React from "react";
import GoogleLogin from "react-google-login";

const GoogleAuth = () => {
    const responseGoogle = (response) => {
        // Handle the Google Sign-In response here
        console.log(response);
    };

    return (
        <div>
            <h2>Login or Sign Up with Google</h2>
            <GoogleLogin
                clientId="YOUR_GOOGLE_OAUTH_CLIENT_ID"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
            />
        </div>
    );
};

export default GoogleAuth;
