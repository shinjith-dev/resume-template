import style from "@/styles/style";
import { Document, Font, Link, Page, Text, View } from "@react-pdf/renderer";
import React from "react";

Font.register({
  family: "Baskerville",
  fontWeight: "bold",
  src: "../LibreBaskerville-Bold.ttf",
});

Font.register({
  family: "Open Sans",
  fontWeight: "normal",
  src: "./OpenSans-Regular.ttf",
});

Font.register({
  family: "Open Sans",
  fontWeight: "medium",
  src: "./OpenSans-Medium.ttf",
});

const Template = () => {
  return (
    <Document>
      <Page size="A4" style={style.page} wrap>
        <View style={style.section}>
          <View
            style={[
              style.section,
              {
                flexDirection: "row",
                gap: "32pt",
                alignItems: "center",
                marginBottom: "24pt",
              },
            ]}
          >
            <View
              style={{
                flexDirection: "column",
                display: "flex",
                flexBasis: "60%",
                flexShrink: 0,
                flexGrow: 0,
              }}
            >
              <Text style={style.textName}>Shinjith P R</Text>

              <Text style={[style.body1, { marginBottom: "6pt" }]}>
                Web Developer from Kerala, India
              </Text>

              <Text style={style.body2}>
                Experienced Full Stack Developer, proficient at driving
                innovation utilizing cutting-edge technology. With over 1½ years
                of professional experience, I am looking for possibilities for
                skill development and significant contributions to ideas.
              </Text>
            </View>

            <View style={{ flexDirection: "column", display: "flex" }}>
              <Link
                style={style.body2}
                src="mailto:shinjithkanhangad@gmail.com"
              >
                shinjithkanhangad@gmail.com
              </Link>
              <Link style={style.body2} src="tel:+918921345282">
                +91 8921345282
              </Link>
              <Link style={style.body2} src="https://github.com/shinjith-dev">
                github.com/shinjith-dev
              </Link>
              <Link style={style.body2} src="https://shinjith.dev">
                shinjith.dev
              </Link>
            </View>
          </View>

          <View style={[style.section, { flexDirection: "row", gap: "32pt" }]}>
            <View
              style={{
                flexDirection: "column",
                display: "flex",
                flexBasis: "60%",
                flexShrink: 0,
                flexGrow: 0,
              }}
            >
              {/* Experiences  */}
              <View style={style.section}>
                <Text style={style.sectionTitle}>Experience</Text>

                <View style={{ marginBottom: "12pt" }}>
                  <Link src="https://www.tghtech.com/" style={style.title1}>
                    TGH Tech
                  </Link>
                  <View
                    style={[
                      style.body2,
                      { flexDirection: "row", alignItems: "center" },
                    ]}
                  >
                    <Text style={{ fontWeight: "medium" }}>Developer · </Text>
                    <Text style={style.body3}>December 2022 - April 2024</Text>
                  </View>
                  <Text style={style.body2}>
                    I spent over 1½ year at TGH Tech as a Frontend Web
                    Developer, crafting web interfaces for startups and
                    mid-sized businesses. This role allowed me to master coding
                    techniques and strategic approaches to web development.
                  </Text>
                </View>

                <View>
                  <Link style={style.title1} src="https://www.tghtech.com/">
                    IBM Developer Skills Network
                  </Link>
                  <View
                    style={[
                      style.body2,
                      { flexDirection: "row", alignItems: "center" },
                    ]}
                  >
                    <Text style={{ fontWeight: "medium" }}>Intern · </Text>
                    <Text style={style.body3}>November 2022</Text>
                  </View>
                  <Text style={style.body2}>
                    An internship that covered the fundamentals of web
                    development using Angular, certified by IBM.
                  </Text>
                </View>
              </View>

              {/* Education  */}
              <View style={style.section}>
                <Text style={style.sectionTitle}>Education</Text>

                <View style={{ marginBottom: "12pt" }}>
                  <Text style={[style.body2, { fontWeight: "medium" }]}>
                    Bachelor of Technology in Computer Science
                  </Text>
                  <Link src="https://lbscek.ac.in/" style={style.title2}>
                    LBS College of Engineering
                  </Link>
                  <Text style={style.body3}>June 2024</Text>
                </View>

                <View>
                  <Text style={[style.body2, { fontWeight: "medium" }]}>
                    Higher studies
                  </Text>
                  <Text style={style.title2}>JNV Kasaragod</Text>
                  <Text style={style.body3}>April 2020</Text>
                </View>
              </View>

              {/* Projects  */}
              <View style={style.section}>
                <Text style={style.sectionTitle}>Projects</Text>
                <View style={{ marginBottom: "12pt" }}>
                  <Link style={style.title3} src="https://pomtick.pages.dev">
                    Pomtick
                  </Link>
                  <Text style={style.body3}>
                    Pomtick is a pomodoro timer app that works across multiple
                    platforms. Designed to improve productivity of completing
                    task; with a classy themeable interface.
                  </Text>
                </View>

                <View style={{ marginBottom: "12pt" }}>
                  <Link
                    style={style.title3}
                    src="https://github.com/shinjith-dev/academic-ai"
                  >
                    Academic AI
                  </Link>
                  <Text style={style.body3}>
                    An AI assistant that focuses on assigning tasks for students
                    based on the syllabus. It effortlessly
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    improves students' performance by lowering stress and
                    providing slots for homework, exam preparation, etc.
                  </Text>
                </View>

                <View>
                  <Link
                    style={style.title3}
                    src="https://movie-loft.netlify.app/"
                  >
                    Movie Loft
                  </Link>
                  <Text style={style.body3}>
                    Movie Loft is a web-based movie database client with a
                    minimal user interface. It can be useful to obtain
                    information about movies, television shows, and their
                    specifics.
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "column",
                display: "flex",
                flexGrow: 0,
                flexShrink: 0,
                flexWrap: "wrap",
                flexBasis: "34%",
              }}
            >
              {/* Skills  */}
              <View style={style.section}>
                <Text style={style.sectionTitle}>Skills</Text>

                <View style={{ marginBottom: "12pt" }}>
                  <Text style={style.title3}>Programming Languages</Text>
                  <Text style={style.body2}>
                    JavaScript, TypeScript, C, HTML, CSS, Java, Python, Bash
                  </Text>
                </View>

                <View style={{ marginBottom: "12pt" }}>
                  <Text style={style.title3}>Libraries & Frameworks</Text>
                  <Text style={style.body2}>
                    Next.js, React, React Native, Tauri, Electronjs, NodeJs,
                    Docusaurus, Material UI, Tailwind, Bootstrap
                  </Text>
                </View>

                <View>
                  <Text style={style.title3}>Tools & Platforms</Text>
                  <Text style={style.body2}>
                    Git, Github, Netlify, Render, AWS Amplify, Cloudflare
                  </Text>
                </View>
              </View>

              {/* Soft skills */}
              <View style={style.section}>
                <Text style={style.sectionTitle}>Soft Skills</Text>

                <View style={{ marginTop: "8pt" }}>
                  <Text
                    style={[
                      style.body2,
                      { marginBottom: "8pt", fontWeight: "medium" },
                    ]}
                  >
                    Designing
                  </Text>
                  <Text
                    style={[
                      style.body2,
                      { marginBottom: "8pt", fontWeight: "medium" },
                    ]}
                  >
                    Problem solving
                  </Text>
                  <Text
                    style={[
                      style.body2,
                      { marginBottom: "8pt", fontWeight: "medium" },
                    ]}
                  >
                    Creative thinking
                  </Text>
                  <Text style={[style.body2, { fontWeight: "medium" }]}>
                    Observation
                  </Text>
                </View>
              </View>

              {/* Language proficiency */}
              <View style={style.section}>
                <Text style={style.sectionTitle}>Language Proficiency</Text>

                <View style={{ marginTop: "8pt" }}>
                  <Text
                    style={[
                      style.body2,
                      { marginBottom: "8pt", fontWeight: "medium" },
                    ]}
                  >
                    English
                  </Text>
                  <Text
                    style={[
                      style.body2,
                      { marginBottom: "8pt", fontWeight: "medium" },
                    ]}
                  >
                    Malayalam
                  </Text>
                  <Text style={[style.body2, { fontWeight: "medium" }]}>
                    Hindi
                  </Text>
                </View>
              </View>

              {/* Interests */}
              <View style={style.section}>
                <Text style={style.sectionTitle}>Interests</Text>

                <Text style={style.body2}>
                  Art, traveling, novels & stories, designs, movies
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Template;
