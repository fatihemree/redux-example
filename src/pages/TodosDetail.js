import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Page } from '../assets/styled'
import { changeMoney } from '../store/actions'
import NavbarComp from '../components/Navbar'

export class TodosDetail extends Component {
    static propTypes = {
        prop: PropTypes.object.isRequired
    }

    render() {
        return (
            <>
            <NavbarComp title='Todos Detail' />
            <Page>
            </Page>
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
changeMoney
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosDetail)
