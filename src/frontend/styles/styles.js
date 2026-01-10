import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
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