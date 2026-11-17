import type { unconfirmedUser } from "./UnconfirmedUser";

/**
 * お知らせ詳細画面の投稿データの型
 */
type NoticeDetailData = {
  Id: number;
  Title: string;
  Text: string;
  CreatedAt: string;
  DueDate: string;
  IsImportant: boolean;
  IsChecked: boolean;
  UnconfirmedUserList: unconfirmedUser[];
};

export type { NoticeDetailData };