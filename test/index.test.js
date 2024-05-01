
beforeEach(() => {
    global.__registerMock = jest.fn();
    hexo = {
        extend: {
            injector: {
                register: __registerMock,
            },
        },
        config: {},
    };
});

test('Does nothing if plugin has not been configured', () => {
    jest.isolateModules(() => {
        require('../index.js');
    });

    expect(__registerMock.mock.calls.length).toBe(0);
});

test('When no analytics is defined', () => {
    hexo = {
        config: {
            analytics : {}
        }
    }
    const res = require('../lib/analytics')(hexo)();
    expect(res).toBe('');
});