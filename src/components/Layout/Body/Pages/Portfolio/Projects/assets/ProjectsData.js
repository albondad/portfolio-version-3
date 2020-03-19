const projectsData = [
    // Zaner
    {
        "show": true,
        "title": "Zaner",
        "subTitle" : "UI and UX Developer",
        "tags": ["Development"],
        "thumbnailSource": "thumbnail-zaner.jpg",
        "slideshowImages": [
          "slideshow-zaner-01.jpg",
          "slideshow-zaner-02.jpg",
          "slideshow-zaner-03.jpg",
          "slideshow-zaner-04.jpg",
          "slideshow-zaner-05.jpg",
          "slideshow-zaner-06.jpg",
        ],
        "description": "Zaner is a financial service group primarily focused on risk management. I worked with the company building their upcoming products for their digital assets division as a UI and UX developer. I was able to design and build a style guide and pattern library for use in current and future applications, while designing and implementing views for one of their current web applications. I’ve attached previews of the final products and designs above.",
        "projectSource": "https://www.instagram.com/p/B8YGRavpGq4/",
        "viewOnText": "Instagram",
        "viewOnSource": "https://www.instagram.com/p/B8YGRavpGq4/",
        "tools": "Boostrap CSS, jQuery, CSS"
    },
    // Gyst Audio
    {
        "show": true,
        "title": "Gyst Audio",
        "subTitle" : "Front End Developer Internship",
        "tags": ["Development"],
        "thumbnailSource": "thumbnail-gystAudio.jpg",
        "slideshowImages": [
          "slideshow-gystAudio-01.jpg",
          "slideshow-gystAudio-02.jpg",
          "slideshow-gystAudio-03.jpg",
        ],
        "description": "Gyst audio is a technology startup that aims to provide audio services. Their technology allows clients to connect with professional voice actors and narrators to create audio versions of their published written works. I worked with the company as a front end developer intern, designing and implementing web related UI components to be used for both the company and clients. I’ve attached previews of the final products above.",
        "projectSource": "https://www.instagram.com/p/B8YF8SQJS3X/",
        "viewOnText": "Instagram",
        "viewOnSource": "https://www.instagram.com/p/B8YF8SQJS3X/",
        "tools": "React, jQuery, Boostrap, Python, CSS"
    },
    // Block Scheduler
    {
        "show": true,
        "title": "Block Scheduler",
        "subTitle" : "Side Project",
        "tags": ["Development"],
        "thumbnailSource": "thumbnail-blockScheduler.jpg",
        "slideshowImages": [
          "slideshow-blockScheduler-01.jpg",
          "slideshow-blockScheduler-02.jpg",
          "slideshow-blockScheduler-03.jpg",
          "slideshow-blockScheduler-04.jpg",
        ],
        "description" : "I developed a web application that allows users to keep track of day to day activities or tasks that follow a block schedule pattern. Features include individual account creation and authentication, the ability to create multiple customizable schedules for different situations, and a live timer to keep track of the time.",
        "viewOnText": "Website",
        "viewOnSource": "https://albondad-blokscheduler.netlify.com/",
        "tools": "React, Firebase, Boostrap, Python, CSS"
    },
    // Debatable
    {
        "show": true,
        "title": "Debatable",
        "subTitle" : "Build Chicago Hackathon",
        "tags": ["Design"],
        "thumbnailSource": "thumbnail-debatable.jpg",
        "slideshowImages": [
          "slideshow-debatable-01.jpg",
          "slideshow-debatable-02.jpg",
          "slideshow-debatable-03.jpg",
          "slideshow-debatable-04.jpg",
          "slideshow-debatable-05.jpg",
          "slideshow-debatable-06.jpg",
          "slideshow-debatable-07.jpg",
          "slideshow-debatable-08.jpg",
        ],
        "description": "Debatable is a web application based on holding online debates through the use of online chat rooms. Development happened during the 2019 Build Chicago Hackathon, where teams were given 24 hours to build a solution using Pusher’s API that provides real time features. I led the team that was designing and implementing the front end side of the application. Most of the designs were completed and the final products can be viewed above.",
        "projectSource": "https://www.instagram.com/p/B8YGRavpGq4/",
        "viewOnText": "Instagram",
        "viewOnSource": "https://www.instagram.com/p/B79EsRwAJTF/",
        "tools": "React, Boostrap, Python, CSS"
    },
    // YouTube Channel Statistics
    {
        "show": true,
        "title": "YouTube Channel Statistics",
        "subTitle" : "Side Project",
        "tags": ["Development"],
        "thumbnailSource": "thumbnail-youTubeChannelStatistics.jpg",
        "slideshowImages": [
          "slideshow-youTubeChannelStatistics-01.jpg",
          "slideshow-youTubeChannelStatistics-02.jpg",
        ],
        "description" : "YouTube Channel Statistics is a web application I developed to allow users to search multiple YouTube channels and to view and compare channel statistics. Features include the ability to search for channels by their channel name or channel ID, displaying basic statistics of the channel, and live tracking of a channel subscriber count. Unfortunately, with the recent update of YouTube's Data API, some features may not work the way they're supposed to anymore. I attached a picture of the application above, along with some of the designs I had during the planning process.",
        "viewOnText": "Website",
        "viewOnSource": "https://albondad-youtubechannelstatstracker.netlify.com/",
        "tools": "YouTube Data API, Chart.js, jQuery, Boostrap"
    }
    // {
    //     "show": true,
    //     "title": "Block Scheduler",
    //     "tags": ["Development"],
    //     "thumbnailSource": "imgs/thumbnail-blokScheduler.jpg",
    //     "projectSource": "https://albondad-blokScheduler.netlify.com",
    //     "viewOnType": "GitHub",
    //     "viewOnSource": "https://GitHub.com/albondad/site_blok-scheduler?files=1"
    // },
    // {
    //     "show": true,
    //     "title": "Block Scheduler Design",
    //     "tags": ["Design"],
    //     "thumbnailSource": "imgs/thumbnail-blokSchedulerDesign.jpg",
    //     "projectSource": "https://www.instagram.com/p/B79FDm6gE38/?utm_source=ig_web_copy_link",
    //     "viewOnType": "Instagram",
    //     "viewOnSource": "https://www.instagram.com/p/B79FDm6gE38/?utm_source=ig_web_copy_link"
    // },
    // {
    //     "show": true,
    //     "title": "Debatable Design",
    //     "tags": ["Design"],
    //     "thumbnailSource": "imgs/thumbnail-debatableDesign.jpg",
    //     "projectSource": "https://www.instagram.com/p/B79EsRwAJTF/?utm_source=ig_web_copy_link",
    //     "viewOnType": "Instagram",
    //     "viewOnSource": "https://www.instagram.com/p/B79EsRwAJTF/?utm_source=ig_web_copy_link"
    // },
    // {
    //     "show": true,
    //     "title": "YouTube Channel Statistics",
    //     "tags": ["Development"],
    //     "thumbnailSource": "imgs/thumbnail-youTubeChannelStatsTracker.jpg",
    //     "projectSource": "https://albondad-youTubeChannelStatsTracker.netlify.com",
    //     "viewOnType": "GitHub",
    //     "viewOnSource": "https://GitHub.com/albondad/site_youTubeChannelStatsTracker?files=1"
    // },
    // {
    //     "show": true,
    //     "title": "YouTube Channel Statistics Design",
    //     "tags": ["Design"],
    //     "thumbnailSource": "imgs/thumbnail-youTubeChannelStatsTrackerDesign.jpg",
    //     "projectSource": "https://www.instagram.com/p/B79EewGAH4c/?utm_source=ig_web_copy_link",
    //     "viewOnType": "Instagram",
    //     "viewOnSource": "https://www.instagram.com/p/B79EewGAH4c/?utm_source=ig_web_copy_link"
    // }
]

export default projectsData;
