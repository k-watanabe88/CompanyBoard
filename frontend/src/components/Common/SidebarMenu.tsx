import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArticleIcon from '@mui/icons-material/Article';
import CodeIcon from '@mui/icons-material/Code';
import ForumIcon from '@mui/icons-material/Forum';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

const menuItems = [
    { label: 'お知らせ', path: '/notice', icon: NotificationsIcon },
    { label: '全社掲示板', path: '/board', icon: ContentPasteIcon },
    { label: '技術記事', path: '/articles', icon: ArticleIcon },
    { label: '技術アウトプット', path: '/outputs', icon: CodeIcon },
    { label: '匿名Q&A', path: '/questions', icon: ForumIcon },
    { label: '社員管理', path: '/employees', icon: ManageAccountsIcon },
];

const SidebarMenu = () => {

    const handleLogout = () => {
        // ログアウト処理をここに実装する
        console.log('ログアウトしました');
    }

    return (
        <Box
            sx={{
                width: 300,
                flexShrink: 0,
                position: 'fixed',
                top: '64px',
                left: 0,
                height: 'calc(100vh - 64px)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <List component="nav">
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <ListItemButton
                            key={item.path}
                            component={NavLink}
                            to={item.path}
                            sx={{
                                mb: 2,
                                '&.active': {
                                    bgcolor: '#ffcdcd',
                                    '& .MuiListItemIcon-root': {
                                        color: '#ca6a7a',
                                    },
                                },
                            }}
                        >
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>

                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    );
                })}
            </List>

            <Box sx={{ mt: 'auto', p: 2 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        mb: 2,
                    }}
                >
                    <Avatar>山</Avatar>

                    <Box>
                        <Typography variant="body2"
                            sx={{ fontWeight: 'bold' }}
                        >
                            山田 太郎
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            管理者
                        </Typography>
                    </Box>
                </Box>

                <Button
                    fullWidth
                    variant="outlined"
                    color="error"
                    startIcon={<LogoutIcon />}
                    onClick={handleLogout}
                >
                    ログアウト
                </Button>
            </Box>
        </Box>
    );
};

export default SidebarMenu;