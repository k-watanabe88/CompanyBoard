/**
 * お知らせ画面の投稿データの型
 */
type NoticeData = {
  Id: number;
  Title: string;
  Text: string;
  CreatedAt: Date;
  DueDate: Date;
  IsImportant: boolean;
  IsChecked: boolean; // 確認済みかどうかを示すオプションのプロパティ
};

export type { NoticeData };