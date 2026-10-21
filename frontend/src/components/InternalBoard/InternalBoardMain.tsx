import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import type { InternalBoardData } from "../../types/InternalBoardData";
import SearchBar from "../Common/SearchBar";
import InternalBoardPosts from "./InternalBoardPosts";
import InternalBoardToolbar from "./InternalBoardToolBar";

type InternalBoardMainProps = {
    onNoticeClick: (notice: InternalBoardData) => void;
    onPostClick: () => void;
    onSearch: () => void;
};

const InternalBoardMain = ({
    onNoticeClick,
    onPostClick,
    onSearch
}: InternalBoardMainProps) => {

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
                        <ContentPasteIcon sx={{ fontSize: 32, color: '#e91e63' }} />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                color: '#8B0020',
                            }}
                        >
                            全社掲示板
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

            <InternalBoardToolbar
                onPostClick={onPostClick}
            />
            <InternalBoardPosts
                onNoticeClick={onNoticeClick}
            />
        </>
    );
};

export default InternalBoardMain;