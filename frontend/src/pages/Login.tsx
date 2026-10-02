import {
    Box,
    Card,
} from "@mui/material";
import LoginForm from "../components/Login/LoginForm";
export const Login = () => {
    return (
        <Box>
            <Card
                elevation={3}
                sx={{
                    p: 4,
                    height: "50vh",
                    width: "280px",
                    m: "200px auto"
                }}
            >
                <a>ログイン</a>
                <LoginForm />
            </Card>
        </Box>
    );
};

export default Login;