import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box, Card, CardActionArea, CardContent, Checkbox, Chip, FormControlLabel, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import type { NoticeData } from '../../types/NoticeData';

type NoticePostsProps = {
    onNoticeClick: (postId: number) => void;
    noticeList: NoticeData[];
};

const NoticePosts = ({ onNoticeClick, noticeList }: NoticePostsProps) => {

    return (
        <Box>
            {noticeList.map((notice) => (
                <Card
                    key={notice.Id}
                    variant="outlined"
                    onClick={() => onNoticeClick(notice.Id)}
                    sx={{
                        borderRadius: 2,
                        overflow: 'hidden',
                    }}
                >
                    <CardActionArea>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 10.0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.0 }}>
                                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                            {notice.CreatedAt.split('T')[0]}
                                        </Typography>
                                        <Box sx={{ width: 60 }}>
                                            {notice.IsImportant && (
                                                <Chip
                                                    label="重要"
                                                    size="medium"
                                                    sx={{
                                                        bgcolor: '#E8F8F1',
                                                        color: '#c22424',
                                                        fontWeight: 'bold',
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </Box>
                                    <Typography variant="h6" gutterBottom>
                                        {notice.Title}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 5.0 }}>
                                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                        {`期限 ${notice.DueDate.split('T')[0]}`}
                                    </Typography>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={notice.IsChecked}
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
                                    label={`確認済み: ${notice.CheckedCount}名`}
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
                                    label={`未確認: ${notice.UncheckedCount}名`}
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
            ))}
        </Box>
    );
};

export default NoticePosts;