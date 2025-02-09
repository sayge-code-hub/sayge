import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
  Svg,
  Circle,
  Rect
} from "@react-pdf/renderer";

// Use built-in fonts
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'Helvetica' },
    { src: 'Helvetica-Bold', fontWeight: 'bold' }
  ]
});

// Define color palette
const colors = {
  primary: '#5B21B6',  // Deep purple
  secondary: '#FF5733', // Vibrant orange
  accent: '#F4F4F5',   // Light gray
  text: '#1F2937',     // Dark gray
  textLight: '#6B7280', // Medium gray
  white: '#FFFFFF',
  purple: {
    light: '#8B5CF6',
    dark: '#4C1D95',
  },
  orange: {
    light: '#FF8C69',
    dark: '#D03B11',
  },
};

// Define styles
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLeft: {
    flex: 1,
    paddingRight: 20,
  },
  cardRight: {
    width: '40%',
  },
  accentBox: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 8,
    marginTop: 10,
  },
  accentText: {
    color: colors.white,
    fontSize: 14,
  },
  numberBox: {
    backgroundColor: colors.primary,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  numberText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 12,
    color: colors.text,
    backgroundColor: colors.accent,
  },
  pageWithAccent: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 12,
    color: colors.text,
    backgroundColor: colors.accent,
  },
  coverPage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
  },
  coverBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  decorativeCircle: {
    position: 'absolute',
    zIndex: -1,
  },
  coverTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
  coverSubtitle: {
    fontSize: 24,
    color: '#666',
    marginBottom: 40,
  },
  header: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 15,
    letterSpacing: 0.5,
  },
  subsectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0056b3',
  },
  paragraph: {
    marginBottom: 10,
    lineHeight: 1.6,
  },
  bulletPoint: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulletIcon: {
    width: 6,
    height: 6,
    backgroundColor: colors.secondary,
    borderRadius: 3,
    marginRight: 8,
  },
  processStep: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: colors.accent,
    padding: 10,
    borderRadius: 5,
  },
  stepNumber: {
    width: 30,
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 15,
    color: colors.white,
    textAlign: 'center',
    lineHeight: 30,
    marginRight: 10,
    fontWeight: 'bold',
  },
  link: {
    color: '#0056b3',
    textDecoration: 'underline',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    color: '#666',
    fontSize: 10,
  },
  pageNumber: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 10,
    color: '#666',
  },
});

