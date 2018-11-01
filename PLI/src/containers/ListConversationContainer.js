import React, { Component } from "react";

import { StyleSheet, Image } from 'react-native';
import { Container, View, Spinner, Footer, FooterTab, Button, Text, Icon } from "native-base";

import styles from "../themes/main-theme";
import customStyles from "./styles"

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import ListConversationComponent from '../components/ListConversationComponent'
import { getConversationList } from '../actions/conversation'


class ListConversationContainer extends Component {

    constructor(props) {
        super(props);
        if (this.props.list === undefined || this.props.list.length === 0) {
            this.props.getConversationList({ user_id: 1 })
        }
    }


    renderLoader() {
        let loaderJSX = <View></View>;
        if (this.props.loading === true) {
            loaderJSX = <View style={styles.loaderView}><Spinner /></View>;
        }

        console.log(this.props.loading);

        return loaderJSX
    }

    render() {
        console.log(this.props);
        return (
            <Container>
                {this.renderLoader()}
                <ListConversationComponent navigation={this.props.navigation} items={this.props.list !== undefined ? this.props.list : []} />
                <Footer>
                    <FooterTab>
                        <Button onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon name="user" type="Feather" />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('ListProfile')}>
                            <Icon name="list" type="Feather"/>
                        </Button>
                        <Button active>
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
        loading: state.conversation.conversationLoading,
        success: state.conversation.conversationSuccess,
        message: state.conversation.conversationMessage,
        list: state.conversation.conversationList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getConversationList: (data) => dispatch(getConversationList(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListConversationContainer);
