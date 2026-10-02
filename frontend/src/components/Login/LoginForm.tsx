import { useState } from "react";
import { Avatar, Box, Button, Card, TextField, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/AuthService";

const LoginForm = () => {

const [employeeId, setEmployeeId] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const [loginError, setLoginError] = useState("");
const [employeeIdError, setEmployeeIdError] = useState("");
const [passwordError, setPasswordError] = useState("");


const handleLogin = async () => {
    setEmployeeIdError("");
    setPasswordError("");
    //社員番号入力チェック
    if (!employeeId) {
        setEmployeeIdError("社員番号を入力してください。");
        return;
    }
    //パスワード入力チェック
    if (!password) {
        setPasswordError("パスワードを入力してください。");
        return;
    }
    try {
        const userData = await login(employeeId, password);
        console.log("ログイン成功", userData);
        navigate("/notice");
        setLoginError("");
    } catch (error) {
        if (error instanceof Error) {
            if (error.message === "ユーザーIDまたはパスワードが正しくありません。") {
                setLoginError(error.message);
                return;
            }
        }
        setLoginError("ログインに失敗しました。");
    }
};

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ bgcolor: teal[400] }}>
                </Avatar>
                <Typography variant={"h5"} sx={{ m: "30px" }}>
                    POPLAR
                </Typography>
            </Box>
            <TextField
                label="社員番号"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                variant="standard"
                fullWidth
                required />
            <TextField
                type="password"
                label="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="standard"
                fullWidth
                required
            />

            <Box
                sx={{
                    mt: "100px"
                }}>
                <Button type="submit" color="primary" variant="contained" fullWidth onClick={handleLogin}>
                    ログイン
                </Button>
            </Box>
        </>
    );
};

export default LoginForm;
