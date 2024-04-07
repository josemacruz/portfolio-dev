import LinkedIn from "@/components/icons/LinkedIn.astro";
import Github from "@/components/icons/Github.astro";
import About from "@/components/About.astro";
import Experience from "@/components/Experience.astro";
import Blog from "@/components/Blog.astro";
import Switch from "@/components/Switch.astro";

export const cards = [
  {
    id: 'about',
    color: "#dfc4fe",
    children: About,
  },
  {
    id: 'linkedin',
    color: "#0A66C2",
    children: LinkedIn,
    url: "https://www.linkedin.com/in/josemacruz/",
    urlType: "primary",
  },
  {
    id:'experience_1',
    color: "var(--primary)",
    children: Experience,
    company: 'KNOWMAD_MOOD',
    url: "https://www.knowmadmood.com/es",
    urlType: "secondary",
  },
  {
    id: 'github',
    color: "var(--black)",
    children: Github,
    url: "https://github.com/josemacruz",
    urlType: "primary",
  },
  {
    id: 'experience_2',
    color: "var(--primary)",
    children: Experience,
    company: 'SECMOTIC',
    url: "https://secmotic.com/",
    urlType: "secondary",
  },
  {
    id: 'switch',
    color: "var(--primary)",
    children: Switch,
  }
];