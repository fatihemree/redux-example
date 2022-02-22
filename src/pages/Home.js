import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavbarComp from '../components/Navbar'
import { Page } from '../assets/styled'

export class Home extends Component {
    static propTypes = {
        prop: PropTypes.object.isRequired
    }

    render() {
        return (
            <>
                <NavbarComp title='Home' />
                <Page>
                    home
                </Page >
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
