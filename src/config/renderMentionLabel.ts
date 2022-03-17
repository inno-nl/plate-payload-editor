import { TComboboxItem } from "@udecode/plate"
import { MENTIONABLES } from "./mentionables"

export const renderMentionLabel = (mentionable: TComboboxItem) => {
  const entry = MENTIONABLES.find((m) => m.text === mentionable.text)
  if (!entry) return "unknown option"
  return `${entry.text}`
}
