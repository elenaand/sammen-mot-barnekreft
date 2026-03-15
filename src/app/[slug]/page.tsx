import fs from "fs";
import path from "path";
import MarkdownRenderer from "@/src/components/MarkdownRenderer";

export async function generateStaticParams() {
  const slugs = fs.readdirSync('public')
      .filter((file) => file.endsWith(".md"))
      .map((file) => ({slug: file.substring(0, file.length - 3)}))
  return slugs; 
}

export default async function Page({
  params
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), `public/${slug}.md`);
  const content = fs.readFileSync(filePath, "utf8");

  return <MarkdownRenderer content={content} />;
}
