<template>
  <div
    class="login-container container-fluid d-flex flex-column justify-content-center align-items-center"
  >
    <!-- Brand Logo -->
    <div class="brand-logo d-flex mb-3">
      <img
        src="../../../assets/image/Logo.png"
        alt="Luminae Logo"
        width="49"
        height="33"
      />
      <h1 class="brand-name fw-bold ms-2" style="font-size: 32px">Luminae</h1>
    </div>

    <!-- login form start -->
    <div
      class="login-form p-4 rounded-3 mb-3 bg-white shadow-lg"
      style="color: #2c3e50 !important; max-width: 500px; width: 85%"
    >
      <h2 class="mb-3">Sign in</h2>
      <form @submit="loginAdmin">
        <div class="form-group">
          <label for="email">Email / Username</label> <br />
          <input
            type="text"
            id="email_u"
            name="email/username"
            class="form-control"
            placeholder="Email@address.com or Username"
            v-model="email_username"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label> <br />
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            placeholder="8+ characters required"
            v-model="password"
            ref="password"
            required
          />
        </div>

        <!-- <div class="form-group">
          <input type="checkbox" id="remember" name="remember" />
          <label for="remember" class="ps-1" style="color: #8c98a4 !important"
            >Remember me</label
          >
        </div> -->

        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
    <!-- login form end -->

    <div class="info">
      <div>Username: <b>admin</b></div>
      <div>Password: <b>admin12345</b></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import Swal from "sweetalert2";
import swal from "sweetalert";
import preloader from "../../preloader.vue";

export default {
  name: "AdminLogin",
  components: {
    preloader,
  },
  data() {
    return {
      email_username: "",
      password: "",
      users: [],
      validateForm: false,
    };
  },
  methods: {
    async fetchAdminUser() {
      try {
        const response = await axios.get("http://localhost:3000/AdminUsers");
        this.users = response.data;
      } catch (error) {
        console.error(`Error from fetchAdminUser: ${error}`);
      }
    },

    validateEmail() {
      this.users.forEach((user) => {
        if (
          user.email === this.email_username ||
          user.username === this.email_username
        ) {
          if (user.password === this.password) {
            this.validateForm = true;
            return true;
          } else {
            this.$refs.password.focus();
            this.validateForm = false;
            return false;
          }
        } else {
          this.validateForm = false;
          return false;
        }
      });
    },

    loginAdmin(e) {
      e.preventDefault();
      this.validateEmail();
      if (this.validateForm) {
        swal({
          title: "Success!",
          text: "Successful!",
          icon: "success",
          button: false,
          timer: 2000,
        });
        this.$router.push("/admin");
      } else {
        swal({
          icon: "error",
          title: "Error",
          text: "Check your email and password!",
          button: false,
          timer: 2000,
        });
      }
    },
  },
  mounted() {
    this.fetchAdminUser();
  },
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  /* background-color: #e2e1e1; */
  background-image: url("../../../assets/image/admin_lg_bg.png");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
}

.form-group {
  margin: 1.2rem 0 !important;
}

.form-group label {
  font-weight: 500;
  color: #1e2022;
  font-size: 14px;
}

.form-control:focus {
  box-shadow: 0 0 0 0.1rem rgba(13, 110, 253, 0.25) !important;
}

.btn-primary {
  background: #4172dc !important;
  padding: 0.5rem 1.5rem !important;
}
.form-group input::placeholder {
  color: #8c98a4 !important;
}
</style>
