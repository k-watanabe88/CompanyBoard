
import {
    Box,
    Button,
    Divider,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useState } from 'react';
import type { EmployeeData } from '../../types/EmployeeData';

type EmployeeManegementEditProps = {
    employee: EmployeeData;
    onClose: () => void;
};

const EmployeeManegementEdit = ({ employee, onClose }: EmployeeManegementEditProps) => {
    const [employeeId, setEmployeeId] = useState(employee.id);
    const [name, setName] = useState(employee.name);
    const [department, setDepartment] = useState(employee.department);
    const [role, setRole] = useState(employee.role);

    const handleUpdate = () => {
    };

    const handleDelete = () => {
        console.log('社員情報を削除:', employeeId);
    };

    return (
        <>
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

            {/* タイトル */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 2,
                }}
            >
                <PersonRemoveIcon
                    sx={{ color: '#D41442', fontSize: 23 }}
                />
                <Typography
                    sx={{
                        color: '#B51235',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                >
                    社員情報編集
                </Typography>
            </Box>

            <Divider sx={{ mb: 3, borderColor: '#D9DEE5' }} />

            {/* 入力欄 */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: 'repeat(2, minmax(0, 1fr))',
                    },
                    columnGap: 3,
                    rowGap: 3,
                }}
            >
                <Box>
                    <Typography sx={{ fontWeight: 'bold', mb: 0.75 }}>
                        社員番号
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                    />
                </Box>

                <Box>
                    <Typography sx={{ fontWeight: 'bold', mb: 0.75 }}>
                        氏名
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Box>

                <Box>
                    <Typography sx={{ fontWeight: 'bold', mb: 0.75 }}>
                        部署
                    </Typography>
                    <TextField
                        select
                        fullWidth
                        size="small"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    >
                        <MenuItem value="エンジニア部">エンジニア部</MenuItem>
                        <MenuItem value="管理部">管理部</MenuItem>
                        <MenuItem value="営業部">営業部</MenuItem>
                    </TextField>
                </Box>

                <Box>
                    <Typography sx={{ fontWeight: 'bold', mb: 0.75 }}>
                        システム権限
                    </Typography>
                    <TextField
                        select
                        fullWidth
                        size="small"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <MenuItem value="一般ユーザー">一般ユーザー</MenuItem>
                        <MenuItem value="管理者">管理者</MenuItem>
                        <MenuItem value="最高管理者">最高管理者</MenuItem>
                    </TextField>
                </Box>
            </Box>

            {/* 更新ボタン */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 5,
                }}
            >
                <Button
                    variant="contained"
                    startIcon={<SendIcon />}
                    onClick={handleUpdate}
                    sx={{
                        width: 192,
                        minHeight: 42,
                        color: '#C8103E',
                        backgroundColor: '#FFFFFF',
                        fontWeight: 'bold',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
                        '&:hover': {
                            backgroundColor: '#FFF5F7',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.12)',
                        },
                    }}
                >
                    更新する
                </Button>
            </Box>

            {/* 削除ボタン */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 5,
                }}
            >
                <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={handleDelete}
                    sx={{
                        width: 276,
                        minHeight: 42,
                        color: '#C8103E',
                        backgroundColor: '#FFFFFF',
                        fontWeight: 'bold',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
                        '&:hover': {
                            backgroundColor: '#FFF5F7',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.12)',
                        },
                    }}
                >
                    社員情報を削除する
                </Button>
            </Box>
        </>
    );
};

export default EmployeeManegementEdit;
