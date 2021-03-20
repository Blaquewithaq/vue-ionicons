<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="basket-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M339.2 217.6L256 106.67 172.8 217.6l-25.6-19.2 96-128a16 16 0 0 1 25.6 0l96 128z"/><path d="M441.59 192H70.41a12 12 0 0 0-11.68 14.77L112.59 434h286.82l53.86-227.23A12 12 0 0 0 441.59 192zM256 351.66A37.71 37.71 0 1 1 293.89 314 37.88 37.88 0 0 1 256 351.66z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="basket-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M339.2 217.6L256 106.67 172.8 217.6l-25.6-19.2 96-128a16 16 0 0 1 25.6 0l96 128z"/><path d="M441.59 192H70.41a12 12 0 0 0-11.68 14.77L112.59 434h286.82l53.86-227.23A12 12 0 0 0 441.59 192zM256 351.66A37.71 37.71 0 1 1 293.89 314 37.88 37.88 0 0 1 256 351.66z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "basket-sharp-icon",
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

