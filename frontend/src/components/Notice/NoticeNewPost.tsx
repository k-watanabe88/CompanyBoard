import { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    Card,
    CardContent
} from '@mui/material';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import type { NoticeData } from '../../types/NoticeData';

type NoticeNewPostProps = {
    onClose: () => void;
};

//仮情報
function createData(
    employeeId: number,
    department: string,
    name: string,
) {
    return { employeeId, department, name };
}

const NoticeNewPost = ({ onClose }: NoticeNewPostProps) => {

    const [title, setTitle] = useState('');
    const [importance, setImportance] = useState<'通常' | '重要'>('通常');
    const [dueDate, setDueDate] = useState('');
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
                        <Typography variant="h6" gutterBottom>
                            お知らせ新規投稿
                        </Typography>
                        <Divider sx={{ my: 1.5 }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <TextField
                                label="タイトル"
                                required
                                fullWidth
                            />

                            <FormControl>
                                <FormLabel required>重要度</FormLabel>
                                <RadioGroup
                                    row
                                    value={importance}
                                    onChange={(e) =>
                                        setImportance(e.target.value as '通常' | '重要')
                                    }
                                >
                                    <FormControlLabel
                                        value="通常"
                                        control={<Radio />}
                                        label="通常"
                                    />
                                    <FormControlLabel
                                        value="重要"
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
                                    variant="contained"
                                    sx={{
                                        borderRadius: 10,
                                        px: 3,
                                        py: 1,
                                    }}
                                >
                                    投稿
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