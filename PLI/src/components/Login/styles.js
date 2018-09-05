const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
    loginView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 5,
        marginLeft: 5,
    },
    linkedinButton: {
    color: '#02AAD7',
    borderWidth: 3
    },
    innerLnkBtnView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lnkBtnIcon: {
        fontSize: 57,
        color: 'white',
        marginLeft: 1
    },
    lnkBtnText: {
        color: 'white',
        flex: 1,
        paddingRight: 40,
        textAlign: 'center',
        fontSize: 22
    },
    textSeparatorView: {
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textSeparator: {
        color: '#fff',
        fontSize: 27
    },
    connectionBtnView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 10,
    },
    helperView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 25,
    },
    helperTextView: {
        backgroundColor: '#347DAD',
        borderRadius: 7,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    imageView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    formInput: {
        paddingVertical: 5,
        paddingHorizontal: 7,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#fff',
        color: '#ADADAD'
    },
    content: {
        flex: 1
    },
    imageContainer: {
        position: "absolute",
    },
    logoContainer: {
        flex: 1,
        marginTop: deviceHeight / 8,
        marginBottom: 30,
    },
    logo: {
        position: "absolute",
        left: Platform.OS === "android" ? 40 : 50,
        top: Platform.OS === "android" ? 35 : 60,
        width: 280,
        height: 100,
    },
    text: {
        color: "#D8D8D8",
        bottom: 6,
        marginTop: 5
    }
};
