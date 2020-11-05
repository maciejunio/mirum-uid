<template>
  <div class="Home">
    <div @click="toggleMenu">
      <Hamburger
        :class="{
          open: showMobileMenu,
          hamburgerBackground: hamburgerBackground,
        }"
        class="hamburger mobile"
      />
    </div>
    <MobileMenu
      v-show="showMobileMenu"
      v-on:scrollTo="scrollTo"
      :data="pageData.navBar"
    />
    <div class="container-fluid containerBg">
      <div class="container-fluid containerOverlay">
        <div class="logoMobile mobile">
          <img class="logo" src="../assets/logo.png" />
          <span class="companyName">ACME CO.</span>
        </div>
        <NavBar
          class="desktop"
          v-on:scrollTo="scrollTo"
          :data="pageData.navBar"
        />
        <div class="heroBanerWrapper">
          <HeroBaner :data="pageData.heroBaner" />
        </div>
        <div class="seeMoreWrapper">
          <button @click="scrollTo('aboutus')" class="seeMore">
            See more <img src="../assets/down-arrow.png" />
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row" id="aboutus">
        <div class="col-md-12">
          <CopyBlock center :data="pageData.aboutUs" />
        </div>
      </div>
      <div class="row" id="careers">
        <div class="col-lg-12 col-xl-8">
          <Gallery right :images="pageData.gallery" />
        </div>
        <div class="col-lg-12 col-xl-4 centerAlign">
          <CopyBlock small :data="pageData.careers" />
        </div>
      </div>
      <div class="row" id="news">
        <div class="col-md-12">
          <CopyBlock topSubheading :data="pageData.news" />
        </div>
      </div>
      <div class="row" id="contactus">
        <div class="col-lg-12 col-xl-4  centerAlign">
          <CopyBlock small :data="pageData.contactUs" />
        </div>
        <div class="col-lg-12 col-xl-8 col-sm-12">
          <Gallery left :images="pageData.gallery" />
        </div>
      </div>
    </div>
    <Footer v-on:scrollTo="scrollTo" />
  </div>
</template>

<script>
import PageDataService from '@/services/PageDataService';

import NavBar from '@/components/NavBar.vue';
import HeroBaner from '@/components/HeroBaner.vue';
import CopyBlock from '@/components/CopyBlock.vue';
import Gallery from '@/components/Gallery.vue';
import Footer from '@/components/Footer.vue';
import MobileMenu from '@/components/MobileMenu.vue';
import Hamburger from '@/components/Hamburger.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    HeroBaner,
    CopyBlock,
    Gallery,
    Footer,
    MobileMenu,
    Hamburger,
  },
  created() {
    const pageDataService = new PageDataService();
    this.pageData = pageDataService.getPageData();

    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight) {
        this.hamburgerBackground = true;
      }
      if (window.scrollY < window.innerHeight) {
        this.hamburgerBackground = false;
      }
    });
  },
  data() {
    return {
      pageData: null,
      showMobileMenu: false,
      hamburgerBackground: false,
    };
  },
  methods: {
    scrollTo(item, close) {
      const itemSlug = item.toLowerCase().replace(/\s/g, '');
      const div = document.getElementById(itemSlug);
      div.scrollIntoView({ behavior: 'smooth' });
      if (close) {
        this.showMobileMenu = !this.showMobileMenu;
      }
    },
    toggleMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>
<style lang="scss" scoped>
.desktop {
  @media (max-width: 1024px) {
    display: none;
  }
}
.mobile {
  display: none;
  margin: 0;
  @media (max-width: 1024px) {
    display: block;
  }
}
#aboutus,
#careers,
#news,
#contactus {
  padding-top: 80px;
  padding-bottom: 80px;
  @media (max-width: 1200px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 650px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
.containerBg {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
}
.containerOverlay {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.36);
  padding: 0;
}
.heroBanerWrapper {
  width: 42%;
  position: absolute;
  left: 41%;
  top: 51%;
  transform: translate(-50%, -50%);
  @media (max-width: 1366px) {
    left: 31%;
  }
  @media (max-width: 960px) {
    top: 45%;
  }
  @media (max-width: 650px) {
    position: initial;
    transform: initial;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    height: 100%;
    margin-top: -70px;
  }
  @media (max-width: 450px) {
    width: 80%;
  }
}
.centerAlign {
  display: flex;
  justify-content: center;
  align-items: center;
}
.seeMoreWrapper {
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  .seeMore {
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: none;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
    img {
      width: 20px;
      margin-top: 10px;
    }
    &:focus {
      outline: none;
    }
  }
}
.logoMobile {
  @media (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    padding-top: 15px;
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
}
</style>
