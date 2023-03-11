# Getting Started

> Unoverlays 仅支持 Vue3 | Vue2 Composition-api

## Install

With pnpm: 
```sh
pnpm add @unoverlays/react
```

With yarn:
```sh
yarn add @unoverlays/react
```

## Usage

### 步骤.1: Define Component

Unoverlays 适用于绝大多数组件，使用 `useOverlayMeta` 能对组件流程有更细致的控制。

```tsx
// overlay.tsx
export function OverlayComponent(props) {
  const { visible, confirm, cancel } = useOverlayMeta({
  // 弹出层动画的持续时间, 可以避免组件过早被销毁
    animation: 1000,
  })

  return <div className={visible && 'is--visible'}>
    <span onClick={() => confirm(`${props.title}:confirmed`)}> Confirm </span>
  </div>
}
```

### 步骤.2: Create Overlay

你可以通过 `createOverlay` 的方法将组件转换成模态框的方法，它允许你在 `Javascript` / `Typescript` 中调用。

```ts
import { createOverlay } from '@unoverlays/react'
import { OverlayComponent } from './overlay'

// 转换为命令式回调
const callback = createOverlay(OverlayComponent)
// 调用组件并获取 confirm 回调的值
const value = await callback({ title: 'callbackOverlay' })
// value === "callbackOverlay:confirmed"
```

你也可以通过 `renderOverlay` 直接调起组件，跳过 `createOverlay` 方法。

```ts
import { renderOverlay } from '@unoverlays/react'
import { OverlayComponent } from './overlay'

const value = await renderOverlay(OverlayComponent, {
  props: { title: 'useOverlay' }
})
// value === "useOverlay:confirmed"
```