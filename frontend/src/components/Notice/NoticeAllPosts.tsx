import React from 'react';
import { Box, Card, CardContent, CardActionArea, Typography, Checkbox, Chip, FormControlLabel, Modal } from '@mui/material';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import type { NoticeData } from '../../types/NoticeData';

type NoticeAllPostsProps = {
    onNoticeClick: (notice: NoticeData) => void;
};

const notice: NoticeData = {
    Id: 1,
    Title: '投稿タイトル',
    Text: 'お知らせ本文',
    CreatedAt: new Date('2026-10-01'),
    DueDate: new Date('2026-10-15'),
    IsImportant: true,
    IsChecked: true,
};

const NoticeAllPosts = ({ onNoticeClick }: NoticeAllPostsProps) => {

    const isChecked = true; // This is a placeholder. You can replace it with your actual logic to determine if the checkbox should be checked.

    return (
        <Box>
            <Card
                variant="outlined"
                onClick={() => onNoticeClick(notice)}
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
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 5.0 }}>
                                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                    期限：2026/10/15
                                </Typography>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={isChecked}
                                            onChange={() => { }}
                                            sx={{ pointerEvents: 'none' }}
                                        />
                                    }
                                    label="確認済み"
                                />
                            </Box>
                        </Box>
                        <Divider sx={{ my: 1.5 }} />

                        <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', px: 2, gap: 2 }}>
                            <Chip
                                icon={<CheckCircleIcon />}
                                label="確認済み: 2名"
                                size="medium"
                                sx={{
                                    bgcolor: '#E8F8F1',
                                    color: '#00875A',
                                    fontWeight: 'bold',
                                    '& .MuiChip-icon': {
                                        color: '#00996B',
                                    },
                                }}
                            />

                            <Chip
                                icon={<RemoveCircleIcon />}
                                label="未確認: 10名"
                                size="medium"
                                sx={{
                                    bgcolor: '#FFF5E5',
                                    color: '#B86B00',
                                    fontWeight: 'bold',
                                    '& .MuiChip-icon': {
                                        color: '#D98200',
                                    },
                                }}
                            />
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default NoticeAllPosts;