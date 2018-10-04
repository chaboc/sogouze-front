import React, { Component } from "react";

import { StyleSheet, Image } from 'react-native';
import { Container, View, Spinner, Footer, FooterTab, Button, Text, Icon } from "native-base";

import styles from "../themes/main-theme";
import customStyles from "./styles"

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import ListProfileComponent from '../components/ListProfileComponent'
import { getMatchList } from '../actions/match'
import { loginSpotify } from "../actions/user";
import SpotifyAuth from 'react-native-spotify-auth';


class ListProfileContainer extends Component {

    constructor(props) {
        super(props);
        console.log('JE SUIS UNE PROPS', this.props);
        // this.props.login();
        // if (this.props.list === undefined || this.props.list.length === 0) {
        //     this.props.getMatchList({ user_id: 1 })
        // }
        let auth = new SpotifyAuth('0533bf706a274530824d90b6649e34e4', 'http://localhost:3000/spotify/get_infos');
        // console.log('AUTH => ',auth);
        // auth.startLogin();
        auth.startLogin()
            .then(
                function (data) {
                    console.log(data.token);
                },
                function (error) {
                    console.warn(error);
                }
            );
    }


    renderLoader() {
        let loaderJSX = <View></View>;
        if (this.props.loading === true) {
            loaderJSX = <View style={styles.loaderView}><Spinner /></View>;
        }
        return loaderJSX
    }

    render() {
        console.log(this.props);
        return (
            <Container>
                <ListProfileComponent navigation={this.props.navigation} items={this.props.list !== undefined ? this.props.list : []} />
                <Footer>
                    <FooterTab>
                        <Button>
                            <Icon name="user" type="Feather" />
                        </Button>
                        <Button active>
                            <Icon name="list" type="Feather" />
                        </Button>
                        <Button>
                            <Icon name="message-square" type="Feather" />
                        </Button>
                    </FooterTab>
                </Footer>
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
        login: () => dispatch(loginSpotify()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProfileContainer);
