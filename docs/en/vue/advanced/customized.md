#  Custom Components

Take [element-plus(dialog)](https://element.eleme.cn/#/en-US/component/dialog) as an example (of course, you can use other component libraries)

```vue
<!-- overlay.vue -->
<script setup>
import { defineEmits, defineProps } from 'vue-demi'
import { useOverlay } from '@overlays/vue'
const props = defineProps({
  title: String,
})

const { visible, resolve, reject } = useOverlay({
  duration: 1000
})
</script>

<template>
  <el-dialog v-model="visible" :title="title" @close="reject()">
    <!-- your content -->
    <button @click="resolve(`${title}:confirmed`)" />
  </el-dialog>
</template>
```

```ts
import { defineOverlay } from '@overlays/vue'
import OverlayComponent from './overlay.vue'

const callback = defineOverlay(OverlayComponent)
const value = await callback({ title: 'myElDialog' })
// value === "myElDialog:confirmed"
```