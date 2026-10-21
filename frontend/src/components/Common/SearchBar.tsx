import { Box, Button, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";

/**
 * 検索欄
 * @param onSearch 検索処理
 */
const SearchBar = ({ onSearch }: { onSearch: (keyword: string) => void }) => {

    const [keyword, setKeyword] = useState("");

    /**
     * 検索ボタン押下時処理
     */
    const Search = async () => {
        try {
            await onSearch(keyword);
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                }}
            >
                <TextField
                    id="keyword"
                    name="keyword"
                    value={keyword}
                    onKeyDown={Search}
                    onChange={(e) => setKeyword(e.target.value)}
                    size="small"
                />
                <Button
                    variant="outlined"
                    onClick={Search}
                    sx={{
                        minWidth: 60,
                        px: 1.5,
                        whiteSpace: "nowrap",
                        bgcolor: grey[500],
                        color: "white",
                        borderColor: grey[500],
                        "&:hover": {
                            bgcolor: grey[600],
                            borderColor: grey[600],
                        },
                    }}
                >
                    検索
                </Button>
            </Box>
    );
};

export default SearchBar;