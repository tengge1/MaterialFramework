import {
    defaultFont,
    primaryColor,
    defaultBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    primaryBoxShadow
} from "variables/styles";

const headerStyle = theme => ({
    root: {
        flexGrow: 1
    },
    appBar: {
        height: "36px",
        color: "#fff"
    },
    toolbar: {
        minHeight: "36px"
    },
    logo: {
        flex: 1,
        cursor: "default",
        userSelect: 'none'
    },
    img: {
        width: "35px",
        verticalAlign: "middle"
    },
    title: {
        fontSize: "1.15rem",
        fontWeight: "normal"
    },
    links: {
        width: "24px",
        height: "24px"
    },
    popperClose: {
        pointerEvents: "none"
    },
    badge: {
        cursor: "pointer"
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
