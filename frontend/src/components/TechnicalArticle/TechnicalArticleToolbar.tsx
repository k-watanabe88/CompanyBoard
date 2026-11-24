import AddIcon from '@mui/icons-material/Add';
import { Box, Tab, Tabs } from "@mui/material";
import Button from "@mui/material/Button";


type TechnicalArticleToolbarProps = {
    onPostClick: () => void;
    selectedTab: number;
    onTabChange: (value: number) => void;
}

const TechnicalArticleToolbar = ({ onPostClick, selectedTab, onTabChange }: TechnicalArticleToolbarProps) => {

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
                    <Tab value={1} label="ブックマーク済みの投稿" />
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
                </Box>
            </Box>
        </Box>
    );
}

export default TechnicalArticleToolbar;