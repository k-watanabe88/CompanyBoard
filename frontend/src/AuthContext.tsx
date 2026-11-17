import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { AuthUser } from "./types/AuthUser";

type AuthContextType = {
  authUser: AuthUser | null;
  isLoading: boolean;
  setAuthUser: (userData: AuthUser | null) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // ログイン中のユーザー情報を管理
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  // 認証情報の確認中かどうかを管理
  const [isLoading, setIsLoading] = useState(true);



  /**
   * ログアウト処理
   */
  const logout = async () => {
    const response = await fetch("http://localhost:7000/api/Logout", {
      method: "POST",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("ログアウトに失敗しました。");
    }
    setAuthUser(null);
  }

  return (
    <AuthContext.Provider value={{ authUser, isLoading, setAuthUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// コンポーネントから簡単に呼び出すためのカスタムフック
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};