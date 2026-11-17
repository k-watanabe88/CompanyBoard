import type { Comment } from "./Comment";
/**
 * 
 */
type TechnicalOutputData = {
    Id: number;
    Title: string;
    Text: string;
    PostUserName: string;
    CreatedAt: string;
    IsFavorite: boolean;
    IsFavoriteCount: number;
    Comments: Comment[]
}

export type { TechnicalOutputData }