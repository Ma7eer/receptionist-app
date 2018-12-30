import {withRouter} from 'next/router'
import Layout from '../components/Layout'
// import Layout from '../components/Header'
import Header from '../components/Header';

const About = withRouter((props) => (
    <Layout>
      <Header />
       <h1>{props.router.query.title}</h1>
       <p>This is the blog post content.</p>
    </Layout>
))

export default About