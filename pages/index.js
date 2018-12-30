import { Button, Card, Elevation, FormGroup, InputGroup } from "@blueprintjs/core";
import Header from '../components/Header'
// import '@blueprintjs/core/lib/css/blueprint.css'
// import 'normalize.css/normalize.css'
import Layout from '../components/Layout'
import Link from 'next/link'

class Index extends React.Component  {
  state = {
    myTitle: 'some book'
  }
  render() {
    return (
      <Layout>
    <Header />
    <div className="app" style={{width: '40%'}}>
        <Card interactive={true} elevation={Elevation.TWO}>
        <h1>Book Info Form</h1>
          <FormGroup
          label="Book Title"
          labelFor="text-input"
          labelInfo="(required)">
            <InputGroup id="text-input" placeholder="Title" name="title" />
          </FormGroup>
          <FormGroup 
          label="Author"
          labelFor="text-input"
          labelInfo="(required)">
            <InputGroup id="text-input" placeholder="Author name" />
          </FormGroup>
          <FormGroup
          label="Publication Year"
          labelFor="text-input"
          labelInfo="(required)">
            <InputGroup id="text-input" placeholder="Year" />
          </FormGroup>
          <FormGroup
          label="Image URL"
          labelFor="text-input"
          labelInfo="(required)">
            <InputGroup id="text-input" placeholder="URL" />
          </FormGroup>
          <Link href={`/about?title=${this.state.myTitle}`}>
            <Button className="bp3-intent-primary">Submit</Button>
          </Link>
        </Card>
      </div>

  </Layout>
    )
  }
}

export default Index