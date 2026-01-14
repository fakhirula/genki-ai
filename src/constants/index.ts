export const LEARNING_LEVELS = {
  mudah: 'Mudah',
  menengah: 'Menengah',
  sulit: 'Sulit',
} as const;

export const LEARNING_TYPES = {
  hangul: 'Hangul',
  katakana: 'Katakana',
  hiragana: 'Hiragana',
} as const;

export const INDONESIAN = {
  // Navigation
  nav: {
    title: 'Genki AI',
    home: 'Beranda',
    learn: 'Belajar',
    dashboard: 'Dashboard',
    admin: 'Admin',
    logout: 'Keluar',
  },

  // Learning
  learn: {
    title: 'Mulai Belajar',
    selectType: 'Pilih Jenis Belajaran',
    selectLevel: 'Pilih Tingkat Kesulitan',
    startLesson: 'Mulai Pelajaran',
  },

  // Levels
  levels: {
    mudah: 'Mudah',
    menengah: 'Menengah',
    sulit: 'Sulit',
  },

  // Types
  types: {
    hangul: 'Hangul (Korea)',
    katakana: 'Katakana (Jepang)',
    hiragana: 'Hiragana (Jepang)',
  },

  // Quiz
  quiz: {
    question: 'Pertanyaan',
    selectAnswer: 'Pilih Jawaban',
    selectCharacter: 'Pilih Karakter yang Benar',
    submit: 'Serahkan',
    next: 'Selanjutnya',
    correct: 'Benar!',
    incorrect: 'Salah',
    explanation: 'Penjelasan',
    yourScore: 'Skor Anda',
    outOf: 'dari',
    hint: 'Petunjuk',
  },

  // Admin
  admin: {
    title: 'Panel Admin',
    users: 'Pengguna',
    quizzes: 'Kuis',
    characters: 'Karakter',
    addNew: 'Tambah Baru',
    edit: 'Ubah',
    delete: 'Hapus',
    save: 'Simpan',
    cancel: 'Batal',
  },

  // Common
  common: {
    loading: 'Memuat...',
    error: 'Terjadi Kesalahan',
    success: 'Berhasil',
    back: 'Kembali',
    continue: 'Lanjutkan',
  },
} as const;
