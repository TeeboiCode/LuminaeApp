<template>
  <div
    class="table-container container-fluid px-4 py-3 overflow-x-auto rounded-4 bg-white w-100 shadow-lg"
  >
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Category Name</th>
          <th scope="col">Total Product</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in CategoriesData" :key="category.id">
          <th scope="row">{{ category.id }}</th>
          <td class="fw-bolder" style="color: #525f7f !important">
            <div class="d-sm-flex align-items-center">
              <div class="img-container-cat me-2 d-none d-sm-block">
                <img :src="category.img" alt="" class="" />
              </div>
              <span>{{ category.catName }}</span>
            </div>
          </td>
          <td><span>250873</span></td>
          <td><button class="box-style tb-v">Visible</button></td>
          <td>
            <button class="box-style tb-e">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="box-style tb-d">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminTable",
  data() {
    return {
      CategoriesData: [],
    };
  },

  methods: {
    async getCategories() {
      try {
        const res = await axios.get("http://localhost:4040/Categories");
        this.CategoriesData = res.data;
      } catch (error) {
        console.log(`Error from getCategores: ${error}`);
      }
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style scoped>
.table > :not(caption) > * > * {
  padding: 0.8rem 0.5rem !important;
  color: #8898aa !important;
}

.img-container-cat {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
}

.img-container-cat img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  
}

.box-style {
  padding: 3px 8px;
  outline: none;
  border-radius: 15px;
  font-weight: 600;
  color: #fff;
  border: none;
  transition: all 0.3s ease;
}

.tb-v {
  background: linear-gradient(to bottom right, #52db52 0%, #009933 100%);
}

.tb-e {
  background: linear-gradient(to bottom right, #0066cc 0%, #003399 100%);
  padding: 3px 15px;
}

.tb-d {
  background: linear-gradient(to bottom right, #ec3880 0%, #cc0000 100%);
  margin-left: 10px;
  padding: 3px 15px;
}

.tb-d:hover,
.tb-e:hover,
.tb-v:hover {
  background: linear-gradient(to bottom right, #020202 0%, #414141 100%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

/* .table-container::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.table-container::-webkit-scrollbar-track {
  background: #e0e0e0;
  border-radius: 5px;
}

.table-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.table-container::-webkit-scrollbar:hover {
  background: #555;
} */

.table-container {
  scrollbar-width: thin;
  scrollbar-color: #888 #e0e0e0;
}

@media (max-width: 575.98px) {
  .table {
    width: 576px;
  }
}
</style>
