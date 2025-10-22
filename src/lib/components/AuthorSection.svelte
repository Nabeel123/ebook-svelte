<script>
  import authorImage from "$assets/profile_pic.jpg";
  
</script>

<section class="landing-page-section">
<h2 class="mb-l">About the author</h2>
<div class="author-container">
  <div class="author-text">
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi adipisci incidunt maiores neque, distinctio iure excepturi? Blanditiis saepe animi, esse asperiores nostrum velit hic ipsa laboriosam dignissimos obcaecati earum accusantium.
    </p>
  </div>
  <img src={authorImage} alt="Nabeel Francis Author" />
</div>
</section>

<style>

  .author-container {
    display: flex;
    justify-content: space-between;
  }

  .author-container img {
    width: 40%;
    border: 6px solid black;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  }

  .author-text {
    width: 55%;
  }

  /* .author-text p:not(:last-of-type) {
    margin-bottom: 8px;
  } */
</style>