import ArticleIcon from '@mui/icons-material/Article';
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import type { TechnicalOutputData } from "../../types/TechnicalOutputData";
import TechnicalOutputPosts from './TechnicalOutputPosts';
import TechnicalOutputToolbar from "./TechnicalOutputToolbar";

type TechnicalOutputMainProps = {
    onNoticeClick: (notice: TechnicalOutputData) => void;
    onPostClick: () => void;
    onSearch: () => void;
};

const TechnicalOutputMain = ({
    onNoticeClick,
    onPostClick,
    onSearch
}: TechnicalOutputMainProps) => {

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
                        <ArticleIcon sx={{ fontSize: 32, color: '#e91e63' }} />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                color: '#8B0020',
                            }}
                        >
                            技術アウトプット
                        </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        日々の学習記録や、些細な気づきを気軽に共有する場所です。
                    </Typography>
                </Box>
            </Box>

            <TechnicalOutputToolbar
                onPostClick={onPostClick}
            />
            <TechnicalOutputPosts
                onNoticeClick={onNoticeClick}
            />
        </>
    );
};

export default TechnicalOutputMain;