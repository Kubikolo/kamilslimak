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
    }
});