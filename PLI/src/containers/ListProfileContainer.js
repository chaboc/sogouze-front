import React, { Component } from "react";

import { StyleSheet, Image } from 'react-native';

import styles from "../themes/main-theme";
import customStyles from "./styles"

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import ListProfileComponent from '../components/ListProfileComponent'
//import Login from 'API'

class ListProfileContainer extends Component{

    render(){
        var items = [
              {'name': 'Nathaniel Clyne', 'age': '23 ans', 'percent': '98%','image_url': 'https://www.ville.chateauguay.qc.ca/sites/default/files/evenement/Alexandre_Barette.jpg?1337179429', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem augue, faucibus eget lectus vitae, elementum molestie ipsum. Curabitur sodales mi eu orci dictum egestas. Suspendisse ornare finibus nisi id aliquam. Pellentesque ac dui sagittis arcu sodales dictum vitae at augue. Nullam mattis nibh sit amet dolor rutrum, eget tempor leo varius. Vivamus iaculis aliquam porttitor. Cras scelerisque condimentum elementum. Pellentesque vitae ligula ut odio commodo eleifend. Nam suscipit erat ac quam ultricies vehicula. Quisque et nisi purus. Quisque et pharetra urna, non dictum justo.'},
              {'name': 'Jean Beauford', 'age': '32 ans', 'percent': '88%','image_url': 'http://forma4competences.fr/wp-content/uploads/2016/07/gestion-agressivite-light.jpg', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem augue, faucibus eget lectus vitae, elementum molestie ipsum. Curabitur sodales mi eu orci dictum egestas. Suspendisse ornare finibus nisi id aliquam. Pellentesque ac dui sagittis arcu sodales dictum vitae at augue. Nullam mattis nibh sit amet dolor rutrum, eget tempor leo varius. Vivamus iaculis aliquam porttitor. Cras scelerisque condimentum elementum. Pellentesque vitae ligula ut odio commodo eleifend. Nam suscipit erat ac quam ultricies vehicula. Quisque et nisi purus. Quisque et pharetra urna, non dictum justo.'},
              {'name': 'Dejan Lovren', 'age': '64 ans', 'percent': '75%','image_url': 'https://static.ladepeche.fr/content/media/image/zoom/2015/12/22/201512222045-full.jpg', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem augue, faucibus eget lectus vitae, elementum molestie ipsum. Curabitur sodales mi eu orci dictum egestas. Suspendisse ornare finibus nisi id aliquam. Pellentesque ac dui sagittis arcu sodales dictum vitae at augue. Nullam mattis nibh sit amet dolor rutrum, eget tempor leo varius. Vivamus iaculis aliquam porttitor. Cras scelerisque condimentum elementum. Pellentesque vitae ligula ut odio commodo eleifend. Nam suscipit erat ac quam ultricies vehicula. Quisque et nisi purus. Quisque et pharetra urna, non dictum justo.'},
              {'name': 'Mama Sakho', 'age': '18 ans', 'percent': '69%','image_url': 'http://images.lpcdn.ca/924x615/201612/08/1313755-tout-indique-avocate-tamara-thermitus.jpg', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem augue, faucibus eget lectus vitae, elementum molestie ipsum. Curabitur sodales mi eu orci dictum egestas. Suspendisse ornare finibus nisi id aliquam. Pellentesque ac dui sagittis arcu sodales dictum vitae at augue. Nullam mattis nibh sit amet dolor rutrum, eget tempor leo varius. Vivamus iaculis aliquam porttitor. Cras scelerisque condimentum elementum. Pellentesque vitae ligula ut odio commodo eleifend. Nam suscipit erat ac quam ultricies vehicula. Quisque et nisi purus. Quisque et pharetra urna, non dictum justo.'},
              {'name': 'Emre Can', 'age': '45 ans', 'percent': '56%','image_url': 'https://chine.in/fun/asiats/images/1achinois.jpg', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem augue, faucibus eget lectus vitae, elementum molestie ipsum. Curabitur sodales mi eu orci dictum egestas. Suspendisse ornare finibus nisi id aliquam. Pellentesque ac dui sagittis arcu sodales dictum vitae at augue. Nullam mattis nibh sit amet dolor rutrum, eget tempor leo varius. Vivamus iaculis aliquam porttitor. Cras scelerisque condimentum elementum. Pellentesque vitae ligula ut odio commodo eleifend. Nam suscipit erat ac quam ultricies vehicula. Quisque et nisi purus. Quisque et pharetra urna, non dictum justo.'},
            ];
        return(
          <ListProfileComponent navigation={this.props.navigation} items={items}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMatchList: () => dispatch(getMatchList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProfileContainer);
