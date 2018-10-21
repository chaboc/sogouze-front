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


class ListProfileContainer extends Component {

    constructor(props) {
        super(props);
        if (this.props.list === undefined || this.props.list.length === 0) {
            this.props.getMatchList({ user_id: 1 })
        }
        
        this.socket = SocketIOClient('172.21.36.1:8000'); // replace 'environment.serverUrl' with your server url
        this.socket.connect();
        this.socket.on('connect', () => {
            console.log('Wahey -> connected!');
            this.socket.emit('chan', {data: 'je ssuis une data'}); // emits 'hi server' to your server
        });

        // // Listens to channel2 and display the data recieved
        // this.socket.on('channel2', (data) => {
        //     console.log('Data recieved from server', data); //this will console 'channel 2'
        // });
    }


    renderLoader() {
        let loaderJSX = <View></View>;
        if (this.props.loading === true) {
            loaderJSX = <View style={styles.loaderView}><Spinner /></View>;
        }
        return loaderJSX
    }

    render() {
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
