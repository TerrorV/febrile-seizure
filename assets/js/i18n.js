/**
 * Lightweight i18n helper for Febrile Seizure Responder.
 * Loads translation dictionaries and provides a t() function
 * with nested key resolution and simple string interpolation.
 *
 * Usage:
 *   t('app.title')
 *   t('questions.side.text')
 *   t('waiting.nextCardAt', { time: '5 min' })
 */

const I18N = {
  current: 'en',
  fallback: 'en',
  dicts: {},

  /**
   * Load a translation dictionary from JSON.
   * @param {string} lang - Language code
   * @param {Object} data - Parsed JSON object
   */
  register(lang, data) {
    this.dicts[lang] = data;
  },

  /**
   * Set the active language. Falls back to `fallback` if missing.
   */
  setLanguage(lang) {
    if (!this.dicts[lang]) {
      console.warn(`[i18n] Language "${lang}" not found. Falling back to "${this.fallback}".`);
      this.current = this.fallback;
    } else {
      this.current = lang;
    }
  },

  /**
   * Resolve a dotted key path against the current dictionary.
   * Supports {placeholder} interpolation via an optional values object.
   */
  t(key, values) {
    let dict = this.dicts[this.current];
    if (!dict) dict = this.dicts[this.fallback];

    const parts = key.split('.');
    let node = dict;
    for (const p of parts) {
      if (node && typeof node === 'object' && p in node) {
        node = node[p];
      } else {
        // Key not found — return the key itself as a safe fallback.
        return key;
      }
    }

    if (typeof node !== 'string') return String(node ?? key);

    let result = node;
    if (values && typeof values === 'object') {
      result = result.replace(/\{(\w+)\}/g, (_, placeholder) => {
        return values[placeholder] !== undefined ? values[placeholder] : `{${placeholder}}`;
      });
    }

    return result;
  },

  /**
   * Return the display name of the current language (from app.langName).
   */
  langName() {
    return this.t('app.langName');
  }
};