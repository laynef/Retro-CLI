module.exports = [
    "alignItems",
    "alignSelf",
    "backfaceVisibility",
    "backgroundColor",
    "borderBottomColor",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderBottomWidth",
    "borderColor",
    "borderLeftColor",
    "borderLeftWidth",
    "borderRadius",
    "borderRightColor",
    "borderRightWidth",
    "borderStyle",
    "borderTopColor",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderTopWidth",
    "borderWidth",
    "bottom",
    "color",
    "elevation",
    "flex",
    "flexDirection",
    "flexWrap",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontWeight",
    "height",
    "includeFontPadding",
    "justifyContent",
    "left",
    "letterSpacing",
    "lineHeight",
    "margin",
    "marginBottom",
    "marginHorizontal",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginVertical",
    "maxHeight",
    "maxLength",
    "maxWidth",
    "minHeight",
    "minWidth",
    "opacity",
    "overflow",
    "overlayColor",
    "padding",
    "paddingBottom",
    "paddingHorizontal",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "paddingVertical",
    "position",
    "resizeMode",
    "right",
    "shadowColor",
    "shadowOpacity",
    "shadowRadius",
    "textAlign",
    "textAlignVertical",
    "textDecorationColor",
    "textDecorationLine",
    "textDecorationStyle",
    "textShadowColor",
    "textShadowRadius",
    "tintColor",
    "transform",
    "top",
    "width",
    "writingDirection",
    "zIndex",
].reduce((acc, item) => {
    acc[item] = item;
    return acc;
}, {});
