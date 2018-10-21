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
import SocketIOClient from 'socket.io-client';


class LoginContainer extends Component {

    constructor(props) {
        super(props);
        console.log('BUILDING');
        this.setState({

        });
        this.state = { auth: new SpotifyAuth('0533bf706a274530824d90b6649e34e4', 'http://172.21.36.1:8000/spotify/get_infos') };


        // auth.startLogin()
        //     .then(
        //         function (data) {
        //             console.log(data.token);
        //         },
        //         function (error) {
        //             console.warn(error);
        //         }
        //     );
    }

    spotifyConnect() {
        this.state.auth.startLogin().then(
            function (data) {
                if (data.token !== undefined) {
                    props.navigation.navigate('ListProfile');
                }
            },
            function (error) {
                console.warn('ERREUR =>', error);
            }
        );
    }

    render() {
        return (
            <Container>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Button onPress={() => this.spotifyConnect()}>
                        <Text>Se connecter à Spotify</Text>
                    </Button>
                </View>
                <Footer>
                    <FooterTab>
                        <Button active>
                            <Icon name="user" type="Feather" />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('ListProfile')}>
                            <Icon name="list" type="Feather" />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('ListConversation')}>
                            <Icon name="message-square" type="Feather" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);