import { registerTransforms } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";
import { transformTokens } from "token-transformer";
import fs from "fs";

registerTransforms(StyleDictionary);

// Function to read and parse JSON file
const readJsonFile = (filePath) => {
  try {
    const jsonData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading JSON file:", error.message);
    return null;
  }
};

// Path to the JSON file
const jsonFilePath = "./tokens/tokens.json"; // Adjust the path based on your project structure

// Read and print the JSON file content
const jsonData = readJsonFile(jsonFilePath);

const setsToUse = ["auzmor1"];
const excludes = [];

const transformerOptions = {
  expandTypography: true,
  expandShadow: true,
  expandComposition: true,
  expandBorder: true,
  preserveRawValue: false,
  throwErrorWhenNotResolved: true,
  resolveReferences: true,
};

const resolved = transformTokens(
  jsonData,
  setsToUse,
  excludes,
  transformerOptions
);

// Write transformed tokens to a temporary JSON file
const tempFilePath = "./tokens/resolved-tokens.json";
fs.writeFileSync(tempFilePath, JSON.stringify(resolved));

const sd = StyleDictionary.extend({
  source: [tempFilePath], // Use the temporary JSON file as the source
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      buildPath: "build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();

// Cleanup: Delete the temporary JSON file
fs.unlinkSync(tempFilePath);
