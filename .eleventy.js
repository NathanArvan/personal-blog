import { EleventyRenderPlugin } from "@11ty/eleventy"
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { DateTime } from "luxon";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";


export default function (eleventyConfig) {
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
      widths: [300, 900, "auto"],
  
      // optional, attributes assigned on <img> override these values.
      defaultAttributes: {
        sizes : "100vh",
        loading: "lazy",
        decoding: "async",
      },
    })

    // eleventyConfig.addShortcode("image", async function (src, alt, widths = [300, 600], sizes = "100vh") {
    //   let metadata = await Image(src, {
    //     widths,
    //     formats: ["avif", "jpeg"],
    //   });
  
    //   let imageAttributes = {
    //     alt,
    //     sizes,
    //     loading: "lazy",
    //     decoding: "async",
    //   };
  
    //   // You bet we throw an error on a missing alt (alt="" works okay)
    //   return Image.generateHTML(metadata, imageAttributes);
    // });
  };