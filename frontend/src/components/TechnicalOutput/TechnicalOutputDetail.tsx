import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import type { TechnicalOutputDetailData } from '../../types/TechnicalOutputDetailData';
import CommentForm from '../Common/CommentForm';
import type { CommentData } from '../../types/CommentData';
import { addTechnicalOutputComment } from '../../services/TechnicalOutputService';
import CommentList from '../Common/CommentList';
import { formatDateTime } from '../../utils/DateUtils';

type TechnicalOutputDetailProps = {
    post: TechnicalOutputDetailData;
    onClose: () => void;
    onFavoriteClick: (postId: number) => void;
    loadOutputDetail: (postId: number) => void;
    onDeleteClick: (postId: number) => void;
};

const TechnicalOutputDetail = ({ post, onClose, onFavoriteClick, loadOutputDetail, onDeleteClick }: TechnicalOutputDetailProps) => {

    const handleFavoriteClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        await onFavoriteClick(post.Id);
        await loadOutputDetail(post.Id);
    }

    const sendComment = async (CommentData: CommentData) => {
        await addTechnicalOutputComment(CommentData);
        await loadOutputDetail(post.Id);
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

                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', px: 5 }}>
                                <IconButton

                                    color="error"
                                    aria-label="いいね"
                                    onClick={handleFavoriteClick}
                                >
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
                    {/* コメント一覧 */}
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

export default TechnicalOutputDetail;