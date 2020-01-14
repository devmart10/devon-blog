import Typography from "typography"
import colors from "../utils/colors"

const MyTheme = {
  title: "MyTheme",
  baseFontSize: "16px",
  baseLineHeight: 1.625,
  headerFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  scaleRatio: 2.2,
  bodyColor: colors.bodyFontColor,
  headerWeight: 600,
  bodyWeight: "normal",
  boldWeight: 600,
}

MyTheme.overrideStyles = ({ rhythm }) => ({
  h1: {
    paddingBottom: rhythm(1 / 4),
    marginBottom: rhythm(3 / 4),
    marginTop: rhythm(1.5),
  },
  h2: {
    paddingBottom: rhythm(1 / 4),
    marginBottom: rhythm(1 / 4),
    marginTop: rhythm(1),
  },
  h6: {},
  "h3,h4,h5,h6": {
    marginBottom: rhythm(1 / 2),
    marginTop: rhythm(1),
  },
  "ol,ul": {
    marginLeft: rhythm(1.25),
  },
  "li>ol,li>ul": {
    marginLeft: rhythm(1.25),
  },
  a: {
    color: colors.linkColor,
    textDecoration: "none",
  },
  "a:hover,a:active": {
    textDecoration: "underline",
  },
  blockquote: {
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    paddingLeft: rhythm(1 / 2),
  },
  body: {
    backgroundColor: colors.darkGray,
  },
})

const typography = new Typography(MyTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
