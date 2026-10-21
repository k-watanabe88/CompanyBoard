
import { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Card,
    CardContent
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const CommentForm = () => {
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        if (!comment.trim()) return;

        console.log('送信コメント:', comment);

        setComment('');
    };

    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    mb: 5,
                }}
            >
                <CardContent>
                    <Typography
                        sx={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            lineHeight: 1.4,
                            textAlign: 'left',
                        }}
                    >
                        コメントする
                    </Typography>

                    <TextField
                        multiline
                        minRows={5}
                        fullWidth
                        placeholder="コメントを入力してください"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                bgcolor: '#F6F7F9',
                                borderRadius: '6px',
                                padding: '10px 12px',
                                alignItems: 'flex-start',
                                '& fieldset': {
                                    border: 'none',
                                },
                                '&:hover fieldset': {
                                    border: 'none',
                                },
                                '&.Mui-focused fieldset': {
                                    border: 'none',
                                },
                            },
                            '& .MuiInputBase-input': {
                                fontSize: 14,
                                color: '#365574',
                            },
                        }}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            mt: 1,
                        }}
                    >
                        <Button
                            variant="outlined"
                            onClick={handleSubmit}
                            disabled={!comment.trim()}
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
                </CardContent>
            </Card>
        </>
    );
};

export default CommentForm;
