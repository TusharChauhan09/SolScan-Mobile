// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const {
  resolver: { sourceExts, assetExts },
} = config;

// Add .mjs for Solana libraries that rely on ESM modules
config.resolver.sourceExts = [...sourceExts, "mjs"];

// Keep exports support enabled (default in recent Expo)
config.resolver.unstable_enablePackageExports = true;

module.exports = config;
