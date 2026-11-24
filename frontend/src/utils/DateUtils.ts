//日時情報変換処理

// 日付のみ：yyyy/mm/dd
export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
};

// 日時あり：yyyy/mm/dd hh:mm
export const formatDateTime = (date: string) => {
    return new Date(date).toLocaleString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
};