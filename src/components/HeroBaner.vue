<template>
  <div class="HeroBaner">
    <h2>{{ data.subheading }}</h2>
    <h1>{{ data.heading }}</h1>
    <p>
      {{ data.paragraph }}
    </p>
    <button>
      Call to action <img class="icon" src="../assets/right-arrow.png" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.HeroBaner {
  color: #ffffff;
  h2 {
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 400;
    @media (max-width: 960px) {
      font-size: 25px;
      margin-left: -5px;
    }
    @media (max-width: 320px) {
      font-size: 20px;
      padding: 2px 7px;
    }
  }
  h1 {
    margin: 0;
    font-size: 170px;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 160px;
    margin-bottom: 40px;
    margin-left: -10px;
    @media (max-width: 1366px) {
      line-height: 120px;
      font-size: 130px;
      margin-bottom: 20px;
    }
    @media (max-width: 1024px) {
      line-height: 100px;
      font-size: 110px;
    }
    @media (max-width: 960px) {
      line-height: 50px;
      font-size: 60px;
      margin-left: -5px;
    }
    @media (max-width: 650px) {
      line-height: 40px;
    }
     @media (max-width: 320px) {
      font-size: 50px;
      line-height: 30px;
    }
  }
  p {
    font-family: 'Old Standard TT', serif;
    font-size: 16px;
    letter-spacing: 1px;
    margin-bottom: 60px;
    margin-top: 50px;
    @media (max-width: 1366px) {
      font-size: 15px;
    }
    @media (max-width: 650px) {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    @media (max-width: 450px) {
      font-size: 13px;
      margin-top: 20px;
      margin-bottom: 15px;
    }
  }
  button {
    font-size: 17px;
    background: transparent;
    border: 3px solid #ffffff;
    color: #ffffff;
    padding: 10px 15px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      width: 30px;
      margin-left: 25px;
    }
    @media (max-width: 960px) {
      font-size: 14px;
      padding: 5px 10px;
    }
    @media (max-width: 320px) {
      font-size: 12px;
      padding: 2px 7px;
    }
  }
}
</style>
