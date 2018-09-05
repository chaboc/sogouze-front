import React, { Component } from "react";

import { StyleSheet, Image } from 'react-native';

import styles from "../themes/main-theme";
import customStyles from "./styles"

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import ProfileComponent from '../components/ProfileComponent.js'

class ProfileContainer extends Component{

    render(){
        return(
          <ProfileComponent navigation={this.props.navigation}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
