import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Box, Button, Card, CardContent, Collapse, IconButton, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import type { Comment } from '../../types/Comment';
import CommentForm from '../Common/CommentForm';

type TechnicalArticleCommentProps = {
    comments: Comment[];
    };

const TechnicalArticleComment = ({ comments }: TechnicalArticleCommentProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box sx={{ width: '100%' }}>
            {/* 見出し */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #D9DEE5',
                    pb: 2,
                    mb: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: '#B51F43',
                    }}
                >
                    <CommentIcon sx={{ fontSize: 27 }} />
                    <Typography
                        sx={{ fontSize: 20, fontWeight: 'bold' }}
                    >
                        コメント一覧 ({comments.length})
                    </Typography>
                </Box>

                <Box
                    onClick={() => setIsOpen((prev) => !prev)}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        color: '#4B5563',
                        userSelect: 'none',
                    }}
                >
                    <Typography sx={{ fontSize: 14 }}>
                        {isOpen ? '詳細を閉じる' : '詳細を開く'}
                    </Typography>
                    <IconButton size="small">
                        {isOpen ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </Box>
            </Box>

            {/* コメント一覧 */}
            <Collapse in={isOpen}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {comments.map((comment) => (
                        <Box
                            key={comment.Id}
                            sx={{
                                bgcolor: '#F6F7F9',
                                borderRadius: '16px',
                                px: 2,
                                py: 2,
                            }}
                        >
                            {/* 投稿者・日時 */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'left',
                                    justifyContent: 'space-between',
                                    gap: 2,
                                    mb: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                    }}
                                >
                                    <PersonIcon
                                        sx={{
                                            color: '#ED7D31',
                                            fontSize: 20,
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            color: '#365574',
                                        }}
                                    >
                                        {comment.CommentUserName}
                                    </Typography>
                                </Box>

                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        color: '#365574',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {comment.CreatedAt}
                                </Typography>
                            </Box>

                            {/* コメント本文 */}
                            <Typography
                                sx={{
                                    fontSize: 16,
                                    color: '#172B45',
                                    whiteSpace: 'pre-wrap',
                                    overflowWrap: 'anywhere',
                                }}
                            >
                                {comment.Text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Collapse>
        </Box>
    );
};

export default TechnicalArticleComment;