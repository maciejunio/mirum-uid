<template>
  <div class="MobileMenu">
    <ul>
      <li v-for="item in data" :key="item">
        <button @click="scrollTo(item)">{{ item }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    scrollTo(item) {
      this.$emit('scrollTo', item, true);
    },
  },
};
</script>

<style lang="scss" scoped>
.MobileMenu {
  transition: all 0.2s ease-in;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 71, 119, 0.98);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    li {
      list-style: none;
      button {
        padding: 10px 15px;
        color: #ffffff;
        background: transparent;
        border: none;
        text-decoration: none;
        letter-spacing: 1px;
        font-size: 19px;
        font-weight: 400;
        cursor: pointer;
        &:focus{
          outline: none;
        }
      }
    }
  }
}
</style>
