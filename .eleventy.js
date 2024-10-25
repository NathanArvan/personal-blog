const { DateTime } = require('luxon');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addFilter('readableDate', (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
        'dd LLL yyyy'
      );
    })

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
      // which file extensions to process
      extensions: "html",

      // Add any other Image utility options here:
  
      // optional, output image formats
      formats: ["webp", "jpeg"],
      // formats: ["auto"],
  
      // optional, output image widths
      // widths: ["auto"],
  
      // optional, attributes assigned on <img> override these values.
      defaultAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    })
  };