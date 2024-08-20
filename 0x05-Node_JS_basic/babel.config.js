module.exports = (api) => {
  // Cache the configuration to avoid re-evaluating it on each build
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // Ensures compatibility with the current Node.js version
        },
      },
    ],
  ];

  const plugins = [];

  if (process.env.NODE_ENV === 'development') {
    // Add any plugins or configurations specific to development
    plugins.push('plugin-to-use-only-in-dev');
  }

  if (process.env.NODE_ENV === 'production') {
    // Add any plugins or configurations specific to production
    plugins.push('plugin-to-use-only-in-prod');
  }

  return {
    presets,
    plugins,
  };
};

