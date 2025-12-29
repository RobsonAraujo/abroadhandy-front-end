import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect, useRef } from "react";
import { SerializedEditorState } from "lexical";

/**
 * Plugin to load initial editor state once when the editor is ready.
 * This is the correct way to load saved content in Lexical - we set the state
 * once during initialization, not reactively.
 *
 * Accepts EditorState JSON object (from editorState.toJSON()).
 */
export default function InitialStatePlugin({
  initialState,
}: {
  initialState: SerializedEditorState;
}) {
  const [editor] = useLexicalComposerContext();
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    // Only load initial state once, and only if we have state to load
    if (initialState && !hasLoadedRef.current) {
      // Use setTimeout to ensure editor is fully ready
      const timeoutId = setTimeout(() => {
        try {
          // Parse the JSON state into an EditorState instance
          const editorState = editor.parseEditorState(initialState);
          editor.setEditorState(editorState);
          hasLoadedRef.current = true;
        } catch (error) {
          console.error("Failed to load initial editor state:", error);
        }
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [editor, initialState]);

  return null;
}
