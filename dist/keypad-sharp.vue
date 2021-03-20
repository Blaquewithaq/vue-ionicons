<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="keypad-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="80" y="16" width="96" height="96" rx="8" ry="8"/><rect x="208" y="16" width="96" height="96" rx="8" ry="8"/><rect x="336" y="16" width="96" height="96" rx="8" ry="8"/><rect x="80" y="144" width="96" height="96" rx="8" ry="8"/><rect x="208" y="144" width="96" height="96" rx="8" ry="8"/><rect x="336" y="144" width="96" height="96" rx="8" ry="8"/><rect x="80" y="272" width="96" height="96" rx="8" ry="8"/><rect x="208" y="272" width="96" height="96" rx="8" ry="8"/><rect x="208" y="400" width="96" height="96" rx="8" ry="8"/><rect x="336" y="272" width="96" height="96" rx="8" ry="8"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="keypad-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="80" y="16" width="96" height="96" rx="8" ry="8"/><rect x="208" y="16" width="96" height="96" rx="8" ry="8"/><rect x="336" y="16" width="96" height="96" rx="8" ry="8"/><rect x="80" y="144" width="96" height="96" rx="8" ry="8"/><rect x="208" y="144" width="96" height="96" rx="8" ry="8"/><rect x="336" y="144" width="96" height="96" rx="8" ry="8"/><rect x="80" y="272" width="96" height="96" rx="8" ry="8"/><rect x="208" y="272" width="96" height="96" rx="8" ry="8"/><rect x="208" y="400" width="96" height="96" rx="8" ry="8"/><rect x="336" y="272" width="96" height="96" rx="8" ry="8"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "keypad-sharp-icon",
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

