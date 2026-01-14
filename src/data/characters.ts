export interface Character {
  id: string;
  type: 'hangul' | 'katakana' | 'hiragana';
  character: string;
  romanization: string;
  meaning?: string;
  level: 'mudah' | 'menengah' | 'sulit';
  pronunciation?: string;
}

// Hangul - Korean Alphabet
const HANGUL_CHARACTERS: Character[] = [
  // Mudah Level - Individual Letters (Huruf)
  { id: 'h1', type: 'hangul', character: 'ㄱ', romanization: 'g/k', level: 'mudah', meaning: 'Konsonan G' },
  { id: 'h2', type: 'hangul', character: 'ㄴ', romanization: 'n', level: 'mudah', meaning: 'Konsonan N' },
  { id: 'h3', type: 'hangul', character: 'ㄷ', romanization: 'd/t', level: 'mudah', meaning: 'Konsonan D' },
  { id: 'h4', type: 'hangul', character: 'ㄹ', romanization: 'r/l', level: 'mudah', meaning: 'Konsonan R' },
  { id: 'h5', type: 'hangul', character: 'ㅁ', romanization: 'm', level: 'mudah', meaning: 'Konsonan M' },
  { id: 'h6', type: 'hangul', character: 'ㅂ', romanization: 'b/p', level: 'mudah', meaning: 'Konsonan B' },
  { id: 'h7', type: 'hangul', character: 'ㅅ', romanization: 's', level: 'mudah', meaning: 'Konsonan S' },
  { id: 'h8', type: 'hangul', character: 'ㅇ', romanization: 'ng', level: 'mudah', meaning: 'Konsonan NG' },
  { id: 'h9', type: 'hangul', character: 'ㅈ', romanization: 'j', level: 'mudah', meaning: 'Konsonan J' },
  { id: 'h10', type: 'hangul', character: 'ㅉ', romanization: 'jj', level: 'mudah', meaning: 'Double J' },
  { id: 'h11', type: 'hangul', character: 'ㅊ', romanization: 'ch', level: 'mudah', meaning: 'Konsonan CH' },
  { id: 'h12', type: 'hangul', character: 'ㅋ', romanization: 'k', level: 'mudah', meaning: 'Konsonan K' },
  { id: 'h13', type: 'hangul', character: 'ㅌ', romanization: 't', level: 'mudah', meaning: 'Konsonan T' },
  { id: 'h14', type: 'hangul', character: 'ㅍ', romanization: 'p', level: 'mudah', meaning: 'Konsonan P' },
  { id: 'h15', type: 'hangul', character: 'ㅏ', romanization: 'a', level: 'mudah', meaning: 'A' },
  { id: 'h16', type: 'hangul', character: 'ㅑ', romanization: 'ya', level: 'mudah', meaning: 'YA' },
  { id: 'h17', type: 'hangul', character: 'ㅓ', romanization: 'eo', level: 'mudah', meaning: 'EO' },
  { id: 'h18', type: 'hangul', character: 'ㅕ', romanization: 'yu', level: 'mudah', meaning: 'YU' },
  { id: 'h19', type: 'hangul', character: 'ㅗ', romanization: 'o', level: 'mudah', meaning: 'O' },
  { id: 'h20', type: 'hangul', character: 'ㅜ', romanization: 'u', level: 'mudah', meaning: 'U' },
  
  // Menengah Level - Words (Kata)
  { id: 'h21', type: 'hangul', character: '안녕', romanization: 'annyeong', level: 'menengah', meaning: 'Halo' },
  { id: 'h22', type: 'hangul', character: '사랑', romanization: 'sarang', level: 'menengah', meaning: 'Cinta' },
  { id: 'h23', type: 'hangul', character: '친구', romanization: 'chingu', level: 'menengah', meaning: 'Teman' },
  { id: 'h24', type: 'hangul', character: '학교', romanization: 'hakgyo', level: 'menengah', meaning: 'Sekolah' },
  { id: 'h25', type: 'hangul', character: '가족', romanization: 'gajok', level: 'menengah', meaning: 'Keluarga' },
  { id: 'h26', type: 'hangul', character: '음식', romanization: 'eumsik', level: 'menengah', meaning: 'Makanan' },
  { id: 'h27', type: 'hangul', character: '물', romanization: 'mul', level: 'menengah', meaning: 'Air' },
  { id: 'h28', type: 'hangul', character: '책', romanization: 'chaek', level: 'menengah', meaning: 'Buku' },
  { id: 'h29', type: 'hangul', character: '집', romanization: 'jip', level: 'menengah', meaning: 'Rumah' },
  { id: 'h30', type: 'hangul', character: '시간', romanization: 'sigan', level: 'menengah', meaning: 'Waktu' },
  { id: 'h31', type: 'hangul', character: '나라', romanization: 'nara', level: 'menengah', meaning: 'Negara' },
  { id: 'h32', type: 'hangul', character: '사람', romanization: 'saram', level: 'menengah', meaning: 'Orang' },
  { id: 'h33', type: 'hangul', character: '도시', romanization: 'dosi', level: 'menengah', meaning: 'Kota' },
  { id: 'h34', type: 'hangul', character: '회사', romanization: 'hoesa', level: 'menengah', meaning: 'Perusahaan' },
  { id: 'h35', type: 'hangul', character: '선생님', romanization: 'seonsaengnim', level: 'menengah', meaning: 'Guru' },
  
  // Sulit Level - Sentences (Kalimat)
  { id: 'h41', type: 'hangul', character: '안녕하세요', romanization: 'annyeonghaseyo', level: 'sulit', meaning: 'Halo/Selamat pagi (formal)' },
  { id: 'h42', type: 'hangul', character: '감사합니다', romanization: 'gamsahamnida', level: 'sulit', meaning: 'Terima kasih' },
  { id: 'h43', type: 'hangul', character: '사랑해요', romanization: 'saranghaeyo', level: 'sulit', meaning: 'Aku cinta kamu' },
  { id: 'h44', type: 'hangul', character: '잘 지내세요', romanization: 'jal jinaeseyo', level: 'sulit', meaning: 'Apa kabar?' },
  { id: 'h45', type: 'hangul', character: '어디에 가요', romanization: 'eodie gayo', level: 'sulit', meaning: 'Mau kemana?' },
  { id: 'h46', type: 'hangul', character: '저는 학생이에요', romanization: 'jeoneun haksaengieoyo', level: 'sulit', meaning: 'Saya adalah pelajar' },
  { id: 'h47', type: 'hangul', character: '한국어 공부해요', romanization: 'hangugeo gongbuhaeyo', level: 'sulit', meaning: 'Saya belajar bahasa Korea' },
  { id: 'h48', type: 'hangul', character: '맛있어요', romanization: 'masisseoyo', level: 'sulit', meaning: 'Enak/Lezat' },
  { id: 'h49', type: 'hangul', character: '만나서 반가워요', romanization: 'mannaseo bangawoyo', level: 'sulit', meaning: 'Senang bertemu dengan Anda' },
  { id: 'h50', type: 'hangul', character: '저를 도와주세요', romanization: 'jeoreul dowajuseyo', level: 'sulit', meaning: 'Tolong bantu saya' },
];

