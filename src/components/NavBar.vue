<template>
  <nav class="NavBar">
    <div class="container-fluid navContainer">
      <div class="row navWrapper">
        <div class="col-md-4">
          <div class="logoWrapper">
            <img class="logo" src="../assets/logo.png" />
            <span class="companyName">ACME CO.</span>
          </div>
        </div>
        <div class="col-md-8">
          <ul>
            <li v-for="item in data" :key="item">
              <button @click="scrollTo(item)">{{ item }}</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
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
      this.$emit('scrollTo', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.NavBar {
  padding-top: 30px;
  font-family: 'Montserrat', sans-serif;
  .navContainer {
    width: 72%;
    @media (max-width: 1366px) {
      width: 90%;
    }
    @media (max-width: 1024px) {
      width: 95%;
    }
  }
  .navWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logoWrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .logo {
    width: 50px;
    margin-right: 20px;
  }
  .companyName {
    font-size: 21px;
    text-transform: uppercase;
    letter-spacing: 7px;
    color: #ffffff;
  }
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    li {
      list-style: none;
      position: relative;
      button {
        padding: 10px 15px;
        color: #ffffff;
        background: transparent;
        border: 1px solid transparent;
        transition: all 0.2s ease-in;
        text-decoration: none;
        letter-spacing: 1px;
        font-size: 19px;
        font-weight: 400;
        cursor: pointer;
        z-index: 999;
        &:focus {
          outline: none;
        }
        &:hover{
          border: 1px solid #ffffff;
        }
      }
    }
  }
}
</style>
