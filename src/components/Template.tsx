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
        <View>
          <View
            style={[
              style.section,
              {
                gap: "6pt",
                marginBottom: "12pt",
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                gap: "10%",
                maxWidth: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  display: "flex",
                  flex: 1,
                }}
              >
                <Text style={style.textName}>Shinjith P R</Text>

                <Text style={style.textPost}>
                  React & React Native Developer
                </Text>

                <Text style={style.body1}>Kasaragod, Kerala, India</Text>
                {/*    <Text style={style.body}>
                Creative and meticulous software engineer with three years
                of experience creating pixel-perfect, accessible, and
                user-focused digital experiences.  I specialize in React
                and React Native, bringing designs to life with precision and
                performance.  I thrive on creating significant products, and
                constantly pushing boundaries by learning, experimenting, and
                delivering effective solutions.
              </Text>*/}
              </View>

              {/*    <Image
              src={sdev}
              style={{ width: 100, height: 100, borderRadius: 4 }}
            />*/}
              <View
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "1pt",
                }}
              >
                <Link style={style.body1} src="mailto:shinjithdev@gmail.com">
                  shinjithdev@gmail.com
                </Link>
                <Link style={style.body1} src="tel:+918921345282">
                  +91 8921345282
                </Link>
                <Link style={style.body1} src="https://github.com/shinjith-dev">
                  github.com/shinjith-dev
                </Link>
                <Link style={style.body1} src="https://shinjith.dev">
                  shinjith.dev
                </Link>
              </View>
            </View>

            <Text style={style.body1}>
              Creative and meticulous software engineer with three years of
              experience building fast, accessible, and cross-platform apps
              using React, React Native, and Next.js. I specialize in
              translating complex UI designs into performant, production-ready
              experiences, including a temple booking platform serving 1,000+
              users and several other projects. I thrive on solving real-world
              problems with clean architecture, continuous iteration, and
              relentless curiosity.
            </Text>
          </View>

          <View
            style={[
              style.section,
              { flexDirection: "row", gap: "5%", width: "100%" },
            ]}
          >
            <View
              style={{
                flexDirection: "column",
                display: "flex",
                flexBasis: "65%",
                flexShrink: 0,
                flexGrow: 0,
                gap: "8pt",
              }}
            >
              {/* Experiences  */}
              <View style={style.section}>
                <Text style={style.heading1}>Work Experience</Text>

                <View style={{ marginBottom: "4pt" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: "2pt",
                    }}
                  >
                    <Text style={[style.heading2, { fontWeight: 400 }]}>
                      Developer ·{" "}
                    </Text>
                    <Link
                      src="https://sustainabilityeconomics.ai/"
                      style={style.heading2}
                    >
                      Sustainability Economics{"  "}
                    </Link>
                    <Text style={style.body2}>Jun 2025 — Present</Text>
                  </View>
                </View>

                <View style={{ marginBottom: "10pt" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: "2pt",
                    }}
                  >
                    <Text style={[style.heading2, { fontWeight: 400 }]}>
                      Developer ·{" "}
                    </Text>
                    <Link src="https://tequerist.com/" style={style.heading2}>
                      Tequerist Technologies{"  "}
                    </Link>
                    <Text style={style.body2}>Sept 2024 — June 2025</Text>
                  </View>
                  <View style={style.experiencePoints}>
                    <View style={style.experiencePoint}>
                      <Text style={style.body1}>•</Text>
                      <Text style={style.body1}>
                        Built and maintained a cross-platform temple booking app
                        using React Native (Expo) and Next.js, enabling
                        increased monthly bookings.
                      </Text>
                    </View>
                    <View style={style.experiencePoint}>
                      <Text style={style.body1}>•</Text>
                      <Text style={style.body1}>
                        Led development of important features like multi-day
                        booking and role-based permission restriction for Temple
                        Click Admin & Counter Staff platforms.
                      </Text>
                    </View>
                    <View style={style.experiencePoint}>
                      <Text style={style.body1}>•</Text>
                      <Text style={style.body1}>
                        Resolved high-priority issues raised by staff users,
                        improving reliability during peak hours.
                      </Text>
                    </View>
                    <View style={style.experiencePoint}>
                      <Text style={style.body1}>•</Text>
                      <Text style={style.body1}>
                        Made major contributions in upcoming product by setting
                        up a cross-platform project and building basic
                        components and cross-platform logic from scratch.
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ marginBottom: "10pt" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: "2pt",
                    }}
                  >
                    <Text style={[style.heading2, { fontWeight: 400 }]}>
                      Developer ·{" "}
                    </Text>
                    <Link src="https://www.tghtech.com/" style={style.heading2}>
                      TGH Tech{"  "}
                    </Link>
                    <Text style={style.body2}>Dec 2022 — April 2024</Text>
                  </View>
                  <View style={style.experiencePoints}>
                    <View style={style.experiencePoint}>
                      <Text style={style.body1}>•</Text>
                      <Text style={style.body1}>
                        Engineered and shipped frontend for 10+ client
                        applications ranging from startup portfolio websites to
                        e-commerce and tools using varying tech stacks and
                        libraries.
                      </Text>
                    </View>
                    <View style={style.experiencePoint}>
                      <Text style={style.body1}>•</Text>
                      <Text style={style.body1}>
                        Set up and configured various cutting-edge technologies
                        like Tanstack React Query, Zustand, Next.js, Redux.
                      </Text>
                    </View>
                    <View style={style.experiencePoint}>
                      <Text style={style.body1}>•</Text>
                      <Text style={style.body1}>
                        Collaborated closely with designers and backend teams to
                        deliver high-performance, precise UIs with best
                        performance marks.
                      </Text>
                    </View>
                    <View style={style.experiencePoint}>
                      <Text style={style.body1}>•</Text>
                      <Text style={style.body1}>
                        Mentored interns and reviewed important PRs across
                        projects.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Projects  */}
              <View style={style.section}>
                <Text style={style.heading1}>Projects</Text>
                <View style={{ marginBottom: "8pt" }}>
                  <Link
                    style={[style.heading2, { marginBottom: "4pt" }]}
                    src="https://shuffle.shinjith.dev"
                  >
                    Shuffle Glimpse
                  </Link>
                  <View style={style.experiencePoint}>
                    <Text style={style.body1}>•</Text>
                    <Text style={style.body1}>
                      Built a responsive dashboard using Spotify Web API,
                      providing insights into top artists, tracks, and recent
                      activity with a polished, Spotify-inspired UI.
                    </Text>
                  </View>
                  <View style={style.experiencePoint}>
                    <Text style={style.body1}>•</Text>
                    <Text style={style.body1}>
                      Crafted with Next.js and leveraged Zustand and TanStack
                      React Query to manage state and caching efficiently.
                      Deployed secure authentication handling using Cloudflare
                      Worker.
                    </Text>
                  </View>
                </View>

                <View style={{ marginBottom: "8pt" }}>
                  <Text style={[style.heading2, { marginBottom: "4pt" }]}>
                    Blood Donors
                  </Text>
                  <View style={style.experiencePoint}>
                    <Text style={style.body1}>•</Text>
                    <Text style={style.body1}>
                      Launched a mobile app for a regional blood donation group
                      (welfare organization) using Expo + Supabase.
                    </Text>
                  </View>
                  <View style={style.experiencePoint}>
                    <Text style={style.body1}>•</Text>
                    <Text style={style.body1}>
                      Implemented role-based dashboards for admins, improving
                      accuracy and engagement.
                    </Text>
                  </View>
                </View>

                <View style={{ marginBottom: "8pt" }}>
                  <Link
                    style={[style.heading2, { marginBottom: "4pt" }]}
                    src="https://github.com/shinjith-dev/academic-ai"
                  >
                    Academic AI
                  </Link>
                  <View style={style.experiencePoint}>
                    <Text style={style.body1}>•</Text>
                    <Text style={style.body1}>
                      Designed an AI assistant which relies on Machine Learning
                      to generate personalized study plans and tasks based on
                      student performance and syllabus.
                    </Text>
                  </View>
                  <View style={style.experiencePoint}>
                    <Text style={style.body1}>•</Text>
                    <Text style={style.body1}>
                      Used React Native (Expo) for student UI, Next.js + Mantine
                      for teacher/supervisor dashboard and Django for
                      intelligent task breakdown and prompt-based scheduling.
                    </Text>
                  </View>
                  <View style={style.experiencePoint}>
                    <Text style={style.body1}>•</Text>
                    <Text style={style.body1}>
                      Integrated Gemini AI directly into mobile to generate
                      topic insights and describe key points.
                    </Text>
                  </View>
                </View>

                <View style={{ marginBottom: "8pt" }}>
                  <Link
                    style={[style.heading2, { marginBottom: "4pt" }]}
                    src="https://pomtick.pages.dev/"
                  >
                    Pomtick
                  </Link>
                  <View style={style.experiencePoint}>
                    <Text style={style.body1}>•</Text>
                    <Text style={style.body1}>
                      Created a cross-platform Pomodoro timer using Tauri
                      (desktop) and Next.js (web).
                    </Text>
                  </View>
                  <View style={style.experiencePoint}>
                    <Text style={style.body1}>•</Text>
                    <Text style={style.body1}>
                      Packaged and released native binaries for Windows, macOS,
                      and Linux via GitHub CI/CD.
                    </Text>
                  </View>
                  <View style={style.experiencePoint}>
                    <Text style={style.body1}>•</Text>
                    <Text style={style.body1}>
                      Integrated state persistence and theming for enhanced
                      usability.
                    </Text>
                  </View>
                </View>

                {/*  <View>
                  <Link
                    style={[style.subHeading, { marginBottom: "4pt" }]}
                    src="https://shinjith.dev/"
                  >
                    shinjith.dev
                  </Link>
                  <Text style={style.body}>
                    A portfolio website developed with Next.js and Tailwindcss.
                    Designed with an appealing modern UI, smooth scrolling
                    effect, and much more.
                  </Text>
                </View>*/}
              </View>
            </View>

            <View
              style={{
                flexDirection: "column",
                display: "flex",
                flexGrow: 0,
                flexShrink: 0,
                flexWrap: "wrap",
                flexBasis: "30%",
              }}
            >
              {/* details */}
              {/* <View
                style={{ flexDirection: "column", display: "flex", gap: "3pt", marginBottom: '8pt', marginTop: '4pt' }}
              >
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
              </View>*/}

              {/* Skills  */}
              <View style={style.section}>
                <Text style={style.heading1}>Technical Skills</Text>

                <View style={{ marginBottom: "6pt" }}>
                  <Text style={style.heading2}>Programming Languages:</Text>
                  <Text style={style.body1}>
                    JavaScript, TypeScript, C, HTML, CSS, Python, Bash
                  </Text>
                </View>

                <View style={{ marginBottom: "6pt" }}>
                  <Text style={style.heading2}>Libraries & Frameworks:</Text>
                  <Text style={style.body1}>
                    React, React Native, Next.js, Expo, Eleventy, Tauri,
                    Electron, Node.js, Express, Material UI, Tailwind CSS,
                    Styled Components, Framer Motion, Bootstrap, Sentry
                  </Text>
                </View>

                <View style={{ marginBottom: "6pt" }}>
                  <Text style={style.heading2}>Tools & Platforms:</Text>
                  <Text style={style.body1}>
                    Git, GitHub, Netlify, Wordpress, Render, AWS, Cloudflare,
                    Docker, Vite, Figma
                  </Text>
                </View>

                <View>
                  <Text style={style.heading2}>
                    Additional Tools & Concepts:
                  </Text>
                  <Text style={style.body1}>
                    REST API integration, Agile/Scrum workflow, CI/CD (GitHub
                    Actions), Unit Testing, Code Quality (ESLint, Prettier),
                    Responsive Design, Accessibility (WCAG/a11y), Performance
                    Optimization (Lazy loading, bundle splitting, React
                    Optimization)
                  </Text>
                </View>
              </View>

              {/* Certifications  */}
              <View style={style.section}>
                <Text style={style.heading1}>Certifications</Text>

                <View style={{ marginBottom: "10pt", gap: "4pt" }}>
                  <Link
                    src="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-8ZXGGYFDQQ.pdf"
                    style={style.heading2}
                  >
                    Web Fundamentals Certificate
                  </Link>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "3pt",
                    }}
                  >
                    <Link src="https://tryhackme.com" style={style.body2}>
                      TryHackMe
                    </Link>
                    <Text style={style.body2}>— Dec 2024</Text>
                  </View>
                </View>

                <View style={{ gap: "4pt" }}>
                  <Link
                    src="https://courses.etrain.skillsnetwork.site/certificates/56f0812c4b2d4ce399ab0601c579ffbf"
                    style={style.heading2}
                  >
                    Angular JS Course Certificate
                  </Link>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "3pt",
                    }}
                  >
                    <Link src="https://www.ibm.com" style={style.body2}>
                      IBM
                    </Link>
                    <Text style={style.body2}>— Nov 2022</Text>
                  </View>
                </View>
              </View>

              {/* Education  */}
              <View style={style.section}>
                <Text style={style.heading1}>Education</Text>

                <View style={{ marginBottom: "10pt", gap: "2pt" }}>
                  <Text style={style.heading3}>
                    B.Tech in Computer Science & Engineering
                  </Text>
                  <Link src="https://lbscek.ac.in/" style={style.body2}>
                    LBS College of Engineering (KTU affiliated)
                  </Link>
                  <Text style={style.body3}>June 2024</Text>
                </View>

                <View style={{ gap: "2pt" }}>
                  <Text style={style.heading3}>
                    Higher Secondary (Science Stream)
                  </Text>
                  <Text style={style.body2}>
                    Jawahar Navodaya Vidyalaya, Kasaragod
                  </Text>
                  <Text style={style.body3}>April 2020</Text>
                </View>
              </View>

              {/* Soft skills */}
              {/* <View style={style.section}>
                <Text style={style.heading}>Soft Skills</Text>

                <View>
                  <Text style={[style.body, { marginBottom: "6pt" }]}>
                    Designing
                  </Text>
                  <Text style={[style.body, { marginBottom: "6pt" }]}>
                    Problem solving
                  </Text>
                  <Text style={[style.body, { marginBottom: "6pt" }]}>
                    Creative thinking
                  </Text>
                  <Text style={style.body}>Observation</Text>
                </View>
              </View>*/}

              {/* Language proficiency */}
              <View style={style.section}>
                <Text style={style.heading1}>Language Proficiency</Text>

                <View>
                  <Text style={[style.body1, { marginBottom: "6pt" }]}>
                    English
                  </Text>
                  <Text style={[style.body1, { marginBottom: "6pt" }]}>
                    Malayalam
                  </Text>
                  <Text style={style.body1}>Hindi</Text>
                </View>
              </View>

              {/* Interests */}
              <View style={style.section}>
                <Text style={style.heading1}>Interests</Text>

                <Text style={style.body1}>
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
