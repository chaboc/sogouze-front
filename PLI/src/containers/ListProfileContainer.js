import React, { Component } from "react";

import { StyleSheet, Image, Text } from 'react-native';
import { Container, View, Spinner } from "native-base";

import styles from "../themes/main-theme";
import customStyles from "./styles"

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import ListProfileComponent from '../components/ListProfileComponent'
import { getMatchList } from '../actions/match'

class ListProfileContainer extends Component{

    constructor(props){
       super(props);
       console.log('JE SUIS UNE PROPS', this.props);
       if (this.props.list === undefined || this.props.list.length === 0) {
        this.props.getMatchList({user_id: 1})
       }
    }

    renderLoader() {
        let loaderJSX = <View></View>;
        if(this.props.loading === true){
            loaderJSX = <View style={styles.loaderView}><Spinner/></View>;
        }
        return loaderJSX
    }

    render(){
        console.log(this.props);
        return(
            <Container>
                <ListProfileComponent navigation={this.props.navigation} items={this.props.list !== undefined ? this.props.list : []}/>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
            loading: state.match.matchLoading,
            success: state.match.matchSuccess,
            message: state.match.matchMessage,
            list: state.match.matchList,
        };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMatchList: (data) => dispatch(getMatchList(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProfileContainer);
