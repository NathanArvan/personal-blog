const { DateTime } = require('luxon');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addFilter('readableDate', (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
        'dd LLL yyyy'
      );
    })

    eleventyConfig.addPlugin(EleventyRenderPlugin);

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

    eleventyConfig.addShortcode("image", async function (src, alt, widths = [300, 600], sizes = "100vh") {
      let metadata = await Image(src, {
        widths,
        formats: ["avif", "jpeg"],
      });
  
      let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
      };
  
      // You bet we throw an error on a missing alt (alt="" works okay)
      return Image.generateHTML(metadata, imageAttributes);
    });
  };