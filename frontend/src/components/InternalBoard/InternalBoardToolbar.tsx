import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";


type InternalBoardToolbarProps = {
    onPostClick: () => void;
}

const InternalBoardToolbar = ({onPostClick}:InternalBoardToolbarProps) => {

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', mb: 2 }}>
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
            <Divider />
        </Box>
    );
}

export default InternalBoardToolbar;