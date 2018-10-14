import React, { Component } from "react";

import {
    Container, Header, Title,
    Content, Button, Icon, Text, Left,
    Body, Right, View, H3, Form, InputField, Item, Input, Grid, Row, Col, List, ListItem, Thumbnail
} from "native-base";

import { StyleSheet, Image } from 'react-native';

class ProfileComponent extends Component {
    render() {
        const { params } = this.props.navigation.state;
        return (
            <Container style={{ backgroundColor: 'white', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                    <Image style={{ width: 150, height: 150 }} source={{ uri: params.image_url }}></Image>
                    <Text style={{ fontSize: 25 }}>{params.name}</Text>
                    <Text style={{ fontSize: 25 }}>{params.age}</Text>
                    <Text style={{ fontSize: 15 }}>{params.percent}</Text>
                    <Text style={{ marginVertical: 15 }}>{params.description}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                        <Button large transparent onPress={() => this.props.action({action: 'like', match_id: params.id})}>
                            <Icon type="MaterialCommunityIcons" name='heart' style={{ color: '#4bc301', fontSize: 50 }} />
                        </Button>
                        <Button large transparent onPress={() => this.props.action({action: 'dislike', match_id: params.id})}>
                            <Icon type="MaterialCommunityIcons" name='close' style={{ color: '#ed111d', fontSize: 50 }} />
                        </Button>
                    </View>
                </View>
            </Container>
        )
    }
}

export default ProfileComponent;
