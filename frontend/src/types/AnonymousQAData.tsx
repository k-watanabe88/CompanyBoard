import type { Comment } from "./Comment";
/**
 * 社内掲示板画面の投稿データの型
 */
type AnonymousQAData = {
    id: number;
    title: string;
    text: string;
    postUserName: string;
    createdAt: string;
    isResolve: boolean;
    comments: Comment[]
}

export type {AnonymousQAData};