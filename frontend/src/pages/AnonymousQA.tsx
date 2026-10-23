import { Box } from "@mui/material";
import { useState } from "react";
import Header from "../components/Common/Header";
import SidebarMenu from "../components/Common/SidebarMenu";
import AnonymousQADetail from "../components/AnonymousQA/AnonymousQADetail";
import AnonymousQAMain from "../components/AnonymousQA/AnonymousQAMain";
import AnonymousQANewPost from "../components/AnonymousQA/AnonymousQANewPost";
import type { AnonymousQAData } from "../types/AnonymousQAData";

type AnonymousQAView = 'main' | 'detail' | 'post';

const AnonymousQA = () => {

    const [view, setView] = useState<AnonymousQAView>('main')

    const [selectedPost, setSelectedPost] =
        useState<AnonymousQAData>();

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
                        <AnonymousQAMain
                            onNoticeClick={(post: AnonymousQAData) => {
                                setSelectedPost(post);
                                setView('detail')
                            }}
                            onSearch={onSearch}
                            onPostClick={() => setView('post')}
                        />
                    )}

                    {view === 'detail' && selectedPost &&(
                        <AnonymousQADetail
                            onClose={() => setView('main')}
                            post={selectedPost}

                        />
                    )}

                    {view === 'post' && (
                        <AnonymousQANewPost
                            onClose={() => setView('main')}
                        />
                    )}

                </Box>
            </Box>
        </Box>
    );
};

export default AnonymousQA;