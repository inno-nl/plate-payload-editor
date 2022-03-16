import 'tippy.js/animations/scale.css'
import 'tippy.js/dist/tippy.css'
import React from 'react'
import { TippyProps } from '@tippyjs/react'
import {
  addColumn,
  addRow,
  BalloonToolbar,
  deleteColumn,
  deleteRow,
  deleteTable,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_OL,
  ELEMENT_UL,
  insertTable,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_KBD,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  AlignToolbarButton,
  BlockToolbarButton,
  ListToolbarButton,
  MarkToolbarButton,
  TableToolbarButton,
  LinkToolbarButton,
  ImageToolbarButton,
  usePlateEditorRef,
  getPluginType,
  MARK_HIGHLIGHT,
} from '@udecode/plate'
import { UsePopperPositionOptions } from '@udecode/plate-ui-popper';
import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt'
import { CodeBlock } from '@styled-icons/boxicons-regular/CodeBlock'
import { Subscript } from '@styled-icons/foundation/Subscript'
import { Superscript } from '@styled-icons/foundation/Superscript'
import { BorderAll } from '@styled-icons/material/BorderAll'
import { BorderBottom } from '@styled-icons/material/BorderBottom'
import { BorderClear } from '@styled-icons/material/BorderClear'
import { Highlight } from '@styled-icons/material/Highlight'
import { BorderLeft } from '@styled-icons/material/BorderLeft'
import { BorderRight } from '@styled-icons/material/BorderRight'
import { BorderTop } from '@styled-icons/material/BorderTop'
import { FormatAlignCenter } from '@styled-icons/material/FormatAlignCenter'
import { FormatAlignJustify } from '@styled-icons/material/FormatAlignJustify'
import { FormatAlignLeft } from '@styled-icons/material/FormatAlignLeft'
import { FormatAlignRight } from '@styled-icons/material/FormatAlignRight'
import { FormatBold } from '@styled-icons/material/FormatBold'
import { FormatItalic } from '@styled-icons/material/FormatItalic'
import { FormatListBulleted } from '@styled-icons/material/FormatListBulleted'
import { FormatListNumbered } from '@styled-icons/material/FormatListNumbered'
import { FormatQuote } from '@styled-icons/material/FormatQuote'
import { FormatStrikethrough } from '@styled-icons/material/FormatStrikethrough'
import { FormatUnderlined } from '@styled-icons/material/FormatUnderlined'
import { Keyboard } from '@styled-icons/material/Keyboard'
import { Looks3 } from '@styled-icons/material/Looks3'
import { Looks4 } from '@styled-icons/material/Looks4'
import { Looks5 } from '@styled-icons/material/Looks5'
import { Looks6 } from '@styled-icons/material/Looks6'
import { LooksOne } from '@styled-icons/material/LooksOne'
import { LooksTwo } from '@styled-icons/material/LooksTwo'
import { Image } from '@styled-icons/material/Image'
import { Link } from '@styled-icons/material/Link'

export const ToolbarButtonsBasicElements = () => {
  const editor = usePlateEditorRef()

  return (
    <>
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H1)}
        icon={<LooksOne />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H2)}
        icon={<LooksTwo />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H3)}
        icon={<Looks3 />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H4)}
        icon={<Looks4 />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H5)}
        icon={<Looks5 />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H6)}
        icon={<Looks6 />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<FormatQuote />}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_CODE_BLOCK)}
        icon={<CodeBlock />}
      />
    </>
  )
}

export const ToolbarButtonsList = () => {
  const editor = usePlateEditorRef()

  return (
    <>
      <ListToolbarButton
        type={getPluginType(editor, ELEMENT_UL)}
        icon={<FormatListBulleted />}
      />
      <ListToolbarButton
        type={getPluginType(editor, ELEMENT_OL)}
        icon={<FormatListNumbered />}
      />
    </>
  )
}

export const ToolbarButtonsAlign = () => {
  const editor = usePlateEditorRef()

  return (
    <>
      <AlignToolbarButton value="left" icon={<FormatAlignLeft />} />
      <AlignToolbarButton
        value="center"
        icon={<FormatAlignCenter />}
      />
      <AlignToolbarButton
        value="right"
        icon={<FormatAlignRight />}
      />
      <AlignToolbarButton
        value="justify"
        icon={<FormatAlignJustify />}
      />
    </>
  )
}

export const ToolbarButtonsBasicMarks = () => {
  const editor = usePlateEditorRef()

  return (
    <>
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_STRIKETHROUGH)}
        icon={<FormatStrikethrough />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_CODE)}
        icon={<CodeAlt />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_SUPERSCRIPT)}
        clear={getPluginType(editor, MARK_SUBSCRIPT)}
        icon={<Superscript />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_SUBSCRIPT)}
        clear={getPluginType(editor, MARK_SUPERSCRIPT)}
        icon={<Subscript />}
      />
    </>
  )
}

export const ToolbarKbd = () => {
  const editor = usePlateEditorRef()

  return (
    <MarkToolbarButton
      type={getPluginType(editor, MARK_KBD)}
      icon={<Keyboard />}
    />
  )
}

export const ToolbarHighlight = () => {
  const editor = usePlateEditorRef()

  return (
    <MarkToolbarButton
      type={getPluginType(editor, MARK_HIGHLIGHT)}
      icon={<Highlight />}
    />
  )
}

export const ToolbarButtonsTable = () => (
  <>
    <TableToolbarButton icon={<BorderAll />} transform={insertTable} />
    <TableToolbarButton icon={<BorderClear />} transform={deleteTable} />
    <TableToolbarButton icon={<BorderBottom />} transform={addRow} />
    <TableToolbarButton icon={<BorderTop />} transform={deleteRow} />
    <TableToolbarButton icon={<BorderLeft />} transform={addColumn} />
    <TableToolbarButton icon={<BorderRight />} transform={deleteColumn} />
  </>
)

export const BallonMarkToolbarButtons = () => {
  const editor = usePlateEditorRef()

  const arrow = false
  const theme = 'dark'
  const popperOptions: Partial<UsePopperPositionOptions> = {
    placement: 'top'
  }
  const tooltip: TippyProps = {
    arrow: true,
    delay: 0,
    duration: [200, 0],
    hideOnClick: false,
    offset: [0, 17],
    placement: 'top',
  }

  return (
    <BalloonToolbar
      popperOptions={popperOptions}
      theme={theme}
      arrow={arrow}
    >
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
        tooltip={{ content: 'Bold (⌘B)', ...tooltip }}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
        tooltip={{ content: 'Italic (⌘I)', ...tooltip }}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
        tooltip={{ content: 'Underline (⌘U)', ...tooltip }}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_HIGHLIGHT)}
        icon={<Highlight />}
        tooltip={{ content: 'Highlight (⌘K)', ...tooltip }}
      />
    </BalloonToolbar>
  )
}

export const ToolbarButtons = () => (
  <>
    <ToolbarButtonsBasicElements />
    <ToolbarButtonsList />
    <ToolbarButtonsBasicMarks />
    <ToolbarButtonsAlign />
    <LinkToolbarButton icon={<Link />} />
    <ImageToolbarButton icon={<Image />} />
    <ToolbarButtonsTable />
  </>
)
