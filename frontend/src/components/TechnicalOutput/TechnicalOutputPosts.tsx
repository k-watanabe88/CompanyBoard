import { Box, Card, CardActionArea, CardContent, Divider, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonIcon from '@mui/icons-material/Person';
import type { TechnicalOutputData } from '../../types/TechnicalOutputData';

type TechnicalOutputPostsProps = {
    onNoticeClick: (TechnicalOutput: TechnicalOutputData) => void;
};

const post: TechnicalOutputData = {
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

const TechnicalOutputPosts = ({ onNoticeClick }: TechnicalOutputPostsProps) => {
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
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 2,
                                mb: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    minWidth: 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bgcolor: '#F0F0F0',
                                        borderRadius: 1.5,
                                        p: 1,
                                        flexShrink: 0,
                                    }}
                                >
                                    <DescriptionOutlinedIcon
                                        sx={{ color: '#555555' }}
                                    />
                                </Box>

                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        overflowWrap: 'anywhere',
                                    }}
                                >
                                    投稿タイトル
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexShrink: 0,
                                }}
                            >
                                    <IconButton
                                        onClick={handleLikeClick}
                                        color="error"
                                        aria-label="いいね"
                                        size="small"
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

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 2,
                                mt: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    minWidth: 0,
                                }}
                            >
                                <PersonIcon
                                    sx={{ color: 'text.secondary', fontSize: 20 }}
                                />

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    田中
                                </Typography>
                            </Box>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ whiteSpace: 'nowrap' }}
                            >
                                2026/10/01
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default TechnicalOutputPosts;