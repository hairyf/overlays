# 👆 Inherited context 

If you register Unoverlay Vue globally, it will automatically inherit your application context, and you can also pass in the context with finer control.

```ts
import { getCurrentInstance } from 'vue'
import Component from './overlay.vue'

// in your setup method
const { appContext } = getCurrentInstance()!
executeOverlay(Component, {
  props: {},
  appContext
})
```