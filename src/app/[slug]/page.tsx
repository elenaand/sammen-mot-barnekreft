import fs from "fs";
import path from "path";
import MarkdownRenderer from "@/src/components/MarkdownRenderer";

export default async function Page({
  params
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), `public/${slug}.md`);
  const content = fs.readFileSync(filePath, "utf8");

  return <MarkdownRenderer content={content} />;
}
