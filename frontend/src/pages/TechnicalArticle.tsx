import { Box } from "@mui/material";
import { useState } from "react";
import Header from "../components/Common/Header";
import SidebarMenu from "../components/Common/SidebarMenu";
import TechnicalArticleDetail from "../components/TechnicalArticle/TechnicalArticleDetail";
import TechnicalArticleMain from "../components/TechnicalArticle/TechnicalArticleMain";
import TechnicalArticleNewPost from "../components/TechnicalArticle/TechnicalArticleNewPost";
import type { TechnicalArticleData } from "../types/TechnicalArticleData";

type TechnicalArticleView = 'main' | 'detail' | 'post';

const TechnicalArticle = () => {

    const [view, setView] = useState<TechnicalArticleView>('main')

    const [selectedPost, setSelectedPost] =
        useState<TechnicalArticleData>();

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
                        <TechnicalArticleMain
                            onNoticeClick={(post: TechnicalArticleData) => {
                                setSelectedPost(post);
                                setView('detail')
                            }}
                            onSearch={onSearch}
                            onPostClick={() => setView('post')}
                        />
                    )}

                    {view === 'detail' && selectedPost &&(
                        <TechnicalArticleDetail
                            onClose={() => setView('main')}
                            post={selectedPost}

                        />
                    )}

                    {view === 'post' && (
                        <TechnicalArticleNewPost
                            onClose={() => setView('main')}
                        />
                    )}

                </Box>
            </Box>
        </Box>
    );
};

export default TechnicalArticle;