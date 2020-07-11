/**
 * Transformed to ES6 syntax by @supinic
 * Generated from https://translate.google.com *
 * The languages that Google Translate supports (as of 5/15/16) alongside with their ISO 639-1 codes
 * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 */
module.exports = (function () {
	const languages = require(__dirname + "/languages.json");

	return class ISOLanguageParser {
		static getCode (string, targetCode = "iso6391") {
			const target = ISOLanguageParser.get(string);
			if (!target) {
				return null;
			}
			else if (targetCode) {
				return target[targetCode];
			}
		}

		static getName (string) {
			const target = ISOLanguageParser.get(string);
			if (!target) {
				return null;
			}
			else {
				return target.names[0];
			}
		}

		/**
		 * Returns the full definition of language, or null if none was found
		 * @param {string} string – the name or the code of the desired language
		 * @returns {Language|null} Language definition, or null if not found
		 */
		static get (string) {
			if (typeof string !== "string") {
				return null;
			}

			const target = string.toLowerCase();
			return ISOLanguageParser.languages.find(i => (
				i.iso6391 === target
				|| i.iso6392 === target
				|| i.iso6393 === target
				|| i.names.includes(target)
			));
		}

		/**
		 * Supported languages and their ISO codes
		 * @returns {Language[]}
		 */
		static get languages () {
			return languages;
		}
	};
})();

/**
 * @typedef {Object} Language
 * @property {string} iso6391
 * @property {string} iso6392
 * @property {string[]} names
 */