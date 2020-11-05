<template>
  <div class="Gallery" :class="{ right: right, left: left }">
    <img class="currentImage" :src="images[currentIndex]" />
    <div class="buttonWrapper" :class="{ right: right, left: left }">
      <button
        class="button"
        :disabled="previousButtonDisabled"
        @click="previousImage"
      >
        <img src="../assets/left-arrow.png" />
      </button>
      <button :disabled="nextButtonDisabled" class="button" @click="nextImage">
        <img src="../assets/right-arrow.png" />
      </button>
    </div>
    <div style="overflow: hidden">
      <div
        class="thumbnailsWrapper"
        :style="{
          transform: 'translate3d(' + translate + 'px, 0px, 0px)',
        }"
      >
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          @click="selectImage(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    right: {
      type: Boolean,
      required: false,
    },
    left: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex += 1;
      }
    },
    selectImage(index) {
      this.currentIndex = index;
    },
  },
  computed: {
    nextButtonDisabled() {
      if (this.currentIndex < this.images.length - 1) {
        return false;
      }
      return true;
    },
    previousButtonDisabled() {
      if (this.currentIndex > 0) {
        return false;
      }
      return true;
    },
    translate() {
      if (this.currentIndex > 6) {
        return 6 * -115;
      }
      return this.currentIndex * -115;
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.right {
  margin-right: 50px;
  @media (max-width: 960px) {
    margin-right: 0px;
  }

  @media (max-width: 1200px) {
    margin-bottom: 40px;
  }
  .buttonWrapper {
    @media (max-width: 1200px) {
      bottom: 25px !important;
    }
  }
}
.left {
  margin-left: 50px;
  @media (max-width: 960px) {
    margin-left: 0px;
  }
  @media (max-width: 1200px) {
    margin-top: 40px;
  }
}
.Gallery {
  position: relative;
  .currentImage {
    width: 100%;
  }
  .buttonWrapper {
    display: flex;
    position: absolute;
    bottom: 65px;
    .button {
      border: none;
      background-color: #004777;
      padding: 5px 10px;
      img {
        width: 30px;
      }
      &:disabled {
        background-color: #003355;
        cursor: not-allowed;
      }
    }
  }
  .left {
    left: -100px;
    @media (max-width: 960px) {
      left: 0px;
    }
  }
  .right {
    right: -100px;
    @media (max-width: 960px) {
      right: 0px;
    }
  }
  .thumbnailsWrapper {
    display: flex;
    width: 1500px;
    img {
      width: 100px;
      margin-right: 15px;
      position: relative;
    }
  }
}
</style>
