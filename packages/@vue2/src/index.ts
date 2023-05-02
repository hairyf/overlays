import type Vue from 'vue'
import type { PluginObject } from 'vue/types/umd'
import { context } from './internal'

const install = (_ins: any, parent: any) => {
  if (parent)
    context.parent = parent
}

const unoverlay: PluginObject<Vue> = { install }

export { install }
export { useOverlay } from './composable'
export type { OverlayOptions } from './composable'
export { defineOverlay, renderOverlay } from './define'
export { FieldRender } from './components'
export default unoverlay