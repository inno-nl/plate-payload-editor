import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useFieldType } from 'payload/components/forms'
import { default as Label } from 'payload/dist/admin/components/forms/Label'
import { default as Error } from 'payload/dist/admin/components/forms/Error'
import { nanoid } from 'nanoid'
import { useFocused, useSelected } from 'slate-react'
/*
import { liveScope } from './live'

const {
  useEventEditorId,
} = liveScope
*/

const { log } = console

export const wrapEditor = (Editor) => {
  // log('wrapEditor Editor:', Editor)

  return (props) => {
    const { path, name, required, validate, label, defaultValue, admin = {} } = props

    const { readOnly, style, width, placeholder, condition, hideGutter } = admin

    const fieldType = useFieldType({
      path,
      stringify: true,
      // condition,
      // validate: memoizedValidate,
    })

    // log('wrappedEditor props:', props)

    const { value, showError, setValue, errorMessage } = fieldType

    const [uuid] = React.useState(nanoid())
    const [loaded, setLoaded] = useState(false)
    // const [focussed, setFocussed] = useState(false)
    const id = `editor-${props.path}-${uuid}`

    // const focused = useFocused()
    // console.log('focused', focused)

    // const focussedEditor = useEventEditorId('focus')
    // console.log('focussedEditor', focussedEditor)

    const onChange = useCallback((nextValue) => {
      // log('onChange', nextValue)
      setValue(nextValue)
    }, [])

    // ———

    // const misuseCallback = (f, lolz) => f

    const onBlur = useCallback((e) => {
      log('onBlur', e)
      // setFocussed(false)
    }, [])

    const onBlurCapture = useCallback((e) => {
      log('onBlurCapture', e)
      // setFocussed(false)
    }, [])

    const onFocus = useCallback((e) => {
      log('onFocus', e)
      // setFocussed(true)
    }, [])

    const onFocusCapture = useCallback((e) => {
      log('onFocusCapture', e)
      // setFocussed(true)
    }, [])

    // ———

    useEffect(() => {
      if (!loaded) {
        setLoaded(true)
      }
    }, [loaded])

    if (!loaded) {
      return null
    }

    const initialValue = [
      {
        type: 'p',
        children: [
          {
            text: 'Initial text',
          },
        ],
      },
    ]

    // ———

    const baseClass = 'rich-text'

    const classes = ['field-type', baseClass, showError && 'error', readOnly && `${baseClass}--read-only`].filter(Boolean).join(' ')

    const valueToRender = !value ? defaultValue : value || initialValue

    return (
      <div
        className={classes}
        style={{
          ...style,
          width,
        }}
      >
        <div className={`${baseClass}__wrap`}>
          <Error showError={showError} message={errorMessage} />
          {label ? <Label htmlFor={path} label={label} required={required} /> : null}

          <Editor
            id={id}
            value={valueToRender}
            onChange={onChange}
            editableProps={{
              // onBlur: onBlur,
              // onFocus: onFocus,
              // onBlurCapture: onBlurCapture,
              // onFocusCapture: onFocusCapture,
              spellCheck: false,
              // autoFocus: true,
              // style: {
              //   color: 'rebeccapurple',
              //   opacity: focussed ? 1 : 0.5,
              // },
            }}
          />
          {/* {
            process.env && (
              <details style={{ marginBottom: '10px' }}>
                <summary style={{ opacity: .17, }}>Inspect tree</summary>
                <pre>value: { JSON.stringify(value, null, 2) }</pre>
              </details>
            )
          } */}
        </div>
      </div>
    )
  }
}

export default wrapEditor
