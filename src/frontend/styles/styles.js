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

    qrContainer: {
        flex: 1,
    },

    qrHeaderText: {
        fontSize: 30,
        fontWeight: 800,
    },

    qrHeader: {
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        justifyContent: 'center'
    },

    qrCode: {
        alignItems: "center",
        padding: 16,
        justifyContent: 'center'
    },

    qrBody: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    qrText: {
        textAlign: 'center'
    },

    businessContainer: {
        flex: 1,
    },

    businessHeaderText: {
        fontSize: 30,
        fontWeight: 800,
    },

    businessHeader: {
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        justifyContent: 'center'
    },

    businessCode: {
        alignItems: "center",
        padding: 16,
        justifyContent: 'center'
    },

    businessBody: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    businessText: {
        textAlign: 'center'
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

    signUpTermsOfServiceContainer: {
        height: '6%',
        width: '80%',
        alignItems: 'center',
    },

    signUpTermsOfServiceContainerText: {
        fontSize: 17,
        fontWeight: 300,

    },

    signUpTermsOfServiceLink: {
        fontSize: 17,
        fontWeight: 300,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#080a9f",
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

    termsOfServiceContainer: { 
        flex: 1,
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center' 
    },

    termsOfServiceHeader: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center', 
    },

    termsOfServiceHeaderText: {
        fontSize: 30,
        fontWeight: 800,
    },

    termsOfServiceText: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
        fontWeight: 300,
    },

    termsOfServiceLinkContainer: {
        alignItems: 'center',
        justifyContent: 'center', 
    },

    termsOfServiceLink: {
        paddingBottom: 40,
        paddingTop: 20,
        fontSize: 20,
        fontWeight: 500,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#080a9f",
    },



});