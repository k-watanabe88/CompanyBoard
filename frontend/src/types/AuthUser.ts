/**
 * ログイン中ユーザー情報を表す型
 */
type AuthUser = {
  userId: number;
  userName: string;
  role: string;
};

export type {AuthUser};