import React, { Component } from "react";

import { StyleSheet, Image } from 'react-native';
import { Toast, Alert } from "native-base";

import styles from "../themes/main-theme";
import customStyles from "./styles"

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import ProfileComponent from '../components/ProfileComponent.js'
import { actionMatch } from '../actions/match'

class ProfileContainer extends Component{

    profileAction = (action) => {
        this.props.actionMatch(action);
        this.props.navigation.navigate('ListProfile');
    }

    render(){
        return(
          <ProfileComponent action={this.profileAction} navigation={this.props.navigation}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionMatch: (data) => dispatch(actionMatch(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
