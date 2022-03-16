import React from 'react'
import { getToggleElementOnKeyDown } from '@udecode/slate-plugins-common'
import { getRenderElement, SlatePlugin } from '@udecode/slate-plugins-core'
import { SlatePluginOptions } from '@udecode/slate-plugins-core'
import { getElementDeserializer } from '@udecode/slate-plugins-common'
import { Deserialize, getSlatePluginOptions } from '@udecode/slate-plugins-core'

export const KEY_DENEME = 'deneme'
export const ELEMENT_DENEME = 'deneme'

export const getDenemeDeserialize = () => (editor) => {
  const options = getSlatePluginOptions(editor, ELEMENT_DENEME)

  return {
    element: getElementDeserializer({
      type: options.type,
      rules: [{ nodeNames: 'P' }],
      ...options.deserialize
    })
  }
}

export const DEFAULTS_DENEME = {
  hotkey: [
    'mod+opt+0',
    // 'mod+shift+0'
  ]
}

export const DenemeElement = ({ attributes, element, children }) => {
  return (
    <div className="deneme" {...attributes} style={{ color: 'blue' }}>
      {children}
    </div>
  )
}

export const createDenemePlugin = () => ({
  pluginKeys: ELEMENT_DENEME,
  renderElement: getRenderElement(ELEMENT_DENEME),
  deserialize: getDenemeDeserialize(),
  onKeyDown: getToggleElementOnKeyDown(ELEMENT_DENEME)
})
