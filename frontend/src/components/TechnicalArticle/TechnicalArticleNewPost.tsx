import { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Card,
    CardContent
} from '@mui/material';
import Divider from '@mui/material/Divider';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SendIcon from '@mui/icons-material/Send';

type TechnicalArticleNewPostProps = {
    onClose: () => void;
};

const TechnicalArticleNewPost = ({ onClose }: TechnicalArticleNewPostProps) => {

    const [body, setBody] = useState('');

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
                    ← 戻る
                </Typography>
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
                                alignItems: 'center',
                                gap: 1,
                                mb: 0.5,
                            }}
                        >
                            <PostAddIcon sx={{ fontSize: 32, color: '#e91e63' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#8B0020',
                                }}
                            >
                                新規投稿
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 1.5 }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <TextField
                                label="タイトル"
                                required
                                fullWidth
                            />

                            <TextField
                                label="本文"
                                required
                                fullWidth
                                multiline
                                minRows={8}
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                helperText={`${body.length}/1000文字（5文字以上）`}
                                error={body.trim().length > 0 && body.trim().length < 5}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    gap: 2,
                                    mt: 1,
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    startIcon={<SendIcon />}
                                    sx={{
                                        width: 156,
                                        height: 44,
                                        borderRadius: '24px',
                                        border: '2px solid #FF812D',
                                        color: '#F47721',
                                        fontSize: 15,
                                        fontWeight: 'bold',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.12)',
                                        '&:hover': {
                                            border: '2px solid #F47721',
                                            bgcolor: '#FFF5EE',
                                        },
                                        '&.Mui-disabled': {
                                            border: '2px solid #FFD0B2',
                                            color: '#EAB18D',
                                        },
                                    }}
                                >
                                    送信
                                </Button>
                            </Box>
                        </Box >
                    </Box>
                </CardContent>
            </Card>
        </Box>


    );
};

export default TechnicalArticleNewPost;