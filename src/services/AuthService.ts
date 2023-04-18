import { baseApiUrl } from "../config";
import { Credentials } from "../constants/types";


class AuthService {

    async login(credentials: Credentials) {
        const response = await fetch(`${baseApiUrl}/v1/auth/authenticate`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
            method: "POST"
        });
        console.log(response);

        if (!response.ok) {
            throw new Error("Login failed. Email address or incorrect password");
        }

        const data = await response.json();
        return data;
    }
    async currentUser() {
        const authToken = localStorage.getItem("token");
        const response = await fetch(`${baseApiUrl}/v1/auth/user`, {
            headers: {
                
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
            method: "GET"
        });
        console.log(response);

        if (!response.ok) {
            throw new Error("Unauthorized access");
        }

        const data = await response.json();
        return data;
    }

    logout() {
        localStorage.removeItem("token");
    }

    isAuthenticated(): boolean {
        const authToken = localStorage.getItem("token");
        return !!authToken;
    }
}

export default AuthService;
