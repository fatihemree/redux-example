import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavbarComp from '../components/Navbar'
import { Page } from '../assets/styled'
import NoteCard from '../components/NoteCard'
import NoteAdd from '../components/NoteAdd'
import { Space } from 'antd'

export class Home extends Component {
    static propTypes = {
        prop: PropTypes.object.isRequired
    }

    render() {
        return (
            <>
                <NavbarComp title='Google Keep' />
                <Page>
                <NoteAdd></NoteAdd>
                <NoteCard></NoteCard>
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
