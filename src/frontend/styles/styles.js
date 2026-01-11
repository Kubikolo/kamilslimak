import { StyleSheet } from "react-native";
import { StyleColors } from "./colors";


export const styles = StyleSheet.create({
      container: { 
        
        flex: 1, 
        
        justifyContent: 'center', 
        
        alignItems: 'center' 
    
    },

    homeContainer: {
        flex: 1,
        padding: 15
    },

    homeHeader: {
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        justifyContent: 'center'
    },

    homeSearch: {
        height: 60,
        fontSize: 10
    },

    businessCardCategory: {
        marginTop: 10,
    },
    
    businessCardCategoryTitle: {
        fontSize: 20,
        fontWeight: 600
    },

    businessCardContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        flexGrow: 0
    },

    businessCardNotInCategory: {
        height: 200,
        backgroundColor: "#fff",       // Card background
        borderRadius: 16,              // Rounded corners
        shadowColor: "#000",           // iOS shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,                  // Android shadow
        overflow: "hidden",
        marginTop: 20
    },

    businessCardInCategory: {
        height: 150,
        backgroundColor: "#fff",       // Card background
        borderRadius: 16,              // Rounded corners
        shadowColor: "#000",           // iOS shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,                  // Android shadow
        width: 250,
        overflow: "hidden"
    },

    businessCardWrapper: {
        marginRight: 12, // spacing between cards
    },

    businessTextContainer: {
        width: "100%",
        backgroundColor: "#E5E5E5", // light gray
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    businessCardText: {
        fontSize: 16,
        fontWeight: 600,
        color: "#000",
    },

    // Image below text
    businessCardImage: {
        width: "100%",
        height: "100%", // will fill remaining space
        flex: 1,        // fills rest of card below text strip
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
        alignItems: 'center',
        alignSelf: 'center',
        padding: 16,
        justifyContent: 'center',
        backgroundColor: '#d7d7d7ff',
        borderRadius: 10,
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

    signUpHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

        width: '80%',
        alignItems: 'center',
        paddingTop: 10
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



    businessListContainer: {
        flex: 1,
        padding: 16
    },

    offerBody: {
        backgroundColor: '#d7d7d7ff',
        marginBottom: 10,
        borderRadius: 10,
    },

    offerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    offerText: {
        fontSize: 15,
        fontWeight: 500,
        padding: 10,
        marginHorizontal: 10,
    },

    activateButton: {
        marginTop: 12,
        backgroundColor: '#6200ee',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
    },

    deleteButton: {
        marginTop: 12,
        backgroundColor: StyleColors.accent,
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
    },

    addButton: {
        backgroundColor: '#d7d7d7ff',
        borderRadius: 6,
        alignItems: 'center',
        alignSelf: 'center'
    },

    addButtonText: {
        fontSize: 15,
        fontWeight: 500,
        padding: 10,
        marginHorizontal: 5,
    },
    
    activateButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    modalContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#57575780',
        padding: 24,
    },
    
    modalBody: {
        backgroundColor: '#fff',
        width: '80%',
        padding: 24,
        borderRadius: 8,
    },

    modalTitle: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 500,
    },

    modalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    modalText: {
        textAlign: 'center',
        paddingVertical: 10,
    },

    modalTextInput: {
        height: 40,
        marginVertical: 12,
    },

    businessSignUpScreenScrollContainer: { 
        flex: 1,
        width: '100%',
    },

    businessSignUpInputContainer: {
        width: '80%',
        paddingTop: 20,

    },

    businessSignUpBoxContainer: {
        height: 150,
        width: '80%',
        justifyContent: 'center',
        alignContent: 'center',
    },

    businessSignUpLinkContainer: {

        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    businessSignUpLinkContainerText: {
        fontSize: 20,
        fontWeight: 300,
        paddingBottom: 10
    },

    businessSignUpLink: {
        fontSize: 20,
        fontWeight: 500,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#080a9f",
        paddingBottom: 20
    },

    businessSignUpLinkBottom: {
        fontSize: 20,
        fontWeight: 500,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#080a9f",
        paddingBottom: 100
    },

    businessBox: {
        width: '100%',

        alignItems: 'center',

    },

    businessSignUpContent: {
        alignItems: 'center',
        paddingBottom: 40,
    },

    businessSignUpHeader: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    businessSignUpScreenScrollContainer: { 
        flex: 1,
        width: '100%',
    },

    businessSignUpInputContainer: {
        width: '80%',
        paddingTop: 20,

    },

    businessSignUpBoxContainer: {
        height: 150,
        width: '80%',
        justifyContent: 'center',
        alignContent: 'center',
    },

    businessSignUpLinkContainer: {

        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    businessSignUpLinkContainerText: {
        fontSize: 20,
        fontWeight: 300,
        paddingBottom: 10
    },

    businessSignUpLink: {
        fontSize: 20,
        fontWeight: 500,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#080a9f",
        paddingBottom: 20
    },

    businessSignUpLinkBottom: {
        fontSize: 20,
        fontWeight: 500,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#080a9f",
        paddingBottom: 100
    },

    businessBox: {
        width: '100%',

        alignItems: 'center',

    },

    businessSignUpContent: {
        alignItems: 'center',
        paddingBottom: 40,
    },

    businessSignUpHeader: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});