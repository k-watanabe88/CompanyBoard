import { useEffect } from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import Header from "../components/Common/Header";
import SidebarMenu from "../components/Common/SidebarMenu";
import TechnicalOutputDetail from "../components/TechnicalOutput/TechnicalOutputDetail";
import TechnicalOutputMain from "../components/TechnicalOutput/TechnicalOutputMain";
import TechnicalOutputNewPost from "../components/TechnicalOutput/TechnicalOutputNewPost";
import type { TechnicalOutputData } from "../types/TechnicalOutputData";
import type { TechnicalOutputDetailData } from "../types/TechnicalOutputDetailData";
import { getOutputData, getOutputDetail, toggleFavoriteOutput, deleteTechnicalOutput } from "../services/TechnicalOutputService";

type TechnicalOutputView = 'main' | 'detail' | 'post';

const TechnicalOutput = () => {

    const [view, setView] = useState<TechnicalOutputView>('main');
    const [error, setError] = useState("");
    const [outputList, setOutputList] =
        useState<TechnicalOutputData[]>([]);
    const [selectedOutput, setSelectedOutput] =useState<TechnicalOutputDetailData>();

    useEffect(() => { window.scrollTo({ top: 0 }); }, [view]);
    
    const handleOutputClick = async (postId: number) => {
        try {
            const data = await getOutputDetail(postId);
            setSelectedOutput(data);
            setView('detail');
            window.scrollTo({ top: 0 });
        } catch (error) {
            console.error(error);
        }
    };

    const loadOutput = async () => {
        try {
            const data = await getOutputData();
            setOutputList(data);
            console.log(data);
        } catch (error) {
            setError("情報の取得に失敗しました");
        }
    };

    const loadOutputDetail = async (postId: number) => {
        try {
            const data = await getOutputDetail(postId);
            setSelectedOutput(data);
        } catch (error) {
            setError("情報の取得に失敗しました");
        }
    };

    useEffect(() => {
        if (view === 'main') {
            loadOutput();
        }
    }, [view]);

    const handleFavoriteClick = async (postId: number) => {
        await toggleFavoriteOutput(postId);
        await loadOutput(); // お気に入り状態を更新するために記事リストを再読み込み
    }

    const handleDeleteClick = async (postId: number) => {
        try {
            await deleteTechnicalOutput(postId);
            await loadOutput(); // 記事リストを再読み込み
            setView('main'); // メインビューに戻る
            setSelectedOutput(undefined); // 選択された記事をクリア
        } catch (error) {
            console.error(error);
        }
    };

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
                            onOutputClick={handleOutputClick}
                            onPostClick={() => setView('post')}
                            outputList={outputList}
                            onFavoriteClick={handleFavoriteClick}
                        />
                    )}

                    {view === 'detail' && selectedOutput &&(
                        <TechnicalOutputDetail
                            onClose={() => setView('main')}
                            post={selectedOutput}
                            onFavoriteClick={handleFavoriteClick}
                            loadOutputDetail={loadOutputDetail}
                            onDeleteClick={handleDeleteClick}
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