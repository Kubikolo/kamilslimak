import { StyleSheet } from "react-native";
import { StyleColors } from "./colors";

export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },

    profileContainer: {
        flex: 1,
    },

    profileHeaderText: {
        fontSize: 30,
        fontWeight: 800
    },

    profileHeader: {
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        justifyContent: 'space-between'
    },

    profileBody: {
        padding: 16,
    },

    profileButton: {
        backgroundColor: StyleColors.accent,
        justifyContent: 'center',
        alignItems: 'center',
    },

    profileOption: {
        flexDirection: "row",
        padding: 10,
        alignItems: 'center',
        marginBottom: 30
    },

    profileOptionText: {
        fontSize: 20,
        fontWeight: 500,
        marginLeft: 20
    },

    profileOptionIcon: {
        color: "black",
        size: 60
    },

    signUpContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },

    signUpHeaderText: {
        fontSize: 30,
        fontWeight: 800
    },

    signUpInputContainer: {
        height: '12%',
        width: '80%',
        justifyContent: 'center'
    },

    signUpInputText: {
        fontSize: 22,
        fontWeight: 400,
        marginLeft: 0
    },

    signUpInputBox: {
        fontSize: 20,
        fontWeight: 300,
        marginLeft: 0
    },

    signUpInputBoxText: {
        fontSize: 20,
        fontWeight: 300,
        marginLeft: 0,
        borderWidth: 2,
        borderRadius: 7,
    },

    signUpBoxContainer: {
        height: '12%',
        width: '80%',
        justifyContent: 'center',
    },

    signUpButton: {
        height: '50%',
        backgroundColor: "#077fe9",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 7,
        fontSize: 20,
        fontWeight: 500,
        
    },

    signUpButtonText: {
        fontSize: 20,
        fontWeight: 500,        
    },

    signUpLinkContainer: {
        height: '12%',
        width: '80%',
        alignItems: 'center',
    },

    signUpLinkContainerText: {
        fontSize: 20,
        fontWeight: 300,
        paddingBottom: 10
    },

    signUpLink: {
        fontSize: 20,
        fontWeight: 500,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#080a9f",
    },

    logInContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
    },

    logInHeaderText: {
        fontSize: 30,
        fontWeight: 800
    },

    logInInputContainer: {
        height: '12%',
        width: '80%',
        justifyContent: 'center'
    },

    logInInputText: {
        fontSize: 22,
        fontWeight: 400,
        marginLeft: 0
    },

    logInInputBox: {
        fontSize: 20,
        fontWeight: 300,
        marginLeft: 0
    },

    logInInputBoxText: {
        fontSize: 20,
        fontWeight: 300,
        marginLeft: 0,
        borderWidth: 2,
        borderRadius: 7,
    },

    logInBoxContainer: {
        height: '12%',
        width: '80%',
        justifyContent: 'center',
    },

    logInButton: {
        height: '50%',
        backgroundColor: "#077fe9",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 7,
        fontSize: 20,
        fontWeight: 500,
    },

    logInButtonText: {
        fontSize: 20,
        fontWeight: 500,        
    },

    logInLinkContainer: {
        height: '12%',
        width: '80%',
        alignItems: 'center',
    },

    logInLinkContainerText: {
        fontSize: 20,
        fontWeight: 300,
        paddingBottom: 10
    },

    logInLink: {
        fontSize: 20,
        fontWeight: 500,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#080a9f",
    },

});