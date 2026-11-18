import { useEffect } from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import Header from "../components/Common/Header";
import SidebarMenu from "../components/Common/SidebarMenu";
import TechnicalArticleDetail from "../components/TechnicalArticle/TechnicalArticleDetail";
import TechnicalArticleMain from "../components/TechnicalArticle/TechnicalArticleMain";
import TechnicalArticleNewPost from "../components/TechnicalArticle/TechnicalArticleNewPost";
import type { TechnicalArticleData } from "../types/TechnicalArticleData";
import type { TechnicalArticleDetailData } from "../types/TechnicalArticleDetailData";
import { getArticleData } from "../services/TechnicalArticleService";
import { getDisplayTechnicalArticleList } from "../utils/TechnicalArticleUtils";

type TechnicalArticleView = 'main' | 'detail' | 'post';

const TechnicalArticle = () => {

    const [view, setView] = useState<TechnicalArticleView>('main')
     const [error, setError] = useState("");
    const [selectedTab, setSelectedTab] = useState(0);
    const [articleList, setArticleList] =
        useState<TechnicalArticleData[]>([]);
    const [selectedArticle, setSelectedArticle] =useState<TechnicalArticleDetailData>();

    useEffect(() => { window.scrollTo({ top: 0 }); }, [view]);
    
    const onArticleClick = async (postId: number) => {
        try {
            //const data = await getArticleDetail(postId);
            //setSelectedArticle(data);
            setView('detail');
            window.scrollTo({ top: 0 });
        } catch (error) {
            console.error(error);
        }
    };

    const loadArticle = async () => {
        try {
            const data = await getArticleData();
            setArticleList(data);
            console.log(data);
        } catch (error) {
            setError("情報の取得に失敗しました");
        }
    };

    const displayList = getDisplayTechnicalArticleList(
        articleList,
        selectedTab
    );

    useEffect(() => {
        if (view === 'main') {
            loadArticle();
        }
    }, [view]);
    
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
                            onArticleClick={onArticleClick}
                            onSearch={onSearch}
                            onPostClick={() => setView('post')}
                            articleList={displayList}
                            selectedTab={selectedTab}
                            onTabChange={setSelectedTab}
                        />
                    )}

                    {view === 'detail' && selectedArticle &&(
                        <TechnicalArticleDetail
                            onClose={() => setView('main')}
                            post={selectedArticle}

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