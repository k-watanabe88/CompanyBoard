import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import type { TechnicalArticleDetailData } from '../../types/TechnicalArticleDetailData';
import CommentForm from '../Common/CommentForm';
import type { CommentData } from '../../types/CommentData';
import { addTechnicalArticleComment } from '../../services/TechnicalArticleService';
import CommentList from '../Common/CommentList';
import { formatDateTime } from '../../utils/DateUtils';

type TechnicalArticleDetailProps = {
    post: TechnicalArticleDetailData;
    onClose: () => void;
    onBookmarkClick: (postId: number) => void;
    onFavoriteClick: (postId: number) => void;
    loadArticleDetail: (postId: number) => void;
    onDeleteClick: (postId: number) => void;
};

const TechnicalArticleDetail = ({ post, onClose, onBookmarkClick, onFavoriteClick, loadArticleDetail, onDeleteClick }: TechnicalArticleDetailProps) => {
    const handleBookmarkClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        await onBookmarkClick(post.Id);
        await loadArticleDetail(post.Id);
    }

    const handleFavoriteClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        await onFavoriteClick(post.Id);
        await loadArticleDetail(post.Id);
    }

    const sendComment = async (CommentData: CommentData) => {
        await addTechnicalArticleComment(CommentData);
        await loadArticleDetail(post.Id);
    };

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                    mb: 2,
                }}
            >
                <Typography
                    onClick={onClose}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        color: 'primary.main',
                    }}
                >
                    <ArrowBackSharpIcon />
                    戻る
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => onDeleteClick(post.Id)}
                    sx={{
                        borderRadius: 10,
                        px: 3,
                        py: 1,
                    }}
                >
                    <DeleteIcon />
                    削除する
                </Button>
            </Box>
            <Card
                variant="outlined"
                sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    mb: 5,
                }}
            >
                <CardContent>
                    <Box sx={{ textAlign: 'left', mb: 2, px: 2 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography variant="h6" gutterBottom>
                                    {post.Title}
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                >
                                    投稿日時：{formatDateTime(post.CreatedAt)}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    px: 2,
                                    gap: 4
                                }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }} >
                                    <IconButton
                                        color="error"
                                        aria-label="いいね"
                                        onClick={handleFavoriteClick}>
                                        {post.IsFavorite ? (
                                            <FavoriteIcon />
                                        ) : (
                                            <FavoriteBorderIcon />
                                        )}
                                    </IconButton>

                                    <Typography variant="body2">
                                        {post.IsFavoriteCount}
                                    </Typography>
                                </Box>

                                <IconButton
                                    color="primary"
                                    aria-label="ブックマーク"
                                    onClick={handleBookmarkClick}>
                                    {post.IsBookmark ? (
                                        <BookmarkIcon />
                                    ) : (
                                        <BookmarkBorderIcon />
                                    )}
                                </IconButton>
                            </Box>
                        </Box>
                        <Divider sx={{ my: 1.5 }} />
                        <Box sx={{ textAlign: 'left', mb: 2 }}>
                            <Typography variant="body1"
                                gutterBottom
                                sx={{
                                    minHeight: '7.5em',
                                    lineHeight: 1.5,
                                    whiteSpace: 'pre-wrap',
                                }}>
                                {post.Text}
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 1.5 }} />
                    </Box>

                    <CommentList
                        comments={post.Comments}
                    />
                </CardContent>
            </Card>
            <CommentForm 
            sendComment={sendComment}
            postId={post.Id}
            />
        </Box>
    );
};

export default TechnicalArticleDetail;