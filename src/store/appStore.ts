import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserSession {
  userId: string;
  sessionId: string;
  createdAt: Date;
}

export interface UserProgress {
  type: 'hangul' | 'katakana' | 'hiragana';
  level: 'mudah' | 'menengah' | 'sulit';
  completedQuizzes: number[];
  correctAnswers: number;
  totalAttempts: number;
  score: number;
  lastUpdated: Date;
}

interface AppStore {
  // Session
  session: UserSession | null;
  initSession: () => void;
  
  // Progress
  progress: UserProgress[];
  updateProgress: (type: string, level: string, data: Partial<UserProgress>) => void;
  getProgress: (type: string, level: string) => UserProgress | undefined;
  
  // UI State
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      // Session
      session: null,
      initSession: () => {
        const session: UserSession = {
          userId: `user_${Math.random().toString(36).substr(2, 9)}`,
          sessionId: `session_${Date.now()}`,
          createdAt: new Date(),
        };
        set({ session });
      },

      // Progress
      progress: [],
      updateProgress: (type, level, data) => {
        const existing = get().progress.find((p) => p.type === type && p.level === level);
        
        if (existing) {
          set((state) => ({
            progress: state.progress.map((p) =>
              p.type === type && p.level === level
                ? { ...p, ...data, lastUpdated: new Date() }
                : p
            ),
          }));
        } else {
          set((state) => ({
            progress: [
              ...state.progress,
              {
                type: type as any,
                level: level as any,
                completedQuizzes: [],
                correctAnswers: 0,
                totalAttempts: 0,
                score: 0,
                lastUpdated: new Date(),
                ...data,
              },
            ],
          }));
        }
      },

      getProgress: (type, level) => {
        return get().progress.find((p) => p.type === type && p.level === level);
      },

      // UI State
      isLoading: false,
      setLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: 'genki-ai-store',
      version: 1,
    }
  )
);
