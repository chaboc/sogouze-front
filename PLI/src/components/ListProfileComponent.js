import React, { Component } from "react";

import {
    Container, Header, Title,
    Content, Button, Icon, Text, Left,
    Body, Right, View, H3, Form, InputField, Item, Input, Grid, Row, Col, List, ListItem, Thumbnail
} from "native-base";

import { StyleSheet, Image } from 'react-native';

class ListProfileComponent extends Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    renderEmptyList() {
        if (this.props.items !== undefined && this.props.items.length == 0) {
            return (
                <Text>Vous avez aucun matchs.</Text>
            );
        }

        return;
    }

    render() {
        console.log('ITEMS =>', this.props.items);
        const { navigate } = this.props.navigation;
        return (
            <Container style={{ backgroundColor: 'white' }}>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onEndEditing={(value) => console.log('CHANGE', value)} />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    {this.renderEmptyList()}
                    <List dataArray={this.props.items} renderRow={(item) =>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: item.user.img }} />
                            </Left>
                            <Body>
                                <Text>{item.user.display_name}</Text>
                                <Text note>{item.pourcentage}%</Text>
                            </Body>
                            <Right>
                                <Button small onPress={() => navigate('Profile', { ...item })} style={styles.profileButton}>
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


const styles = StyleSheet.create({
    profileButton: { marginTop: 5 },
})