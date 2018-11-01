import React, { Component } from "react";

import { StyleSheet, Image } from 'react-native';
import { Container, View, Spinner, Footer, FooterTab, Button, Text, Icon, Thumbnail } from "native-base";

import styles from "../themes/main-theme";
import customStyles from "./styles"

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import ListProfileComponent from '../components/ListProfileComponent'
import { getUser } from "../actions/user";
import SpotifyAuth from 'react-native-spotify-auth';
import SocketIOClient from 'socket.io-client';


class LoginContainer extends Component {

    constructor(props) {
        super(props);
        console.log('BUILDING', this.props.user);
        this.setState({

        });
        this.state = { auth: new SpotifyAuth('0533bf706a274530824d90b6649e34e4', 'http://172.16.248.3:3000/spotify/get_infos') };

        this.props.getUser({ user_id: 1 });
        new SpotifyAuth('0533bf706a274530824d90b6649e34e4', 'http://172.16.248.3:3000/spotify/get_infos').startLogin()
            .then(
                function (data) {
                    console.log(data.token);
                },
                function (error) {
                    console.warn(error);
                }
            );
        console.log('USER =>', this.props.user)
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

    renderGenre() {
        if (this.props.user.user && this.props.user.user.genre) {
            return (
                <Text style={{ marginVertical: 5, color: '#49B7BC', fontSize: 18 }}>Genre: Femme</Text>
            );
        }
        return (
            <Text style={{ marginVertical: 5, color: '#49B7BC', fontSize: 18 }}>Genre: Homme</Text>
        )
    }

    render() {
        console.log('RENDER USER =>', this.props.user);
        stylesList = [];
        if (this.props.user.user && this.props.user.user.genres) {
            stylesList = this.props.user.user.genres.map(genre => (
                <Text style={{ marginVertical: 5, color: '#49B7BC', fontSize: 18 }}>{genre.name}</Text>
            ));
        }

        return (
            <Container style={{ backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'column', }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 25, color: '#FF8466' }}>Mes Informations</Text>
                        <Text style={{ fontSize: 22, color: '#FF8466' }}>Générales</Text>
                        <Text style={{ marginVertical: 5, color: '#49B7BC', fontSize: 18 }}>Nom : {this.props.user.user != null ? this.props.user.user.display_name : 'Chargement'}</Text>
                        <Text style={{ marginVertical: 5, color: '#49B7BC', fontSize: 18 }}>Âge : {this.props.user.user != null ? this.props.user.user.age : 'Chargement'}</Text>
                        <Text style={{ marginVertical: 5, color: '#49B7BC', fontSize: 18 }}>Email : {this.props.user.user != null ? this.props.user.user.email : 'Chargement'} </Text>
                        {this.renderGenre()}
                        <Text style={{ fontSize: 22, color: '#FF8466' }}>Mes styles musicaux</Text>
                        <View style={{ marginTop: 15, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            {stylesList}
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
    console.log(state);
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (data) => dispatch(getUser(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);