import type { ShortestConfig } from "@antiwork/shortest";

export default {
  headless: false,
  baseUrl: "https://staging.carrier.superdispatch.org/tms/login",
  testPattern: "**/*.test.ts",
  anthropicKey: process.env.ANTHROPIC_API_KEY,
} satisfies ShortestConfig;