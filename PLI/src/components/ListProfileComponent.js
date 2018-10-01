import React, { Component } from "react";

import { Container, Header, Title,
    Content, Button, Icon, Text, Left,
    Body, Right, View, H3, Form, InputField, Item, Input, Grid, Row, Col, List, ListItem, Thumbnail } from "native-base";

import { StyleSheet, Image } from 'react-native';

class ListProfileComponent extends Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    render(){
        console.log(this.props.items);
        const { navigate } = this.props.navigation;
        return(
            <Container style={{backgroundColor: 'white'}}>
                <Content>
                    <Text>fadfsfasdsdfsdfa</Text>
                    <List dataArray={this.props.items} renderRow={(item) =>
                        <ListItem avatar>
                          <Left>
                            <Thumbnail source={{ uri: item.image_url }} />
                          </Left>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.percent}</Text>
                          </Body>
                          <Right>
                            <Button small onPress={() => navigate('Profile', {...item})}>
                              <Text>Profil</Text>
                            </Button>
                          </Right>
                        </ListItem>
                    }>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default ListProfileComponent;
