<script>
  import authorImage from "$assets/profile_pic.jpg";
  
</script>

<section class="landing-page-section">
<h2 class="mb-l">About the author</h2>
<div class="author-container">
  <div class="author-text">
    <p>
      Born and raised in Stockholm, John Doe has been an integral part of the Swedish community all his life. With a deep understanding of Swedish culture and systems, he's helped countless expatriates successfully navigate their transition to Swedish life. As a passionate footballer and active community member, John combines his love for Swedish traditions with a practical approach to helping newcomers integrate into Swedish society.
    </p>
    <p class="mt-s">
      His firsthand experience of growing up in Sweden, combined with years of guiding international friends and colleagues through the immigration process, makes him uniquely qualified to provide authentic, practical advice for anyone looking to make Sweden their new home.
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