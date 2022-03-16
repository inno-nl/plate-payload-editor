export const createEditorField = (Editor, field) => ({
  name: 'editor',
  type: 'richText',
  label: 'Editor',
  localized: true,
  defaultValue: [
    {
      type: 'p',
      children: [
        {
          text: '',
        },
      ],
    },
  ],
  admin: {
    hideGutter: true,
    components: {
      Field: Editor,
    },
  },
  ...field,
})

export default createEditorField
