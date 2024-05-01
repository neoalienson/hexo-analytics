const htmlParser = require('node-html-parser');

beforeEach(() => {
    global.__registerMock = jest.fn();
    hexo = {
        config: {
            analytics: {
                google_analytics: {
                    enable: false
                }
            }
        }
    };
});


test('When google_analytics is disabled', () => {
    const res = require('../lib/analytics')(hexo)();
    expect(res).toBe('');
});

test('When measurement_id is not defined while google_analytics is enabled', () => {
    hexo.config.analytics.google_analytics = {
        enable: true
    };
    expect(require('../lib/analytics')(hexo)).toThrow();
});

test('When measurement_id is defined while google_analytics is enabled', () => {
    hexo.config.analytics.google_analytics = {
        enable: true,
        measurement_id: "measurementidabc"
    };

    const res = require('../lib/analytics')(hexo)();
    const scriptElement = htmlParser.parse(res);
    expect(scriptElement.innerText).toContain("measurementidabc");
});
