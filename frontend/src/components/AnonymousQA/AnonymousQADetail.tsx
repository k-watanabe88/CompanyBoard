import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Card, CardContent, Collapse, IconButton, Typography, Chip } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import type { AnonymousQAData } from '../../types/AnonymousQAData';
import AnonymouQAAnserForm from './AnonymouQAAnserForm';

type AnonymousQADetailProps = {
    post: AnonymousQAData;
    onClose: () => void;
};

const AnonymousQADetail = ({ post, onClose }: AnonymousQADetailProps) => {
    const [isOpen, setIsOpen] = useState(false);
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
                        cursor: 'pointer',
                        color: 'primary.main',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    ← 一覧へ戻る
                </Typography>
                <Button
                    variant="contained"
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
                                <Chip
                                    label="未解決"
                                    size="small"
                                    sx={{
                                        color: '#E53945',
                                        backgroundColor: '#FCEBEC',
                                        border: '1px solid #FFB8BE',
                                        borderRadius: '20px',
                                        height: 30,
                                        minWidth: 70,
                                        fontSize: 12,
                                        fontWeight: 600,
                                        mb: 2
                                    }}
                                />
                                <Typography variant="h6" gutterBottom>
                                    {post.title}
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                >
                                    投稿日時：{post.createdAt}
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center',  }}>
                                <Button
                                    variant="outlined"
                                    startIcon={<CheckIcon />}
                                    sx={{
                                        color: '#008577',
                                        borderColor: '#008577',
                                        borderRadius: '28px',
                                        width: 170,
                                        px: 2,
                                        py: 1,
                                        fontSize: 14,
                                        fontWeight: 600,
                                        lineHeight: 1.4,
                                        whiteSpace: 'normal',
                                        '&:hover': {
                                            borderColor: '#008577',
                                            backgroundColor: 'rgba(0, 133, 119, 0.04)',
                                        },
                                    }}
                                >
                                    解決済みにする
                                </Button>
                            </Box>
                        </Box>
                        <Divider sx={{ my: 1.5 }} />
                        <Box sx={{ textAlign: 'left', mb: 2 }}>
                            <Typography variant="body1" gutterBottom>
                                {post.text}
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 1.5 }} />
                    </Box>

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
                                    回答 (2)
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
                                {post.comments.map((comment) => (
                                    <Box
                                        key={comment.id}
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
                                                alignItems: 'center',
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
                                                    {comment.commentUserName}
                                                </Typography>
                                            </Box>

                                            <Typography
                                                sx={{
                                                    fontSize: 14,
                                                    color: '#365574',
                                                    whiteSpace: 'nowrap',
                                                }}
                                            >
                                                {comment.createdAt}
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
                                            {comment.text}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Collapse>
                    </Box>
                </CardContent>
            </Card>
            <AnonymouQAAnserForm />
        </Box>
    );
};

export default AnonymousQADetail;