
//Read this article
//https://david-x.medium.com/designing-tokens-in-react-what-makes-great-design-tokens-and-how-to-build-them-part-1-748cda3cc049

const colors = {
    black: "#000000",
    cinder: "#0F0E17",
    brightSun: "#FED941",
    cadetBlue: "#A7A9BE",
    white: "#FFFFFE"
};

const fontSizes = {
    titles: {
        xl: "48px",
        lg: "46px",
        md: "37px",
        sm: "28px",
        xs: "25px"
    },
    body: {
        md: "18px",
        sm: "16px"
    },
    cta: "18px",
    caption: "12px"
};

const tokens = {
    colors: {
        base: {
            ...colors
        },
        primary: colors.brightSun,
        secondary: colors.black
    },
    sizes: {
        font: {
            ...fontSizes
        },
        layout: {
            maxWidth: "1200px"
        },
        icons: {
            default: {
                width: "24px",
                height: "24px"
            }
        },
        breakpoints: {
            mobile: "600px",
            tablet: "768px",
            laptop: "992px",
            desktop: "1200px"
        }
    },
    fontFamilys: {
        montserrat: "'Montserrat', sans-serif",
        inter: "'Inter', sans-serif"
    }
};

export default tokens;