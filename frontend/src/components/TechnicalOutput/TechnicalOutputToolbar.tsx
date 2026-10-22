import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Box, Tab, Tabs } from "@mui/material";
import Button from "@mui/material/Button";

type TechnicalOutputToolbarProps = {
    onPostClick: () => void;
}

const TechnicalOutputToolbar = ({ onPostClick }: TechnicalOutputToolbarProps) => {

    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
                mb: 2, gap: 2,
                px: 2
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
    );
}

export default TechnicalOutputToolbar;