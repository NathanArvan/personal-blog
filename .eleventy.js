const { DateTime } = require('luxon');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addFilter('readableDate', (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
        'dd LLL yyyy'
      );
    })
  };