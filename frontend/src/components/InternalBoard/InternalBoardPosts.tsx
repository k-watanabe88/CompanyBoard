import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Card, CardActionArea, CardContent, Divider, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import type { InternalBoardData } from '../../types/InternalBoardData';

type InternalBoardPostsProps = {
    onNoticeClick: (notice: InternalBoardData) => void;
};

const post: InternalBoardData = {
    id: 1,
    title: 'タイトル',
    text: 'Test',
    postUserName: '田中',
    createdAt: '2026/10/10',
    isFavorite: true,
    isFavoriteCount: 5,
    comments: [
        {
            id: 1,
            commentUserName: '佐藤',
            text: '参考になる情報をありがとうございます！',
            createdAt: '2026/10/10 10:30',
        },
        {
            id: 2,
            commentUserName: '鈴木',
            text: 'こちらの内容について、もう少し詳しく教えていただけますか？',
            createdAt: '2026/10/10 11:15',
        },
        {
            id: 3,
            commentUserName: '山田',
            text: '確認しました。私の環境でも同じ動作を確認できました。',
            createdAt: '2026/10/10 13:45',
        },
        {
            id: 4,
            commentUserName: '高橋',
            text: '補足ですが、関連する資料も共有しておきます。',
            createdAt: '2026/10/10 15:20',
        },
    ],
};

const InternalBoardPosts = ({ onNoticeClick }: InternalBoardPostsProps) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.stopPropagation();
        setIsLiked((prev) => !prev);
    };

    return (
        <Box>
            <Card
                variant="outlined"
                onClick={() => onNoticeClick(post)}
                sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                }}
            >
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 10.0 }}>
                                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                    2026/10/01
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    投稿タイトル
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', px: 5 }}>
                                <IconButton
                                    onClick={handleLikeClick}
                                    color="error"
                                    aria-label="いいね"
                                >
                                    {isLiked ? (
                                        <FavoriteIcon />
                                    ) : (
                                        <FavoriteBorderIcon />
                                    )}
                                </IconButton>
                                <Typography variant="body2">
                                    1
                                </Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ my: 1.5 }} />

                        <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', px: 2, gap: 2 }}>
                            <Typography variant="body2">
                                投稿者：田中
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default InternalBoardPosts;