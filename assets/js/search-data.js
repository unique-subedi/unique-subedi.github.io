// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-papers",
          title: "papers",
          description: "Selected papers, preprints, publications, and miscellaneous writing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-personal",
          title: "personal",
          description: "Some personal tidbits.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-beyond-verifiability-on-the-success-of-ai-agents",
        
          title: "Beyond Verifiability: On the Success of AI Agents",
        
        description: "Why checking an answer is only part of the story of AI progress in code and mathematics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/verifiability/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-awarded-the-rackham-international-students-fellowship",
          title: 'Awarded the Rackham International Students Fellowship.',
          description: "",
          section: "News",},{id: "news-received-the-rackham-predoctoral-fellowship-from-the-university-of-michigan",
          title: 'Received the Rackham Predoctoral Fellowship from the University of Michigan.',
          description: "",
          section: "News",},{id: "news-completed-research-internship-at-block",
          title: 'Completed Research Internship at Block.',
          description: "",
          section: "News",},{id: "news-successfully-defended-my-ph-d-thesis",
          title: 'Successfully defended my Ph.D. thesis.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-introduction-to-statistics-and-data-analysis",
          title: 'Introduction to Statistics and Data Analysis',
          description: "Graduate Student Instructor, Fall 2021.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2021-fall-introduction-to-statistics-and-data-analysis/";
            },},{id: "teachings-bayesian-data-analysis",
          title: 'Bayesian Data Analysis',
          description: "Graduate Student Instructor, Fall 2022.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2022-fall-bayesian-data-analysis/";
            },},{id: "teachings-applied-regression-analysis",
          title: 'Applied Regression Analysis',
          description: "Graduate Student Instructor, Winter 2022.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2022-winter-applied-regression-analysis/";
            },},{id: "teachings-probability-and-distribution-theory",
          title: 'Probability and Distribution Theory',
          description: "Graduate Student Instructor, Fall 2023.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2023-fall-probability-and-distribution-theory/";
            },},{id: "teachings-introduction-to-statistics-and-data-analysis",
          title: 'Introduction to Statistics and Data Analysis',
          description: "Graduate Student Instructor, Winter 2023.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2023-winter-introduction-to-statistics-and-data-analysis/";
            },},{id: "teachings-statistics-and-ai",
          title: 'Statistics and AI',
          description: "Graduate Student Instructor, Winter 2023.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2023-winter-statistics-and-ai/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%75%62%65%64%69@%75%6D%69%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=DO16ipsAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/unique-subedi", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/unique-subedi", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
