import type { Comment } from "./Comment";
/**
 * 
 */
type TechnicalArticleData = {
    id: number;
    title: string;
    text: string;
    postUserName: string;
    createdAt: string;
    isFavorite: boolean;
    isFavoriteCount: number;
    comments: Comment[]
}

export type { TechnicalArticleData }