import { StyleSheet } from "@react-pdf/renderer";

// Your name (at the top): 18 to 24 points
// Headings: 12 to 16 points
// Body: 10 to 12 points

const style = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: "24pt",
    fontSize: "11pt",
    height: "100%",
  },
  section: { marginBottom: "10pt" },
  experiencePoints: {
    gap: "1pt",
    maxWidth: "100%",
  },
  experiencePoint: {
    gap: "3pt",
    flexDirection: "row",
    maxWidth: "100%",
  },
  textName: {
    fontSize: "26pt",
    fontFamily: "Baskerville",
    fontWeight: "bold",
    color: "#102c57",
    marginBottom: "2pt",
  },
  textPost: {
    fontSize: "11pt",
    fontFamily: "Open Sans",
    color: "#0f172a",
    marginBottom: "2pt",
    textDecoration: "none",
  },
  heading1: {
    fontSize: "11.5pt",
    fontFamily: "Baskerville",
    fontWeight: "bold",
    color: "#102c57",
    marginBottom: "8pt",
    textDecoration: "none",
  },
  heading2: {
    fontSize: "9.5pt",
    fontFamily: "Open Sans",
    fontWeight: "medium",
    textDecoration: "none",
    color: "#0f172a",
    marginBottom: "2pt",
  },
  heading3: {
    fontSize: "8pt",
    fontFamily: "Open Sans",
    fontWeight: "medium",
    textDecoration: "none",
    color: "#0f172a",
    marginBottom: "2pt",
  },
  body1: {
    fontSize: "8.5pt",
    fontFamily: "Open Sans",
    color: "#1e293b",
    marginBottom: "2pt",
    textDecoration: "none",
  },
  body2: {
    fontSize: "7.5pt",
    fontFamily: "Open Sans",
    color: "#334155",
    textDecoration: "none",
    marginBottom: "2pt",
  },
  body3: {
    fontSize: "7pt",
    fontFamily: "Open Sans",
    color: "#334155",
    textDecoration: "none",
    marginBottom: "2pt",
  },
});

export default style;
