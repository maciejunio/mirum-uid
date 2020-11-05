<template>
  <footer class="Footer">
    <div class="container-fluid">
      <div class="container">
        <div class="row footerWrapper">
          <div class="col-md-12 col-xl-3">
            <div class="logoWrapper">
              <img class="logo" src="../assets/logo.png" />
            </div>
          </div>
          <div class="col-md-12 col-xl-9">
            <ul>
              <li><button @click="scrollTo('About Us')">About Us</button></li>
              <li><button @click="scrollTo('Careers')">Careers</button></li>
              <li><button @click="scrollTo('News')">News</button></li>
              <li><button @click="scrollTo('Contact Us')">Contact Us</button></li>
              <li><span>&#169; Copyright by ACME Co.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollTo(item) {
      this.$emit('scrollTo', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.Footer {
  margin-top: 60px;
  background-color: #1a262f;
  color: #ffffff;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    height: auto;
  }
  .logoWrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 1200px) {
      justify-content: center;
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }
  .logo {
    width: 64px;
  }
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
    li {
      list-style: none;
      button {
        padding: 5px 10px;
        color: #ffffff;
        text-decoration: none;
        letter-spacing: 1px;
        font-size: 17px;
        font-weight: 400;
        background: transparent;
        border: 1px solid transparent;
        transition: all 0.2s ease-in;
        @media (max-width: 1200px) {
          display: block;
          padding: 10px 10px;
          font-size: 15px;
        }
        &:focus{
          outline: none;
        }
         &:hover{
          border: 1px solid #ffffff;
        }
      }
      span {
        color: #626a70;
        font-size: 14px;
        @media (max-width: 1200px) {
          display: block;
          padding: 25px 0;
        }
      }
    }
  }
  .footerWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
