import LinkedIn from "../components/icons/LinkedIn.astro";
import Github from "../components/icons/Github.astro";
import ThemeSwitch from "../components/ThemeSwitch.astro";
import About from "../components/About.astro";
import Experience from "../components/Experience.astro";
import Blog from "../components/Blog.astro";

export const cards = [
  {
    color: "#dfc4fe",
    children: About,
  },
  {
    color: "#0A66C2",
    children: LinkedIn,
    url: "https://www.linkedin.com/in/josemacruz/",
    urlType: "primary",
  },
  {
    color: "var(--primary)",
    children: Experience,
    company: 0,
    url: "https://www.knowmadmood.com/es",
    urlType: "secondary",
  },
  {
    color: "var(--black)",
    children: Github,
    url: "https://github.com/josemacruz",
    urlType: "primary",
  },
  {
    color: "var(--primary)",
    children: Experience,
    company: 1,
    url: "https://secmotic.com/",
    urlType: "secondary",
  },
  {
    color: "var(--primary)",
    children: ThemeSwitch,
  },
  {
    color: "var(--primary)",
    children: Blog,
    url: "https://ttcode.dev",
    urlType: "secondary",
  }
];