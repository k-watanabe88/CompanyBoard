import { Box } from "@mui/material";
import { useState } from "react";
import Header from "../components/Common/Header";
import SidebarMenu from "../components/Common/SidebarMenu";
import InternalBoardDetail from "../components/InternalBoard/InternalBoardDetail";
import InternalBoardMain from "../components/InternalBoard/InternalBoardMain";
import InternalBoardNewPost from "../components/InternalBoard/InternalBoardNewPost";
import type { InternalBoardData } from "../types/InternalBoardData";

type InternalBoardView = 'main' | 'detail' | 'post';

const InternalBoard = () => {

    const [view, setView] = useState<InternalBoardView>('main')

    const [selectedPost, setSelectedPost] =
        useState<InternalBoardData>();

        const onSearch = () =>{};

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
                        <InternalBoardMain
                            onNoticeClick={(post: InternalBoardData) => {
                                setSelectedPost(post);
                                setView('detail')
                            }}
                            onSearch={onSearch}
                            onPostClick={() => setView('post')}
                        />
                    )}

                    {view === 'detail' && selectedPost &&(
                        <InternalBoardDetail
                            onClose={() => setView('main')}
                            post={selectedPost}

                        />
                    )}

                    {view === 'post' && (
                        <InternalBoardNewPost
                            onClose={() => setView('main')}
                        />
                    )}

                </Box>
            </Box>
        </Box>
    );
};

export default InternalBoard;