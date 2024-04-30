const htmlParser = require('node-html-parser');

beforeEach(() => {
    global.__registerMock = jest.fn();
    hexo = {
        config: {
            analytics: {
                microsoft_clarity: {
                    enable: false
                }
            }
        }
    };
});


test('When microsoft_clarity is disabled', () => {
    const res = require('../lib/analytics')(hexo)();
    expect(res).toBe(undefined);
});

test('When project_id is not defined while microsoft_clarity is enabled', () => {
    hexo.config.analytics.microsoft_clarity = {
        enable: true
    };
    expect(require('../lib/analytics')(hexo)).toThrow();
});

test('When project_id is defined while microsoft_clarity is enabled', () => {
    hexo.config.analytics.microsoft_clarity = {
        enable: true,
        project_id: "projectidabc"
    };

    const res = require('../lib/analytics')(hexo)();
    const scriptElement = htmlParser.parse(res);

    expect(scriptElement.firstChild.innerText).toContain("projectidabc");
});
