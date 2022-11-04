<template>
    <footer class="bg-primary">
        <div class="container">
            <div class="row py-md-4 py-3 align-items-md-center">
                <div class="col-md-6">
                    <h3 class="text-white fw-bold fs-5 mb-4">{{t("footer.contact.title")}}</h3>
                    <ul class="quick-links" id="contact">
                        <li class="mb-2"><a class="text-white fw-bold" href="https://goo.gl/maps/tCPA5hcfmFs3skfu5" target="_blank"  title="address"><svg class="me-3 bi bi-house-door-fill" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                                </svg>{{t("footer.contact.addr")}}</a></li>
                        <li class="mb-2"><a class="text-white fw-bold" href="mailto:sales@trueway.com.tw"><svg class="me-3 bi bi-envelope" xmlns="http://www.w3.org/2000/svg" width="16"
                                    height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>sales@trueway.com.tw</a></li>
                        <li class="mb-2"><a class="text-white fw-bold" href="tel:+886-3-4612622"><svg class="me-3 bi bi-telephone" xmlns="http://www.w3.org/2000/svg" width="16"
                                    height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>+886 3 461-2622 ext. 115</a></li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <div class="map-responsive">
                        <iframe class="img-fluid" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14466.065186215294!2d121.2399127!3d24.9825666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x118a40484b1db9a4!2z5pm65YGJ57mU6YCg6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1sen!2stw!4v1666858964150!5m2!1sen!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <img src="@/assets/menu-icon-trueway-logo.png" alt="trueway logo" style="width:120px;" class="pt-3 float-end">
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  setup () {
    const { t, locale } = useI18n()
    return {
      t,
      locale
    }
  }
}
</script>

<style lang="scss">
.map-responsive{
overflow:hidden;
padding-bottom:56.25%;
position:relative;
height:0;
  iframe{
   left:0;
   top:0;
   height:100%;
   width:100%;
   position:absolute;
  }
}

</style>
