<script>
  import bookCover from "$assets/book_cover.png"
  import phoneCover from "$assets/phone_cover.png"
  import Button from "./Button.svelte";
  let {children} = $props()
</script>

<section class="hero">
    <div class="hero-showcase text-center bold">
        <h1 class="purple">MOVE TO</h1>
        <h1 class="purple mb-xs">SWEDEN</h1>
        <h4 class="italic semi-bold">
            Your comprehensive guide to Swedish relocation.
        </h4>
        <img class="phone-cover" src={phoneCover} alt="" />
    </div>
    <div class="hero-text white text-center">
    
        {#if children}
        {@render children()}
        {:else}
    
        <h1>THIS EBOOK WILL</h1>
        <h1>SAVE YOU MONEY</h1>
        <h1 class="mb-m">TIME & NERVES</h1>
        <p class="light-grey mb-l">
            Moving to Sweden is a life-changing decision that requires careful planning. This comprehensive guide 
            covers everything from visa applications to finding employment, understanding the Swedish system, 
            and integrating into the local culture. Learn from real experiences and make your transition smooth and successful.
        </p>
        <div class="purchase-btn">
            <Button>Purchase E-book for $10</Button>
        </div>
        {/if}
    </div>
</section>

<style>
    .hero {
        display: flex;
        min-height: 100vh;
        overflow: hidden;
    }

    .hero-showcase {
        position: relative;
        width: 50%;
        padding: 80px 24px 0 24px;
        background: linear-gradient(
            135deg,
            #e2cbff,
            #e2cbff 25%,
            #deeaff 50%,
            #ece5ff 75%,
            #927bce
        );
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }

    .hero-showcase h1 {
        font-size: clamp(60px, 8vw, 100px);
    }

    .hero-showcase h4 {
        font-size: clamp(16px, 2vw, 20px);
        max-width: 90%;
    }

    .hero-text {
        padding: 80px 5%;
        width: 50%;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .hero-text h1 {
        font-size: clamp(40px, 5vw, 100px);
        line-height: 1;
    }

    .hero-text p {
        font-size: clamp(16px, 1.5vw, 20px);
        max-width: 600px;
        margin: 0 auto;
    }

    .book-cover {
        position: absolute;
        right: 2%;
        bottom: 0;
        width: 65%;
        max-width: 400px;
        transform: translateY(25%);
        object-fit: contain;
    }

    .phone-cover {
        position: absolute;
        width: 35%;
        max-width: 200px;
        bottom: 0;
        right: 52%;
        transform: translateY(20%);
        object-fit: contain;
    }
    
    .author-bio {
        font-style: italic;
        max-width: 540px;
        margin: 0 auto;
        font-size: 0.95em;
    }

    .purchase-btn {
        margin-top: 35px;
    }

    /* Tablet and smaller */
    @media (max-width: 1024px) {
        .hero {
            flex-direction: column;
        }

        .hero-showcase,
        .hero-text {
            width: 100%;
            padding: 60px 24px;
        }

        .hero-showcase {
            min-height: 60vh;
        }

        .hero-text {
            min-height: auto;
            padding: 60px 32px;
        }

        .book-cover {
            width: 50%;
            max-width: 300px;
            right: 10%;
            transform: translateY(15%);
        }

        .phone-cover {
            width: 30%;
            max-width: 150px;
            right: 55%;
            transform: translateY(10%);
        }
    }

    /* Mobile */
    @media (max-width: 640px) {
        .hero-showcase,
        .hero-text {
            padding: 40px 16px;
        }

        .hero-showcase {
            min-height: 70vh;
            padding-bottom: 200px;
        }

        .hero-showcase h1 {
            font-size: 48px;
        }

        .hero-showcase h4 {
            font-size: 16px;
        }

        .hero-text h1 {
            font-size: 36px;
        }

        .hero-text p {
            font-size: 16px;
        }

        .book-cover {
            width: 60%;
            right: 5%;
            transform: translateY(10%);
        }

        .phone-cover {
            width: 35%;
            right: 60%;
            transform: translateY(5%);
        }
    }
</style>
