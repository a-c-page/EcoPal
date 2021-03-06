import { StyleSheet, Dimensions } from "react-native";
import colours from "./Colours";
import Colours from "./Colours";

export default StyleSheet.create({
    // SPLASH SCREEN
    background: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colours.main,
    },
    logoImage: {
        width: 250,
        resizeMode: "contain",
    },
    logoImageView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    // MAIN MENU
    header: {
        position: "absolute",
        backgroundColor: Colours.main,
        top: 0,
        bottom: Dimensions.get("screen").height - 190,
        left: 0,
        right: 0,
        zIndex: 5,
        alignItems: "center",
    },
    headerLogo: {
        resizeMode: "contain",
        height: 100,
        width: 100,
        marginTop: 25,
    },
    headerBell: {
        marginLeft: 270,
        marginTop: -65,
    },
    homeMainContainer: {
        paddingTop: 160,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    menuItemTouchableOpacity: {
        alignItems: "center",
        paddingVertical: 10,
    },
    menuItemMainView: {
        width: Dimensions.get("screen").width - 50,
        height: 150,
        resizeMode: "cover",
        backgroundColor: colours.white,
        borderRadius: 20,
        shadowColor: colours.black,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    menuItemText: {
        color: colours.white,
        fontWeight: "bold",
        alignContent: "center",
        fontSize: 24,
        paddingLeft: 20,
        paddingTop: 20,
        shadowColor: colours.black,
        shadowOffset: { width: 2, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
    },
    menuItemImage: {
        height: 150,
        width: Dimensions.get("screen").width - 50,
        resizeMode: "cover",
        position: "absolute",
        top: 0,
        left: 0,
    },
    menuItemImageView: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: Dimensions.get("screen").width - 50,
        height: 100,
        overflow: "hidden",
        borderRadius: 20,
    },
});
