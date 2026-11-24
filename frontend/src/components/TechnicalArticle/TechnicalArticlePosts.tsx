import { Box, Card, CardActionArea, CardContent, Divider, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonIcon from '@mui/icons-material/Person';
import type { TechnicalArticleData } from '../../types/TechnicalArticleData';
import { formatDate } from '../../utils/DateUtils';

type TechnicalArticlePostsProps = {
    onArticleClick: (postId: number) => void;
    articleList: TechnicalArticleData[];
    onBookmarkClick: (postId: number) => void;
    onFavoriteClick: (postId: number) => void;
};

const TechnicalArticlePosts = ({ onArticleClick, articleList, onBookmarkClick, onFavoriteClick }: TechnicalArticlePostsProps) => {

    return (
        <Box>
            {articleList.map((article) => (
                <Card
                    key={article.Id}
                    variant="outlined"
                    onClick={() => onArticleClick(article.Id)}
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
                                        {article.Title}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        flexShrink: 0,
                                    }}
                                >
                                    {/* いいね */}
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            onClick={(e) => {
                                            e.stopPropagation();
                                            onFavoriteClick(article.Id);
                                        }}
                                            color="error"
                                            aria-label="いいね"
                                            size="small"
                                        >
                                            {article.IsFavorite ? (
                                                <FavoriteIcon />
                                            ) : (
                                                <FavoriteBorderIcon />
                                            )}
                                        </IconButton>

                                        <Typography variant="body2">
                                            {article.IsFavoriteCount}
                                        </Typography>
                                    </Box>

                                    {/* ブックマーク */}
                                    <IconButton
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onBookmarkClick(article.Id);
                                        }}
                                        color="primary"
                                        aria-label="ブックマーク"
                                    >
                                        {article.IsBookmark ? (
                                            <BookmarkIcon />
                                        ) : (
                                            <BookmarkBorderIcon />
                                        )}
                                    </IconButton>
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
                                        {article.PostUserName}
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ whiteSpace: 'nowrap' }}
                                >
                                    {formatDate(article.CreatedAt)}
                                </Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
};

export default TechnicalArticlePosts;