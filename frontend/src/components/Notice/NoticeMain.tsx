import CampaignIcon from '@mui/icons-material/Campaign';
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import type { NoticeData } from "../../types/NoticeData";
import type { SortMode } from "../../types/SortMode";
import NoticePosts from "./NoticePosts";
import NoticeToolbar from "./NoticeToolbar";

type NoticeMainProps = {
    onNoticeClick: (postId: number) => void;
    onPostClick: () => void;
    noticeList: NoticeData[];
    selectedTab: number;
    onTabChange: (value: number) => void;
    sortMode: SortMode;
    onSortChange: (value: SortMode) => void;
};

const NoticeMain = ({
    onNoticeClick,
    onPostClick,
    noticeList,
    selectedTab,
    onTabChange,
    sortMode,
    onSortChange
}: NoticeMainProps) => {

    return (
        <>
            <Box sx={{ textAlign: 'left', mb: 3 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <CampaignIcon sx={{ fontSize: 36, color: '#e91e63' }} />
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 'bold',
                            color: '#8B0020',
                        }}
                    >
                        お知らせ
                    </Typography>
                </Box>

                <Typography variant="body2" color="text.secondary">
                    会社全体の通知や、確認期限のある重要な連絡事項を共有・確認する場所です。
                </Typography>
            </Box>

            <NoticeToolbar
                onPostClick={onPostClick}
                selectedTab={selectedTab}
                onTabChange={onTabChange}
                sortMode={sortMode}
                onSortChange={onSortChange}
            />
            <NoticePosts
                onNoticeClick={onNoticeClick}
                noticeList={noticeList}
            />
        </>
    );
};

export default NoticeMain;