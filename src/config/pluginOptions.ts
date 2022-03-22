import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_PARAGRAPH,
  ELEMENT_TD,
  ELEMENT_TODO_LI,
  ELEMENT_IMAGE,
  ExitBreakPlugin,
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  KEYS_HEADING,
  TComboboxItem,
  ResetNodePlugin,
  SoftBreakPlugin,
} from "@udecode/plate"
import { MENTIONABLES } from "./mentionables"

const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
  defaultType: ELEMENT_PARAGRAPH,
}

export const optionsResetBlockTypePlugin: ResetNodePlugin = {
  rules: [
    {
      ...resetBlockTypesCommonRule,
      hotkey: "Enter",
      predicate: isBlockAboveEmpty,
    },
    {
      ...resetBlockTypesCommonRule,
      hotkey: "Backspace",
      predicate: isSelectionAtBlockStart,
    },
  ],
}

export const optionsSoftBreakPlugin: SoftBreakPlugin = {
  rules: [
    { hotkey: "shift+enter" },
    {
      hotkey: "enter",
      query: {
        allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
      },
    },
  ],
}

export const optionsExitBreakPlugin: ExitBreakPlugin = {
  rules: [
    {
      hotkey: "mod+enter",
    },
    {
      hotkey: "mod+shift+enter",
      before: true,
    },
    {
      hotkey: "enter",
      query: {
        start: true,
        end: true,
        allow: KEYS_HEADING,
      },
    },
    {
      hotkey: "enter",
      query: {
        allow: [ELEMENT_IMAGE],
      },
    },
    {
      hotkey: "enter",
      before: true,
      query: {
        start: true,
        allow: [ELEMENT_PARAGRAPH],
      },
    },
  ],
}

export const editableProps = {
  placeholder: "Enter some rich text…",
  spellCheck: false,
  padding: "0 30px",
}
