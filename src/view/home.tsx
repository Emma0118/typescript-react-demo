import * as React from 'react';
const logo = require('../logo.svg');
import { connect } from 'react-redux';

const Title = () => <h1>Hello</h1>

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
        <div>
            <Title />
            <h2>welcome {this.props.state.name}</h2>
            <img src={logo} style={{ width:200 }} alt=""/>
        </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return { state: state }
}

export default connect(
  mapStateToProps,
)(Home)