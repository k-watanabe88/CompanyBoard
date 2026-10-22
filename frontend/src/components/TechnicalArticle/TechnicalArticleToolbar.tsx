import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Box, Tab, Tabs } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";


type TechnicalArticleToolbarProps = {
    onPostClick: () => void;
}

const TechnicalArticleToolbar = ({ onPostClick }: TechnicalArticleToolbarProps) => {

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
                    <Tab value="two" label="ブックマーク済みの投稿" />
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