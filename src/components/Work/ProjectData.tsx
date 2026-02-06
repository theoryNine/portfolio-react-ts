import MazdaDesktopSS from "../../images/sitegrabs/mazda_full.png"
import BNYDesktopSS from "../../images/sitegrabs/bny_full.png"
import BNYDesktopSS2 from "../../images/sitegrabs/bny_full2.png"
import BNYMobile from "../../images/sitegrabs/bny_mobile.png"
import SpectrumDesktopSS from "../../images/sitegrabs/spectrum_mobile_full.jpg"
import NYLDesktopSS from "../../images/sitegrabs/nyl_full.jpg"
import ATTDesktopSS from "../../images/sitegrabs/att_full.jpg"
import CanonDesktopSS from "../../images/sitegrabs/canon_full.jpg"
import CanonMobileSS from "../../images/sitegrabs/canon_mob.png"
import ACUDesktopSS from "../../images/sitegrabs/acu_full.jpg"
import FreshDesktopSS from "../../images/sitegrabs/fresh_full.jpg"
import MazdaMobileSS from "../../images/sitegrabs/Mazda_Mob.png"
import StarbucksDesktopSS from "../../images/sitegrabs/starbucks_full.png"
import StarbucksMobileSS from "../../images/sitegrabs/starbucks_mob.png"

export type Project = {
  key: number
  title: string
  background: string
  screenshot1: string
  screenshot1mob?: boolean
  screenshot2?: string
  screenshot2mob?: boolean
  screenshot3?: string
  screenshot3mob?: boolean
  liveUrl?: string
  role?: string
  description?: string
  stack: string
}

export const ProjectData: Project[] = [
  {
    key: 0,
    title: "Starbucks",
    background: StarbucksDesktopSS,
    screenshot1: StarbucksDesktopSS,
    screenshot2: StarbucksMobileSS,
    screenshot2mob: true,
    liveUrl: "https://www.starbucks.com/",
    role: "Front-End Lead",
    description:
      "Led a team of front-end engineers alongside back-end engineers, devOps, and QA specialists to build and maintain multiple web properties for Starbucks seeing over 30 million monthly visitors, working with apps and multiple backend systems. Led the development and execution of UI migrations for the sites to a new CMS platform.",
    stack:
      "Adobe Experience Manager (AEM), React, CSS/SASS, JavaScript, TypeScript, Azure DevOps, Zustand, Tanstack Query, GraphQL, Accessibility (a11y), Jest, Cypress, Storybook",
  },
  {
    key: 1,
    title: "Mazda Brand Academy",
    background: MazdaDesktopSS,
    screenshot1: MazdaDesktopSS,
    screenshot2: MazdaMobileSS,
    screenshot2mob: true,
    role: "Front-End Lead",
    description:
      "Led a team of front-end developers in working alongside a design agency and internal stakeholders to develop a new internal learning portal and sales system, built with React in Adobe Experience Manager, and leveraging multiple APIs as data sources.",
    stack:
      "Adobe Experience Manager (AEM), React, CSS/SASS, JavaScript, react-router, Jest",
  },
  {
    key: 2,
    title: "Bank of New York Mellon",
    background: BNYDesktopSS,
    screenshot1: BNYDesktopSS,
    screenshot2: BNYDesktopSS2,
    screenshot3: BNYMobile,
    screenshot3mob: true,
    role: "Senior Front-End Developer",
    liveUrl: "https://www.bnymellon.com/",
    description:
      "Worked alongside a team of front-end and back-end developers, a design agency, and key stakeholders across the organization to migrate a full enterprise property to the Adobe Experience Manager CMS. Developed in AEM, the components utilize a mix of HTL/Sightly for markup and extensive JavaScript.",
    stack:
      "Adobe Experience Manager (AEM), HTML/HTL/Sightly, CSS/SASS, JavaScript, VueJS, jQuery",
  },
  {
    key: 3,
    title: "Spectrum",
    background: SpectrumDesktopSS,
    screenshot1: SpectrumDesktopSS,
    liveUrl: "https://www.spectrum.com/",
    role: "Front-End Developer",
    description:
      "Developed and maintained components and templates within Adobe Experience Manager for several web properties.",
    stack:
      "Adobe Experience Manager (AEM), HTML/HTL/Sightly, CSS/SASS, JavaScript, jQuery",
  },
  {
    key: 4,
    title: "New York Life",
    background: NYLDesktopSS,
    screenshot1: NYLDesktopSS,
    liveUrl: "https://www.newyorklife.com/",
    role: "Front-End Developer",
    description:
      "Developed components and templates within Adobe Experience Manager.",
    stack:
      "Adobe Experience Manager (AEM), HTML/HTL/Sightly, CSS/SASS, JavaScript, jQuery",
  },
  {
    key: 5,
    title: "AT&T",
    background: ATTDesktopSS,
    screenshot1: ATTDesktopSS,
    liveUrl: "https://www.att.com/",
    description:
      "Developed components and implemented content within Adobe Experience Manager.",
    role: "Content Implemenetation Specialist",
    stack: "Adobe Experience Manager (AEM)",
  },
  {
    key: 6,
    title: "Canon USA",
    background: CanonDesktopSS,
    screenshot1: CanonDesktopSS,
    screenshot2: CanonMobileSS,
    screenshot2mob: true,
    role: "Front-End Developer",
    liveUrl: "https://www.usa.canon.com/",
    stack: "HTML, CSS/SASS, JavaScript, jQuery",
  },
  {
    key: 7,
    title: "Abilene Christian University",
    background: ACUDesktopSS,
    screenshot1: ACUDesktopSS,
    role: "Front-End Developer",
    liveUrl: "https://www.acu.edu/",
    stack:
      "Adobe Experience Manager (AEM), HTML/HTL/Sightly, CSS/SASS, JavaScript, jQuery",
  },
  {
    key: 8,
    title: "Fresh Image Center",
    background: FreshDesktopSS,
    screenshot1: FreshDesktopSS,
    role: "Front-End Developer",
    liveUrl: "https://freshimagecenter.com/",
    stack: "Wordpress, PHP, HTML, CSS/SASS",
  },
]
