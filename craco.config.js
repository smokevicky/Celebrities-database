const path = require('path');

module.exports = {
    webpack: {
        alias: {
            // Paths to barrel files

            '@atoms': path.resolve(__dirname, 'src/stories/components/atoms/index.ts'),
            '@molecules': path.resolve(__dirname, 'src/stories/components/molecules/index.ts'),
            '@templates': path.resolve(__dirname, 'src/stories/components/templates/index.ts'),

            '@apiData': path.resolve(__dirname, 'src/app/apiData/index.ts'),
            '@types': path.resolve(__dirname, 'src/app/types/index.ts'),
        },
    },
};
