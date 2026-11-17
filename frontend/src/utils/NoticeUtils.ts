import type { NoticeData } from "../types/NoticeData";
import type { SortMode } from "../types/SortMode";

export const getDisplayNoticeList = (
    noticeList: NoticeData[],
    selectedTab: number,
    sortMode: SortMode
): NoticeData[] => {

    return noticeList
        .filter(item =>
            selectedTab === 0 ? true : item.IsImportant
        )
        .sort((a, b) => {

            if (sortMode === 'deadline') {

                if (a.IsChecked !== b.IsChecked) {
                    return a.IsChecked ? 1 : -1;
                }

                return new Date(a.DueDate).getTime()
                    - new Date(b.DueDate).getTime();
            }

            return new Date(b.CreatedAt).getTime()
                - new Date(a.CreatedAt).getTime();
        });
};