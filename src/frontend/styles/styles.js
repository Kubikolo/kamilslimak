import { StyleSheet } from "react-native";
import { StyleColors } from "./colors";
import OfferBody from "../components/offers/OfferBody";

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
        textAlign: 'center',
        padding: 16
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