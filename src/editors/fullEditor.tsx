import 'tippy.js/dist/tippy.css'

import React, { useMemo } from 'react'
import { Image, Link } from '@styled-icons/material'
import { liveScope } from '../live'
import { wrapEditor } from '../wrapEditor'

import {
  // BallonToolbarMarks,
  // ToolbarButtons,
  ToolbarButtonsBasicElements,
  ToolbarButtonsList,
  ToolbarButtonsBasicMarks,
  ToolbarButtonsAlign,
  ToolbarButtonsTable,
} from '../config/Toolbars'

// ——

import {
  ELEMENT_IMAGE,
  ELEMENT_PARAGRAPH,
  createSlatePluginsComponents,
  createSlatePluginsOptions,
  HeadingToolbar,
  MentionSelect,
  SlatePlugin,
  SlatePlugins,
  ToolbarSearchHighlight,
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
  createDeserializeHTMLPlugin,
  useFindReplacePlugin,
  useMentionPlugin,
  withProps,
  MentionElement,
  ELEMENT_MENTION,
  SPEditor,
} from '@udecode/slate-plugins'
import { optionsAutoformat } from '../config/autoformatRules'
import { initialValuePlayground } from '../config/initialValues'
import {
  editableProps,
  optionsExitBreakPlugin,
  optionsMentionPlugin,
  optionsResetBlockTypePlugin,
  optionsSoftBreakPlugin,
} from '../config/pluginOptions'
import { renderMentionLabel } from '../config/renderMentionLabel'
import { BallonToolbarMarks, ToolbarButtons } from '../config/Toolbars'
import { withStyledPlaceHolders } from '../config/withStyledPlaceHolders'
import { withStyledDraggables } from '../config/withStyledDraggables'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { HistoryEditor } from 'slate-history'
import { ReactEditor } from 'slate-react'

type TEditor = SPEditor & ReactEditor & HistoryEditor

const id = 'Examples/Playground'

let components = createSlatePluginsComponents({
  [ELEMENT_MENTION]: withProps(MentionElement, {
    renderLabel: renderMentionLabel,
  }),
  // customize your components by plugin key
})
components = withStyledPlaceHolders(components)
// components = withStyledDraggables(components)

const options = createSlatePluginsOptions({
  // customize your options by plugin key
})

const {
  ToolbarKbd,
  ToolbarHighlight,
  ToolbarLink,
  ToolbarImage,
} = liveScope

export const FullEditor = wrapEditor((props) => {
  // const { setSearch, plugin: searchHighlightPlugin } = useFindReplacePlugin()
  const { getMentionSelectProps, plugin: mentionPlugin } = useMentionPlugin(
    optionsMentionPlugin
  )

  const plugins: SlatePlugin<TEditor>[] = useMemo(() => {
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
      createAutoformatPlugin(optionsAutoformat),
      createResetNodePlugin(optionsResetBlockTypePlugin),
      createSoftBreakPlugin(optionsSoftBreakPlugin),
      createExitBreakPlugin(optionsExitBreakPlugin),
      createTrailingBlockPlugin({
        type: options[ELEMENT_PARAGRAPH].type,
      }),
      createSelectOnBackspacePlugin({ allow: options[ELEMENT_IMAGE].type }),
      mentionPlugin,
      // searchHighlightPlugin,
    ]

    p.push(createDeserializeHTMLPlugin({ plugins: p }))

    return p
  }, [mentionPlugin /*, searchHighlightPlugin*/])

  return (
    // <DndProvider backend={HTML5Backend}>
      <SlatePlugins
        id={ props.id}
        plugins={plugins}
        components={components}
        onChange={props.onChange}
        options={options}
        value={props.value}
        editableProps={{
          ...editableProps,
          ...(props.editableProps),
        }}
      >
        { /*<ToolbarSearchHighlight icon={Search} setSearch={setSearch} />*/ }
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

        <BallonToolbarMarks />

        <MentionSelect
          {...getMentionSelectProps()}
          renderLabel={renderMentionLabel}
        />
      </SlatePlugins>
    // </DndProvider>
  )
})

export default FullEditor
