import '@blueprintjs/core/lib/css/blueprint.css'
import 'normalize.css/normalize.css'

const Layout = (props) => (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '40px'}}>
      {props.children}
    </div>
)

export default Layout