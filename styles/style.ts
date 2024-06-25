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
    height: "89.1vh",
    width: "63vh",
  },
  section: { marginBottom: "18pt" },
  textName: {
    fontSize: "24pt",
    fontFamily: "Baskerville",
    fontWeight: "bold",
    color: "#102c57",
  },
  sectionTitle: {
    fontSize: "15pt",
    fontFamily: "Baskerville",
    fontWeight: "bold",
    color: "#102c57",
    marginBottom: "8pt",
    textDecoration: "none",
  },
  title1: {
    fontSize: "14pt",
    fontFamily: "Open Sans",
    fontWeight: "medium",
    textDecoration: "none",
    color: "#0f172a",
    marginBottom: "2pt",
  },
  title2: {
    fontSize: "13pt",
    fontFamily: "Open Sans",
    fontWeight: "medium",
    textDecoration: "none",
    color: "#0f172a",
    marginBottom: "2pt",
  },
  title3: {
    fontSize: "12pt",
    fontFamily: "Open Sans",
    fontWeight: "medium",
    textDecoration: "none",
    color: "#0f172a",
    marginBottom: "2pt",
  },
  body1: {
    fontSize: "12pt",
    fontFamily: "Open Sans",
    color: "#0f172a",
    marginBottom: "2pt",
    textDecoration: "none",
  },
  body2: {
    fontSize: "11pt",
    fontFamily: "Open Sans",
    color: "#1e293b",
    marginBottom: "2pt",
    textDecoration: "none",
  },
  body3: {
    fontSize: "10pt",
    fontFamily: "Open Sans",
    color: "#334155",
    textDecoration: "none",
  },
});

export default style;
