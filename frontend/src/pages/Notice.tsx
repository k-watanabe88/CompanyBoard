import { Box } from "@mui/material";
import { useState } from "react";
import Header from "../components/Common/Header";
import SidebarMenu from "../components/Common/SidebarMenu";
import NoticeDetail from "../components/Notice/NoticeDetail";
import NoticeMain from "../components/Notice/NoticeMain";
import NoticeNewPost from "../components/Notice/NoticeNewPost";
import type { NoticeData } from "../types/NoticeData";

type NoticeView = 'main' | 'detail' | 'post';

const Notice = () => {

    const [view, setView] = useState<NoticeView>('main')

    const [selectedNotice, setSelectedNotice] =
        useState<NoticeData>();

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
                            onNoticeClick={(notice: NoticeData) => {
                                setSelectedNotice(notice);
                                setView('detail')
                            }}
                            onPostClick={() => setView('post')}
                        />
                    )}

                    {view === 'detail' && selectedNotice &&(
                        <NoticeDetail
                            onClose={() => setView('main')}
                            notice={selectedNotice}

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