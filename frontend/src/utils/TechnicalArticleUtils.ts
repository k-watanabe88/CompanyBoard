import type { TechnicalArticleData } from "../types/TechnicalArticleData";

export const getDisplayTechnicalArticleList = (
    articleList: TechnicalArticleData[],
    selectedTab: number,
): TechnicalArticleData[] => {

    return articleList
        .filter(item =>
            selectedTab === 0 ? true : item.IsBookmark
        )
};