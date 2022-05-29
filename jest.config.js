/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+.(ts|html)$": "ts-jest",
    "^.+.js$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(apollo-server|type-graphql|graphql-subscriptions)/)",
  ],
  modulePathIgnorePatterns: ["<rootDir>/dist"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^src/(.*)$": "src/$1",
    "^apollo-server$": "apollo-server",
  },

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