// Katakana - Japanese
const KATAKANA_CHARACTERS: Character[] = [
  // Mudah - Individual Letters (Huruf)
  { id: 'k1', type: 'katakana', character: 'ア', romanization: 'a', level: 'mudah', meaning: 'A' },
  { id: 'k2', type: 'katakana', character: 'イ', romanization: 'i', level: 'mudah', meaning: 'I' },
  { id: 'k3', type: 'katakana', character: 'ウ', romanization: 'u', level: 'mudah', meaning: 'U' },
  { id: 'k4', type: 'katakana', character: 'エ', romanization: 'e', level: 'mudah', meaning: 'E' },
  { id: 'k5', type: 'katakana', character: 'オ', romanization: 'o', level: 'mudah', meaning: 'O' },
  { id: 'k6', type: 'katakana', character: 'カ', romanization: 'ka', level: 'mudah', meaning: 'KA' },
  { id: 'k7', type: 'katakana', character: 'キ', romanization: 'ki', level: 'mudah', meaning: 'KI' },
  { id: 'k8', type: 'katakana', character: 'ク', romanization: 'ku', level: 'mudah', meaning: 'KU' },
  { id: 'k9', type: 'katakana', character: 'ケ', romanization: 'ke', level: 'mudah', meaning: 'KE' },
  { id: 'k10', type: 'katakana', character: 'コ', romanization: 'ko', level: 'mudah', meaning: 'KO' },
  { id: 'k11', type: 'katakana', character: 'サ', romanization: 'sa', level: 'mudah', meaning: 'SA' },
  { id: 'k12', type: 'katakana', character: 'シ', romanization: 'shi', level: 'mudah', meaning: 'SHI' },
  { id: 'k13', type: 'katakana', character: 'ス', romanization: 'su', level: 'mudah', meaning: 'SU' },
  { id: 'k14', type: 'katakana', character: 'セ', romanization: 'se', level: 'mudah', meaning: 'SE' },
  { id: 'k15', type: 'katakana', character: 'ソ', romanization: 'so', level: 'mudah', meaning: 'SO' },
  
  // Menengah - Words (Kata)
  { id: 'k16', type: 'katakana', character: 'コーヒー', romanization: 'koohii', level: 'menengah', meaning: 'Kopi' },
  { id: 'k17', type: 'katakana', character: 'カメラ', romanization: 'kamera', level: 'menengah', meaning: 'Kamera' },
  { id: 'k18', type: 'katakana', character: 'テレビ', romanization: 'terebi', level: 'menengah', meaning: 'Televisi' },
  { id: 'k19', type: 'katakana', character: 'コンピューター', romanization: 'konpyuutaa', level: 'menengah', meaning: 'Komputer' },
  { id: 'k20', type: 'katakana', character: 'インターネット', romanization: 'intaanetto', level: 'menengah', meaning: 'Internet' },
  { id: 'k21', type: 'katakana', character: 'レストラン', romanization: 'resutoran', level: 'menengah', meaning: 'Restoran' },
  { id: 'k22', type: 'katakana', character: 'スマートフォン', romanization: 'sumaatofon', level: 'menengah', meaning: 'Smartphone' },
  { id: 'k23', type: 'katakana', character: 'タクシー', romanization: 'takushii', level: 'menengah', meaning: 'Taksi' },
  { id: 'k24', type: 'katakana', character: 'ホテル', romanization: 'hoteru', level: 'menengah', meaning: 'Hotel' },
  { id: 'k25', type: 'katakana', character: 'バス', romanization: 'basu', level: 'menengah', meaning: 'Bus' },
  { id: 'k26', type: 'katakana', character: 'アイスクリーム', romanization: 'aisukuriimu', level: 'menengah', meaning: 'Es krim' },
  { id: 'k27', type: 'katakana', character: 'チョコレート', romanization: 'chokoreeto', level: 'menengah', meaning: 'Cokelat' },
  { id: 'k28', type: 'katakana', character: 'ジュース', romanization: 'juusu', level: 'menengah', meaning: 'Jus' },
  { id: 'k29', type: 'katakana', character: 'サッカー', romanization: 'sakkaa', level: 'menengah', meaning: 'Sepak bola' },
  { id: 'k30', type: 'katakana', character: 'メール', romanization: 'meeru', level: 'menengah', meaning: 'Email' },
  
  // Sulit - Sentences (Kalimat)
  { id: 'k31', type: 'katakana', character: 'コーヒーをください', romanization: 'koohii wo kudasai', level: 'sulit', meaning: 'Tolong beri saya kopi' },
  { id: 'k32', type: 'katakana', character: 'インターネットが好きです', romanization: 'intaanetto ga suki desu', level: 'sulit', meaning: 'Saya suka internet' },
  { id: 'k33', type: 'katakana', character: 'レストランに行きます', romanization: 'resutoran ni ikimasu', level: 'sulit', meaning: 'Pergi ke restoran' },
  { id: 'k34', type: 'katakana', character: 'タクシーを呼んでください', romanization: 'takushii wo yonde kudasai', level: 'sulit', meaning: 'Tolong panggil taksi' },
  { id: 'k35', type: 'katakana', character: 'ホテルはどこですか', romanization: 'hoteru wa doko desu ka', level: 'sulit', meaning: 'Di mana hotelnya?' },
  { id: 'k36', type: 'katakana', character: 'スマートフォンを使います', romanization: 'sumaatofon wo tsukaimasu', level: 'sulit', meaning: 'Menggunakan smartphone' },
];

