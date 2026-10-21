import type { Comment } from "./Comment";
/**
 * 社内掲示板画面の投稿データの型
 */
type InternalBoardData = {
    id: number;
    title: string;
    text: string;
    postUserName: string;
    createdAt: string;
    isFavorite: boolean;
    isFavoriteCount: number;
    comments: Comment[]
}

export type {InternalBoardData};