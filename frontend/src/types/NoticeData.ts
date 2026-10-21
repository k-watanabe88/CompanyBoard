/**
 * お知らせ画面の投稿データの型
 */
type NoticeData = {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  dueDate: string;
  isImportant: boolean;
  isChecked: boolean;
};

export type { NoticeData };