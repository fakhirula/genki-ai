import { getGeminiModel } from '@/lib/gemini';

export interface AIGeneratedQuestion {
  id: string;
  character: string;
  romanization: string;
  meaning: string;
  options: {
    id: string;
    text: string;
    romanization: string;
    isCorrect: boolean;
  }[];
}



export async function generateAIQuiz(
  type: 'hangul' | 'katakana' | 'hiragana',
  level: 'menengah' | 'sulit',
  count: number = 10
): Promise<AIGeneratedQuestion[]> {
  const model = getGeminiModel();
  
  const languageMap = {
    hangul: 'Korea (Hangul)',
    katakana: 'Jepang (Katakana)',
    hiragana: 'Jepang (Hiragana)',
  };
  
  const levelMap = {
    menengah: 'kata-kata sehari-hari',
    sulit: 'kalimat lengkap percakapan',
  };

  const prompt = `Generate exactly ${count} quiz questions for learning ${languageMap[type]} at ${level} level.

STRICT FORMAT - Return ONLY valid JSON array, no other text:
[
  {
    "character": "prompt text shown to user (foreign or Indonesian; follow level rules)",
    "romanization": "romanized version if prompt is foreign; empty string if prompt is Indonesian",
    "meaning": "translation counterpart of the prompt (for validation only)",
    "correctAnswer": "the correct option to display",
    "wrongAnswers": ["wrong option 1", "wrong option 2", "wrong option 3"]
  }
]

Level rules (wajib):
- menengah: ONLY single words (kata). Mix direction: ~60% prompt in foreign word -> answers are Indonesian translations; ~40% prompt in Indonesian word -> answers are foreign words. Keep Hangul 2-8 chars; Katakana/Hiragana simple nouns/verbs/loanwords. Romanization is required only when prompt is foreign; set romanization to '' when prompt is Indonesian.
- sulit: ONLY simple conversational sentences (kalimat sederhana), 4-12 words. Include >=30% cloze by replacing 1-2 words with "___". Mix direction: ~60% prompt in foreign sentence -> answers are Indonesian translations; ~40% prompt in Indonesian sentence -> answers are foreign sentences. Romanization MUST be provided when prompt is foreign; if prompt is Indonesian set romanization to ''. Keep grammar beginner-friendly.

Global rules:
- Each question MUST have exactly 1 correctAnswer and 3 wrongAnswers.
- Wrong answers must be plausible but clearly different in meaning/context.
- Never wrap output in markdown/code fences; return ONLY the JSON array.

Generate now:`;

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    // Extract JSON - try multiple patterns
    let jsonStr = responseText.trim();
    
    // Remove markdown code blocks if present
    jsonStr = jsonStr.replace(/```json\n?|\n?```/g, '').trim();
    jsonStr = jsonStr.replace(/```\n?|\n?```/g, '').trim();
    
    // Find JSON array
    const jsonMatch = jsonStr.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      return generateFallbackQuiz(type, level, count);
    }
    
    const aiData = JSON.parse(jsonMatch[0]);
    
    if (!Array.isArray(aiData) || aiData.length === 0) {
      return generateFallbackQuiz(type, level, count);
    }
    
    // Transform to our format
    const questions: AIGeneratedQuestion[] = aiData.slice(0, count).map((item: any, index: number) => {
      if (!item.character || !item.romanization || !item.correctAnswer || !item.wrongAnswers) {
        return null;
      }
      
      return {
        id: `ai_${type}_${level}_${index}_${Date.now()}`,
        character: item.character,
        romanization: item.romanization,
        meaning: item.meaning || item.correctAnswer,
        options: [
          {
            id: `opt_${index}_0`,
            text: item.correctAnswer,
            romanization: '',
            isCorrect: true,
          },
          ...(Array.isArray(item.wrongAnswers) ? item.wrongAnswers.slice(0, 3) : [])
            .map((wrong: string, wIndex: number) => ({
              id: `opt_${index}_${wIndex + 1}`,
              text: wrong,
              romanization: '',
              isCorrect: false,
            })),
        ].sort(() => Math.random() - 0.5),
      };
    }).filter((q): q is AIGeneratedQuestion => q !== null);
    
    if (questions.length < 4) {
      return generateFallbackQuiz(type, level, count);
    }
    
    return questions.slice(0, count);
  } catch (error) {
    return generateFallbackQuiz(type, level, count);
  }
}

function generateFallbackQuiz(
  type: 'hangul' | 'katakana' | 'hiragana',
  level: 'menengah' | 'sulit',
  count: number
): AIGeneratedQuestion[] {
  // Dummy data hanya untuk level mudah - level menengah dan sulit HARUS menggunakan AI
  console.error(`Fallback requested for ${type} ${level} - AI generation failed!`);
  return [];
}

export async function generateAIHint(
  character: string,
  romanization: string,
  type: 'hangul' | 'katakana' | 'hiragana'
): Promise<string> {
  const model = getGeminiModel();
  
  const languageMap = {
    hangul: 'Korean',
    katakana: 'Japanese Katakana',
    hiragana: 'Japanese Hiragana',
  };
  const romanizationPart = romanization ? ` (${romanization})` : '';
  
  const prompt = `Beri petunjuk singkat (1 kalimat, <=18 kata) agar pengguna menebak makna "${character}"${romanizationPart} dalam ${languageMap[type]}.

Aturan ketat:
- Jangan tulis terjemahan, sinonim langsung, atau definisi lugas.
- Jelaskan konteks pemakaian, situasi, atau nuansa—bukan artinya.
- Hindari kata yang bermakna sama dengan jawabannya.
- Gunakan Bahasa Indonesia yang natural.
- Hanya keluarkan petunjuk, tanpa teks lain.`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    return text || `Pikirkan konteks penggunaan ${character} dalam percakapan sehari-hari.`;
  } catch (error) {
    // Fallback ke predefined hints
    const predefinedHints: Record<string, Record<string, string>> = {
      hangul: {
        '안녕': 'Sapaan santai saat pertama kali berjumpa teman.',
        '사랑': 'Perasaan kuat yang biasa diucap kepada orang terdekat.',
        '친구': 'Orang yang sering menemani, berbagi cerita, dan dipercaya.',
        '학교': 'Tempat rutin pagi/siang untuk belajar bersama guru.',
        '가족': 'Lingkaran terdekat yang tinggal serumah dan saling merawat.',
      },
      katakana: {
        'コーヒー': 'Minuman pahit hangat atau dingin, populer di pagi hari.',
        'カメラ': 'Alat genggam untuk menangkap momen menjadi gambar.',
        'テレビ': 'Kotak hiburan di ruang keluarga untuk menonton acara.',
        'コンピューター': 'Perangkat untuk bekerja, menulis, dan menjalankan program.',
        'インターネット': 'Jaringan luas yang menghubungkan orang dan informasi.',
      },
      hiragana: {
        'さくら': 'Bunga merah muda yang mekar singkat di awal musim semi.',
        'にほん': 'Negara kepulauan di Asia Timur dengan banyak kuil dan teknologi.',
        'ともだち': 'Seseorang yang diajak bermain dan saling mendukung.',
        'がっこう': 'Gedung tempat murid berkumpul, belajar, dan bertemu guru.',
        'せんせい': 'Orang yang memandu kelas dan memberi tugas kepada murid.',
      },
    };
    
    const typeHints = predefinedHints[type];
    if (typeHints && typeHints[character]) {
      return typeHints[character];
    }
    
    return `Pikirkan konteks penggunaan ${character} dalam percakapan sehari-hari.`;
  }
}
