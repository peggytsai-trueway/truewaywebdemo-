<template>
  <div class="container-fluid login-bg  position-relative">
    <div class="row justify-content-center py-7">
      <div class="col-md-5 col-10 position-absolute top-50 start-50 translate-middle">
        <div class="form-bg p-5 rounded">
          <img src="@/assets/menu-icon-trueway-logo.png" alt="logo image" class="mb-3">
          <form class="d-flex flex-column">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label text-light fw-bold">使用者名稱</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="請輸入使用者名稱">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label  text-light fw-bold">密碼</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="請輸入密碼">
            </div>
            <button type="submit" class="btn btn-login btn-lg text-light fw-bold mt-3">登入</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.login-bg {
  background-image: url(@/assets/images/Dashboard/ryan-hutton-Jztmx9yqjBw-unsplash.jpg);
  height: 100vh;
  background-repeat: no-repeat;
  background-position: bottom center;
}

.form-bg {
  background: rgb(37, 61, 103);
  background: linear-gradient(122deg, rgba(37, 61, 103, .8) 0%, rgba(7, 7, 13, .8) 50%, rgba(116, 84, 134, .8) 100%);
}

.btn-login {
  background-color: #8B89C7;
  &:hover {
    background-color: #A36A7B;
  }
}
</style>
