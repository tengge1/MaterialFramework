import {primaryColor} from "variables/styles";

const headerStyle = theme => ({
    root: {
        flexGrow: 1
    },
    appBar: {
        height: "44px",
        color: "#fff",
        boxShadow: 'none'
    },
    toolbar: {
        minHeight: "44px"
    },
    logo: {
        flex: 1,
        cursor: "default",
        userSelect: 'none'
    },
    img: {
        width: "35px",
        verticalAlign: "middle",
        marginRight: "5px"
    },
    userBtn: {
        width: "24px",
        height: "24px",
        marginRight: "20px"
    },
    logoutBtn: {
        width: "24px",
        height: "24px"
    },
    badge: {
        cursor: "pointer",
        marginRight: "20px"
    },
    badgeBadge: {
        top: "-6px",
        right: "-6px",
        width: "16px",
        height: "16px"
    },
    dropdownItem: {
        fontSize: "12px",
        whiteSpace: "nowrap",
        "&:hover": {
            backgroundColor: primaryColor,
            color: "#FFFFFF"
        }
    }
});

export default headerStyle;
