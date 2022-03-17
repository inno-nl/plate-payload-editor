import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_LI,
  ELEMENT_OL,
  ELEMENT_TODO_LI,
  ELEMENT_UL,
  insertCodeBlock,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  toggleList,
  unwrapList,
  AutoformatPlugin,
  PlateEditor,
  AutoformatBlockRule,
} from '@udecode/plate'


const preFormat: AutoformatBlockRule['preFormat'] = (editor) =>
  unwrapList(editor as PlateEditor)

export const optionsAutoformat: AutoformatPlugin = {
  rules: [
    {
      mode: 'block',
      type: ELEMENT_H1,
      match: '#',
      preFormat,
    },
    {
      mode: 'block',
      type: ELEMENT_H2,
      match: '##',
      preFormat,
    },
    {
      mode: 'block',
      type: ELEMENT_H3,
      match: '###',
      preFormat,
    },
    {
      mode: 'block',
      type: ELEMENT_H4,
      match: '####',
      preFormat,
    },
    {
      mode: 'block',
      type: ELEMENT_H5,
      match: '#####',
      preFormat,
    },
    {
      mode: 'block',
      type: ELEMENT_H6,
      match: '######',
      preFormat,
    },
    {
      mode: 'block',
      type: ELEMENT_LI,
      match: ['*', '-'],
      preFormat,
      format: (editor) => {
        toggleList(editor as PlateEditor, { type: ELEMENT_UL })
      },
    },
    {
      mode: 'block',
      type: ELEMENT_LI,
      match: ['1.', '1)'],
      preFormat,
      format: (editor) => {
        toggleList(editor as PlateEditor, { type: ELEMENT_OL })
      },
    },
    {
      mode: 'block',
      type: ELEMENT_TODO_LI,
      match: ['[]'],
    },
    {
      mode: 'block',
      type: ELEMENT_BLOCKQUOTE,
      match: ['>'],
      preFormat,
    },
    {
      mode: 'block',
      type: MARK_BOLD,
      match: ['**', '**'],
      insertTrigger: true,
    },
    {
      mode: 'block',
      type: MARK_BOLD,
      match: ['__', '__'],
      insertTrigger: true,
    },
    {
      mode: 'block',
      type: MARK_ITALIC,
      match: ['*', '*'],
      insertTrigger: true,
    },
    {
      mode: 'block',
      type: MARK_ITALIC,
      match: ['_', '_'],
      insertTrigger: true,
    },
    {
      mode: 'block',
      type: MARK_CODE,
      match: ['`', '`'],
      insertTrigger: true,
    },
    {
      mode: 'block',
      type: MARK_STRIKETHROUGH,
      match: ['~~', '~~'],
      insertTrigger: true,
    },
    {
      mode: 'block',
      type: ELEMENT_CODE_BLOCK,
      match: '``',
      trigger: '`',
      triggerAtBlockStart: false,
      preFormat,
      format: (editor) => {
        insertCodeBlock(editor as PlateEditor, { select: true })
      },
    },
  ],
}
