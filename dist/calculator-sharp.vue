<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="calculator-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M416 48a16 16 0 0 0-16-16H112a16 16 0 0 0-16 16v416a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16zM192 432h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48V304h48zm0-160h-48v-48h48zm0-96H144V80h224z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="calculator-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M416 48a16 16 0 0 0-16-16H112a16 16 0 0 0-16 16v416a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16zM192 432h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48V304h48zm0-160h-48v-48h48zm0-96H144V80h224z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "calculator-sharp-icon",
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

