import React, { Component } from "react";

import {
    Container, Header, Title,
    Content, Button, Icon, Text, Left,
    Body, Right, View, H3, Form, InputField, Item, Input, Grid, Row, Col, List, ListItem, Thumbnail
} from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import { StyleSheet, Image } from 'react-native';

class ProfileComponent extends Component {
    render() {
        console.log('Item =>', this.props.navigation.state);
        const { params } = this.props.navigation.state;
        return (
            <Container style={{ backgroundColor: 'white', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <LinearGradient colors={['#FF8466', 'white']} style={{ flex: 1, marginTop: 0, alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                            <Image style={{ width: 150, height: 150, borderRadius: 100, marginRight: 10 }} source={{ uri: params.user.img }}></Image>
                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 10 }}>
                                <Text style={{ fontSize: 25, color: 'white' }}>{params.user.display_name}</Text>
                                <Text style={{ fontSize: 25, color: 'white' }}>{params.user.age}</Text>
                            </View>
                        </View>
                        <View style={{marginTop: 15, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Progress.Bar progress={parseInt(params.pourcentage) / 100} indeterminate={false} color={'#49B7BC'} width={280} height={8} />
                            <Text style={{ fontSize: 15, }}>{params.pourcentage}</Text>
                        </View>
                    </LinearGradient>
                    <Text style={{ marginHorizontal: 15, marginVertical: 8 }}>{params.user.desc}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                        <Button large transparent onPress={() => this.props.action({ action: 'like', user_id: params.userId, match_id: params.matchingId })}>
                            <Icon type="MaterialCommunityIcons" name='heart' style={{ color: '#4bc301', fontSize: 50 }} />
                        </Button>
                        <Button large transparent onPress={() => this.props.action({ action: 'dislike', user_id: params.userId, match_id: params.matchingId })}>
                            <Icon type="MaterialCommunityIcons" name='close' style={{ color: '#ed111d', fontSize: 50 }} />
                        </Button>
                    </View>
                </View>
            </Container >
        )
    }
}

export default ProfileComponent;
