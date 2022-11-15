export default {
    install(app) {
        app.provide('statusCodes', [
            {
                value: 100,
                description: 'Continue',
                reference: '[RFC9110, Section 15.2.1]'
            },
            {
                value: 101,
                description: 'Switching Protocols',
                reference: '[RFC9110, Section 15.2.2]'
            },
            {
                value: 102,
                description: 'Processing',
                reference: '[RFC2518]'
            },
            {
                value: 103,
                description: 'Early Hints',
                reference: '[RFC8297]'
            },
            {
                value: 200,
                description: 'OK',
                reference: '[RFC9110, Section 15.3.1]'
            },
            {
                value: 201,
                description: 'Created',
                reference: '[RFC9110, Section 15.3.2]'
            },
            {
                value: 202,
                description: 'Accepted',
                reference: '[RFC9110, Section 15.3.3]'
            },
            {
                value: 203,
                description: 'Non-Authoritative Information',
                reference: '[RFC9110, Section 15.3.4]'
            },
            {
                value: 204,
                description: 'No Content',
                reference: '[RFC9110, Section 15.3.5]'
            },
            {
                value: 205,
                description: 'Reset Content',
                reference: '[RFC9110, Section 15.3.6]'
            },
            {
                value: 206,
                description: 'Partial Content',
                reference: '[RFC9110, Section 15.3.7]'
            },
            {
                value: 207,
                description: 'Multi-Status',
                reference: '[RFC4918]'
            },
            {
                value: 208,
                description: 'Already Reported',
                reference: '[RFC5842]'
            },
            {
                value: 226,
                description: 'IM Used',
                reference: '[RFC3229]'
            },
            {
                value: 300,
                description: 'Multiple Choices',
                reference: '[RFC9110, Section 15.4.1]'
            },
            {
                value: 301,
                description: 'Moved Permanently',
                reference: '[RFC9110, Section 15.4.2]'
            },
            {
                value: 302,
                description: 'Found',
                reference: '[RFC9110, Section 15.4.3]'
            },
            {
                value: 303,
                description: 'See Other',
                reference: '[RFC9110, Section 15.4.4]'
            },
            {
                value: 304,
                description: 'Not Modified',
                reference: '[RFC9110, Section 15.4.5]'
            },
            {
                value: 305,
                description: 'Use Proxy',
                reference: '[RFC9110, Section 15.4.6]'
            },
            {
                value: 306,
                description: '(Unused)',
                reference: '[RFC9110, Section 15.4.7]'
            },
            {
                value: 307,
                description: 'Temporary Redirect',
                reference: '[RFC9110, Section 15.4.8]'
            },
            {
                value: 308,
                description: 'Permanent Redirect',
                reference: '[RFC9110, Section 15.4.9]'
            },
            {
                value: 400,
                description: 'Bad Request',
                reference: '[RFC9110, Section 15.5.1]'
            },
            {
                value: 401,
                description: 'Unauthorized',
                reference: '[RFC9110, Section 15.5.2]'
            },
            {
                value: 402,
                description: 'Payment Required',
                reference: '[RFC9110, Section 15.5.3]'
            },
            {
                value: 403,
                description: 'Forbidden',
                reference: '[RFC9110, Section 15.5.4]'
            },
            {
                value: 404,
                description: 'Not Found',
                reference: '[RFC9110, Section 15.5.5]'
            },
            {
                value: 405,
                description: 'Method Not Allowed',
                reference: '[RFC9110, Section 15.5.6]'
            },
            {
                value: 406,
                description: 'Not Acceptable',
                reference: '[RFC9110, Section 15.5.7]'
            },
            {
                value: 407,
                description: 'Proxy Authentication Required',
                reference: '[RFC9110, Section 15.5.8]'
            },
            {
                value: 408,
                description: 'Request Timeout',
                reference: '[RFC9110, Section 15.5.9]'
            },
            {
                value: 409,
                description: 'Conflict',
                reference: '[RFC9110, Section 15.5.10]'
            },
            {
                value: 410,
                description: 'Gone',
                reference: '[RFC9110, Section 15.5.11]'
            },
            {
                value: 411,
                description: 'Length Required',
                reference: '[RFC9110, Section 15.5.12]'
            },
            {
                value: 412,
                description: 'Precondition Failed',
                reference: '[RFC9110, Section 15.5.13]'
            },
            {
                value: 413,
                description: 'Content Too Large',
                reference: '[RFC9110, Section 15.5.14]'
            },
            {
                value: 414,
                description: 'URI Too Long',
                reference: '[RFC9110, Section 15.5.15]'
            },
            {
                value: 415,
                description: 'Unsupported Media Type',
                reference: '[RFC9110, Section 15.5.16]'
            },
            {
                value: 416,
                description: 'Range Not Satisfiable',
                reference: '[RFC9110, Section 15.5.17]'
            },
            {
                value: 417,
                description: 'Expectation Failed',
                reference: '[RFC9110, Section 15.5.18]'
            },
            {
                value: 418,
                description: '(Unused)',
                reference: '[RFC9110, Section 15.5.19]'
            },
            {
                value: 421,
                description: 'Misdirected Request',
                reference: '[RFC9110, Section 15.5.20]'
            },
            {
                value: 422,
                description: 'Unprocessable Content',
                reference: '[RFC9110, Section 15.5.21]'
            },
            {
                value: 423,
                description: 'Locked',
                reference: '[RFC4918]'
            },
            {
                value: 424,
                description: 'Failed Dependency',
                reference: '[RFC4918]'
            },
            {
                value: 425,
                description: 'Too Early',
                reference: '[RFC8470]'
            },
            {
                value: 426,
                description: 'Upgrade Required',
                reference: '[RFC9110, Section 15.5.22]'
            },
            {
                value: 428,
                description: 'Precondition Required',
                reference: '[RFC6585]'
            },
            {
                value: 429,
                description: 'Too Many Requests',
                reference: '[RFC6585]'
            },
            {
                value: 431,
                description: 'Request Header Fields Too Large',
                reference: '[RFC6585]'
            },
            {
                value: 451,
                description: 'Unavailable For Legal Reasons',
                reference: '[RFC7725]'
            },
            {
                value: 500,
                description: 'Internal Server Error',
                reference: '[RFC9110, Section 15.6.1]'
            },
            {
                value: 501,
                description: 'Not Implemented',
                reference: '[RFC9110, Section 15.6.2]'
            },
            {
                value: 502,
                description: 'Bad Gateway',
                reference: '[RFC9110, Section 15.6.3]'
            },
            {
                value: 503,
                description: 'Service Unavailable',
                reference: '[RFC9110, Section 15.6.4]'
            },
            {
                value: 504,
                description: 'Gateway Timeout',
                reference: '[RFC9110, Section 15.6.5]'
            },
            {
                value: 505,
                description: 'HTTP Version Not Supported',
                reference: '[RFC9110, Section 15.6.6]'
            },
            {
                value: 506,
                description: 'Variant Also Negotiates',
                reference: '[RFC2295]'
            },
            {
                value: 507,
                description: 'Insufficient Storage',
                reference: '[RFC4918]'
            },
            {
                value: 508,
                description: 'Loop Detected',
                reference: '[RFC5842]'
            },
            {
                value: 510,
                description: 'Not Extended (OBSOLETED)',
                reference: '[RFC2774][status-change-http-experiments-to-historic]'
            },
            {
                value: 511,
                description: 'Network Authentication Required',
                reference: '[RFC6585]'
            }
        ]);
    }
};
