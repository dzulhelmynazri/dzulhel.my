import { remark } from "remark";
import type { TOCItemType } from "fumadocs-core/toc";
import { visit } from "unist-util-visit";
import type { Heading } from "mdast";

export function getTableOfContents(content: string): TOCItemType[] {
  const toc: TOCItemType[] = [];

  const tree = remark().parse(content);

  visit(tree, "heading", (node: Heading) => {
    const depth = node.depth;

    if (depth >= 2 && depth <= 4) {
      const text = node.children
        .map((child) => {
          if (child.type === "text") {
            return child.value;
          }
          if (child.type === "inlineCode") {
            return child.value;
          }
          return "";
        })
        .join("");

      const url = `#${text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}`;

      toc.push({
        title: text,
        url,
        depth,
      });
    }
  });

  return toc;
}
