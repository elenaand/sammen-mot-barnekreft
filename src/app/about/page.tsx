import fs from "fs";
import path from "path";
import MarkdownRenderer from "@/src/components/MarkdownRenderer";

export default function Page() {
  const filePath = path.join(process.cwd(), "src/docs/om-oss.md");
  const content = fs.readFileSync(filePath, "utf8");

  return <MarkdownRenderer content={content} />;
}
