import type { TechnicalArticleData } from "../types/TechnicalArticleData";

export const getDisplayTechnicalArticleList = (
    articleList: TechnicalArticleData[],
    selectedTab: number,
    keyword: string
): TechnicalArticleData[] => {

    return articleList
        .filter(item =>
            (selectedTab === 0 ? true : item.IsBookmark) &&
                item.Title.includes(keyword)
        )
};