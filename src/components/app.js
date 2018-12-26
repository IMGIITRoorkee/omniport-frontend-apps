import React from 'react'
import { connect } from 'react-redux'
import { isMobile, isBrowser } from 'react-device-detect'
import { Scrollbars } from 'react-custom-scrollbars'

import Sidebar from 'core/common/src/components/primary-sidebar'
import { AppHeader, AppFooter, AppMain, Tiles } from 'formula_one'
import { setAppList } from '../actions'

import main from 'formula_one/src/css/app.css'

class App extends React.PureComponent {
  componentDidMount () {
    this.props.SetAppList()
  }
  render () {
    const { match, appList } = this.props
    const creators = [
      {
        name: 'Dhruv Bhanushali',
        role: 'Backend Developer',
        link: 'https://dhruvkb.github.io/'
      },
      {
        name: 'Praduman Goyal',
        role: 'Frontend Developer',
        link: 'https://pradumangoyal.github.io'
      }
    ]
    return (
      <React.Fragment>
        <div styleName='app'>
          <AppHeader mode='site' appName='apps' userDropdown />
          {isMobile && <Sidebar />}
          <AppMain>
            <div styleName='main.app-main'>
              {isBrowser && <Sidebar />}
              <Scrollbars autoHide>
                <Tiles
                  tile={
                    appList.isLoaded
                      ? appList.data.map(app => {
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
                      })
                      : []
                  }
                />
              </Scrollbars>
            </div>
          </AppMain>
          <AppFooter creators={creators} />
        </div>
      </React.Fragment>
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
