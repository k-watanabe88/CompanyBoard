import type { NoticeData } from "../types/NoticeData";
import type { NoticeDetailData } from "../types/NoticeDetailData"
import type { NoticeNewPostData } from "../types/NoticeNewPostData"

const getNoticeData = async () : Promise<NoticeData[]> => {
    const response = await fetch(
        `http://localhost:7133/api/notice/List`,
        {
            method: "GET",
        }
    );

    if (!response.ok) {
        throw new Error("情報の取得に失敗しました");
    }

    const data: NoticeData[] = await response.json();

    return data;
};

const getNoticeDetail = async (
    postId: number
): Promise<NoticeDetailData> => {
    const response = await fetch(
        `http://localhost:7133/api/notice/detail?postId=${postId}`,
        {
            method: "GET",
        }
    );

    if (!response.ok) {
        throw new Error("情報の取得に失敗しました");
    }

    const data: NoticeDetailData = await response.json();

    return data;
};

const checkNotice = async (postId: number): Promise<void> => {
    try {
        const response = await fetch(
            "http://localhost:7133/api/Notice/Check",
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

const noticeNewPost = async (postData : NoticeNewPostData): Promise<void> => {
    try {
        const response = await fetch(
            "http://localhost:7133/api/Notice/Post",
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
            throw new Error("新規投稿に失敗しました。");
        }

    } catch (error) {
        console.error(error);
    }
};
export {getNoticeData, getNoticeDetail, checkNotice, noticeNewPost};