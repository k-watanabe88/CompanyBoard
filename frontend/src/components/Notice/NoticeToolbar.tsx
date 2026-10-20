import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

type NoticeToolbarProps = {
    onPostClick: () => void;
}

const NoticeToolbar = ({onPostClick}:NoticeToolbarProps) => {

    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" label="すべて" />
                    <Tab value="two" label="重要" />
                </Tabs>
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    px: 2,
                }}>
                    <Button
                        variant="contained"
                        onClick={onPostClick}
                        sx={{
                            borderRadius: 10,
                            px: 3,
                            py: 1,
                        }}
                    >
                        <AddIcon />
                        新規投稿
                    </Button>
                    <FormControl size="small" sx={{ minWidth: 100 }}>
                        <Select
                            defaultValue="newest"
                        >
                            <MenuItem value="newest">投稿順</MenuItem>
                            <MenuItem value="oldest">期限順</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Divider />
        </Box>
    );
}

export default NoticeToolbar;