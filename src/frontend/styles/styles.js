import { StyleSheet } from "react-native";
import { StyleColors } from "./colors";
import OfferBody from "../components/offers/OfferBody";

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

    homeSearch: {
        height: 60,
        fontSize: 10
    },

    businessCardCategory: {
        marginTop: 10,
    },
    
    businessCardCategoryTitle: {
        fontSize: 20,
        fontWeight: 600,
        marginLeft: 10
    },

    businessCardContainer: {
        padding: 10,
        flexGrow: 0
    },

    businessCard: {
        height: 200,
        backgroundColor: "#fff",       // Card background
        borderRadius: 16,              // Rounded corners
        padding: 16,                   // Inner spacing
        shadowColor: "#000",           // iOS shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,                  // Android shadow
        width: 250
    },

    businessCardWrapper: {
        marginRight: 12, // spacing between cards
    },

    businessTextContainer: {
        width: "100%",
        backgroundColor: "#E5E5E5", // light gray
        paddingVertical: 8,          // vertical padding for text
        paddingHorizontal: 12,       // horizontal padding
    },

    businessText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },

    // Image below text
    businessCardImage: {
        width: "100%",
        height: "100%", // will fill remaining space
        flex: 1,        // fills rest of card below text strip
    },

    homeContainer: {
        flex: 1,
        padding: 15
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
        fontWeight: 600,
        marginLeft: 10
    },

    businessCardContainer: {
        padding: 10,
        flexGrow: 0
    },

    businessCard: {
        height: 200,
        backgroundColor: "#fff",       // Card background
        borderRadius: 16,              // Rounded corners
        padding: 16,                   // Inner spacing
        shadowColor: "#000",           // iOS shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,                  // Android shadow
        width: 250
    },

    businessCardWrapper: {
        marginRight: 12, // spacing between cards
    },

    businessText: {

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
    activateButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    confirmationModalBody: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#57575780',
        padding: 24,
    },

    confirmationModalTitle: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 500,
    },

    confirmationModalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    confirmationModalText: {
        textAlign: 'center',
        paddingVertical: 10,
    },
});