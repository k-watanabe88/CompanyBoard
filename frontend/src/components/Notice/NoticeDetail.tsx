import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Box, Button, Card, CardContent, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import type { NoticeDetailData } from '../../types/NoticeDetailData';
import { useState } from 'react';


type NoticeDetailProps = {
    notice: NoticeDetailData;
    onClose: () => void;
    onDeleteClick: (postId: number) => void;
};

const NoticeDetail = ({ notice, onClose, onDeleteClick }: NoticeDetailProps) => {

    const [isChecked, setIsChecked] = useState(notice.IsChecked);

    const handleNoticeCheck = async () => {
    try {
        const response = await fetch(
            "http://localhost:7133/api/Notice/Check",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    postId: notice.Id
                })
            }
        );

        if (!response.ok) {
            throw new Error("確認状態の更新に失敗しました。");
        }

        setIsChecked(true);

    } catch (error) {
        console.error(error);
    }
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
                    onClick={() => onDeleteClick(notice.Id)}
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
                        <Typography variant="h6" gutterBottom>
                            {notice.Title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 5.0 }}>
                            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                投稿日時：{notice.CreatedAt.split('T')[0]}
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                確認期限：{notice.DueDate.split('T')[0]}
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 1.5 }} />
                        <Box sx={{ textAlign: 'left', mb: 2 }}>
                            <Typography variant="body1" gutterBottom>
                                {notice.Text}
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 1.5 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: 10,
                                    bgcolor: 'white',
                                    border: '1px solid #0a4724',
                                    color: '#0a4724',                                   
                                    py: 1,
                                }}
                            >
                                <Checkbox
                                    checked={isChecked}
                                    disabled={isChecked}
                                    onChange={handleNoticeCheck}
                                />
                                確認しました
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            <Card
                variant="outlined"
                sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    mb: 5,
                }}
            >
                <CardContent>
                    <Box sx={{ textAlign: 'left', gap: 2 }}>
                        <Typography sx={{ fontWeight: 'bold',color: 'text.secondary', }} >
                            未確認ユーザー一覧
                        </Typography>
                        <Divider sx={{ my: 1.5 }} />
                    </Box>
                    <TableContainer >
                        <Table
                            sx={{
                                minWidth: 600,
                                tableLayout: 'fixed',
                            }}
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ width: '10%' }}>
                                        社員ID
                                    </TableCell>
                                    <TableCell align="left" sx={{ width: '10%' }}>
                                        部署
                                    </TableCell>
                                    <TableCell align="left" sx={{ width: '50%' }}>
                                        名前
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {notice.UnconfirmedUserList.map((user) => (
                                    <TableRow
                                        key={user.EmployeeId}
                                        sx={{
                                            '&:last-child td, &:last-child th': {
                                                border: 0,
                                            },
                                        }}
                                    >
                                        <TableCell>{user.EmployeeId}</TableCell>
                                        <TableCell align="left">{user.Department}</TableCell>
                                        <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                            {user.UserName}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    );
};

export default NoticeDetail;