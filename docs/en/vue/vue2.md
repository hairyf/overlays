# Vue2 Support

If you are using Vue2, you can install the `@overlastic/vue2` and use mixins to pass properties to components. Here's an example:

```ts
import { usePrograms } from '@overlastic/vue2'
export default {
  mixins: [usePrograms({ duration: 1000 })],
  methods: {
    onClick() {
      // use this.$visible
      // use this.$resolve or this.$reject
    }
  }
}
```
