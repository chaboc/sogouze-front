import React, { Component } from "react";

import { StyleSheet, Image } from 'react-native';

import styles from "../../themes/main-theme";
import customStyles from "./styles"

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import LoginView from '../components/Login/LoginView'
//import Login from 'API'

class LoginContainer extends Component{


    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {
            formData:{
                username: "",
                password: ""
            },
            loading: false,
            message: null,
        }
    }


    handleFormChange(formData){
        this.setState({formData:formData})
        this.props.onFormChange && this.props.onFormChange(formData);
    }

    pressButton() {
        const username = this.state.formData.username
        const password = this.state.formData.password
        this.setState({ loading: true, message: null })

        this.props.login({ username }).then((complete) => {
            this.setState({ loading: false })
            if(complete) {
                this.props.navigation.dispatch(NavigationActions.reset({
                    index : 0,
                    actions : [
                        NavigationActions.navigate({ routeName: "Main" })
                    ]
                }))
            }
            else this.props.navigation.navigate("Register", { username })
        }, (message) => {
            this.setState({ loading: false, message })
        })
    }

    renderMessage() {
        let message = this.state.message
        let messageJSX = <View></View>;
        if(message !== null){
            messageJSX =
                <View>
                    <Text>Test</Text>
                </View>;
        }
        return messageJSX;
    }


    renderLoader() {
        let loaderJSX = <View></View>;
        if(this.state.loading){
            loaderJSX = <View style={{marginTop: 20}}><Text>Chargement en cours</Text></View>;
        }
        return loaderJSX
    }

//                    <Image source={} style={styles.imageContainer} />
    render(){
        return(
          <LoginView/>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username) => dispatch(login(username)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
