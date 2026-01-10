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
    }
});