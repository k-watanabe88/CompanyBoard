import {
    Box,
    Card,
    Chip,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import type { EmployeeData } from '../../types/EmployeeData';

type EmployeeManegementListProps = {
    onEditClick: (employee: EmployeeData) => void;
};

const employees: EmployeeData[] = [
    { id: 'EMP003', name: '鈴木 一郎', department: 'エンジニア部', role: '一般' },
    { id: 'EMP004', name: '高橋 健', department: 'エンジニア部', role: '一般' },
    { id: 'EMP005', name: '田中 誠', department: 'エンジニア部', role: '一般' },
    { id: 'EMP006', name: '伊藤 優', department: 'エンジニア部', role: '管理者' },
    { id: 'EMP007', name: '中村 翔', department: 'エンジニア部', role: '管理者' },
    { id: 'EMP008', name: '小林 直樹', department: 'エンジニア部', role: '管理者' },
    { id: 'EMP009', name: '加藤 美咲', department: 'エンジニア部', role: '最高管理者' },
    { id: 'EMP010', name: '渡辺 智也', department: 'エンジニア部', role: '最高管理者' },
    { id: 'EMP011', name: '佐藤 花子', department: '管理部', role: '管理者' },
    { id: 'EMP013', name: '田中 太郎', department: 'エンジニア部', role: '一般' },
    { id: 'EMP014', name: '津田 直哉', department: 'エンジニア部', role: '一般' },
    { id: 'EMP015', name: '刈谷 周大', department: '営業部', role: '管理者' },
];

const roleStyles = {
    一般: {
        color: '#00BFFF',
        borderColor: '#00BFFF',
        backgroundColor: '#F0FCFF',
    },
    管理者: {
        color: '#008F52',
        borderColor: '#008F52',
        backgroundColor: '#F0FAF5',
    },
    最高管理者: {
        color: '#FF3545',
        borderColor: '#FF3545',
        backgroundColor: '#FFF2F3',
    },
};

const EmployeeManegementList = ({ onEditClick }: EmployeeManegementListProps) => {

    return (
        <Box sx={{ width: '100%', minWidth: 800 }}>
            <TableContainer
                component={Card}
                elevation={1}
                sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 1px 5px rgba(0,0,0,0.10)',
                }}
            >
                <Table
                    sx={{
                        tableLayout: 'fixed',
                        '& .MuiTableCell-root': {
                            borderBottom: '1px solid #D9E0E7',
                            px: 3,
                            py: 0.75,
                            height: 48,
                            fontSize: 14,
                        },
                    }}
                >
                    <TableHead>
                        <TableRow>
                            {[
                                { label: '社員番号', width: '19%' },
                                { label: '社員名', width: '21%' },
                                { label: '部署', width: '25%' },
                                { label: '権限', width: '24%' },
                                { label: '編集', width: '11%' },
                            ].map((column) => (
                                <TableCell
                                    key={column.label}
                                    sx={{
                                        width: column.width,
                                        fontWeight: 'bold',
                                        color: '#17202A',
                                        whiteSpace: 'nowrap',
                                    }}
                                    align={column.label === '編集' ? 'center' : 'left'}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {employees.map((employee) => (
                            <TableRow
                                key={employee.id}
                                hover
                                sx={{
                                    '&:last-child td': {
                                        borderBottom: 0,
                                    },
                                }}
                            >
                                <TableCell
                                    sx={{
                                        color: '#526579',
                                        fontWeight: 600,
                                    }}
                                >
                                    {employee.id}
                                </TableCell>

                                <TableCell sx={{ fontWeight: 600 }}>
                                    {employee.name}
                                </TableCell>

                                <TableCell>
                                    {employee.department}
                                </TableCell>

                                <TableCell>
                                    <Chip
                                        label={employee.role}
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                            height: 23,
                                            borderRadius: 1.5,
                                            fontSize: 11,
                                            fontWeight: 600,
                                            '& .MuiChip-label': {
                                                px: 1,
                                            },
                                        }}
                                    />
                                </TableCell>

                                <TableCell align="center">
                                    <IconButton
                                        size="small"
                                        onClick={() => onEditClick(employee) }
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            color: '#607D94',
                                            border: '1px solid #D9E0E7',
                                            borderRadius: 1,
                                            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                                            '&:hover': {
                                                backgroundColor: '#F3F6F9',
                                            },
                                        }}
                                    >
                                        <EditIcon sx={{ fontSize: 18 }} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default EmployeeManegementList;
