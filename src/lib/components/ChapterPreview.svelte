<script>
    const chapters = [
        {
            number: 1,
            title: "Navigating Swedish Immigration",
            strapline: "Understanding Permits, Registration, and Legal Requirements",
            excerpt:
            "Moving to Sweden requires understanding and navigating various immigration processes and legal requirements. This chapter provides a comprehensive guide to securing your residence permit, registering with Swedish authorities, and handling essential documentation. We'll explore different permit types available - from work and study permits to family reunification - and provide detailed guidance on the application process. You'll learn about critical steps like obtaining your personal identity number (personnummer), registering with the Swedish Population Registry (Folkbokföring), and understanding your rights and obligations. We'll also cover the Swedish Migration Agency (Migrationsverket) procedures, required documentation, and timelines. Whether you're an EU/EEA citizen or coming from outside the EU, this chapter ensures you understand all legal requirements for a smooth transition to life in Sweden.",
        },
        {
            number: 2,
            title: "Finding Housing in Sweden",
            strapline: "From City Apartments to Suburban Houses: Your Complete Housing Guide",
            excerpt: "Finding the right home in Sweden requires understanding the unique aspects of the Swedish housing market. This chapter guides you through the intricacies of finding and securing accommodation, whether you're looking to rent or buy. We'll explore different regions and housing options, from apartments in vibrant Stockholm to houses in peaceful suburban areas. You'll learn about the Swedish queue system for rental apartments, how to navigate the first and second-hand rental markets, and what to expect when dealing with Swedish landlords. We'll cover important topics like housing cooperatives (bostadsrätter), signing contracts, understanding Swedish housing terms, and your rights as a tenant or homeowner. Additionally, we'll discuss practical aspects like utilities, insurance, and maintenance responsibilities. This comprehensive guide will help you make informed decisions about where and how to live in Sweden.",
        },
        {
            number: 3,
            title: "Working in Sweden",
            strapline: "Understanding the Swedish Job Market and Work Culture",
            excerpt: "The Swedish job market offers excellent opportunities but requires understanding its unique characteristics and cultural aspects. This chapter provides essential insights into finding employment, understanding work culture, and building a career in Sweden. We'll explore key industries and sectors with high demand for international talent, particularly in tech, healthcare, and engineering. You'll learn how to craft an effective Swedish-style CV, navigate job search websites, and understand the importance of networking in Swedish professional culture. We'll also cover crucial aspects like work permits, union membership, understanding collective agreements, and your rights as an employee. Special attention is given to learning Swedish for professional development, understanding the work-life balance philosophy, and adapting to Swedish workplace customs. Whether you're seeking traditional employment or considering entrepreneurship, this chapter equips you with vital knowledge for professional success in Sweden.",
        },
        {
            number: 4,
            title: "Swedish Culture and Social Life",
            strapline: "Understanding and Embracing the Swedish Way of Life",
            excerpt: "Understanding Swedish culture and social norms is crucial for successfully integrating into Swedish society. This chapter explores the unique aspects of Swedish lifestyle, from the concept of 'lagom' (just right) to the importance of work-life balance. We'll discuss Swedish social customs, including the famous 'fika' tradition, and how to navigate social interactions in both personal and professional settings. You'll learn about Swedish values like equality, environmental consciousness, and personal space, as well as how these values shape daily life. We'll cover practical aspects of social integration, from making friends in a culture known for initial reservation to participating in local activities and traditions. The chapter also addresses language learning strategies, joining social groups, and understanding Swedish holidays and celebrations. By understanding these cultural nuances, you'll be better equipped to build meaningful connections and feel at home in Swedish society.",
        },
        {
            number: 5,
            title: "Swedish System and Daily Life",
            strapline: "Healthcare, Education, and Practical Matters in Sweden",
            excerpt: "This chapter covers the essential systems and practical aspects of daily life in Sweden. We'll guide you through the renowned Swedish healthcare system, explaining how to register with a healthcare center (vårdcentral), understand medical insurance, and access various health services. The education system is thoroughly covered, from childcare and schools to higher education opportunities. We'll explain practical matters like banking, taxes, and social insurance, including how to deal with the Swedish Tax Agency (Skatteverket) and Social Insurance Agency (Försäkringskassan). You'll learn about public transportation, getting a driving license, and managing utilities. We also cover digital services and BankID, which are crucial for daily life in Sweden's highly digitalized society. Whether you're moving alone or with family, this chapter ensures you understand and can effectively navigate the various systems that make up daily life in Sweden.",
        }
    ]

    let selectedChapterNumber = $state(1);
    let selectedChapter = $derived(
        chapters.find((chapter) => chapter.number === selectedChapterNumber)
    );

    function selectChapter(chapter) {
        selectedChapterNumber = chapter.number;
    }
</script>


<section class="landing-page-section" >
    <h2 class="mb-l">What you're getting</h2>
    <div class="chapter-container">
        <ul>
            {#each chapters as chapter}
                <li>
                    <button
                        class="chapter-title selected-chapter-title"
                        class:selected-chapter-title={selectedChapterNumber === chapter.number}
                        aria-controls={'chapter-info-${chapter.number}'}
                        aria-expanded={selectedChapterNumber === chapter.number}
                        onclick={() => selectChapter(chapter)}
                    >
                        <h3>Chapter {chapter.number}: {chapter.title}</h3>
                    </button>
                </li>
            {/each}
            
        </ul>
        <div class="chapter-info">
            <h3 class="chapter-strapline italic mb-s">
                {selectedChapter.title}
            </h3>
            <p>
                {selectedChapter.excerpt}
            </p>
        </div>
    </div>
</section>

<style>
    .chapter-container {
        display: flex;
        justify-content: space-between;

    }

    .chapter-container ul {
        width: 40%;
    }

    .chapter-info {
        width: 55%;
    }

    .chapter-title {
        border-bottom: 1px solid grey;
        width: 100%;
        display: block;
        padding: 12px;
        text-align: left;
    }

    .selected-chapter-title {
        background-color: black;
        border: none;
        color: white;
        box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 1px 3px rgba(0, 0, 0, 0.08);
    }
</style>