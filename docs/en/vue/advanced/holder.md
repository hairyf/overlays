# Injection Holder

In addition to using defineOverlay and renderOverlay to create pop-up components, you can also use useOverlayHolder to create pop-up components inside a component and inherit the current context of the application.

```vue
<!-- App.vue -->
<script setup>
import { useOverlayHolder } from '@overlastic/vue'
import OverlayComponent from './overlay.vue'
// Use useOverlayHolder(Component) to create a component holder that supports the current context.
const [holder, overlayApi] = useOverlayHolder(OverlayComponent)

function open() {
  // Open the pop-up component.
  overlayApi()
    .then((result) => {})
}
</script>

<template>
  <div @click="open">
    open
  </div>
  <!-- Use <component :is="holder" /> to mount the component holder. -->
  <component :is="holder" />
</template>
```

