// User & Auth Types
export type UserRole = 'user' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

// Learning Types
export type LearningLevel = 'mudah' | 'menengah' | 'sulit';
export type LearningType = 'hangul' | 'katakana' | 'hiragana';

export interface Character {
  id: string;
  type: LearningType;
  character: string;
  romanization: string;
  pronunciation: string;
  meaning?: string;
  level: LearningLevel;
  createdAt: Date;
  updatedAt: Date;
}

export interface Quiz {
  id: string;
  type: LearningType;
  level: LearningLevel;
  question: string;
  questionImage?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProgress {
  id: string;
  userId: string;
  type: LearningType;
  level: LearningLevel;
  completedQuizzes: string[];
  correctAnswers: number;
  totalAttempts: number;
  score: number;
  lastUpdated: Date;
}

export interface Session {
  userId: string;
  role: UserRole;
  createdAt: Date;
}
