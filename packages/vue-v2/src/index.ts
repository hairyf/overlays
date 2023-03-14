import Vue from 'vue'
import type { PluginObject } from 'vue/types/umd'
import { context } from './internal'

const install = (_ins: any, parent: any) => {
  context.parent = parent || Vue
}

const unoverlay: PluginObject<Vue> = { install }

export type { ImperativeOverlay, RenderOptions } from './transform'
export type { mixinOverlayMeta, OverlayOptions } from './mixins'
export { createOverlay, renderOverlay } from './transform'

export default unoverlay
