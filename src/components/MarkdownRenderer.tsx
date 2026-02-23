"use client";

import Markdown from "markdown-to-jsx";

export default function MarkdownRenderer({ content }: { content: string }) {
  return <Markdown>{content}</Markdown>;
}
