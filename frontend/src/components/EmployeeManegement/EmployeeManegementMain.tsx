import ArticleIcon from '@mui/icons-material/Article';
import ForumIcon from '@mui/icons-material/Forum';
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import type { EmployeeData } from "../../types/EmployeeData";
import EmployeeManegementList from './EmployeeManegementList';
import EmployeeManegementToolbar from "./EmployeeManegementToolbar";

type EmployeeManegementMainProps = {
    onEditClick: (notice: EmployeeData) => void;
    onRegistClick: () => void;
    onSearch: () => void;
};

const EmployeeManegementMain = ({
    onEditClick,
    onRegistClick,
    onSearch
}: EmployeeManegementMainProps) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center',
                    mb: 3,
                    width: '100%',
                }}
            >
                {/* 左側: アイコン、タイトル、説明文 */}
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 0.5,
                        }}
                    >
                        <ForumIcon sx={{ fontSize: 32, color: '#e91e63' }} />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                color: '#8B0020',
                            }}
                        >
                            社員管理
                        </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        システムを利用する社員のアカウント情報や権限の管理を行います。
                    </Typography>
                </Box>
            </Box>

            <EmployeeManegementToolbar
                onRegistClick={onRegistClick}
            />
            <EmployeeManegementList
                onEditClick={onEditClick}
            />
        </>
    );
};

export default EmployeeManegementMain;