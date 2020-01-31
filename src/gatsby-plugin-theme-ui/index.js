import { tailwind } from "@theme-ui/presets"

const headingStyles = {
  h1: {
    ...tailwind.styles.h1,
    color: `heading`,
    fontSize: [5, 6, 7],
    mt: 2,
  },
  h2: {
    ...tailwind.styles.h2,
    color: `heading`,
    fontSize: [4, 5, 6],
    mt: 2,
  },
  h3: {
    ...tailwind.styles.h3,
    color: `heading`,
    fontSize: [3, 4, 5],
    mt: 3,
  },
  h4: {
    ...tailwind.styles.h4,
    color: `heading`,
    fontSize: [2, 3, 4],
  },
  h5: {
    ...tailwind.styles.h5,
    color: `heading`,
    fontSize: [1, 2, 3],
  },
  h6: {
    ...tailwind.styles.h6,
    color: `heading`,
    fontSize: 1,
    mb: 2,
  },
}

export default {
  ...tailwind,
  initialColorMode: `light`,
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.white,
    profileBorder: tailwind.colors.indigo[2],
    secondary: `#5f6c80`,
    text: tailwind.colors.indigo[7],
    toggleIcon: tailwind.colors.gray[8],
    footer: tailwind.colors.black,
    divide: tailwind.colors.gray[4],
    link: tailwind.colors.pink[7],
    altLink: tailwind.colors.pink[2],
    modes: {
      dark: {
        primary: `#1A1F2C`,
        profileBorder: tailwind.colors.indigo[7],
        secondary: `#7f8ea3`,
        text: tailwind.colors.indigo[2],
        toggleIcon: tailwind.colors.gray[4],
        background: `#1A202C`,
        footer: tailwind.colors.white,
        divide: tailwind.colors.gray[8],
        link: tailwind.colors.pink[2],
        altLink: tailwind.colors.pink[7],
      },
    },
  },
  fonts: {
    body: `"Nunito", "Avenir", "Helvetica", "sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
    ...tailwind.fonts,
  },
  text: {
    ...headingStyles,
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  links: {
    secondary: {
      color: `secondary`,
      textDecoration: `none`,
      ":hover": {
        color: `heading`,
        textDecoration: `underline`,
      },
      ":focus": {
        color: `heading`,
      },
    },
    listItem: {
      fontSize: [1, 2, 3],
      color: `text`,
    },
  },
  // styles: {
  //   ...tailwind.styles,
  //   root: {
  //     ...tailwind.styles.root,
  //     color: `text`,
  //     backgroundColor: `background`,
  //   },
  //   p: {
  //     fontSize: [1, 1, 2],
  //     letterSpacing: `-0.003em`,
  //     lineHeight: `body`,
  //     "--baseline-multiplier": 0.179,
  //     "--x-height-multiplier": 0.35,
  //   },
  //   ul: {
  //     li: {
  //       fontSize: [1, 1, 2],
  //       letterSpacing: `-0.003em`,
  //       lineHeight: `body`,
  //       "--baseline-multiplier": 0.179,
  //       "--x-height-multiplier": 0.35,
  //     },
  //   },
  //   ol: {
  //     li: {
  //       fontSize: [1, 1, 2],
  //       letterSpacing: `-0.003em`,
  //       lineHeight: `body`,
  //       "--baseline-multiplier": 0.179,
  //       "--x-height-multiplier": 0.35,
  //     },
  //   },
  //   ...headingStyles,
  //   Container: {
  //     padding: [3, 4],
  //   },
  //   blockquote: {
  //     borderLeftColor: `primary`,
  //     borderLeftStyle: `solid`,
  //     borderLeftWidth: `6px`,
  //     mx: 0,
  //     pl: 4,
  //     p: {
  //       fontStyle: `italic`,
  //     },
  //   },
  // },
}