// Hiragana - Japanese
const HIRAGANA_CHARACTERS: Character[] = [
  // Mudah - Individual Letters (Huruf)
  { id: 'hr1', type: 'hiragana', character: 'あ', romanization: 'a', level: 'mudah', meaning: 'A' },
  { id: 'hr2', type: 'hiragana', character: 'い', romanization: 'i', level: 'mudah', meaning: 'I' },
  { id: 'hr3', type: 'hiragana', character: 'う', romanization: 'u', level: 'mudah', meaning: 'U' },
  { id: 'hr4', type: 'hiragana', character: 'え', romanization: 'e', level: 'mudah', meaning: 'E' },
  { id: 'hr5', type: 'hiragana', character: 'お', romanization: 'o', level: 'mudah', meaning: 'O' },
  { id: 'hr6', type: 'hiragana', character: 'か', romanization: 'ka', level: 'mudah', meaning: 'KA' },
  { id: 'hr7', type: 'hiragana', character: 'き', romanization: 'ki', level: 'mudah', meaning: 'KI' },
  { id: 'hr8', type: 'hiragana', character: 'く', romanization: 'ku', level: 'mudah', meaning: 'KU' },
  { id: 'hr9', type: 'hiragana', character: 'け', romanization: 'ke', level: 'mudah', meaning: 'KE' },
  { id: 'hr10', type: 'hiragana', character: 'こ', romanization: 'ko', level: 'mudah', meaning: 'KO' },
  { id: 'hr11', type: 'hiragana', character: 'さ', romanization: 'sa', level: 'mudah', meaning: 'SA' },
  { id: 'hr12', type: 'hiragana', character: 'し', romanization: 'shi', level: 'mudah', meaning: 'SHI' },
  { id: 'hr13', type: 'hiragana', character: 'す', romanization: 'su', level: 'mudah', meaning: 'SU' },
  { id: 'hr14', type: 'hiragana', character: 'せ', romanization: 'se', level: 'mudah', meaning: 'SE' },
  { id: 'hr15', type: 'hiragana', character: 'そ', romanization: 'so', level: 'mudah', meaning: 'SO' },
  
  // Menengah - Words (Kata)
  { id: 'hr16', type: 'hiragana', character: 'さくら', romanization: 'sakura', level: 'menengah', meaning: 'Bunga sakura' },
  { id: 'hr17', type: 'hiragana', character: 'にほん', romanization: 'nihon', level: 'menengah', meaning: 'Jepang' },
  { id: 'hr18', type: 'hiragana', character: 'ともだち', romanization: 'tomodachi', level: 'menengah', meaning: 'Teman' },
  { id: 'hr19', type: 'hiragana', character: 'がっこう', romanization: 'gakkou', level: 'menengah', meaning: 'Sekolah' },
  { id: 'hr20', type: 'hiragana', character: 'せんせい', romanization: 'sensei', level: 'menengah', meaning: 'Guru' },
  { id: 'hr21', type: 'hiragana', character: 'かぞく', romanization: 'kazoku', level: 'menengah', meaning: 'Keluarga' },
  { id: 'hr22', type: 'hiragana', character: 'たべもの', romanization: 'tabemono', level: 'menengah', meaning: 'Makanan' },
  { id: 'hr23', type: 'hiragana', character: 'のみもの', romanization: 'nomimono', level: 'menengah', meaning: 'Minuman' },
  { id: 'hr24', type: 'hiragana', character: 'みず', romanization: 'mizu', level: 'menengah', meaning: 'Air' },
  { id: 'hr25', type: 'hiragana', character: 'ほん', romanization: 'hon', level: 'menengah', meaning: 'Buku' },
  { id: 'hr26', type: 'hiragana', character: 'いえ', romanization: 'ie', level: 'menengah', meaning: 'Rumah' },
  { id: 'hr27', type: 'hiragana', character: 'くに', romanization: 'kuni', level: 'menengah', meaning: 'Negara' },
  { id: 'hr28', type: 'hiragana', character: 'まち', romanization: 'machi', level: 'menengah', meaning: 'Kota' },
  { id: 'hr29', type: 'hiragana', character: 'なまえ', romanization: 'namae', level: 'menengah', meaning: 'Nama' },
  { id: 'hr30', type: 'hiragana', character: 'あさ', romanization: 'asa', level: 'menengah', meaning: 'Pagi' },
  
  // Sulit - Sentences (Kalimat)
  { id: 'hr31', type: 'hiragana', character: 'おはようございます', romanization: 'ohayou gozaimasu', level: 'sulit', meaning: 'Selamat pagi' },
  { id: 'hr32', type: 'hiragana', character: 'ありがとうございます', romanization: 'arigatou gozaimasu', level: 'sulit', meaning: 'Terima kasih banyak' },
  { id: 'hr33', type: 'hiragana', character: 'すみません', romanization: 'sumimasen', level: 'sulit', meaning: 'Maaf/Permisi' },
  { id: 'hr34', type: 'hiragana', character: 'わたしはがくせいです', romanization: 'watashi wa gakusei desu', level: 'sulit', meaning: 'Saya adalah pelajar' },
  { id: 'hr35', type: 'hiragana', character: 'にほんごをべんきょうします', romanization: 'nihongo wo benkyou shimasu', level: 'sulit', meaning: 'Saya belajar bahasa Jepang' },
  { id: 'hr36', type: 'hiragana', character: 'おいしいです', romanization: 'oishii desu', level: 'sulit', meaning: 'Ini enak' },
  { id: 'hr37', type: 'hiragana', character: 'はじめまして', romanization: 'hajimemashite', level: 'sulit', meaning: 'Senang bertemu dengan Anda' },
  { id: 'hr38', type: 'hiragana', character: 'どういたしまして', romanization: 'douitashimashite', level: 'sulit', meaning: 'Sama-sama' },
  { id: 'hr39', type: 'hiragana', character: 'おげんきですか', romanization: 'ogenki desu ka', level: 'sulit', meaning: 'Apa kabar?' },
  { id: 'hr40', type: 'hiragana', character: 'どこにいきますか', romanization: 'doko ni ikimasu ka', level: 'sulit', meaning: 'Mau kemana?' },
];

export const ALL_CHARACTERS = [...HANGUL_CHARACTERS, ...KATAKANA_CHARACTERS, ...HIRAGANA_CHARACTERS];

export const getCharactersByType = (type: 'hangul' | 'katakana' | 'hiragana') => {
  return ALL_CHARACTERS.filter((c) => c.type === type);
};

export const getCharactersByLevel = (type: 'hangul' | 'katakana' | 'hiragana', level: 'mudah' | 'menengah' | 'sulit') => {
  return ALL_CHARACTERS.filter((c) => c.type === type && c.level === level);
};

export const getCharacterById = (id: string) => {
  return ALL_CHARACTERS.find((c) => c.id === id);
};
