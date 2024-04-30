/* global hexo */
const injector = require('./lib/analytics');

function run(config) {
    if (!config) {
        // plugin is not configured
        return;
    }

    // registers injector on all pages
    hexo.extend.injector.register('head_end', injector(hexo));
}

run(hexo.config.analytics);