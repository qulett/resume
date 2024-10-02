const production = process.env.NODE_ENV === "production";

enum Themes {
  Light = "light",
  Dark = "dark",
}

const configuration = {
  site: {
    name: "Qulett Technologies",
    description:
      "At Qulett Technologies, we provide cutting-edge software development, cloud solutions, and IT consulting services. Our expert team is dedicated to helping businesses enhance efficiency and achieve their goals with customized, innovative solutions. Partner with us to transform your technology landscape and create a smarter future.",
    themeColorDark: "#0a0a0a",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Qulett Technologies",
    facebookHandle: "",
    instagramHandle: "",
    linkedinHandle: "",
    locale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
  },
  theme: Themes.Light,
  paths: {
    contact: "/contact",
    about: "/about",
    homePage: "/homepage",
    privacyPolicy: "/privacy-policy",
    refundPolicy: "/refund-policy",
  },
};

export default configuration;
