<template>
  <div class="CopyBlock" :class="{ small: small, center: center }">
    <h2 v-if="topSubheading">{{ data.subheading }}</h2>
    <h1>{{ data.heading }}</h1>
    <h2 v-if="!small && !topSubheading">{{ data.subheading }}</h2>
    <p v-for="(paragraph, index) in data.paragraphs" :key="index">
      {{ paragraph }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      required: false,
    },
    center: {
      type: Boolean,
      required: false,
    },
    topSubheading: {
      type: Boolean,
      required: false,
    },
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.CopyBlock {
  h1 {
    color: #004777;
    font-size: 80px;
    line-height: 40px;
    text-transform: uppercase;
    margin-left: -10px;
    @media (max-width: 1024px) {
      font-size: 60px;
      margin-left: -5px;
    }
    @media (max-width: 650px) {
      font-size: 40px;
    }
    @media (max-width: 320px) {
      font-size: 30px;
    }
  }
  h2 {
    color: #1a262f;
    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    @media (max-width: 320px) {
      font-size: 18px;
    }
  }
  p {
    font-family: 'Old Standard TT', serif;
    font-size: 16px;
    letter-spacing: 1px;
    margin: 10px auto;
  }
}
.small {
  h1 {
    font-size: 40px;
  }
  p {
    font-family: 'Old Standard TT', serif;
    font-size: 16px;
    letter-spacing: 1px;
    margin: 0 auto;
  }
}
.center {
  h1 {
    text-align: center;
  }
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
    @media (max-width: 1200px) {
      width: 100%;
    }
  }
}
</style>
