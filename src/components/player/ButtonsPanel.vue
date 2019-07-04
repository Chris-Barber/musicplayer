<template>
  <div class="buttons-panel">

<font-awesome-icon icon="step-backward" size="lg" class="control-button" :class="{ 'disabled': !hasPrevSong }" @click="playPrevSong"/>
<font-awesome-icon icon="play" size="lg" @click="playPause" class="control-button" v-if="!isPlaying"/>   
<font-awesome-icon icon="pause" size="lg" @click="playPause" class="control-button" v-if="isPlaying"/>       
<font-awesome-icon icon="step-forward" size="lg" @click="playNextSong" class="control-button"/>   

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ButtonsPanel",
  props: {
    isPlaying: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapGetters(["hasPrevSong", "hasNextSong"])
  },
  methods: {
    playPause() {
      this.$emit(this.isPlaying ? "pause" : "play");
    },
    playPrevSong() {
      this.$store.dispatch("playPrevSong");
    },
    playNextSong() {
      this.$store.dispatch("playNextSong");
    }
  }
};
</script>

<style lang="less">
@import (reference, less) "../../assets/styles/colors.less";

.buttons-panel {
  display: block;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  line-height: 24px;
  font-size: 28px;

  .control-button {
    cursor: pointer;
    color: @color-light-letter;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: @color-letter;
    }

    &.disabled {
      color: @color-lighter-letter;
      pointer-events: none;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
