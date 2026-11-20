import type { Comment } from "./Comment";
/**
 * 
 */
type TechnicalArticleDetailData = {
    Id: number;
    Title: string;
    Text: string;
    PostUserName: string;
    CreatedAt: string;
    IsFavorite: boolean;
    IsFavoriteCount: number;
    IsBookmark: boolean;
    Comments: Comment[]
}

export type { TechnicalArticleDetailData }