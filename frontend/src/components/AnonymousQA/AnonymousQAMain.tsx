import ArticleIcon from '@mui/icons-material/Article';
import ForumIcon from '@mui/icons-material/Forum';
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import type { AnonymousQAData } from "../../types/AnonymousQAData";
import AnonymousQAPosts from './AnonymousQAPosts';
import AnonymousQAToolbar from "./AnonymousQAToolbar";

type AnonymousQAMainProps = {
    onNoticeClick: (notice: AnonymousQAData) => void;
    onPostClick: () => void;
    onSearch: () => void;
};

const AnonymousQAMain = ({
    onNoticeClick,
    onPostClick,
    onSearch
}: AnonymousQAMainProps) => {

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
                            匿名Q&A
                        </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        日々の学習記録や、些細な気づきを気軽に共有する場所です。
                    </Typography>
                </Box>
            </Box>

            <AnonymousQAToolbar
                onPostClick={onPostClick}
            />
            <AnonymousQAPosts
                onNoticeClick={onNoticeClick}
            />
        </>
    );
};

export default AnonymousQAMain;