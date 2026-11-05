/**
 * Native Spanish Text-To-Speech helper using the Web Speech API
 */
export function playSpanishTTS(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  // Cancel any running speech
  window.speechSynthesis.cancel();

  // Clean text: strip bracketed content like [메히꼬], parenthesized text, Korean Hangul characters, and blanks
  const cleaned = text
    .replace(/\[[^\]]*\]/g, '') // remove [한글발음]
    .replace(/\([^)]*\)/g, '') // remove (한국어설명)
    .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '') // strip any leftover Korean characters
    .replace(/_{2,}/g, '') // remove underlines like ______
    .replace(/[/\\]/g, ', ') // replace slashes with pause
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleaned || !/[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]/.test(cleaned)) return;

  const utterance = new SpeechSynthesisUtterance(cleaned);
  utterance.lang = 'es-ES';
  utterance.rate = 0.9; // Slightly slower for clear learner comprehension

  // Try finding a Spanish voice
  const voices = window.speechSynthesis.getVoices();
  const esVoice = voices.find(
    (v) => v.lang.startsWith('es') || v.lang.includes('Spanish')
  );
  if (esVoice) {
    utterance.voice = esVoice;
  }

  window.speechSynthesis.speak(utterance);
}
