<template>
  <div class="details">
    <div>
      <h4>Company</h4>
      <p>About</p>
      <p>Careers</p>
      <p>Press</p>
    </div>

    <div>
      <h4>Brand</h4>
      <p>Best Sellers</p>
      <p>New Arrivals</p>
    </div>

    <div>
      <h4>Help</h4>
      <p>Contact</p>
      <p>Shipping</p>
      <p>Returns</p>
    </div>

    <div>
      <h4>Subscribe</h4>
      <input placeholder="Email address" />
      <button>Subscribe</button>
    </div>
  </div>
</template>

<style scoped>
.details {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

h4 {
  margin-bottom: 12px;
}

input {
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  background: #1a1a1a;
  border: 1px solid #333;
  color: #fff;
}

button {
  background: #fff;
  color: #000;
  padding: 8px;
}
</style>
