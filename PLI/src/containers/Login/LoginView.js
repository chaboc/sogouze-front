import React, { Component } from "react";

import { Container, Header, Title,
    Content, Button, Icon, Text, Left,
    Body, Right, View, H3, Form, InputField, Item, Input, Grid, Row, Col } from "native-base";

import { StyleSheet, Image } from 'react-native';


import styles from "../../themes/main-theme";
import customStyles from "./styles"


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import Swiper from 'react-native-deck-swiper';
//import Login from 'API'

class LoginView extends Component{


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
            <Container
            style={{backgroundColor: '#ADADAD'}}>
                <Image source={require('../../../img/launchscreen-bg.png')} style={{position: 'absolute'}}/>
                <View style={customStyles.loginView}>
                    <Button rounded large info bordered iconLeft style={customStyles.linkedinButton}>
                        <View style={customStyles.innerLnkBtnView}>
                            <Icon name='linkedin-with-circle' type="Entypo" style={customStyles.lnkBtnIcon}/>
                            <Text style={customStyles.lnkBtnText} >Connexion via linkedin</Text>
                        </View>
                    </Button>
                    <View style={customStyles.textSeparatorView}>
                        <Text style={customStyles.textSeparator}>- OU -</Text>
                    </View>
                    <Form>
                        <Item rounded style={customStyles.formInput}>
                            <Input placeholder='Votre adresse mail'/>
                        </Item>
                        <Item rounded style={customStyles.formInput}>
                            <Input placeholder='Votre mot de passe'/>
                        </Item>
                    </Form>
                    <View style={customStyles.connectionBtnView}>
                        <Button rounded light>
                            <Text style={{fontSize: 15}}>CONNEXION</Text>
                        </Button>
                    </View>
                    <View style={customStyles.helperView}>
                        <View style={customStyles.helperTextView}>
                            <Text style={{color: 'white', textDecorationLine: 'underline'}} >Mot de passe oublié ?</Text>
                        </View>
                        <View style={customStyles.helperTextView}>
                            <Text style={{color: 'white', textDecorationLine: 'underline'}}>Pas encore inscrdit ?</Text>
                        </View>
                    </View>
                    <View style={customStyles.imageView}>
                        <Image source={require('../../../img/logo_white.png')} style={{width: 200, height: 100}}/>
                    </View>
                </View>
            </Container>
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
