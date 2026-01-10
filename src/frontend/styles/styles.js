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
    }
});