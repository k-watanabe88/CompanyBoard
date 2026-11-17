/**
 * お知らせ一覧画面の新規投稿データの型
 */
type NoticeNewPostData = {
  Title: string;
  Text: string;
  DueDate: string;
  IsImportant: boolean;
};

export type { NoticeNewPostData };