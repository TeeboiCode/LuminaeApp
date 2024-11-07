<template>
  <div class="container-fluid" style="width: 85%">
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../../assets/image/Iphone.png"
            class="d-block w-100 img-thumbnail rounded-3"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/image/cloth.png"
            class="d-block w-100 img-thumbnail rounded-3"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/image/camera.png"
            class="d-block w-100 img-thumbnail rounded-3"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
