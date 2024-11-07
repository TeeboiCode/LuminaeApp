<template>
  <nav class="navbar fixed-top bg-body-tertiary top-0 end-0 shadow">
    <div class="container-fluid d-flex justify-content-end pe-5 py-2">
      <div class="dropdown text-end">
        <a
          href="#"
          class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="../../assets/image/img-profile-1.jpg"
            alt="mdo"
            width="45"
            height="45"
            class="rounded-circle"
          />
        </a>
        <ul class="dropdown-menu text-small">
          <li>
            <router-link class="dropdown-item" to="/">Profile</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/">Settings</router-link>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <router-link class="dropdown-item" to="/">Sign out</router-link>
          </li>
        </ul>
      </div>
      <div class="nav-text ms-3 d-none d-md-block">
        <div class="fullName fs-4"><span>Surname</span> <span>Name</span></div>
        <div class="status fs-6">Marketing Administrator</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AdminNavBar",
};
</script>

<style scoped>
.dropdown-toggle::after {
  display: none !important;
}
li a:hover {
  background: #695cef;
  color: #fff;
}
.dropdown-menu[data-bs-popper] {
  margin-top: 10px !important;
  border: none;
  box-shadow: rgb(149 157 165 / 84%) -4px 4px 20px 0px;
}

@media (max-width: 767.98px) {
  .dropdown-menu[data-bs-popper] {
    left: -85px !important;
  }
}
</style>
