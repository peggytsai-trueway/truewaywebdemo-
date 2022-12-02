<template>
  <nav class="navbar navbar-expand-lg bg-primary fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/menu-icon-trueway-logo.png" alt="TruewayLogo" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="closeNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="navcollapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link fw-bold" to="/" @click="closeNav">{{ $t("nav.home") }}</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
              @click.prevent="goToPosition('about')">{{ $t("nav.aboutus") }}</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false" @click.prevent="goToPosition('product')">
              {{ $t("nav.producttype.products") }}
            </a>
            <ul class="dropdown-menu mt-0">
              <li>
                <router-link class="dropdown-item  fw-bold" to="/watersports" @click="closeNav">{{
                    $t("nav.producttype.watersports")
                }}</router-link>
              </li>
              <li>
                <router-link class="dropdown-item  fw-bold" to="/outdoorsports" @click="closeNav">{{
                    $t("nav.producttype.outdoorsports")
                }}
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item  fw-bold" to="/otherenduse" @click="closeNav">{{
                    $t("nav.producttype.otherenduse")
                }}</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fw-bold" to="/trend" @click="closeNav">{{ $t("nav.trend") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fw-bold" to="/technology" @click="closeNav">{{ $t("nav.tech") }}</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
              @click.prevent="goToPosition('certifications')">{{ $t("nav.certification") }}</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fw-bold" to="/exhib" @click="closeNav">{{ $t("nav.exhib") }}</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"
              @click.prevent="goToPosition('contact')">{{ $t("nav.contact") }}</a>
          </li>
        </ul>
        <div class="dropdown">
            <button style="width:140px;" class="btn btn-secondary dropbtn fw-bold text-light" type="button" @click="showMenu">
           🌐 {{ $t("nav.lang") }}
              <i class="ms-1 bi bi-caret-down-fill text-light"></i>
            </button>
        <ul ref="ulDrop" class="dropdown-content ps-0 mb-0  bg-success">
          <li v-for="item in languageOptions" :key="`locale-${item.lang}`" @click.prevent="selectLanguage(item.lang)"><a href="#"
               class="text-light fw-bold">🌐{{ item.name }}</a></li>
        </ul>
      </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavCollapse from 'bootstrap/js/dist/collapse'
import { useI18n } from 'vue-i18n'
export default {
  setup () {
    const { t, locale } = useI18n()
    return {
      t,
      locale,
      languageOptions: [
        {
          lang: 'zh',
          name: '繁體中文'
        },
        {
          lang: 'en',
          name: 'English'
        }
      ]
    }
  },
  methods: {
    goToPosition (id) {
      setTimeout(() => {
        const el = document.getElementById(id)
        document.body.scrollTop = el.offsetTop
        //* firefox
        document.documentElement.scrollTop = el.offsetTop
        //* safari
        window.pageYOffset = el.offsetTop
      }, 200)
      this.$router.push('/')
    },
    closeNav () {
      this.navCollapse.hide()
    },
    toggleNav () {
      this.navCollapse.toggle()
    },
    selectLanguage (val) {
      this.locale = val
      this.$refs.ulDrop.classList.remove('showup')
      this.closeNav()
    },
    showMenu () {
      this.$refs.ulDrop.classList.toggle('showup')
    }
  },
  mounted () {
    // navbar toggler
    this.navCollapse = new NavCollapse(this.$refs.navcollapse, {
      toggle: false
    })
  }
}
</script>

<style lang="scss">
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content li:hover {
  background-color: #45ADAD;
}
.showup {display:block;}
</style>
