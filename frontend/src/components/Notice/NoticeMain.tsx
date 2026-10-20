import { Box, Modal } from "@mui/material";
import CampaignIcon from '@mui/icons-material/Campaign';
import NoticeToolbar from "./NoticeToolbar";
import NoticeAllPosts from "./NoticeAllPosts";
import Typography from "@mui/material/Typography";
import type { NoticeData } from "../../types/NoticeData";

type NoticeMainProps = {
    onNoticeClick: (notice: NoticeData) => void;
    onPostClick: () => void;
};

const NoticeMain = ({
    onNoticeClick,
    onPostClick,
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
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        お知らせ
                    </Typography>
                </Box>

                <Typography color="text.secondary">
                    会社全体の通知や、確認期限のある重要な連絡事項を共有・確認する場所です。
                </Typography>
            </Box>

            <NoticeToolbar
                onPostClick={onPostClick}
            />
            <NoticeAllPosts
                onNoticeClick={onNoticeClick}
            />
        </>
    );
};

export default NoticeMain;