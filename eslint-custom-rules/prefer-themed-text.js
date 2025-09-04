/**
 * @fileoverview Rule to enforce using ThemedText component instead of the standard Text component
 * @author Custom Rule
 */

"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce using ThemedText component instead of the standard Text component",
      category: "Best Practices",
      recommended: true,
    },
    fixable: "code", // Auto-fix is available
    schema: [], // no options
    messages: {
      noTextComponent:
        "Do not use the Text component directly. Use ThemedText from @/components/ui/ThemedText instead",
    },
  },

  create(context) {
    // Check if the current file is ThemedText.tsx/js
    const filename = context.getFilename();
    const isThemedTextFile = /ThemedText\.(js|jsx|ts|tsx)$/.test(filename);

    // Skip linting the ThemedText file itself
    if (isThemedTextFile) {
      return {};
    }

    return {
      JSXOpeningElement(node) {
        // Check if the element is a Text component
        if (node.name.name === "Text") {
          // Make sure it's not already in a ThemedText import
          const sourceCode = context.getSourceCode();
          const fileContent = sourceCode.getText();

          // Report the error
          context.report({
            node,
            messageId: "noTextComponent",
            fix(fixer) {
              // Check if we need to add the import
              const hasThemedTextImport = /import.*ThemedText.*from/.test(fileContent);

              // Create fixes array
              const fixes = [];

              // Add import if needed
              if (!hasThemedTextImport) {
                const importStatement = "import ThemedText from '@/components/ThemedText';\n";
                fixes.push(fixer.insertTextAfterRange([0, 0], importStatement));
              }

              // Replace Text with ThemedText
              fixes.push(fixer.replaceText(node.name, "ThemedText"));

              return fixes;
            },
          });
        }
      },
      JSXClosingElement(node) {
        // Also check closing tags
        if (node.name.name === "Text") {
          context.report({
            node,
            messageId: "noTextComponent",
            fix(fixer) {
              return fixer.replaceText(node.name, "ThemedText");
            },
          });
        }
      },
    };
  },
};
