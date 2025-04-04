import style from "../styles/style";
import { Document, Font, Link, Page, Text, View } from "@react-pdf/renderer";

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
                gap: "5%",
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

              <Text style={[style.textPost, { marginBottom: "6pt" }]}>
                Web Developer
              </Text>

              <Text style={style.body}>
                Experienced React Native Developer, proficient at driving
                innovation utilizing cutting-edge technology. With over 1½ years
                of professional experience, I am looking for possibilities for
                skill development and significant contributions to ideas.
              </Text>
            </View>

            <View style={{ flexDirection: "column", display: "flex", gap: '3pt' }}>
              <Link style={style.body} src="mailto:shinjithdev@gmail.com">
                shinjithdev@gmail.com
              </Link>
              <Link style={style.body} src="tel:+918921345282">
                +91 8921345282
              </Link>
              <Link style={style.body} src="https://github.com/shinjith-dev">
                github.com/shinjith-dev
              </Link>
              <Link style={style.body} src="https://shinjith.dev">
                shinjith.dev
              </Link>
              <Text style={style.body}>Kasaragod, Kerala, India</Text>
            </View>
          </View>

          <View style={[style.section, { flexDirection: "row", gap: "5%", width: '100%' }]}>
            <View
              style={{
                flexDirection: "column",
                display: "flex",
                flexBasis: "60%",
                flexShrink: 0,
                flexGrow: 0,
                gap: '8pt'
              }}
            >
              {/* Experiences  */}
              <View style={style.section}>
                <Text style={style.heading}>Experience</Text>

                <View style={{ marginBottom: "12pt" }}>
                  <Link src="https://tequerist.com/" style={style.subHeading}>
                    Tequerist Technologies
                  </Link>
                  <View style={{ flexDirection: "row", alignItems: "baseline", marginBottom: '3pt' }}>
                    <Text style={[style.body, { fontWeight: "medium" }]}>Developer · </Text>
                    <Text style={style.caption}>Spetember 2024 - Present</Text>
                  </View>
                  <Text style={style.body}>
                    I had the chance to collaborate with an amazing team as
                    a React Native developer. Worked on older code bases and
                    expanded my knowledge of Redux. I also got the chance to
                    create a cross-platform booking system for the company's product.
                  </Text>
                </View>

                <View style={{ marginBottom: "12pt" }}>
                  <Link src="https://www.tghtech.com/" style={style.subHeading}>
                    TGH Tech
                  </Link>
                  <View style={{ flexDirection: "row", alignItems: "baseline", marginBottom: '3pt' }}>
                    <Text style={[style.body, { fontWeight: "medium" }]}>Developer · </Text>
                    <Text style={style.caption}>December 2022 - April 2024</Text>
                  </View>
                  <Text style={style.body}>
                    I spent over 1½ year at TGH Tech as a Developer, crafting
                    web interfaces for startups and mid-sized businesses. This
                    role allowed me to master coding techniques and strategic
                    approaches to web development.
                  </Text>
                </View>

                <View>
                  <Link style={style.subHeading} src="https://www.tghtech.com/">
                    IBM Developer Skills Network
                  </Link>
                  <View style={{ flexDirection: "row", alignItems: "baseline", marginBottom: '3pt' }}>
                    <Text style={[style.body, { fontWeight: "medium" }]}>Intern · </Text>
                    <Text style={style.caption}>November 2022</Text>
                  </View>
                  <Text style={style.body}>
                    An internship that covered the fundamentals of web
                    development using Angular, certified by IBM.
                  </Text>
                </View>
              </View>

              {/* Projects  */}
              <View style={style.section}>
                <Text style={style.heading}>Projects</Text>
                <View style={{ marginBottom: "12pt" }}>
                  <Link
                    style={[style.subHeading, { marginBottom: '4pt' }]}
                    src="https://github.com/shinjith-dev/academic-ai"
                  >
                    Academic AI
                  </Link>
                  <Text style={style.body}>
                    An AI assistant that focuses on assigning tasks for students
                    based on the syllabus. It effortlessly{" "}
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    improves students' performance by lowering stress and
                    providing slots for homework, exam preparation, etc.
                  </Text>
                </View>

                <View style={{ marginBottom: "12pt" }}>
                  <Text
                    style={[style.subHeading, { marginBottom: '4pt' }]}
                  >
                    Blood Donors
                  </Text>
                  <Text style={style.body}>
                    A mobile app created for a public welfare organization.
                    This software keeps track of blood donors' records and donation histories,
                    as well as maintaining an up-to-date list monitored by enrolled staff.
                    Crafted with powerful Expo + Supabase combo.
                  </Text>
                </View>

                <View style={{ marginBottom: "12pt" }}>
                  <Link
                    style={[style.subHeading, { marginBottom: '4pt' }]}
                    src="https://pomtick.pages.dev/"
                  >
                    Pomtick
                  </Link>
                  <Text style={style.body}>
                    Pomtick is an elegant themeable pomodoro timer that works on multiple platforms.  It is powered by Turborepo and comes with a native program (Tauri) for Windows, Linux, and MacOS, as well as a web application (Next.js).
                  </Text>
                </View>

                <View>
                  <Link
                    style={[style.subHeading, { marginBottom: '4pt' }]}
                    src="https://shinjith.dev/"
                  >
                    shinjith.dev
                  </Link>
                  <Text style={style.body}>
                    A portfolio website developed with Nextjs and Tailwindcss.  Designed with an appealing modern UI, smooth scrolling effect, and much more.
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
                flexBasis: "35%",
              }}
            >
              {/* Skills  */}
              <View style={style.section}>
                <Text style={style.heading}>Skills</Text>

                <View style={{ marginBottom: "12pt" }}>
                  <Text style={style.subHeading}>Programming Languages</Text>
                  <Text style={style.body}>
                    JavaScript, TypeScript, C, Java, Python, Bash
                  </Text>
                </View>

                <View style={{ marginBottom: "12pt" }}>
                  <Text style={style.subHeading}>Libraries & Frameworks</Text>
                  <Text style={style.body}>
                    Nextjs, Expo, React, React Native, Vite,
                    Tauri, Electronjs, NodeJs, Express,
                    Material UI, Tailwind, Bootstrap, Sentry
                  </Text>
                </View>

                <View>
                  <Text style={style.subHeading}>Tools & Platforms</Text>
                  <Text style={style.body}>
                    Git, Github, Netlify, Render, AWS, Cloudflare, Docker
                  </Text>
                </View>
              </View>

              {/* Education  */}
              <View style={style.section}>
                <Text style={style.heading}>Education</Text>

                <View style={{ marginBottom: "12pt", gap: '3pt' }}>
                  <Text style={style.body}>
                    Bachelors in CSE
                  </Text>
                  <Link src="https://lbscek.ac.in/" style={style.subHeading}>
                    LBS College of Engineering
                  </Link>
                  <Text style={style.caption}>June 2024</Text>
                </View>

                <View style={{ gap: '3pt' }}>
                  <Text style={style.body}>
                    Higher studies
                  </Text>
                  <Text style={style.subHeading}>JNV Kasaragod</Text>
                  <Text style={style.caption}>April 2020</Text>
                </View>
              </View>

              {/* Soft skills */}
              <View style={style.section}>
                <Text style={style.heading}>Soft Skills</Text>

                <View>
                  <Text
                    style={[
                      style.body,
                      { marginBottom: "8pt" },
                    ]}
                  >
                    Designing
                  </Text>
                  <Text
                    style={[
                      style.body,
                      { marginBottom: "8pt" },
                    ]}
                  >
                    Problem solving
                  </Text>
                  <Text
                    style={[
                      style.body,
                      { marginBottom: "8pt" },
                    ]}
                  >
                    Creative thinking
                  </Text>
                  <Text style={style.body}>
                    Observation
                  </Text>
                </View>
              </View>

              {/* Language proficiency */}
              <View style={style.section}>
                <Text style={style.heading}>Language Proficiency</Text>

                <View>
                  <Text
                    style={[
                      style.body,
                      { marginBottom: "8pt" }
                    ]}
                  >
                    English
                  </Text>
                  <Text
                    style={[
                      style.body,
                      { marginBottom: "8pt" },
                    ]}
                  >
                    Malayalam
                  </Text>
                  <Text style={style.body}>
                    Hindi
                  </Text>
                </View>
              </View>

              {/* Interests */}
              <View style={style.section}>
                <Text style={style.heading}>Interests</Text>

                <Text style={style.body}>
                  Art, travel, novels, designs, movies, philosophy
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
