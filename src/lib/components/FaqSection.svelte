<script>
    import { FaqItem, Button } from "$components";
    import twitterIcon from "$assets/icons/twitter.webp";

    const faqs = [
        {
            question: "What will I learn from this ebook?",
            answer:
            "This ebook provides a comprehensive guide to relocating to Sweden, covering essential topics like obtaining the right visa, understanding the Swedish social system, finding employment, securing housing, learning the language, and integrating into Swedish culture. You'll learn about healthcare, education, banking, taxes, and daily life in Sweden, along with practical tips for a successful transition.",
        },
        {
            question: "Who is this ebook for?",
            answer:
            "This ebook is ideal for anyone planning to move to Sweden - whether you're a professional seeking work opportunities, a student pursuing education, or someone joining family in Sweden. It's particularly valuable for non-EU citizens who need to navigate the immigration process, but also contains essential information for EU citizens moving to Sweden.",
        },
        {
            question: "How much does the ebook cost?",
            answer:
            "The ebook is priced at $10. This one-time purchase gives you instant access to comprehensive information about moving to Sweden, including detailed chapters on immigration procedures, housing guides, employment resources, and cultural insights that will help you save time and avoid costly mistakes in your relocation process.",
        },
        {
            question: "Is the information in the ebook up-to-date?",
            answer:
            "Yes, the ebook is regularly updated to reflect the latest changes in Swedish immigration policies, housing market trends, and social system requirements. We maintain close contact with Swedish authorities and expat communities to ensure all information is current and accurate.",
        },
        {
            question: "Can I get a refund if I'm not satisfied?",
            answer:
            "Absolutely. We offer a 30-day money-back guarantee. If you feel that the ebook did not meet your expectations or didn't provide the value you were looking for, simply contact us within 30 days of your purchase, and we’ll issue a full refund—no questions asked.",
        },
    ];

    let questionCurrentlyExpanded = $state(-1);

    function onclick(index) {
        if (questionCurrentlyExpanded === index) {
            questionCurrentlyExpanded = -1;
        } else {
            questionCurrentlyExpanded = index;
        }
    }
</script>

<section class="landing-page-section">
    <h2 class="mb-l">Frequently asked questions</h2>
    <div class="faq-container">
        {#each faqs as faq, index}
            <FaqItem {faq} isExpanded = { index === questionCurrentlyExpanded} onclick={() => onclick(index)} />
        {/each}
    </div>
    <div class="additional-info mt-m">
        <Button class="mt-s">BUY NOW</Button>
        <p class="mt-m">Any other question?</p>
        <a href="https://www.linkedin.com/in/nabeel-francis/">
            <p>
                Hit me up on twitter
                <img src={twitterIcon} class="twitter-icon" alt="" />
            </p>
        </a>
    </div>
</section>

<style>
    .additional-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .twitter-icon {
        width: 16px;
        height: 16px;
    }

    .additional-info a {
        text-decoration: underline;
    }
</style>