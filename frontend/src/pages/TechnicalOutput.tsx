import { Box } from "@mui/material";
import { useState } from "react";
import Header from "../components/Common/Header";
import SidebarMenu from "../components/Common/SidebarMenu";
import TechnicalOutputDetail from "../components/TechnicalOutput/TechnicalOutputDetail";
import TechnicalOutputMain from "../components/TechnicalOutput/TechnicalOutputMain";
import TechnicalOutputNewPost from "../components/TechnicalOutput/TechnicalOutputNewPost";
import type { TechnicalOutputData } from "../types/TechnicalOutputData";

type TechnicalOutputView = 'main' | 'detail' | 'post';

const TechnicalOutput = () => {

    const [view, setView] = useState<TechnicalOutputView>('main')

    const [selectedPost, setSelectedPost] =
        useState<TechnicalOutputData>();

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
                        <TechnicalOutputMain
                            onNoticeClick={(post: TechnicalOutputData) => {
                                setSelectedPost(post);
                                setView('detail')
                            }}
                            onSearch={onSearch}
                            onPostClick={() => setView('post')}
                        />
                    )}

                    {view === 'detail' && selectedPost &&(
                        <TechnicalOutputDetail
                            onClose={() => setView('main')}
                            post={selectedPost}

                        />
                    )}

                    {view === 'post' && (
                        <TechnicalOutputNewPost
                            onClose={() => setView('main')}
                        />
                    )}

                </Box>
            </Box>
        </Box>
    );
};

export default TechnicalOutput;