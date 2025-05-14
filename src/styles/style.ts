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
  textName: {
    fontSize: "20pt",
    fontFamily: "Baskerville",
    fontWeight: "bold",
    color: "#102c57",
  },
  textPost: {
    fontSize: "11pt",
    fontFamily: "Open Sans",
    color: "#0f172a",
    marginBottom: "2pt",
    textDecoration: "none",
  },
  heading: {
    fontSize: "11.5pt",
    fontFamily: "Baskerville",
    fontWeight: "bold",
    color: "#102c57",
    marginBottom: "8pt",
    textDecoration: "none",
  },
  subHeading: {
    fontSize: "10pt",
    fontFamily: "Open Sans",
    fontWeight: "medium",
    textDecoration: "none",
    color: "#0f172a",
    marginBottom: "2pt",
  },
  body: {
    fontSize: "9pt",
    fontFamily: "Open Sans",
    color: "#1e293b",
    marginBottom: "2pt",
    textDecoration: "none",
  },
  caption: {
    fontSize: "8pt",
    fontFamily: "Open Sans",
    color: "#334155",
    textDecoration: "none",
    marginBottom: "2pt",
  },
});

export default style;
