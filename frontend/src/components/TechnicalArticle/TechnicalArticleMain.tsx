import ArticleIcon from '@mui/icons-material/Article';
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import type { TechnicalArticleData } from "../../types/TechnicalArticleData";
import SearchBar from "../Common/SearchBar";
import TechnicalArticlePosts from "./TechnicalArticlePosts";
import TechnicalArticleToolbar from "./TechnicalArticleToolbar";

type TechnicalArticleMainProps = {
    onNoticeClick: (notice: TechnicalArticleData) => void;
    onPostClick: () => void;
    onSearch: () => void;
};

const TechnicalArticleMain = ({
    onNoticeClick,
    onPostClick,
    onSearch
}: TechnicalArticleMainProps) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
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
                            技術記事
                        </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        部署を超えた雑談や企画アイデア、相談を自由に投稿する場所です。
                    </Typography>
                </Box>

                {/* 右側: 検索バー */}
                <Box sx={{ minWidth: 300 }}>
                    <SearchBar onSearch={onSearch} />
                </Box>
            </Box>

            <TechnicalArticleToolbar
                onPostClick={onPostClick}
            />
            <TechnicalArticlePosts
                onNoticeClick={onNoticeClick}
            />
        </>
    );
};

export default TechnicalArticleMain;