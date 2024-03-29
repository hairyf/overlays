import { context, setupOptions } from '../internal'

export interface UseOverlayOptions {
  /** animation duration to avoid premature destruction of components */
  duration?: number
}

export function useOverlay(options?: UseOverlayOptions) {
  const trigger = context.trigger
  if (!trigger)
    throw new Error('Please execute in the overlays constructor')

  setupOptions(options)
  return trigger
}
