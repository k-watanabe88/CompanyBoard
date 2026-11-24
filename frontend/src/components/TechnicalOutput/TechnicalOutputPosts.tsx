import { Box, Card, CardActionArea, CardContent, Divider, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonIcon from '@mui/icons-material/Person';
import type { TechnicalOutputData } from '../../types/TechnicalOutputData';
import { formatDate } from '../../utils/DateUtils';

type TechnicalOutputPostsProps = {
    onOutputClick: (postId: number) => void;
    outputList: TechnicalOutputData[];
    onFavoriteClick: (postId: number) => void;
};



const TechnicalOutputPosts = ({ onOutputClick, outputList, onFavoriteClick }: TechnicalOutputPostsProps) => {

    return (
        <Box>
            {outputList.map((output) => (
            <Card
                variant="outlined"
                onClick={() => onOutputClick(output.Id)}
                sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                }}
            >
                <CardActionArea
                disableRipple>

                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 2,
                                mb: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    minWidth: 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bgcolor: '#F0F0F0',
                                        borderRadius: 1.5,
                                        p: 1,
                                        flexShrink: 0,
                                    }}
                                >
                                    <DescriptionOutlinedIcon
                                        sx={{ color: '#555555' }}
                                    />
                                </Box>

                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        overflowWrap: 'anywhere',
                                    }}
                                >
                                    {output.Title}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexShrink: 0,
                                }}
                            >
                                    <IconButton
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onFavoriteClick(output.Id);
                                        }}
                                        color="error"
                                        aria-label="いいね"
                                        size="small"
                                    >
                                        {output.IsFavorite ? (
                                            <FavoriteIcon />
                                        ) : (
                                            <FavoriteBorderIcon />
                                        )}
                                    </IconButton>

                                    <Typography variant="body2">
                                        {output.IsFavoriteCount}
                                    </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 1.5 }} />

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 2,
                                mt: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    minWidth: 0,
                                }}
                            >
                                <PersonIcon
                                    sx={{ color: 'text.secondary', fontSize: 20 }}
                                />

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {output.PostUserName}
                                </Typography>
                            </Box>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ whiteSpace: 'nowrap' }}
                            >
                                {formatDate(output.CreatedAt)}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>))}
        </Box>
    );
};

export default TechnicalOutputPosts;