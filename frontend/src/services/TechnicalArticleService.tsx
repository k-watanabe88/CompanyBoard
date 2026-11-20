import type { TechnicalArticleData } from "../types/TechnicalArticleData";
import type { TechnicalArticleDetailData } from "../types/TechnicalArticleDetailData"
import type { TechnicalArticleNewPostData } from "../types/TechnicalArticleNewPostData"

const getArticleData = async () : Promise<TechnicalArticleData[]> => {
    const response = await fetch(
        `http://localhost:7133/api/article/List`,
        {
            method: "GET",
        }
    );

    if (!response.ok) {
        throw new Error("情報の取得に失敗しました");
    }

    const data: TechnicalArticleData[] = await response.json();

    return data;
};

const getArticleDetail = async (
    postId: number
): Promise<TechnicalArticleDetailData> => {
    const response = await fetch(
        `http://localhost:7133/api/article/detail?postId=${postId}`,
        {
            method: "GET",
        }
    );

    if (!response.ok) {
        throw new Error("情報の取得に失敗しました");
    }

    const data: TechnicalArticleDetailData = await response.json();

    return data;
};

const toggleBookmarkArticle = async (postId: number): Promise<void> => {
    try {
        const response = await fetch(
            "http://localhost:7133/api/Article/Bookmark",
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
            throw new Error("確認状態の更新に失敗しました。");
        }

    } catch (error) {
        console.error(error);
    }    
};

const toggleFavoriteArticle = async (postId: number): Promise<void> => {
    try {
        const response = await fetch(
            "http://localhost:7133/api/Article/Favorite",
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
const technicalArticleNewPost = async (postData: TechnicalArticleNewPostData) => {
    try {
        const response = await fetch(
            "http://localhost:7133/api/Article/Post",
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
export { getArticleData, getArticleDetail, toggleBookmarkArticle, toggleFavoriteArticle, technicalArticleNewPost };