// Company Profile PDF Component
const SaygeCompanyProfile = () => (
  <Document>
    {/* Cover Page */}
    <Page style={styles.page}>
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text style={styles.sectionTitle}>Premier Tech Talent Solutions</Text>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <View style={styles.numberBox}>
              <Text style={styles.numberText}>01</Text>
            </View>
            <Text style={styles.paragraph}>Specialized in Full Stack Development</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={styles.numberBox}>
              <Text style={styles.numberText}>02</Text>
            </View>
            <Text style={styles.paragraph}>Mobile App Development Experts</Text>
          </View>
          <View style={styles.accentBox}>
            <Text style={styles.accentText}>Top Tech Talent Partner</Text>
          </View>
        </View>
        <View style={styles.cardRight}>
          {/* Image placeholder */}
          <View style={{ backgroundColor: colors.accent, height: 150, borderRadius: 8 }} />
        </View>
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </Page>

    {/* Our Process */}
    <Page style={styles.page}>
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text style={styles.sectionTitle}>Our Development Process</Text>
          <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
            <View style={[styles.accentBox, { marginTop: 0, marginRight: 15 }]}>
              <Text style={styles.accentText}>Step 01</Text>
            </View>
            <Text style={styles.paragraph}>Requirements Analysis</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
            <View style={[styles.accentBox, { marginTop: 0, marginRight: 15, backgroundColor: colors.secondary }]}>
              <Text style={styles.accentText}>Step 02</Text>
            </View>
            <Text style={styles.paragraph}>Development & Testing</Text>
          </View>
        </View>
        <View style={styles.cardRight}>
          {/* Image placeholder */}
          <View style={{ backgroundColor: colors.accent, height: 150, borderRadius: 8 }} />
        </View>
      </View>

      <View style={[styles.card, { marginTop: 20 }]}>
        <View style={styles.cardLeft}>
          <Text style={styles.sectionTitle}>Expert Development Team</Text>
          <Text style={styles.paragraph}>
            Skilled developers with expertise in React, Flutter, Node.js, and modern tech stacks.
          </Text>
          <View style={styles.accentBox}>
            <Text style={styles.accentText}>Meet Our Team</Text>
          </View>
        </View>
        <View style={styles.cardRight}>
          {/* Team image placeholder */}
          <View style={{ backgroundColor: colors.accent, height: 150, borderRadius: 8 }} />
        </View>
      </View>

      <Text style={styles.footer}>Sayge Technologies © {new Date().getFullYear()}</Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </Page>

    {/* Services and Stats */}
    <Page style={styles.page}>
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text style={styles.sectionTitle}>Full Stack Development</Text>
          <Text style={styles.paragraph}>
            End-to-end development solutions with modern technologies and best practices.
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={[styles.accentBox, { backgroundColor: colors.secondary, marginRight: 15 }]}>
              <Text style={styles.accentText}>Web Apps</Text>
              <Text style={[styles.accentText, { fontSize: 10 }]}>React & Node.js</Text>
            </View>
            <View style={styles.accentBox}>
              <Text style={styles.accentText}>Mobile</Text>
              <Text style={[styles.accentText, { fontSize: 10 }]}>Flutter & Native</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardRight}>
          {/* Image placeholder */}
          <View style={{ backgroundColor: colors.accent, height: 150, borderRadius: 8 }} />
        </View>
      </View>

      <View style={[styles.card, { marginTop: 20 }]}>
        <View style={styles.cardLeft}>
          <Text style={styles.sectionTitle}>Custom Software Solutions</Text>
          <Text style={styles.paragraph}>
            Tailored software development services to meet your specific business needs.
          </Text>
          <View style={styles.accentBox}>
            <Text style={styles.accentText}>View Success Stories</Text>
          </View>
        </View>
        <View style={styles.cardRight}>
          {/* Stats image placeholder */}
          <View style={{ backgroundColor: colors.accent, height: 150, borderRadius: 8 }} />
        </View>
      </View>

      <Text style={styles.footer}>Sayge Technologies © {new Date().getFullYear()}</Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </Page>

    {/* Specialist Services */}
    <Page style={styles.page}>
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text style={styles.sectionTitle}>Mobile App Development</Text>
          <Text style={styles.paragraph}>
            Cross-platform and native mobile application development.
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <View style={[styles.accentBox, { marginRight: 10 }]}>
              <Text style={styles.accentText}>Flutter</Text>
            </View>
            <View style={[styles.accentBox, { backgroundColor: colors.secondary }]}>
              <Text style={styles.accentText}>Native Apps</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardRight}>
          {/* Professional image placeholder */}
          <View style={{ backgroundColor: colors.accent, height: 150, borderRadius: 8 }} />
        </View>
      </View>

      <View style={[styles.card, { marginTop: 20 }]}>
        <View style={styles.cardLeft}>
          <Text style={styles.sectionTitle}>Technology Stack</Text>
          <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.accentText}>Frontend</Text>
              <Text style={[styles.paragraph, { fontSize: 16, color: colors.primary }]}>React & Flutter</Text>
            </View>
            <View>
              <Text style={styles.accentText}>Backend</Text>
              <Text style={[styles.paragraph, { fontSize: 16, color: colors.secondary }]}>Node.js & Firebase</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardRight}>
          {/* Business metrics visualization placeholder */}
          <View style={{ backgroundColor: colors.accent, height: 150, borderRadius: 8 }} />
        </View>
      </View>

      <Text style={styles.footer}>Sayge Technologies © {new Date().getFullYear()}</Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </Page>

    {/* Call to Action */}
    <Page style={styles.page}>
      <View style={styles.coverPage}>
        <Text style={[styles.sectionTitle, { textAlign: 'center' }]}>Let's Build Something Great Together</Text>
        <Text style={[styles.paragraph, { textAlign: 'center', marginTop: 20 }]}>
          Ready to transform your tech hiring experience? Contact us today to discuss how we can help you achieve your goals.
        </Text>
        <Text style={[styles.paragraph, { textAlign: 'center', marginTop: 20, color: '#0056b3', fontSize: 16 }]}>
          Contact us at:
        </Text>
        <Link style={[styles.paragraph, styles.link, { textAlign: 'center' }]} src="mailto:contact@sayge.tech">
          contact@sayge.tech
        </Link>
        <Text style={[styles.paragraph, { textAlign: 'center', marginTop: 10, fontSize: 14 }]}>
          +1 (555) 123-4567
        </Text>
      </View>

      <Text style={styles.footer}>Sayge Technologies © {new Date().getFullYear()}</Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </Page>
  </Document>
);

export default SaygeCompanyProfile;
