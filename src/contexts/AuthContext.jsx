import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useToast } from './ToastContext';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: `${window.location.origin}/` },
      });
      if (error) {
        console.error('Google login error:', error.message);
        showToast('Google 로그인에 실패했습니다.', 'error');
      }
    } catch (err) {
      console.error('Google login error:', err);
      showToast('Google 로그인에 실패했습니다.', 'error');
    }
  };

  const signInWithKakao = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: { redirectTo: `${window.location.origin}/` },
      });
      if (error) {
        console.error('Kakao login error:', error.message);
        showToast('카카오 로그인에 실패했습니다.', 'error');
      }
    } catch (err) {
      console.error('Kakao login error:', err);
      showToast('카카오 로그인에 실패했습니다.', 'error');
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error.message);
        showToast('로그아웃에 실패했습니다.', 'error');
      } else {
        showToast('로그아웃되었습니다.', 'success');
      }
    } catch (err) {
      console.error('Logout error:', err);
      showToast('로그아웃에 실패했습니다.', 'error');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signInWithKakao, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
