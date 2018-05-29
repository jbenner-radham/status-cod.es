const dateTime = require('@radioactivehamster/date-time');

process.env.VUE_APP_BUILD_TIMESTAMP = '';

if (process.env.NODE_ENV === 'production') {
    process.env.VUE_APP_BUILD_TIMESTAMP = dateTime();
}
