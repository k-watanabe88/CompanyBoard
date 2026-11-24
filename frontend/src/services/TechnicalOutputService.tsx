import type { TechnicalOutputData } from "../types/TechnicalOutputData";
import type { TechnicalOutputDetailData } from "../types/TechnicalOutputDetailData";
import type { TechnicalOutputNewPostData } from "../types/TechnicalOutputNewPostData";
import type { CommentData } from "../types/CommentData";

const getOutputData = async (): Promise<TechnicalOutputData[]> => {
    const response = await fetch(
        `http://localhost:7133/api/Output/List`,
        {
            method: "GET",
        }
    );

    if (!response.ok) {
        throw new Error("情報の取得に失敗しました");
    }

    const data: TechnicalOutputData[] = await response.json();

    return data;
};

const getOutputDetail = async (
    postId: number
): Promise<TechnicalOutputDetailData> => {
    const response = await fetch(
        `http://localhost:7133/api/Output/detail?postId=${postId}`,
        {
            method: "GET",
        }
    );

    if (!response.ok) {
        throw new Error("情報の取得に失敗しました");
    }

    const data: TechnicalOutputDetailData = await response.json();

    return data;
};


const toggleFavoriteOutput = async (postId: number): Promise<void> => {
    try {
        const response = await fetch(
            "http://localhost:7133/api/Output/Favorite",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    postId: postId
                })
            }
        );

        if (!response.ok) {
            throw new Error("お気に入り状態の更新に失敗しました。");
        }

    } catch (error) {
        console.error(error);
    }
};
const technicalOutputNewPost = async (postData: TechnicalOutputNewPostData) => {
    try {
        const response = await fetch(
            "http://localhost:7133/api/Output/Post",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(postData)
            }
        );

        if (!response.ok) {
            throw new Error("記事の投稿に失敗しました。");
        }

    } catch (error) {
        console.error(error);
    }
};
const addTechnicalOutputComment = async (CommentData: CommentData) => {
    try {
        const response = await fetch(
            "http://localhost:7133/api/Output/Comment",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(CommentData)
            }
        );

        if (!response.ok) {
            throw new Error("コメントの投稿に失敗しました。");
        }

    } catch (error) {
        console.error(error);
    }
};

const deleteTechnicalOutput = async (PostId: number) => {
    try {
        const response = await fetch(
            "http://localhost:7133/api/Output/Delete",
            {
                method: "Delete",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ PostId: PostId })
            }
        );

        if (!response.ok) {
            throw new Error("記事の削除に失敗しました。");
        }

    } catch (error) {
        console.error(error);
    }
};
export {
    getOutputData,
    getOutputDetail,
    toggleFavoriteOutput,
    technicalOutputNewPost,
    addTechnicalOutputComment,
    deleteTechnicalOutput
};