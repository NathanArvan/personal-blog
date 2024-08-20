const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");

    eleventyConfig.addFilter('readableDate', (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
        'dd LLL yyyy'
      );
    })
  };