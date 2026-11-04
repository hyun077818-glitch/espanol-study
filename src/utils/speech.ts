/**
 * Native Spanish Text-To-Speech helper using the Web Speech API
 */
export function playSpanishTTS(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  // Cancel any running speech
  window.speechSynthesis.cancel();

  // Clean text from blanks or underlines like "______"
  const cleaned = text
    .replace(/_{2,}/g, '')
    .replace(/[()]/g, '')
    .trim();

  if (!cleaned) return;

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
