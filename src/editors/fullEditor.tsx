import "tippy.js/dist/tippy.css"

import React, { useMemo } from "react"
import { Image, Link } from "@styled-icons/material"
import { liveScope } from "../live"
import { wrapEditor } from "../wrapEditor"

import {
  BallonMarkToolbarButtons,
  ToolbarButtonsBasicElements,
  ToolbarButtonsList,
  ToolbarButtonsBasicMarks,
  ToolbarButtonsAlign,
  ToolbarButtonsTable,
} from "../config/Toolbars"

// ——

import {
  ELEMENT_IMAGE,
  ELEMENT_PARAGRAPH,
  createPlateUI,
  HeadingToolbar,
  MentionCombobox,
  Plate,
  PlatePlugin,
  createPlugins,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createExitBreakPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHistoryPlugin,
  createKbdPlugin,
  createImagePlugin,
  createItalicPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createReactPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  createDeserializeHtmlPlugin,
  createMentionPlugin,
  withProps,
  MentionElement,
  ELEMENT_MENTION,
  PlateEditor,
} from "@udecode/plate"
import { optionsAutoformat } from "../config/autoformatRules"
import {
  editableProps,
  optionsExitBreakPlugin,
  optionsResetBlockTypePlugin,
  optionsSoftBreakPlugin,
} from "../config/pluginOptions"
import { renderMentionLabel } from "../config/renderMentionLabel"
import { withStyledPlaceHolders } from "../config/withStyledPlaceHolders"
import { HistoryEditor } from "slate-history"
import { ReactEditor } from "slate-react"
import { MENTIONABLES } from "../config/mentionables"

type TEditor = PlateEditor & ReactEditor & HistoryEditor

const id = "Examples/Playground"

let components = createPlateUI({
  [ELEMENT_MENTION]: withProps(MentionElement, {
    renderLabel: renderMentionLabel,
  }),
  // customize your components by plugin key
})
components = withStyledPlaceHolders(components)
// components = withStyledDraggables(components)

const { ToolbarKbd, ToolbarHighlight, ToolbarLink, ToolbarImage } = liveScope

export const FullEditor = wrapEditor((props) => {
  const plugins: PlatePlugin<TEditor>[] = useMemo(() => {
    const p = [
      createReactPlugin(),
      createHistoryPlugin(),
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createTodoListPlugin(),
      createHeadingPlugin(),
      createImagePlugin(),
      createLinkPlugin(),
      createListPlugin(),
      createTablePlugin(),
      createMediaEmbedPlugin(),
      createCodeBlockPlugin(),
      createAlignPlugin(),
      createBoldPlugin(),
      createCodePlugin(),
      createItalicPlugin(),
      createHighlightPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createKbdPlugin(),
      createNodeIdPlugin(),
      createAutoformatPlugin({ options: optionsAutoformat }),
      createResetNodePlugin({ options: optionsResetBlockTypePlugin }),
      createSoftBreakPlugin({ options: optionsSoftBreakPlugin }),
      createExitBreakPlugin({ options: optionsExitBreakPlugin }),
      createTrailingBlockPlugin({
        type: ELEMENT_PARAGRAPH,
      }),
      createSelectOnBackspacePlugin({
        options: { query: { allow: ELEMENT_IMAGE } },
      }),
      createMentionPlugin(),
    ]

    p.push(createDeserializeHtmlPlugin({ plugins: p }))
    return createPlugins(p, { components })
  }, [createMentionPlugin])

  return (
    <Plate
      id={props.id}
      plugins={plugins}
      onChange={props.onChange}
      value={props.value}
      editableProps={{
        ...editableProps,
        ...props.editableProps,
      }}
    >
      <HeadingToolbar>
        <ToolbarButtonsBasicElements />
        <ToolbarButtonsList />
        <ToolbarButtonsBasicMarks />
        <ToolbarKbd />
        <ToolbarHighlight />
        <ToolbarButtonsAlign />
        <ToolbarLink icon={<Link />} />
        <ToolbarImage icon={<Image />} />
        <ToolbarButtonsTable />
      </HeadingToolbar>

      <BallonMarkToolbarButtons />

      <MentionCombobox items={MENTIONABLES} />
    </Plate>
  )
})

export default FullEditor
