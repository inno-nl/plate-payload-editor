import {
  SlatePlugins,
  SlatePlugin,
  createReactPlugin,
  createHistoryPlugin,
  SPEditor,
  TRenderElementProps
} from "@udecode/slate-plugins";

const ELEMENT_BLOCK = "block";

const getBlockRenderElement = () => (editor: SPEditor) => (
  props: TRenderElementProps<{}>
) => {
  if (props.element.type === ELEMENT_BLOCK) {
    return <p {...props} />;
  }
};

function createBlockPlugin(): SlatePlugin {
  return {
    pluginKeys: ELEMENT_BLOCK,
    renderElement: getBlockRenderElement(),
    onKeyDown: (editor) => (e) => {
      console.log("hello");
    }
  };
}
