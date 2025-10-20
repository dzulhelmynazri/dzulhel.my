import { ClaudeAI } from "../components/productivity/claude";
import { Cursor } from "../components/productivity/cursor";
import { Linear } from "../components/productivity/linear";
import { ModelContextProtocol } from "../components/productivity/mcp";
import { OpenAI } from "../components/productivity/openai";
import { PerplexityAI } from "../components/productivity/perplexity-ai";
import { v0 } from "../components/productivity/v0";
import type { Productivity } from "../types/productivity";

export const PRODUCTIVITY: Productivity[] = [
  {
    icon: Cursor,
    title: "Cursor",
    href: "https://cursor.com/",
    categories: ["IDE"],
  },
  {
    icon: Linear,
    title: "Linear",
    href: "https://linear.app/",
    categories: ["Project Management"],
  },
  {
    icon: OpenAI,
    title: "ChatGPT",
    href: "https://chatgpt.com/",
    categories: ["Tools", "AI"],
  },
  {
    icon: ClaudeAI,
    title: "Claude AI",
    href: "https://claude.ai/",
    categories: ["Tools", "AI"],
  },
  {
    icon: PerplexityAI,
    title: "Perplexity AI",
    href: "https://www.perplexity.ai/",
    categories: ["Tools", "AI"],
  },
  {
    icon: v0,
    title: "v0",
    href: "https://v0.app/",
    categories: ["Tools", "AI"],
  },
  {
    icon: ModelContextProtocol,
    title: "Model Context Protocol",
    href: "https://modelcontextprotocol.github.io/",
    categories: ["Tools"],
  },
];
