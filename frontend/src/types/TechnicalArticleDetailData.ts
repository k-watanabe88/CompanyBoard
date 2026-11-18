import type { Comment } from "./Comment";
/**
 * 
 */
type TechnicalArticleDetailData = {
    id: number;
    title: string;
    text: string;
    postUserName: string;
    createdAt: string;
    isFavorite: boolean;
    isFavoriteCount: number;
    isBookmark: boolean;
    comments: Comment[]
}

export type { TechnicalArticleDetailData }