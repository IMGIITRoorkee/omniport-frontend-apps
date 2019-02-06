import React from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Grid, Container, Placeholder, Segment } from 'semantic-ui-react'

import CustomBreadcrumb from 'core/common/src/components/custom-breadcrumb'
import { Tiles } from 'formula_one'
import { setAppList } from '../actions'

import main from 'formula_one/src/css/app.css'

class App extends React.PureComponent {
  componentDidMount () {
    this.props.SetAppList()
  }
  render () {
    const { appList } = this.props
    return (
      <Scrollbars autoHide>
        <Container>
          <CustomBreadcrumb list={[{ name: 'Apps' }]} />

          {appList.isLoaded ? (
            <Tiles
              tiles={appList.data.map(app => {
                return {
                  name: app.nomenclature.verboseName,
                  desc: <span>{app.description}</span>,
                  link: app.baseUrl,
                  iconName: 'cube',
                  imageUrl:
                    app.assets &&
                    `/static/${app.baseUrls.static}${app.assets &&
                      app.assets.logo}`
                }
              })}
            />
          ) : (
            <Grid columns={3} stackable doubling>
              {[...Array(6)].map((item, index) => {
                return (
                  <Grid.Column key={index}>
                    <Segment>
                      <Placeholder>
                        <Placeholder.Header image>
                          <Placeholder.Line />
                          <Placeholder.Line />
                        </Placeholder.Header>
                      </Placeholder>
                    </Segment>
                  </Grid.Column>
                )
              })}
            </Grid>
          )}
        </Container>
      </Scrollbars>
    )
  }
}

function mapStateToProps (state) {
  return {
    appList: state.appList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    SetAppList: () => {
      dispatch(setAppList())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
