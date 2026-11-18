import type { TechnicalArticleData } from "../types/TechnicalArticleData";

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

export { getArticleData };