import fs from "fs";
import path from "path";
import MarkdownRenderer from "@/src/components/MarkdownRenderer";

export default function Home() {
  const filePath = path.join(process.cwd(), "public/om-oss.md");
  const content = fs.readFileSync(filePath, "utf8");

  return <MarkdownRenderer content={content} />;
}
