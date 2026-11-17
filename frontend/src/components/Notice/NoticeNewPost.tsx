import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from '@mui/material';
import Divider from '@mui/material/Divider';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useState } from 'react';
import type { NoticeNewPostData } from "../../types/NoticeNewPostData"
import { noticeNewPost } from "../../services/NoticeService";

type NoticeNewPostProps = {
    onClose: () => void;
};

const NoticeNewPost = ({ onClose }: NoticeNewPostProps) => {

    const [title, setTitle] = useState('');
    const [importance, setImportance] = useState(false);
    const [dueDate, setDueDate] = useState('');
    const [text, setText] = useState('');

    const handleNewPost = async () => {
        const postData: NoticeNewPostData = {
            Title: title,
            Text: text,
            DueDate: dueDate,
            IsImportant: importance,
        };
        await noticeNewPost(postData);
        onClose();
    }
        

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
                                お知らせ新規投稿
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 1.5 }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <TextField
                                label="タイトル"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                helperText={`${title.length}/100文字（5文字以上）`}
                                required
                                fullWidth
                            />

                            <FormControl>
                                <FormLabel required>重要度</FormLabel>
                                <RadioGroup
                                    row
                                    value={importance ? 'true' : 'false'}
                                    onChange={(e) =>
                                        setImportance(e.target.value === 'true')
                                    }
                                >
                                    <FormControlLabel
                                        value='false'
                                        control={<Radio />}
                                        label="通常"
                                    />
                                    <FormControlLabel
                                        value='true'
                                        control={<Radio />}
                                        label="重要"
                                    />
                                </RadioGroup>
                            </FormControl>

                            <TextField
                                label="対応期限"
                                type="date"
                                required
                                fullWidth
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                slotProps={{
                                    inputLabel: { shrink: true },
                                }}
                            />

                            <TextField
                                label="本文"
                                required
                                fullWidth
                                multiline
                                minRows={8}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                helperText={`${text.length}/1000文字（5文字以上）`}
                                error={text.trim().length > 0 && text.trim().length < 5}
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
                                    onClick={handleNewPost}
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

export default NoticeNewPost;