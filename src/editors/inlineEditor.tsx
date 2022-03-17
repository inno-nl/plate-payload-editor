import React, { useState, useEffect, useMemo } from 'react'
import { UsePopperPositionOptions } from '@udecode/plate-ui-popper';
import { liveScope } from '../live'
import { wrapEditor } from '../wrapEditor'

const {
  BallonToolbarMarks,
  usePlateEditorRef,
  useEventEditorId,
  BalloonToolbar,
  ToolbarMark,
  getSlatePluginType,
  MARK_BOLD,
  FormatBold,
  MARK_ITALIC,
  FormatItalic,
  MARK_UNDERLINE,
  FormatUnderlined,
  withStyledPlaceHolders,
  SlatePlugins,
  components,

  pluginsBasic,
  options,
  editableProps,
  initialValueBalloonToolbar,
} = liveScope

const BallonToolbarMarksCustom = () => {
  const editor = usePlateEditorRef()

  const arrow = false
  const theme = 'dark'
  const direction = 'top'
  const hiddenDelay = 0
  const popperOptions: Partial<UsePopperPositionOptions> = {
    placement: 'top'
  }
  const tooltip = {
    arrow: true,
    delay: 0,
    duration: [200, 1],
    hideOnClick: false,
    offset: [0, 17],
    placement: 'top',
  }

  return (
    <BalloonToolbar popperOptions={popperOptions} theme={theme} arrow={arrow}>
      <ToolbarMark
        type={getSlatePluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
        tooltip={{
          content: 'Bold (⌘B)',
          ...tooltip,
          duration: [tooltip.duration[0], tooltip.duration[1]],
          offset: [tooltip.offset[0], tooltip.offset[1]],
          placement: 'top',
        }}
      />
      <ToolbarMark
        type={getSlatePluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
        tooltip={{
          content: 'Italic (⌘I)',
          ...tooltip,
          duration: [tooltip.duration[0], tooltip.duration[1]],
          offset: [tooltip.offset[0], tooltip.offset[1]],
          placement: 'top',
        }}
      />
      <ToolbarMark
        type={getSlatePluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
        tooltip={{
          content: 'Underline (⌘U)',
          ...tooltip,
          duration: [tooltip.duration[0], tooltip.duration[1]],
          offset: [tooltip.offset[0], tooltip.offset[1]],
          placement: 'top',
        }}
      />
    </BalloonToolbar>
  )
}

export const InlineEditor = wrapEditor((props) => {
  const componentsPlaceholder = withStyledPlaceHolders(components)

  const style = {
    boxShadow: '0 2px 3px 0 rgb(0 2 4 / 10%), 0 6px 4px -4px rgb(0 2 4 / 2%)',
    fontFamily: 'system-ui',
    width: '100%',
    border: '1px solid #DADADA',
    background: 'white',
    color: '#333333',
    borderRadius: 0,
    fontSize: '1rem',
    height: '2.8571428571rem',
    lineHeight: '1.4285714286rem',
    padding: '0.7142857143rem 1.0714285714rem',
    marginBottom: '1.4285714286rem',
  }

  return (
    <>
      <div style={style}>
        <BallonToolbarMarks />
        <SlatePlugins
          id={props.id}
          plugins={pluginsBasic}
          components={components}
          options={options}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </>
  )
})

export default InlineEditor
