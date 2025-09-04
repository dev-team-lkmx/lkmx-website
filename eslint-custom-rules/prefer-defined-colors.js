/**
 * @fileoverview Rule to enforce using defined colors from colors.ts instead of hardcoded colors
 * @author Custom Rule
 */

"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce using defined colors from colors.ts instead of hardcoded colors",
      category: "Best Practices",
      recommended: true,
    },
    fixable: null, // No auto-fix
    schema: [], // no options
    messages: {
      noHardcodedColors:
        "Do not use hardcoded colors. Use colors from src/styles/colors.ts and add it if not there",
    },
  },

  create(context) {
    // Regular expression to match hex color values
    const hexColorRegex = /#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})\b/g;

    // Regular expression to match rgb/rgba color values
    const rgbColorRegex =
      /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)/g;

    // Check if the current file is colors.ts
    const filename = context.getFilename();
    const isColorsFile = filename.endsWith("colors.ts") || filename.endsWith("colors.js");

    // Skip linting the colors.ts file itself
    if (isColorsFile) {
      return {};
    }

    /**
     * Find all occurrences of a pattern in a string
     * @param {string} text - The text to search in
     * @param {RegExp} regex - The regex pattern to search for
     * @returns {Array} - Array of objects with match and index
     */
    function findAllOccurrences(text, regex) {
      const results = [];
      let match;

      // Make sure the regex has the global flag
      const globalRegex = new RegExp(regex.source, "g");

      while ((match = globalRegex.exec(text)) !== null) {
        // Skip if the match is inside a comment or import statement
        const lineUpToMatch = text.substring(text.lastIndexOf("\n", match.index) + 1, match.index);

        // Skip if in a comment
        if (lineUpToMatch.trim().startsWith("//") || lineUpToMatch.includes("/*")) {
          continue;
        }

        // Skip if in an import statement
        if (lineUpToMatch.trim().startsWith("import ")) {
          continue;
        }

        results.push({
          match: match[0],
          index: match.index,
        });
      }

      return results;
    }

    return {
      Program(node) {
        // Get the source code
        const sourceCode = context.getSourceCode();
        const sourceText = sourceCode.getText();

        // Find all occurrences of each color type
        const hexMatches = findAllOccurrences(sourceText, hexColorRegex);
        const rgbMatches = findAllOccurrences(sourceText, rgbColorRegex);

        // Combine all matches
        const allMatches = [...hexMatches, ...rgbMatches];

        // Report each match
        allMatches.forEach((item) => {
          const loc = sourceCode.getLocFromIndex(item.index);

          // Report the error
          context.report({
            loc,
            messageId: "noHardcodedColors",
          });
        });
      },
    };
  },
};
