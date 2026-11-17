/**
 * お知らせ一覧画面の投稿データの型
 */
type NoticeData = {
  Id: number;
  Title: string;
  Text: string;
  CreatedAt: string;
  DueDate: string;
  IsImportant: boolean;
  IsChecked: boolean;
  CheckedCount: number;
  UncheckedCount: number;
};

export type { NoticeData };