import React from 'react';
import { Box, Card, CardContent, Typography, Checkbox, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import type { NoticeData } from '../../types/NoticeData';

type NoticeDetailProps = {
    notice: NoticeData;
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
const rows = [
    createData(1, '開発部', '田中'),
    createData(2, '営業部', '鈴木')
];

const NoticeDetail = ({ notice, onClose }: NoticeDetailProps) => {
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
                        <Typography variant="h6" gutterBottom>
                            {notice.Title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 5.0 }}>
                            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                投稿日時：{notice.CreatedAt.toLocaleDateString()}
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                期限：{notice.DueDate.toLocaleDateString()}
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
                                    checked={notice.IsChecked}
                                    onChange={() => { }}
                                    sx={{ pointerEvents: 'none' }}
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
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.employeeId}
                                        sx={{
                                            '&:last-child td, &:last-child th': {
                                                border: 0,
                                            },
                                        }}
                                    >
                                        <TableCell>{row.employeeId}</TableCell>
                                        <TableCell align="left">{row.department}</TableCell>
                                        <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                            {row.name}
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