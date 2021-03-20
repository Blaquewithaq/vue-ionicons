<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="recording-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M380.79 144.05c-59.1 1.65-107.12 49.71-108.79 108.81a111.64 111.64 0 0 0 30.36 79.77A2 2 0 0 1 301 336h-90a2 2 0 0 1-1.44-3.37A111.64 111.64 0 0 0 240 252.86c-1.63-59.1-49.65-107.16-108.75-108.81A112.12 112.12 0 0 0 16 255.53C15.75 317.77 67 368 129.24 368h253.52C445 368 496.25 317.77 496 255.53a112.12 112.12 0 0 0-115.21-111.48z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="recording-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M380.79 144.05c-59.1 1.65-107.12 49.71-108.79 108.81a111.64 111.64 0 0 0 30.36 79.77A2 2 0 0 1 301 336h-90a2 2 0 0 1-1.44-3.37A111.64 111.64 0 0 0 240 252.86c-1.63-59.1-49.65-107.16-108.75-108.81A112.12 112.12 0 0 0 16 255.53C15.75 317.77 67 368 129.24 368h253.52C445 368 496.25 317.77 496 255.53a112.12 112.12 0 0 0-115.21-111.48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "recording-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : null
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

