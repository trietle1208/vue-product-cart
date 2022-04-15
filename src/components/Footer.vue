<template>
  <div class="footer">
    <div class="footer__top">
      <div class="company">
        <ul>
          <li class="title">Company</li>
          <li>About Us</li>
          <li>News</li>
          <li>Investor Relations</li>
          <li>Careers</li>
          <li>Media Kit</li>
        </ul>
      </div>
      <div class="resourse">
        <ul>
          <li class="title">Resourses</li>
          <li>Get Started</li>
          <li>Learn</li>
          <li>Studies</li>
        </ul>
      </div>
      <div class="community">
        <ul>
          <li class="title">Community</li>
          <li>Discord</li>
          <li>Events</li>
          <li>FAQ</li>
          <li>Blog</li>
        </ul>
      </div>
      <div class="email">
        <p>Join our community to get weekly updates and unique gifts every friday.</p>
        <InputText type="text" />
        <Button label="Success" class="p-button-rounded p-button-success" />
      </div>
    </div>
    <hr />
    <div class="footer__bottom">
      <div class="image">
        <img
          src="https://www.primefaces.org/primeblocks-vue/images/blocks/logos/alfred-700.svg"
          alt=""
        />
      </div>
      <div class="terms">
        <ul>
          <li>Brand Policy</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div class="links">
        <ul>
          <li><i class="pi pi-twitter"></i></li>
          <li><i class="pi pi-facebook"></i></li>
          <li><i class="pi pi-github"></i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
ul li {
  list-style: none;
  cursor: pointer;
}

li:hover {
  color: #2196f3;
  transition: 0.3s linear;
}

.footer {
  margin-top: 40px;
  text-align: left;
  padding: 24px 24px;
  background: var(--surface-900);
  color: #fff;
  font-size: 16px;
}

.footer__top {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 140px;
}

.footer__top div {
  margin-right: 160px;
}

.title {
  font-weight: 800;
}

.email {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.p-button {
  margin-top: 12px;
  width: 30%;
}

.footer__bottom {
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 140px;
}

.footer__bottom div {
  margin-right: 160px;
}

.terms ul li {
  float: left;
  margin-right: 56px;
}

.links ul li {
  float: left;
  margin-right: 16px;
}
</style>
