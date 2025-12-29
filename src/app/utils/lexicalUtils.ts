import { EditorState, $getRoot, $isParagraphNode, $isTextNode } from "lexical";

/**
 * Extracts plain text from EditorState
 */
export function extractTextFromEditorState(editorState: EditorState): string {
  let text = "";

  editorState.read(() => {
    const root = $getRoot();
    const children = root.getChildren();

    const paragraphs: string[] = [];

    for (const child of children) {
      if ($isParagraphNode(child)) {
        const paragraphText = child
          .getChildren()
          .map((node) => {
            if ($isTextNode(node)) {
              return node.getTextContent();
            }
            return "";
          })
          .join("");

        if (paragraphText.trim()) {
          paragraphs.push(paragraphText.trim());
        }
      }
    }

    text = paragraphs.join("\n\n");
  });

  return text;
}
