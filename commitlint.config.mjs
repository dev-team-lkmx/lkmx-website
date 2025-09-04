const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Disable rules from @commitlint/config-conventional that conflict with the new format
    'type-enum': [0],
    'type-case': [0],
    'subject-case': [0],
    'type-empty': [0],
    'subject-empty': [0],
    'header-max-length': [2, 'always', 100],

    // Add a new rule for the custom format
    'blueprint-jira-format': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'blueprint-jira-format': ({ header }) => {
          const regex = /^Blueprint-\d+ .{1,80}$/;
          return [
            regex.test(header),
            'The commit message must start with "Blueprint-XXXX" followed by a message (e.g., "Blueprint-1234 Fix a bug").',
          ];
        },
      },
    },
  ],
};

export default config;
