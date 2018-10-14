import React, { Component } from "react";

import {
    Container, Header, Title,
    Content, Button, Icon, Text, Left,
    Body, Right, View, H3, Form, InputField, Item, Input, Grid, Row, Col, List, ListItem, Thumbnail
} from "native-base";

import { StyleSheet, Image } from 'react-native';

class ListConversationComponent extends Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        console.log(this.props.items);
        const { navigate } = this.props.navigation;
        return (
            <Container style={{ backgroundColor: 'white' }}>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    <List dataArray={this.props.items} renderRow={(item) =>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: item.image_url }} />
                            </Left>
                            <Body>
                                <Text>{item.name}</Text>
                                <Text note numberOfLines={2}>{item.last_message}</Text>
                            </Body>
                        </ListItem>
                    }>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default ListConversationComponent;


const styles = StyleSheet.create({
    profileButton: { marginTop: 5 },
})