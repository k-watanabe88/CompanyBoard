import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SidebarMenu from "../components/Common/SidebarMenu";
import NoticeDetail from "../components/Notice/NoticeDetail";
import NoticeMain from "../components/Notice/NoticeMain";
import NoticeNewPost from "../components/Notice/NoticeNewPost";
import { getNoticeData, getNoticeDetail } from "../services/NoticeService";
import type { NoticeData } from "../types/NoticeData";
import type { NoticeDetailData } from "../types/NoticeDetailData";
import type { SortMode } from "../types/SortMode";
import { getDisplayNoticeList } from "../utils/NoticeUtils";

type NoticeView = 'main' | 'detail' | 'post';

const Notice = () => {

    const [view, setView] = useState<NoticeView>('main')
    const [error, setError] = useState("");
    const [selectedTab, setSelectedTab] = useState(0);
    const [sortMode, setSortMode] = useState<SortMode>('newest');

    useEffect(() => { window.scrollTo({ top: 0 }); }, [view]);

    const [noticeList, setNoticeList] =
        useState<NoticeData[]>([]);

    const [noticeDetail, setNoticeDetail] =
        useState<NoticeDetailData | null>(null);

    const onNoticeClick = async (postId: number) => {
        try {
            const data = await getNoticeDetail(postId);

            setNoticeDetail(data);
            setView('detail');
            window.scrollTo({ top: 0 });
        } catch (error) {
            console.error(error);
        }
    };

    const loadNotice = async () => {
        try {
            const data = await getNoticeData();
            setNoticeList(data);
            console.log(data);
        } catch (error) {
            setError("情報の取得に失敗しました");
        }
    };

    const displayList = getDisplayNoticeList(
        noticeList,
        selectedTab,
        sortMode
    );

    useEffect(() => {
        if (view === 'main') {
            loadNotice();
        }
    }, [view]);

    return (
        <Box>
            <header>
                <Header />
            </header>
            <Box
                sx={{
                    display: 'flex',
                    minHeight: 'calc(100vh - 64px)',
                }}
            >
                <SidebarMenu />

                <Box
                    sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        ml: '300px',
                        p: 3,
                    }}
                >

                    {view === 'main' && (
                        <NoticeMain
                            onNoticeClick={onNoticeClick}
                            onPostClick={() => setView('post')}
                            noticeList={displayList}
                            selectedTab={selectedTab}
                            onTabChange={setSelectedTab}
                            sortMode={sortMode}
                            onSortChange={setSortMode}
                        />
                    )}

                    {view === 'detail' && noticeDetail && (
                        <NoticeDetail
                            onClose={() => setView('main')}
                            notice={noticeDetail}

                        />
                    )}

                    {view === 'post' && (
                        <NoticeNewPost
                            onClose={() => setView('main')}
                        />
                    )}

                </Box>
            </Box>
        </Box>
    );
};

export default Notice;