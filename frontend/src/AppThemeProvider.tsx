import { ThemeProvider } from "@mui/material/styles";
import { userTheme, adminTheme } from "./theme";
import { useAuth } from "./AuthContext";

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { authUser } = useAuth();

    const theme = authUser?.Role === "Admin"
        ? adminTheme
        : userTheme;

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;