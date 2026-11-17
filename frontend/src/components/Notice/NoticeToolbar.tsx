import AddIcon from '@mui/icons-material/Add';
import { Box, Tab, Tabs } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SortMode } from "../../types/SortMode";

type NoticeToolbarProps = {
    onPostClick: () => void;
    selectedTab: number;
    onTabChange: (value: number) => void;
    sortMode: SortMode;
    onSortChange: (value: SortMode) => void;
}

const NoticeToolbar = ({ onPostClick, selectedTab, onTabChange, sortMode, onSortChange }: NoticeToolbarProps) => {

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Tabs
                    value={selectedTab}
                    onChange={(_, newValue) => onTabChange(newValue)}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value={0} label="すべて" />
                    <Tab value={1} label="重要" />
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
                            value={sortMode}
                            onChange={(e) => onSortChange(e.target.value as SortMode)}
                        >
                            <MenuItem value="newest">投稿順</MenuItem>
                            <MenuItem value="deadline">期限順</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    );
}

export default NoticeToolbar;