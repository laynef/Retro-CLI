module.exports = {
    "children": {
        ":root": {
            "children": {},
            "attributes": {
                "--blue": "#007bff",
                "--indigo": "#6610f2",
                "--purple": "#6f42c1",
                "--pink": "#e83e8c",
                "--red": "#dc3545",
                "--orange": "#fd7e14",
                "--yellow": "#ffc107",
                "--green": "#28a745",
                "--teal": "#20c997",
                "--cyan": "#17a2b8",
                "--white": "#fff",
                "--gray": "#6c757d",
                "--gray-dark": "#343a40",
                "--primary": "#007bff",
                "--secondary": "#6c757d",
                "--success": "#28a745",
                "--info": "#17a2b8",
                "--warning": "#ffc107",
                "--danger": "#dc3545",
                "--light": "#f8f9fa",
                "--dark": "#343a40",
                "--breakpoint-xs": "0",
                "--breakpoint-sm": "576px",
                "--breakpoint-md": "768px",
                "--breakpoint-lg": "992px",
                "--breakpoint-xl": "1200px",
                "--font-family-sans-serif": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
                "--font-family-monospace": "SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace"
            }
        },
        "*,\n  *::before,\n  *::after": {
            "children": {},
            "attributes": {
                "box-sizing": "border-box"
            }
        },
        "html": {
            "children": {},
            "attributes": {
                "font-family": "sans-serif",
                "line-height": "1.15",
                "-webkit-text-size-adjust": "100%",
                "-ms-text-size-adjust": "100%",
                "-ms-overflow-style": "scrollbar",
                "-webkit-tap-highlight-color": "transparent"
            }
        },
        "@-ms-viewport": {
            "children": {},
            "attributes": {
                "width": "device-width"
            }
        },
        "article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section": {
            "children": {},
            "attributes": {
                "display": "block"
            }
        },
        "body": {
            "children": {},
            "attributes": {
                "margin": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
                "font-size": "1rem",
                "font-weight": "400",
                "line-height": "1.5",
                "color": "#212529",
                "text-align": "left",
                "background-color": "#fff"
            }
        },
        "[tabindex=\"-1\"]:focus": {
            "children": {},
            "attributes": {
                "outline": "0 !important"
            }
        },
        "hr": {
            "children": {},
            "attributes": {
                "box-sizing": "content-box",
                "height": "0",
                "overflow": "visible",
                "margin-top": "1rem",
                "margin-bottom": "1rem",
                "border": "0",
                "border-top": "1px solid rgba(0, 0, 0, 0.1)"
            }
        },
        "h1, h2, h3, h4, h5, h6": {
            "children": {},
            "attributes": {
                "margin-top": "0",
                "margin-bottom": "0.5rem"
            }
        },
        "p": {
            "children": {},
            "attributes": {
                "margin-top": "0",
                "margin-bottom": "1rem"
            }
        },
        "abbr[title],\n  abbr[data-original-title]": {
            "children": {},
            "attributes": {
                "text-decoration": [
                    "underline",
                    "underline dotted"
                ],
                "-webkit-text-decoration": "underline dotted",
                "cursor": "help",
                "border-bottom": "0"
            }
        },
        "address": {
            "children": {},
            "attributes": {
                "margin-bottom": "1rem",
                "font-style": "normal",
                "line-height": "inherit"
            }
        },
        "ol,\n  ul,\n  dl": {
            "children": {},
            "attributes": {
                "margin-top": "0",
                "margin-bottom": "1rem"
            }
        },
        "ol ol,\n  ul ul,\n  ol ul,\n  ul ol": {
            "children": {},
            "attributes": {
                "margin-bottom": "0"
            }
        },
        "dt": {
            "children": {},
            "attributes": {
                "font-weight": "700"
            }
        },
        "dd": {
            "children": {},
            "attributes": {
                "margin-bottom": ".5rem",
                "margin-left": "0"
            }
        },
        "blockquote": {
            "children": {},
            "attributes": {
                "margin": "0 0 1rem"
            }
        },
        "dfn": {
            "children": {},
            "attributes": {
                "font-style": "italic"
            }
        },
        "b,\n  strong": {
            "children": {},
            "attributes": {
                "font-weight": "bolder"
            }
        },
        "small": {
            "children": {},
            "attributes": {
                "font-size": "80%"
            }
        },
        "sub,\n  sup": {
            "children": {},
            "attributes": {
                "position": "relative",
                "font-size": "75%",
                "line-height": "0",
                "vertical-align": "baseline"
            }
        },
        "sub": {
            "children": {},
            "attributes": {
                "bottom": "-.25em"
            }
        },
        "sup": {
            "children": {},
            "attributes": {
                "top": "-.5em"
            }
        },
        "a": {
            "children": {},
            "attributes": {
                "color": "#007bff",
                "text-decoration": "none",
                "background-color": "transparent",
                "-webkit-text-decoration-skip": "objects"
            }
        },
        "a:hover": {
            "children": {},
            "attributes": {
                "color": "#0056b3",
                "text-decoration": "underline"
            }
        },
        "a:not([href]):not([tabindex])": {
            "children": {},
            "attributes": {
                "color": "inherit",
                "text-decoration": "none"
            }
        },
        "a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus": {
            "children": {},
            "attributes": {
                "color": "inherit",
                "text-decoration": "none"
            }
        },
        "a:not([href]):not([tabindex]):focus": {
            "children": {},
            "attributes": {
                "outline": "0"
            }
        },
        "pre,\n  code,\n  kbd,\n  samp": {
            "children": {},
            "attributes": {
                "font-family": "monospace, monospace",
                "font-size": "1em"
            }
        },
        "pre": {
            "children": {},
            "attributes": {
                "margin-top": "0",
                "margin-bottom": "1rem",
                "overflow": "auto",
                "-ms-overflow-style": "scrollbar",
                "display": "block",
                "font-size": "87.5%",
                "color": "#212529"
            }
        },
        "figure": {
            "children": {},
            "attributes": {
                "margin": "0 0 1rem"
            }
        },
        "img": {
            "children": {},
            "attributes": {
                "vertical-align": "middle",
                "border-style": "none"
            }
        },
        "svg:not(:root)": {
            "children": {},
            "attributes": {
                "overflow": "hidden"
            }
        },
        "table": {
            "children": {},
            "attributes": {
                "border-collapse": "collapse"
            }
        },
        "caption": {
            "children": {},
            "attributes": {
                "padding-top": "0.75rem",
                "padding-bottom": "0.75rem",
                "color": "#6c757d",
                "text-align": "left",
                "caption-side": "bottom"
            }
        },
        "th": {
            "children": {},
            "attributes": {
                "text-align": "inherit"
            }
        },
        "label": {
            "children": {},
            "attributes": {
                "display": "inline-block",
                "margin-bottom": ".5rem"
            }
        },
        "button": {
            "children": {},
            "attributes": {
                "border-radius": "0"
            }
        },
        "button:focus": {
            "children": {},
            "attributes": {
                "outline": [
                    "1px dotted",
                    "5px auto -webkit-focus-ring-color"
                ]
            }
        },
        "input,\n  button,\n  select,\n  optgroup,\n  textarea": {
            "children": {},
            "attributes": {
                "margin": "0",
                "font-family": "inherit",
                "font-size": "inherit",
                "line-height": "inherit"
            }
        },
        "button,\n  input": {
            "children": {},
            "attributes": {
                "overflow": "visible"
            }
        },
        "button,\n  select": {
            "children": {},
            "attributes": {
                "text-transform": "none"
            }
        },
        "button,\n  html [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"]": {
            "children": {},
            "attributes": {
                "-webkit-appearance": "button"
            }
        },
        "button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner": {
            "children": {},
            "attributes": {
                "padding": "0",
                "border-style": "none"
            }
        },
        "input[type=\"radio\"],\n  input[type=\"checkbox\"]": {
            "children": {},
            "attributes": {
                "box-sizing": "border-box",
                "padding": "0"
            }
        },
        "input[type=\"date\"],\n  input[type=\"time\"],\n  input[type=\"datetime-local\"],\n  input[type=\"month\"]": {
            "children": {},
            "attributes": {
                "-webkit-appearance": "listbox"
            }
        },
        "textarea": {
            "children": {},
            "attributes": {
                "overflow": "auto",
                "resize": "vertical"
            }
        },
        "fieldset": {
            "children": {},
            "attributes": {
                "min-width": "0",
                "padding": "0",
                "margin": "0",
                "border": "0"
            }
        },
        "legend": {
            "children": {},
            "attributes": {
                "display": "block",
                "width": "100%",
                "max-width": "100%",
                "padding": "0",
                "margin-bottom": ".5rem",
                "font-size": "1.5rem",
                "line-height": "inherit",
                "color": "inherit",
                "white-space": "normal"
            }
        },
        "progress": {
            "children": {},
            "attributes": {
                "vertical-align": "baseline"
            }
        },
        "[type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button": {
            "children": {},
            "attributes": {
                "height": "auto"
            }
        },
        "[type=\"search\"]": {
            "children": {},
            "attributes": {
                "outline-offset": "-2px",
                "-webkit-appearance": "none"
            }
        },
        "[type=\"search\"]::-webkit-search-cancel-button,\n  [type=\"search\"]::-webkit-search-decoration": {
            "children": {},
            "attributes": {
                "-webkit-appearance": "none"
            }
        },
        "::-webkit-file-upload-button": {
            "children": {},
            "attributes": {
                "font": "inherit",
                "-webkit-appearance": "button"
            }
        },
        "output": {
            "children": {},
            "attributes": {
                "display": "inline-block"
            }
        },
        "summary": {
            "children": {},
            "attributes": {
                "display": "list-item",
                "cursor": "pointer"
            }
        },
        "template": {
            "children": {},
            "attributes": {
                "display": "none"
            }
        },
        "[hidden]": {
            "children": {},
            "attributes": {
                "display": "none !important"
            }
        },
        "h1, h2, h3, h4, h5, h6,\n  .h1, .h2, .h3, .h4, .h5, .h6": {
            "children": {},
            "attributes": {
                "margin-bottom": "0.5rem",
                "font-family": "inherit",
                "font-weight": "500",
                "line-height": "1.2",
                "color": "inherit"
            }
        },
        "h1, .h1": {
            "children": {},
            "attributes": {
                "font-size": "2.5rem"
            }
        },
        "h2, .h2": {
            "children": {},
            "attributes": {
                "font-size": "2rem"
            }
        },
        "h3, .h3": {
            "children": {},
            "attributes": {
                "font-size": "1.75rem"
            }
        },
        "h4, .h4": {
            "children": {},
            "attributes": {
                "font-size": "1.5rem"
            }
        },
        "h5, .h5": {
            "children": {},
            "attributes": {
                "font-size": "1.25rem"
            }
        },
        "h6, .h6": {
            "children": {},
            "attributes": {
                "font-size": "1rem"
            }
        },
        ".lead": {
            "children": {},
            "attributes": {
                "font-size": "1.25rem",
                "font-weight": "300"
            }
        },
        ".display-1": {
            "children": {},
            "attributes": {
                "font-size": "6rem",
                "font-weight": "300",
                "line-height": "1.2"
            }
        },
        ".display-2": {
            "children": {},
            "attributes": {
                "font-size": "5.5rem",
                "font-weight": "300",
                "line-height": "1.2"
            }
        },
        ".display-3": {
            "children": {},
            "attributes": {
                "font-size": "4.5rem",
                "font-weight": "300",
                "line-height": "1.2"
            }
        },
        ".display-4": {
            "children": {},
            "attributes": {
                "font-size": "3.5rem",
                "font-weight": "300",
                "line-height": "1.2"
            }
        },
        "small,\n  .small": {
            "children": {},
            "attributes": {
                "font-size": "80%",
                "font-weight": "400"
            }
        },
        "mark,\n  .mark": {
            "children": {},
            "attributes": {
                "padding": "0.2em",
                "background-color": "#fcf8e3"
            }
        },
        ".list-unstyled": {
            "children": {},
            "attributes": {
                "padding-left": "0",
                "list-style": "none"
            }
        },
        ".list-inline": {
            "children": {},
            "attributes": {
                "padding-left": "0",
                "list-style": "none"
            }
        },
        ".list-inline-item": {
            "children": {},
            "attributes": {
                "display": "inline-block"
            }
        },
        ".list-inline-item:not(:last-child)": {
            "children": {},
            "attributes": {
                "margin-right": "0.5rem"
            }
        },
        ".initialism": {
            "children": {},
            "attributes": {
                "font-size": "90%",
                "text-transform": "uppercase"
            }
        },
        ".blockquote": {
            "children": {},
            "attributes": {
                "margin-bottom": "1rem",
                "font-size": "1.25rem"
            }
        },
        ".blockquote-footer": {
            "children": {},
            "attributes": {
                "display": "block",
                "font-size": "80%",
                "color": "#6c757d"
            }
        },
        ".blockquote-footer::before": {
            "children": {},
            "attributes": {
                "content": "\"\\2014 \\00A0\""
            }
        },
        ".img-fluid": {
            "children": {},
            "attributes": {
                "max-width": "100%",
                "height": "auto"
            }
        },
        ".img-thumbnail": {
            "children": {},
            "attributes": {
                "padding": "0.25rem",
                "background-color": "#fff",
                "border": "1px solid #dee2e6",
                "border-radius": "0.25rem",
                "max-width": "100%",
                "height": "auto"
            }
        },
        ".figure": {
            "children": {},
            "attributes": {
                "display": "inline-block"
            }
        },
        ".figure-img": {
            "children": {},
            "attributes": {
                "margin-bottom": "0.5rem",
                "line-height": "1"
            }
        },
        ".figure-caption": {
            "children": {},
            "attributes": {
                "font-size": "90%",
                "color": "#6c757d"
            }
        },
        "code,\n  kbd,\n  pre,\n  samp": {
            "children": {},
            "attributes": {
                "font-family": "SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace"
            }
        },
        "code": {
            "children": {},
            "attributes": {
                "font-size": "87.5%",
                "color": "#e83e8c",
                "word-break": "break-word"
            }
        },
        "a > code": {
            "children": {},
            "attributes": {
                "color": "inherit"
            }
        },
        "kbd": {
            "children": {},
            "attributes": {
                "padding": "0.2rem 0.4rem",
                "font-size": "87.5%",
                "color": "#fff",
                "background-color": "#212529",
                "border-radius": "0.2rem"
            }
        },
        "kbd kbd": {
            "children": {},
            "attributes": {
                "padding": "0",
                "font-size": "100%",
                "font-weight": "700"
            }
        },
        "pre code": {
            "children": {},
            "attributes": {
                "font-size": "inherit",
                "color": "inherit",
                "word-break": "normal"
            }
        },
        ".pre-scrollable": {
            "children": {},
            "attributes": {
                "max-height": "340px",
                "overflow-y": "scroll"
            }
        },
        ".container": {
            "children": {},
            "attributes": {
                "width": "100%",
                "padding-right": "15px",
                "padding-left": "15px",
                "margin-right": "auto",
                "margin-left": "auto"
            }
        },
        "@media (min-width: 576px)": {
            "children": {
                ".container": {
                    "children": {},
                    "attributes": {
                        "max-width": "540px"
                    }
                }
            },
            "attributes": {}
        },
        "@media (min-width: 768px)": {
            "children": {
                ".container": {
                    "children": {},
                    "attributes": {
                        "max-width": "720px"
                    }
                }
            },
            "attributes": {}
        },
        "@media (min-width: 992px)": {
            "children": {
                ".container": {
                    "children": {},
                    "attributes": {
                        "max-width": "960px"
                    }
                }
            },
            "attributes": {}
        },
        "@media (min-width: 1200px)": {
            "children": {
                ".container": {
                    "children": {},
                    "attributes": {
                        "max-width": "1140px"
                    }
                }
            },
            "attributes": {}
        },
        ".container-fluid": {
            "children": {},
            "attributes": {
                "width": "100%",
                "padding-right": "15px",
                "padding-left": "15px",
                "margin-right": "auto",
                "margin-left": "auto"
            }
        },
        ".row": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-ms-flex-wrap": "wrap",
                "flex-wrap": "wrap",
                "margin-right": "-15px",
                "margin-left": "-15px"
            }
        },
        ".no-gutters": {
            "children": {},
            "attributes": {
                "margin-right": "0",
                "margin-left": "0"
            }
        },
        ".no-gutters > .col,\n  .no-gutters > [class*=\"col-\"]": {
            "children": {},
            "attributes": {
                "padding-right": "0",
                "padding-left": "0"
            }
        },
        ".col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n  .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n  .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n  .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n  .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n  .col-xl-auto": {
            "children": {},
            "attributes": {
                "position": "relative",
                "width": "100%",
                "min-height": "1px",
                "padding-right": "15px",
                "padding-left": "15px"
            }
        },
        ".col": {
            "children": {},
            "attributes": {
                "-ms-flex-preferred-size": "0",
                "flex-basis": "0",
                "-webkit-box-flex": "1",
                "-ms-flex-positive": "1",
                "flex-grow": "1",
                "max-width": "100%"
            }
        },
        ".col-auto": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "0",
                "-ms-flex": "0 0 auto",
                "flex": "0 0 auto",
                "width": "auto",
                "max-width": "none"
            }
        },
        ".col-1": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "0",
                "-ms-flex": "0 0 8.333333%",
                "flex": "0 0 8.333333%",
                "max-width": "8.333333%"
            }
        },
        ".col-2": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "0",
                "-ms-flex": "0 0 16.666667%",
                "flex": "0 0 16.666667%",
                "max-width": "16.666667%"
            }
        },
        ".col-3": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "0",
                "-ms-flex": "0 0 25%",
                "flex": "0 0 25%",
                "max-width": "25%"
            }
        },
        ".col-4": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "0",
                "-ms-flex": "0 0 33.333333%",
                "flex": "0 0 33.333333%",
                "max-width": "33.333333%"
            }
        },
        ".col-5": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "0",
                "-ms-flex": "0 0 41.666667%",
                "flex": "0 0 41.666667%",
                "max-width": "41.666667%"
            }
        },
        ".col-6": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "0",
                "-ms-flex": "0 0 50%",
                "flex": "0 0 50%",
                "max-width": "50%"
            }
        },
        ".col-7": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "0",
                "-ms-flex": "0 0 58.333333%",
                "flex": "0 0 58.333333%",
                "max-width": "58.333333%"
            }
        },
        ".col-8": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "0",
                "-ms-flex": "0 0 66.666667%",
                "flex": "0 0 66.666667%",
                "max-width": "66.666667%"
            }
        },
        ".col-9": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "0",
                "-ms-flex": "0 0 75%",
                "flex": "0 0 75%",
                "max-width": "75%"
            }
        },
        ".col-10": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "0",
                "-ms-flex": "0 0 83.333333%",
                "flex": "0 0 83.333333%",
                "max-width": "83.333333%"
            }
        },
        ".col-11": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "0",
                "-ms-flex": "0 0 91.666667%",
                "flex": "0 0 91.666667%",
                "max-width": "91.666667%"
            }
        },
        ".col-12": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "0",
                "-ms-flex": "0 0 100%",
                "flex": "0 0 100%",
                "max-width": "100%"
            }
        },
        ".order-first": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "0",
                "-ms-flex-order": "-1",
                "order": "-1"
            }
        },
        ".order-last": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "14",
                "-ms-flex-order": "13",
                "order": "13"
            }
        },
        ".order-0": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "1",
                "-ms-flex-order": "0",
                "order": "0"
            }
        },
        ".order-1": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "2",
                "-ms-flex-order": "1",
                "order": "1"
            }
        },
        ".order-2": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "3",
                "-ms-flex-order": "2",
                "order": "2"
            }
        },
        ".order-3": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "4",
                "-ms-flex-order": "3",
                "order": "3"
            }
        },
        ".order-4": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "5",
                "-ms-flex-order": "4",
                "order": "4"
            }
        },
        ".order-5": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "6",
                "-ms-flex-order": "5",
                "order": "5"
            }
        },
        ".order-6": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "7",
                "-ms-flex-order": "6",
                "order": "6"
            }
        },
        ".order-7": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "8",
                "-ms-flex-order": "7",
                "order": "7"
            }
        },
        ".order-8": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "9",
                "-ms-flex-order": "8",
                "order": "8"
            }
        },
        ".order-9": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "10",
                "-ms-flex-order": "9",
                "order": "9"
            }
        },
        ".order-10": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "11",
                "-ms-flex-order": "10",
                "order": "10"
            }
        },
        ".order-11": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "12",
                "-ms-flex-order": "11",
                "order": "11"
            }
        },
        ".order-12": {
            "children": {},
            "attributes": {
                "-webkit-box-ordinal-group": "13",
                "-ms-flex-order": "12",
                "order": "12"
            }
        },
        ".offset-1": {
            "children": {},
            "attributes": {
                "margin-left": "8.333333%"
            }
        },
        ".offset-2": {
            "children": {},
            "attributes": {
                "margin-left": "16.666667%"
            }
        },
        ".offset-3": {
            "children": {},
            "attributes": {
                "margin-left": "25%"
            }
        },
        ".offset-4": {
            "children": {},
            "attributes": {
                "margin-left": "33.333333%"
            }
        },
        ".offset-5": {
            "children": {},
            "attributes": {
                "margin-left": "41.666667%"
            }
        },
        ".offset-6": {
            "children": {},
            "attributes": {
                "margin-left": "50%"
            }
        },
        ".offset-7": {
            "children": {},
            "attributes": {
                "margin-left": "58.333333%"
            }
        },
        ".offset-8": {
            "children": {},
            "attributes": {
                "margin-left": "66.666667%"
            }
        },
        ".offset-9": {
            "children": {},
            "attributes": {
                "margin-left": "75%"
            }
        },
        ".offset-10": {
            "children": {},
            "attributes": {
                "margin-left": "83.333333%"
            }
        },
        ".offset-11": {
            "children": {},
            "attributes": {
                "margin-left": "91.666667%"
            }
        },
        ".table": {
            "children": {},
            "attributes": {
                "width": "100%",
                "max-width": "100%",
                "margin-bottom": "1rem",
                "background-color": "transparent"
            }
        },
        ".table th,\n  .table td": {
            "children": {},
            "attributes": {
                "padding": "0.75rem",
                "vertical-align": "top",
                "border-top": "1px solid #dee2e6"
            }
        },
        ".table thead th": {
            "children": {},
            "attributes": {
                "vertical-align": "bottom",
                "border-bottom": "2px solid #dee2e6"
            }
        },
        ".table tbody + tbody": {
            "children": {},
            "attributes": {
                "border-top": "2px solid #dee2e6"
            }
        },
        ".table .table": {
            "children": {},
            "attributes": {
                "background-color": "#fff"
            }
        },
        ".table-sm th,\n  .table-sm td": {
            "children": {},
            "attributes": {
                "padding": "0.3rem"
            }
        },
        ".table-bordered": {
            "children": {},
            "attributes": {
                "border": "1px solid #dee2e6"
            }
        },
        ".table-bordered th,\n  .table-bordered td": {
            "children": {},
            "attributes": {
                "border": "1px solid #dee2e6"
            }
        },
        ".table-bordered thead th,\n  .table-bordered thead td": {
            "children": {},
            "attributes": {
                "border-bottom-width": "2px"
            }
        },
        ".table-striped tbody tr:nth-of-type(odd)": {
            "children": {},
            "attributes": {
                "background-color": "rgba(0, 0, 0, 0.05)"
            }
        },
        ".table-hover tbody tr:hover": {
            "children": {},
            "attributes": {
                "background-color": "rgba(0, 0, 0, 0.075)"
            }
        },
        ".table-primary,\n  .table-primary > th,\n  .table-primary > td": {
            "children": {},
            "attributes": {
                "background-color": "#b8daff"
            }
        },
        ".table-hover .table-primary:hover": {
            "children": {},
            "attributes": {
                "background-color": "#9fcdff"
            }
        },
        ".table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th": {
            "children": {},
            "attributes": {
                "background-color": "#9fcdff"
            }
        },
        ".table-secondary,\n  .table-secondary > th,\n  .table-secondary > td": {
            "children": {},
            "attributes": {
                "background-color": "#d6d8db"
            }
        },
        ".table-hover .table-secondary:hover": {
            "children": {},
            "attributes": {
                "background-color": "#c8cbcf"
            }
        },
        ".table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th": {
            "children": {},
            "attributes": {
                "background-color": "#c8cbcf"
            }
        },
        ".table-success,\n  .table-success > th,\n  .table-success > td": {
            "children": {},
            "attributes": {
                "background-color": "#c3e6cb"
            }
        },
        ".table-hover .table-success:hover": {
            "children": {},
            "attributes": {
                "background-color": "#b1dfbb"
            }
        },
        ".table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th": {
            "children": {},
            "attributes": {
                "background-color": "#b1dfbb"
            }
        },
        ".table-info,\n  .table-info > th,\n  .table-info > td": {
            "children": {},
            "attributes": {
                "background-color": "#bee5eb"
            }
        },
        ".table-hover .table-info:hover": {
            "children": {},
            "attributes": {
                "background-color": "#abdde5"
            }
        },
        ".table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th": {
            "children": {},
            "attributes": {
                "background-color": "#abdde5"
            }
        },
        ".table-warning,\n  .table-warning > th,\n  .table-warning > td": {
            "children": {},
            "attributes": {
                "background-color": "#ffeeba"
            }
        },
        ".table-hover .table-warning:hover": {
            "children": {},
            "attributes": {
                "background-color": "#ffe8a1"
            }
        },
        ".table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th": {
            "children": {},
            "attributes": {
                "background-color": "#ffe8a1"
            }
        },
        ".table-danger,\n  .table-danger > th,\n  .table-danger > td": {
            "children": {},
            "attributes": {
                "background-color": "#f5c6cb"
            }
        },
        ".table-hover .table-danger:hover": {
            "children": {},
            "attributes": {
                "background-color": "#f1b0b7"
            }
        },
        ".table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th": {
            "children": {},
            "attributes": {
                "background-color": "#f1b0b7"
            }
        },
        ".table-light,\n  .table-light > th,\n  .table-light > td": {
            "children": {},
            "attributes": {
                "background-color": "#fdfdfe"
            }
        },
        ".table-hover .table-light:hover": {
            "children": {},
            "attributes": {
                "background-color": "#ececf6"
            }
        },
        ".table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th": {
            "children": {},
            "attributes": {
                "background-color": "#ececf6"
            }
        },
        ".table-dark,\n  .table-dark > th,\n  .table-dark > td": {
            "children": {},
            "attributes": {
                "background-color": "#c6c8ca"
            }
        },
        ".table-hover .table-dark:hover": {
            "children": {},
            "attributes": {
                "background-color": "#b9bbbe"
            }
        },
        ".table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th": {
            "children": {},
            "attributes": {
                "background-color": "#b9bbbe"
            }
        },
        ".table-active,\n  .table-active > th,\n  .table-active > td": {
            "children": {},
            "attributes": {
                "background-color": "rgba(0, 0, 0, 0.075)"
            }
        },
        ".table-hover .table-active:hover": {
            "children": {},
            "attributes": {
                "background-color": "rgba(0, 0, 0, 0.075)"
            }
        },
        ".table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th": {
            "children": {},
            "attributes": {
                "background-color": "rgba(0, 0, 0, 0.075)"
            }
        },
        ".table .thead-dark th": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#212529",
                "border-color": "#32383e"
            }
        },
        ".table .thead-light th": {
            "children": {},
            "attributes": {
                "color": "#495057",
                "background-color": "#e9ecef",
                "border-color": "#dee2e6"
            }
        },
        ".table-dark": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#212529"
            }
        },
        ".table-dark th,\n  .table-dark td,\n  .table-dark thead th": {
            "children": {},
            "attributes": {
                "border-color": "#32383e"
            }
        },
        ".table-dark.table-bordered": {
            "children": {},
            "attributes": {
                "border": "0"
            }
        },
        ".table-dark.table-striped tbody tr:nth-of-type(odd)": {
            "children": {},
            "attributes": {
                "background-color": "rgba(255, 255, 255, 0.05)"
            }
        },
        ".table-dark.table-hover tbody tr:hover": {
            "children": {},
            "attributes": {
                "background-color": "rgba(255, 255, 255, 0.075)"
            }
        },
        "@media (max-width: 575.98px)": {
            "children": {
                ".table-responsive-sm": {
                    "children": {},
                    "attributes": {
                        "display": "block",
                        "width": "100%",
                        "overflow-x": "auto",
                        "-webkit-overflow-scrolling": "touch",
                        "-ms-overflow-style": "-ms-autohiding-scrollbar"
                    }
                },
                ".table-responsive-sm > .table-bordered": {
                    "children": {},
                    "attributes": {
                        "border": "0"
                    }
                }
            },
            "attributes": {}
        },
        "@media (max-width: 767.98px)": {
            "children": {
                ".table-responsive-md": {
                    "children": {},
                    "attributes": {
                        "display": "block",
                        "width": "100%",
                        "overflow-x": "auto",
                        "-webkit-overflow-scrolling": "touch",
                        "-ms-overflow-style": "-ms-autohiding-scrollbar"
                    }
                },
                ".table-responsive-md > .table-bordered": {
                    "children": {},
                    "attributes": {
                        "border": "0"
                    }
                }
            },
            "attributes": {}
        },
        "@media (max-width: 991.98px)": {
            "children": {
                ".table-responsive-lg": {
                    "children": {},
                    "attributes": {
                        "display": "block",
                        "width": "100%",
                        "overflow-x": "auto",
                        "-webkit-overflow-scrolling": "touch",
                        "-ms-overflow-style": "-ms-autohiding-scrollbar"
                    }
                },
                ".table-responsive-lg > .table-bordered": {
                    "children": {},
                    "attributes": {
                        "border": "0"
                    }
                }
            },
            "attributes": {}
        },
        "@media (max-width: 1199.98px)": {
            "children": {
                ".table-responsive-xl": {
                    "children": {},
                    "attributes": {
                        "display": "block",
                        "width": "100%",
                        "overflow-x": "auto",
                        "-webkit-overflow-scrolling": "touch",
                        "-ms-overflow-style": "-ms-autohiding-scrollbar"
                    }
                },
                ".table-responsive-xl > .table-bordered": {
                    "children": {},
                    "attributes": {
                        "border": "0"
                    }
                }
            },
            "attributes": {}
        },
        ".table-responsive": {
            "children": {},
            "attributes": {
                "display": "block",
                "width": "100%",
                "overflow-x": "auto",
                "-webkit-overflow-scrolling": "touch",
                "-ms-overflow-style": "-ms-autohiding-scrollbar"
            }
        },
        ".table-responsive > .table-bordered": {
            "children": {},
            "attributes": {
                "border": "0"
            }
        },
        ".form-control": {
            "children": {},
            "attributes": {
                "display": "block",
                "width": "100%",
                "padding": "0.375rem 0.75rem",
                "font-size": "1rem",
                "line-height": "1.5",
                "color": "#495057",
                "background-color": "#fff",
                "background-clip": "padding-box",
                "border": "1px solid #ced4da",
                "border-radius": "0.25rem",
                "transition": "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
            }
        },
        ".form-control::-ms-expand": {
            "children": {},
            "attributes": {
                "background-color": "transparent",
                "border": "0"
            }
        },
        ".form-control:focus": {
            "children": {},
            "attributes": {
                "color": "#495057",
                "background-color": "#fff",
                "border-color": "#80bdff",
                "outline": "0",
                "box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.25)"
            }
        },
        ".form-control::-webkit-input-placeholder": {
            "children": {},
            "attributes": {
                "color": "#6c757d",
                "opacity": "1"
            }
        },
        ".form-control::-moz-placeholder": {
            "children": {},
            "attributes": {
                "color": "#6c757d",
                "opacity": "1"
            }
        },
        ".form-control:-ms-input-placeholder": {
            "children": {},
            "attributes": {
                "color": "#6c757d",
                "opacity": "1"
            }
        },
        ".form-control::-ms-input-placeholder": {
            "children": {},
            "attributes": {
                "color": "#6c757d",
                "opacity": "1"
            }
        },
        ".form-control::placeholder": {
            "children": {},
            "attributes": {
                "color": "#6c757d",
                "opacity": "1"
            }
        },
        ".form-control:disabled, .form-control[readonly]": {
            "children": {},
            "attributes": {
                "background-color": "#e9ecef",
                "opacity": "1"
            }
        },
        "select.form-control:not([size]):not([multiple])": {
            "children": {},
            "attributes": {
                "height": "calc(2.25rem + 2px)"
            }
        },
        "select.form-control:focus::-ms-value": {
            "children": {},
            "attributes": {
                "color": "#495057",
                "background-color": "#fff"
            }
        },
        ".form-control-file,\n  .form-control-range": {
            "children": {},
            "attributes": {
                "display": "block",
                "width": "100%"
            }
        },
        ".col-form-label": {
            "children": {},
            "attributes": {
                "padding-top": "calc(0.375rem + 1px)",
                "padding-bottom": "calc(0.375rem + 1px)",
                "margin-bottom": "0",
                "font-size": "inherit",
                "line-height": "1.5"
            }
        },
        ".col-form-label-lg": {
            "children": {},
            "attributes": {
                "padding-top": "calc(0.5rem + 1px)",
                "padding-bottom": "calc(0.5rem + 1px)",
                "font-size": "1.25rem",
                "line-height": "1.5"
            }
        },
        ".col-form-label-sm": {
            "children": {},
            "attributes": {
                "padding-top": "calc(0.25rem + 1px)",
                "padding-bottom": "calc(0.25rem + 1px)",
                "font-size": "0.875rem",
                "line-height": "1.5"
            }
        },
        ".form-control-plaintext": {
            "children": {},
            "attributes": {
                "display": "block",
                "width": "100%",
                "padding-top": "0.375rem",
                "padding-bottom": "0.375rem",
                "margin-bottom": "0",
                "line-height": "1.5",
                "background-color": "transparent",
                "border": "solid transparent",
                "border-width": "1px 0"
            }
        },
        ".form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control,\n  .input-group-sm > .input-group-prepend > .form-control-plaintext.input-group-text,\n  .input-group-sm > .input-group-append > .form-control-plaintext.input-group-text,\n  .input-group-sm > .input-group-prepend > .form-control-plaintext.btn,\n  .input-group-sm > .input-group-append > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control,\n  .input-group-lg > .input-group-prepend > .form-control-plaintext.input-group-text,\n  .input-group-lg > .input-group-append > .form-control-plaintext.input-group-text,\n  .input-group-lg > .input-group-prepend > .form-control-plaintext.btn,\n  .input-group-lg > .input-group-append > .form-control-plaintext.btn": {
            "children": {},
            "attributes": {
                "padding-right": "0",
                "padding-left": "0"
            }
        },
        ".form-control-sm, .input-group-sm > .form-control,\n  .input-group-sm > .input-group-prepend > .input-group-text,\n  .input-group-sm > .input-group-append > .input-group-text,\n  .input-group-sm > .input-group-prepend > .btn,\n  .input-group-sm > .input-group-append > .btn": {
            "children": {},
            "attributes": {
                "padding": "0.25rem 0.5rem",
                "font-size": "0.875rem",
                "line-height": "1.5",
                "border-radius": "0.2rem"
            }
        },
        "select.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),\n  .input-group-sm > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),\n  .input-group-sm > .input-group-append > select.input-group-text:not([size]):not([multiple]),\n  .input-group-sm > .input-group-prepend > select.btn:not([size]):not([multiple]),\n  .input-group-sm > .input-group-append > select.btn:not([size]):not([multiple])": {
            "children": {},
            "attributes": {
                "height": "calc(1.8125rem + 2px)"
            }
        },
        ".form-control-lg, .input-group-lg > .form-control,\n  .input-group-lg > .input-group-prepend > .input-group-text,\n  .input-group-lg > .input-group-append > .input-group-text,\n  .input-group-lg > .input-group-prepend > .btn,\n  .input-group-lg > .input-group-append > .btn": {
            "children": {},
            "attributes": {
                "padding": "0.5rem 1rem",
                "font-size": "1.25rem",
                "line-height": "1.5",
                "border-radius": "0.3rem"
            }
        },
        "select.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),\n  .input-group-lg > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),\n  .input-group-lg > .input-group-append > select.input-group-text:not([size]):not([multiple]),\n  .input-group-lg > .input-group-prepend > select.btn:not([size]):not([multiple]),\n  .input-group-lg > .input-group-append > select.btn:not([size]):not([multiple])": {
            "children": {},
            "attributes": {
                "height": "calc(2.875rem + 2px)"
            }
        },
        ".form-group": {
            "children": {},
            "attributes": {
                "margin-bottom": "1rem"
            }
        },
        ".form-text": {
            "children": {},
            "attributes": {
                "display": "block",
                "margin-top": "0.25rem"
            }
        },
        ".form-row": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-ms-flex-wrap": "wrap",
                "flex-wrap": "wrap",
                "margin-right": "-5px",
                "margin-left": "-5px"
            }
        },
        ".form-row > .col,\n  .form-row > [class*=\"col-\"]": {
            "children": {},
            "attributes": {
                "padding-right": "5px",
                "padding-left": "5px"
            }
        },
        ".form-check": {
            "children": {},
            "attributes": {
                "position": "relative",
                "display": "block",
                "padding-left": "1.25rem"
            }
        },
        ".form-check-input": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "margin-top": "0.3rem",
                "margin-left": "-1.25rem"
            }
        },
        ".form-check-input:disabled ~ .form-check-label": {
            "children": {},
            "attributes": {
                "color": "#6c757d"
            }
        },
        ".form-check-label": {
            "children": {},
            "attributes": {
                "margin-bottom": "0"
            }
        },
        ".form-check-inline": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-inline-box",
                    "-ms-inline-flexbox",
                    "inline-flex"
                ],
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center",
                "padding-left": "0",
                "margin-right": "0.75rem"
            }
        },
        ".form-check-inline .form-check-input": {
            "children": {},
            "attributes": {
                "position": "static",
                "margin-top": "0",
                "margin-right": "0.3125rem",
                "margin-left": "0"
            }
        },
        ".valid-feedback": {
            "children": {},
            "attributes": {
                "display": "none",
                "width": "100%",
                "margin-top": "0.25rem",
                "font-size": "80%",
                "color": "#28a745"
            }
        },
        ".valid-tooltip": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "100%",
                "z-index": "5",
                "display": "none",
                "max-width": "100%",
                "padding": ".5rem",
                "margin-top": ".1rem",
                "font-size": ".875rem",
                "line-height": "1",
                "color": "#fff",
                "background-color": "rgba(40, 167, 69, 0.8)",
                "border-radius": ".2rem"
            }
        },
        ".was-validated .form-control:valid, .form-control.is-valid, .was-validated\n  .custom-select:valid,\n  .custom-select.is-valid": {
            "children": {},
            "attributes": {
                "border-color": "#28a745"
            }
        },
        ".was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n  .custom-select:valid:focus,\n  .custom-select.is-valid:focus": {
            "children": {},
            "attributes": {
                "border-color": "#28a745",
                "box-shadow": "0 0 0 0.2rem rgba(40, 167, 69, 0.25)"
            }
        },
        ".was-validated .form-control:valid ~ .valid-feedback,\n  .was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n  .form-control.is-valid ~ .valid-tooltip, .was-validated\n  .custom-select:valid ~ .valid-feedback,\n  .was-validated\n  .custom-select:valid ~ .valid-tooltip,\n  .custom-select.is-valid ~ .valid-feedback,\n  .custom-select.is-valid ~ .valid-tooltip": {
            "children": {},
            "attributes": {
                "display": "block"
            }
        },
        ".was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label": {
            "children": {},
            "attributes": {
                "color": "#28a745"
            }
        },
        ".was-validated .form-check-input:valid ~ .valid-feedback,\n  .was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n  .form-check-input.is-valid ~ .valid-tooltip": {
            "children": {},
            "attributes": {
                "display": "block"
            }
        },
        ".was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label": {
            "children": {},
            "attributes": {
                "color": "#28a745"
            }
        },
        ".was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "background-color": "#71dd8a"
            }
        },
        ".was-validated .custom-control-input:valid ~ .valid-feedback,\n  .was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,\n  .custom-control-input.is-valid ~ .valid-tooltip": {
            "children": {},
            "attributes": {
                "display": "block"
            }
        },
        ".was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "background-color": "#34ce57"
            }
        },
        ".was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25)"
            }
        },
        ".was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label": {
            "children": {},
            "attributes": {
                "border-color": "#28a745"
            }
        },
        ".was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before": {
            "children": {},
            "attributes": {
                "border-color": "inherit"
            }
        },
        ".was-validated .custom-file-input:valid ~ .valid-feedback,\n  .was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,\n  .custom-file-input.is-valid ~ .valid-tooltip": {
            "children": {},
            "attributes": {
                "display": "block"
            }
        },
        ".was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(40, 167, 69, 0.25)"
            }
        },
        ".invalid-feedback": {
            "children": {},
            "attributes": {
                "display": "none",
                "width": "100%",
                "margin-top": "0.25rem",
                "font-size": "80%",
                "color": "#dc3545"
            }
        },
        ".invalid-tooltip": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "100%",
                "z-index": "5",
                "display": "none",
                "max-width": "100%",
                "padding": ".5rem",
                "margin-top": ".1rem",
                "font-size": ".875rem",
                "line-height": "1",
                "color": "#fff",
                "background-color": "rgba(220, 53, 69, 0.8)",
                "border-radius": ".2rem"
            }
        },
        ".was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n  .custom-select:invalid,\n  .custom-select.is-invalid": {
            "children": {},
            "attributes": {
                "border-color": "#dc3545"
            }
        },
        ".was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n  .custom-select:invalid:focus,\n  .custom-select.is-invalid:focus": {
            "children": {},
            "attributes": {
                "border-color": "#dc3545",
                "box-shadow": "0 0 0 0.2rem rgba(220, 53, 69, 0.25)"
            }
        },
        ".was-validated .form-control:invalid ~ .invalid-feedback,\n  .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n  .form-control.is-invalid ~ .invalid-tooltip, .was-validated\n  .custom-select:invalid ~ .invalid-feedback,\n  .was-validated\n  .custom-select:invalid ~ .invalid-tooltip,\n  .custom-select.is-invalid ~ .invalid-feedback,\n  .custom-select.is-invalid ~ .invalid-tooltip": {
            "children": {},
            "attributes": {
                "display": "block"
            }
        },
        ".was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label": {
            "children": {},
            "attributes": {
                "color": "#dc3545"
            }
        },
        ".was-validated .form-check-input:invalid ~ .invalid-feedback,\n  .was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n  .form-check-input.is-invalid ~ .invalid-tooltip": {
            "children": {},
            "attributes": {
                "display": "block"
            }
        },
        ".was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label": {
            "children": {},
            "attributes": {
                "color": "#dc3545"
            }
        },
        ".was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "background-color": "#efa2a9"
            }
        },
        ".was-validated .custom-control-input:invalid ~ .invalid-feedback,\n  .was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,\n  .custom-control-input.is-invalid ~ .invalid-tooltip": {
            "children": {},
            "attributes": {
                "display": "block"
            }
        },
        ".was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "background-color": "#e4606d"
            }
        },
        ".was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25)"
            }
        },
        ".was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label": {
            "children": {},
            "attributes": {
                "border-color": "#dc3545"
            }
        },
        ".was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before": {
            "children": {},
            "attributes": {
                "border-color": "inherit"
            }
        },
        ".was-validated .custom-file-input:invalid ~ .invalid-feedback,\n  .was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,\n  .custom-file-input.is-invalid ~ .invalid-tooltip": {
            "children": {},
            "attributes": {
                "display": "block"
            }
        },
        ".was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(220, 53, 69, 0.25)"
            }
        },
        ".form-inline": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-orient": "horizontal",
                "-webkit-box-direction": "normal",
                "-ms-flex-flow": "row wrap",
                "flex-flow": "row wrap",
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center"
            }
        },
        ".form-inline .form-check": {
            "children": {},
            "attributes": {
                "width": "100%"
            }
        },
        ".btn": {
            "children": {},
            "attributes": {
                "display": "inline-block",
                "font-weight": "400",
                "text-align": "center",
                "white-space": "nowrap",
                "vertical-align": "middle",
                "-webkit-user-select": "none",
                "-moz-user-select": "none",
                "-ms-user-select": "none",
                "user-select": "none",
                "border": "1px solid transparent",
                "padding": "0.375rem 0.75rem",
                "font-size": "1rem",
                "line-height": "1.5",
                "border-radius": "0.25rem",
                "transition": "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
            }
        },
        ".btn:hover, .btn:focus": {
            "children": {},
            "attributes": {
                "text-decoration": "none"
            }
        },
        ".btn:focus, .btn.focus": {
            "children": {},
            "attributes": {
                "outline": "0",
                "box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.25)"
            }
        },
        ".btn.disabled, .btn:disabled": {
            "children": {},
            "attributes": {
                "opacity": "0.65"
            }
        },
        ".btn:not(:disabled):not(.disabled)": {
            "children": {},
            "attributes": {
                "cursor": "pointer"
            }
        },
        ".btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active": {
            "children": {},
            "attributes": {
                "background-image": "none"
            }
        },
        "a.btn.disabled,\n  fieldset:disabled a.btn": {
            "children": {},
            "attributes": {
                "pointer-events": "none"
            }
        },
        ".btn-primary": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#007bff",
                "border-color": "#007bff"
            }
        },
        ".btn-primary:hover": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#0069d9",
                "border-color": "#0062cc"
            }
        },
        ".btn-primary:focus, .btn-primary.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.5)"
            }
        },
        ".btn-primary.disabled, .btn-primary:disabled": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#007bff",
                "border-color": "#007bff"
            }
        },
        ".btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-primary.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#0062cc",
                "border-color": "#005cbf"
            }
        },
        ".btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-primary.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.5)"
            }
        },
        ".btn-secondary": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#6c757d",
                "border-color": "#6c757d"
            }
        },
        ".btn-secondary:hover": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#5a6268",
                "border-color": "#545b62"
            }
        },
        ".btn-secondary:focus, .btn-secondary.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(108, 117, 125, 0.5)"
            }
        },
        ".btn-secondary.disabled, .btn-secondary:disabled": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#6c757d",
                "border-color": "#6c757d"
            }
        },
        ".btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-secondary.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#545b62",
                "border-color": "#4e555b"
            }
        },
        ".btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-secondary.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(108, 117, 125, 0.5)"
            }
        },
        ".btn-success": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#28a745",
                "border-color": "#28a745"
            }
        },
        ".btn-success:hover": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#218838",
                "border-color": "#1e7e34"
            }
        },
        ".btn-success:focus, .btn-success.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(40, 167, 69, 0.5)"
            }
        },
        ".btn-success.disabled, .btn-success:disabled": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#28a745",
                "border-color": "#28a745"
            }
        },
        ".btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n  .show > .btn-success.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#1e7e34",
                "border-color": "#1c7430"
            }
        },
        ".btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-success.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(40, 167, 69, 0.5)"
            }
        },
        ".btn-info": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#17a2b8",
                "border-color": "#17a2b8"
            }
        },
        ".btn-info:hover": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#138496",
                "border-color": "#117a8b"
            }
        },
        ".btn-info:focus, .btn-info.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(23, 162, 184, 0.5)"
            }
        },
        ".btn-info.disabled, .btn-info:disabled": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#17a2b8",
                "border-color": "#17a2b8"
            }
        },
        ".btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n  .show > .btn-info.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#117a8b",
                "border-color": "#10707f"
            }
        },
        ".btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-info.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(23, 162, 184, 0.5)"
            }
        },
        ".btn-warning": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#ffc107",
                "border-color": "#ffc107"
            }
        },
        ".btn-warning:hover": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#e0a800",
                "border-color": "#d39e00"
            }
        },
        ".btn-warning:focus, .btn-warning.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(255, 193, 7, 0.5)"
            }
        },
        ".btn-warning.disabled, .btn-warning:disabled": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#ffc107",
                "border-color": "#ffc107"
            }
        },
        ".btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-warning.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#d39e00",
                "border-color": "#c69500"
            }
        },
        ".btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-warning.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(255, 193, 7, 0.5)"
            }
        },
        ".btn-danger": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#dc3545",
                "border-color": "#dc3545"
            }
        },
        ".btn-danger:hover": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#c82333",
                "border-color": "#bd2130"
            }
        },
        ".btn-danger:focus, .btn-danger.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(220, 53, 69, 0.5)"
            }
        },
        ".btn-danger.disabled, .btn-danger:disabled": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#dc3545",
                "border-color": "#dc3545"
            }
        },
        ".btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-danger.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#bd2130",
                "border-color": "#b21f2d"
            }
        },
        ".btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-danger.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(220, 53, 69, 0.5)"
            }
        },
        ".btn-light": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#f8f9fa",
                "border-color": "#f8f9fa"
            }
        },
        ".btn-light:hover": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#e2e6ea",
                "border-color": "#dae0e5"
            }
        },
        ".btn-light:focus, .btn-light.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(248, 249, 250, 0.5)"
            }
        },
        ".btn-light.disabled, .btn-light:disabled": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#f8f9fa",
                "border-color": "#f8f9fa"
            }
        },
        ".btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n  .show > .btn-light.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#dae0e5",
                "border-color": "#d3d9df"
            }
        },
        ".btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-light.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(248, 249, 250, 0.5)"
            }
        },
        ".btn-dark": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#343a40",
                "border-color": "#343a40"
            }
        },
        ".btn-dark:hover": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#23272b",
                "border-color": "#1d2124"
            }
        },
        ".btn-dark:focus, .btn-dark.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(52, 58, 64, 0.5)"
            }
        },
        ".btn-dark.disabled, .btn-dark:disabled": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#343a40",
                "border-color": "#343a40"
            }
        },
        ".btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-dark.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#1d2124",
                "border-color": "#171a1d"
            }
        },
        ".btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-dark.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(52, 58, 64, 0.5)"
            }
        },
        ".btn-outline-primary": {
            "children": {},
            "attributes": {
                "color": "#007bff",
                "background-color": "transparent",
                "background-image": "none",
                "border-color": "#007bff"
            }
        },
        ".btn-outline-primary:hover": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#007bff",
                "border-color": "#007bff"
            }
        },
        ".btn-outline-primary:focus, .btn-outline-primary.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.5)"
            }
        },
        ".btn-outline-primary.disabled, .btn-outline-primary:disabled": {
            "children": {},
            "attributes": {
                "color": "#007bff",
                "background-color": "transparent"
            }
        },
        ".btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-primary.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#007bff",
                "border-color": "#007bff"
            }
        },
        ".btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-outline-primary.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.5)"
            }
        },
        ".btn-outline-secondary": {
            "children": {},
            "attributes": {
                "color": "#6c757d",
                "background-color": "transparent",
                "background-image": "none",
                "border-color": "#6c757d"
            }
        },
        ".btn-outline-secondary:hover": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#6c757d",
                "border-color": "#6c757d"
            }
        },
        ".btn-outline-secondary:focus, .btn-outline-secondary.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(108, 117, 125, 0.5)"
            }
        },
        ".btn-outline-secondary.disabled, .btn-outline-secondary:disabled": {
            "children": {},
            "attributes": {
                "color": "#6c757d",
                "background-color": "transparent"
            }
        },
        ".btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-secondary.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#6c757d",
                "border-color": "#6c757d"
            }
        },
        ".btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-outline-secondary.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(108, 117, 125, 0.5)"
            }
        },
        ".btn-outline-success": {
            "children": {},
            "attributes": {
                "color": "#28a745",
                "background-color": "transparent",
                "background-image": "none",
                "border-color": "#28a745"
            }
        },
        ".btn-outline-success:hover": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#28a745",
                "border-color": "#28a745"
            }
        },
        ".btn-outline-success:focus, .btn-outline-success.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(40, 167, 69, 0.5)"
            }
        },
        ".btn-outline-success.disabled, .btn-outline-success:disabled": {
            "children": {},
            "attributes": {
                "color": "#28a745",
                "background-color": "transparent"
            }
        },
        ".btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-success.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#28a745",
                "border-color": "#28a745"
            }
        },
        ".btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-outline-success.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(40, 167, 69, 0.5)"
            }
        },
        ".btn-outline-info": {
            "children": {},
            "attributes": {
                "color": "#17a2b8",
                "background-color": "transparent",
                "background-image": "none",
                "border-color": "#17a2b8"
            }
        },
        ".btn-outline-info:hover": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#17a2b8",
                "border-color": "#17a2b8"
            }
        },
        ".btn-outline-info:focus, .btn-outline-info.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(23, 162, 184, 0.5)"
            }
        },
        ".btn-outline-info.disabled, .btn-outline-info:disabled": {
            "children": {},
            "attributes": {
                "color": "#17a2b8",
                "background-color": "transparent"
            }
        },
        ".btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-info.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#17a2b8",
                "border-color": "#17a2b8"
            }
        },
        ".btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-outline-info.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(23, 162, 184, 0.5)"
            }
        },
        ".btn-outline-warning": {
            "children": {},
            "attributes": {
                "color": "#ffc107",
                "background-color": "transparent",
                "background-image": "none",
                "border-color": "#ffc107"
            }
        },
        ".btn-outline-warning:hover": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#ffc107",
                "border-color": "#ffc107"
            }
        },
        ".btn-outline-warning:focus, .btn-outline-warning.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(255, 193, 7, 0.5)"
            }
        },
        ".btn-outline-warning.disabled, .btn-outline-warning:disabled": {
            "children": {},
            "attributes": {
                "color": "#ffc107",
                "background-color": "transparent"
            }
        },
        ".btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-warning.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#ffc107",
                "border-color": "#ffc107"
            }
        },
        ".btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-outline-warning.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(255, 193, 7, 0.5)"
            }
        },
        ".btn-outline-danger": {
            "children": {},
            "attributes": {
                "color": "#dc3545",
                "background-color": "transparent",
                "background-image": "none",
                "border-color": "#dc3545"
            }
        },
        ".btn-outline-danger:hover": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#dc3545",
                "border-color": "#dc3545"
            }
        },
        ".btn-outline-danger:focus, .btn-outline-danger.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(220, 53, 69, 0.5)"
            }
        },
        ".btn-outline-danger.disabled, .btn-outline-danger:disabled": {
            "children": {},
            "attributes": {
                "color": "#dc3545",
                "background-color": "transparent"
            }
        },
        ".btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-danger.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#dc3545",
                "border-color": "#dc3545"
            }
        },
        ".btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-outline-danger.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(220, 53, 69, 0.5)"
            }
        },
        ".btn-outline-light": {
            "children": {},
            "attributes": {
                "color": "#f8f9fa",
                "background-color": "transparent",
                "background-image": "none",
                "border-color": "#f8f9fa"
            }
        },
        ".btn-outline-light:hover": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#f8f9fa",
                "border-color": "#f8f9fa"
            }
        },
        ".btn-outline-light:focus, .btn-outline-light.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(248, 249, 250, 0.5)"
            }
        },
        ".btn-outline-light.disabled, .btn-outline-light:disabled": {
            "children": {},
            "attributes": {
                "color": "#f8f9fa",
                "background-color": "transparent"
            }
        },
        ".btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-light.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#f8f9fa",
                "border-color": "#f8f9fa"
            }
        },
        ".btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-outline-light.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(248, 249, 250, 0.5)"
            }
        },
        ".btn-outline-dark": {
            "children": {},
            "attributes": {
                "color": "#343a40",
                "background-color": "transparent",
                "background-image": "none",
                "border-color": "#343a40"
            }
        },
        ".btn-outline-dark:hover": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#343a40",
                "border-color": "#343a40"
            }
        },
        ".btn-outline-dark:focus, .btn-outline-dark.focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(52, 58, 64, 0.5)"
            }
        },
        ".btn-outline-dark.disabled, .btn-outline-dark:disabled": {
            "children": {},
            "attributes": {
                "color": "#343a40",
                "background-color": "transparent"
            }
        },
        ".btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-dark.dropdown-toggle": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#343a40",
                "border-color": "#343a40"
            }
        },
        ".btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n  .show > .btn-outline-dark.dropdown-toggle:focus": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 0.2rem rgba(52, 58, 64, 0.5)"
            }
        },
        ".btn-link": {
            "children": {},
            "attributes": {
                "font-weight": "400",
                "color": "#007bff",
                "background-color": "transparent"
            }
        },
        ".btn-link:hover": {
            "children": {},
            "attributes": {
                "color": "#0056b3",
                "text-decoration": "underline",
                "background-color": "transparent",
                "border-color": "transparent"
            }
        },
        ".btn-link:focus, .btn-link.focus": {
            "children": {},
            "attributes": {
                "text-decoration": "underline",
                "border-color": "transparent",
                "box-shadow": "none"
            }
        },
        ".btn-link:disabled, .btn-link.disabled": {
            "children": {},
            "attributes": {
                "color": "#6c757d"
            }
        },
        ".btn-lg, .btn-group-lg > .btn": {
            "children": {},
            "attributes": {
                "padding": "0.5rem 1rem",
                "font-size": "1.25rem",
                "line-height": "1.5",
                "border-radius": "0.3rem"
            }
        },
        ".btn-sm, .btn-group-sm > .btn": {
            "children": {},
            "attributes": {
                "padding": "0.25rem 0.5rem",
                "font-size": "0.875rem",
                "line-height": "1.5",
                "border-radius": "0.2rem"
            }
        },
        ".btn-block": {
            "children": {},
            "attributes": {
                "display": "block",
                "width": "100%"
            }
        },
        ".btn-block + .btn-block": {
            "children": {},
            "attributes": {
                "margin-top": "0.5rem"
            }
        },
        "input[type=\"submit\"].btn-block,\n  input[type=\"reset\"].btn-block,\n  input[type=\"button\"].btn-block": {
            "children": {},
            "attributes": {
                "width": "100%"
            }
        },
        ".fade": {
            "children": {},
            "attributes": {
                "opacity": "0",
                "transition": "opacity 0.15s linear"
            }
        },
        ".fade.show": {
            "children": {},
            "attributes": {
                "opacity": "1"
            }
        },
        ".collapse": {
            "children": {},
            "attributes": {
                "display": "none"
            }
        },
        ".collapse.show": {
            "children": {},
            "attributes": {
                "display": "block"
            }
        },
        "tr.collapse.show": {
            "children": {},
            "attributes": {
                "display": "table-row"
            }
        },
        "tbody.collapse.show": {
            "children": {},
            "attributes": {
                "display": "table-row-group"
            }
        },
        ".collapsing": {
            "children": {},
            "attributes": {
                "position": "relative",
                "height": "0",
                "overflow": "hidden",
                "transition": "height 0.35s ease"
            }
        },
        ".dropup,\n  .dropdown": {
            "children": {},
            "attributes": {
                "position": "relative"
            }
        },
        ".dropdown-toggle::after": {
            "children": {},
            "attributes": {
                "display": "inline-block",
                "width": "0",
                "height": "0",
                "margin-left": "0.255em",
                "vertical-align": "0.255em",
                "content": "\"\"",
                "border-top": "0.3em solid",
                "border-right": "0.3em solid transparent",
                "border-bottom": "0",
                "border-left": "0.3em solid transparent"
            }
        },
        ".dropdown-toggle:empty::after": {
            "children": {},
            "attributes": {
                "margin-left": "0"
            }
        },
        ".dropdown-menu": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "100%",
                "left": "0",
                "z-index": "1000",
                "display": "none",
                "float": "left",
                "min-width": "10rem",
                "padding": "0.5rem 0",
                "margin": "0.125rem 0 0",
                "font-size": "1rem",
                "color": "#212529",
                "text-align": "left",
                "list-style": "none",
                "background-color": "#fff",
                "background-clip": "padding-box",
                "border": "1px solid rgba(0, 0, 0, 0.15)",
                "border-radius": "0.25rem"
            }
        },
        ".dropup .dropdown-menu": {
            "children": {},
            "attributes": {
                "margin-top": "0",
                "margin-bottom": "0.125rem"
            }
        },
        ".dropup .dropdown-toggle::after": {
            "children": {},
            "attributes": {
                "display": "inline-block",
                "width": "0",
                "height": "0",
                "margin-left": "0.255em",
                "vertical-align": "0.255em",
                "content": "\"\"",
                "border-top": "0",
                "border-right": "0.3em solid transparent",
                "border-bottom": "0.3em solid",
                "border-left": "0.3em solid transparent"
            }
        },
        ".dropup .dropdown-toggle:empty::after": {
            "children": {},
            "attributes": {
                "margin-left": "0"
            }
        },
        ".dropright .dropdown-menu": {
            "children": {},
            "attributes": {
                "margin-top": "0",
                "margin-left": "0.125rem"
            }
        },
        ".dropright .dropdown-toggle::after": {
            "children": {},
            "attributes": {
                "display": "inline-block",
                "width": "0",
                "height": "0",
                "margin-left": "0.255em",
                "vertical-align": "0",
                "content": "\"\"",
                "border-top": "0.3em solid transparent",
                "border-bottom": "0.3em solid transparent",
                "border-left": "0.3em solid"
            }
        },
        ".dropright .dropdown-toggle:empty::after": {
            "children": {},
            "attributes": {
                "margin-left": "0"
            }
        },
        ".dropleft .dropdown-menu": {
            "children": {},
            "attributes": {
                "margin-top": "0",
                "margin-right": "0.125rem"
            }
        },
        ".dropleft .dropdown-toggle::after": {
            "children": {},
            "attributes": {
                "display": "none",
                "width": "0",
                "height": "0",
                "margin-left": "0.255em",
                "vertical-align": "0.255em",
                "content": "\"\""
            }
        },
        ".dropleft .dropdown-toggle::before": {
            "children": {},
            "attributes": {
                "display": "inline-block",
                "width": "0",
                "height": "0",
                "margin-right": "0.255em",
                "vertical-align": "0",
                "content": "\"\"",
                "border-top": "0.3em solid transparent",
                "border-right": "0.3em solid",
                "border-bottom": "0.3em solid transparent"
            }
        },
        ".dropleft .dropdown-toggle:empty::after": {
            "children": {},
            "attributes": {
                "margin-left": "0"
            }
        },
        ".dropdown-divider": {
            "children": {},
            "attributes": {
                "height": "0",
                "margin": "0.5rem 0",
                "overflow": "hidden",
                "border-top": "1px solid #e9ecef"
            }
        },
        ".dropdown-item": {
            "children": {},
            "attributes": {
                "display": "block",
                "width": "100%",
                "padding": "0.25rem 1.5rem",
                "clear": "both",
                "font-weight": "400",
                "color": "#212529",
                "text-align": "inherit",
                "white-space": "nowrap",
                "background-color": "transparent",
                "border": "0"
            }
        },
        ".dropdown-item:hover, .dropdown-item:focus": {
            "children": {},
            "attributes": {
                "color": "#16181b",
                "text-decoration": "none",
                "background-color": "#f8f9fa"
            }
        },
        ".dropdown-item.active, .dropdown-item:active": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "text-decoration": "none",
                "background-color": "#007bff"
            }
        },
        ".dropdown-item.disabled, .dropdown-item:disabled": {
            "children": {},
            "attributes": {
                "color": "#6c757d",
                "background-color": "transparent"
            }
        },
        ".dropdown-menu.show": {
            "children": {},
            "attributes": {
                "display": "block"
            }
        },
        ".dropdown-header": {
            "children": {},
            "attributes": {
                "display": "block",
                "padding": "0.5rem 1.5rem",
                "margin-bottom": "0",
                "font-size": "0.875rem",
                "color": "#6c757d",
                "white-space": "nowrap"
            }
        },
        ".btn-group,\n  .btn-group-vertical": {
            "children": {},
            "attributes": {
                "position": "relative",
                "display": [
                    "-webkit-inline-box",
                    "-ms-inline-flexbox",
                    "inline-flex"
                ],
                "vertical-align": "middle"
            }
        },
        ".btn-group > .btn,\n  .btn-group-vertical > .btn": {
            "children": {},
            "attributes": {
                "position": "relative",
                "-webkit-box-flex": "0",
                "-ms-flex": "0 1 auto",
                "flex": "0 1 auto"
            }
        },
        ".btn-group > .btn:hover,\n  .btn-group-vertical > .btn:hover": {
            "children": {},
            "attributes": {
                "z-index": "1"
            }
        },
        ".btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n  .btn-group-vertical > .btn:focus,\n  .btn-group-vertical > .btn:active,\n  .btn-group-vertical > .btn.active": {
            "children": {},
            "attributes": {
                "z-index": "1"
            }
        },
        ".btn-group .btn + .btn,\n  .btn-group .btn + .btn-group,\n  .btn-group .btn-group + .btn,\n  .btn-group .btn-group + .btn-group,\n  .btn-group-vertical .btn + .btn,\n  .btn-group-vertical .btn + .btn-group,\n  .btn-group-vertical .btn-group + .btn,\n  .btn-group-vertical .btn-group + .btn-group": {
            "children": {},
            "attributes": {
                "margin-left": "-1px"
            }
        },
        ".btn-toolbar": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-ms-flex-wrap": "wrap",
                "flex-wrap": "wrap",
                "-webkit-box-pack": "start",
                "-ms-flex-pack": "start",
                "justify-content": "flex-start"
            }
        },
        ".btn-toolbar .input-group": {
            "children": {},
            "attributes": {
                "width": "auto"
            }
        },
        ".btn-group > .btn:first-child": {
            "children": {},
            "attributes": {
                "margin-left": "0"
            }
        },
        ".btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n  .btn-group > .btn-group:not(:last-child) > .btn": {
            "children": {},
            "attributes": {
                "border-top-right-radius": "0",
                "border-bottom-right-radius": "0"
            }
        },
        ".btn-group > .btn:not(:first-child),\n  .btn-group > .btn-group:not(:first-child) > .btn": {
            "children": {},
            "attributes": {
                "border-top-left-radius": "0",
                "border-bottom-left-radius": "0"
            }
        },
        ".dropdown-toggle-split": {
            "children": {},
            "attributes": {
                "padding-right": "0.5625rem",
                "padding-left": "0.5625rem"
            }
        },
        ".dropdown-toggle-split::after": {
            "children": {},
            "attributes": {
                "margin-left": "0"
            }
        },
        ".btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split": {
            "children": {},
            "attributes": {
                "padding-right": "0.375rem",
                "padding-left": "0.375rem"
            }
        },
        ".btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split": {
            "children": {},
            "attributes": {
                "padding-right": "0.75rem",
                "padding-left": "0.75rem"
            }
        },
        ".btn-group-vertical": {
            "children": {},
            "attributes": {
                "-webkit-box-orient": "vertical",
                "-webkit-box-direction": "normal",
                "-ms-flex-direction": "column",
                "flex-direction": "column",
                "-webkit-box-align": "start",
                "-ms-flex-align": "start",
                "align-items": "flex-start",
                "-webkit-box-pack": "center",
                "-ms-flex-pack": "center",
                "justify-content": "center"
            }
        },
        ".btn-group-vertical .btn,\n  .btn-group-vertical .btn-group": {
            "children": {},
            "attributes": {
                "width": "100%"
            }
        },
        ".btn-group-vertical > .btn + .btn,\n  .btn-group-vertical > .btn + .btn-group,\n  .btn-group-vertical > .btn-group + .btn,\n  .btn-group-vertical > .btn-group + .btn-group": {
            "children": {},
            "attributes": {
                "margin-top": "-1px",
                "margin-left": "0"
            }
        },
        ".btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n  .btn-group-vertical > .btn-group:not(:last-child) > .btn": {
            "children": {},
            "attributes": {
                "border-bottom-right-radius": "0",
                "border-bottom-left-radius": "0"
            }
        },
        ".btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) > .btn": {
            "children": {},
            "attributes": {
                "border-top-left-radius": "0",
                "border-top-right-radius": "0"
            }
        },
        ".btn-group-toggle > .btn,\n  .btn-group-toggle > .btn-group > .btn": {
            "children": {},
            "attributes": {
                "margin-bottom": "0"
            }
        },
        ".btn-group-toggle > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn input[type=\"checkbox\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"]": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "clip": "rect(0, 0, 0, 0)",
                "pointer-events": "none"
            }
        },
        ".input-group": {
            "children": {},
            "attributes": {
                "position": "relative",
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-ms-flex-wrap": "wrap",
                "flex-wrap": "wrap",
                "-webkit-box-align": "stretch",
                "-ms-flex-align": "stretch",
                "align-items": "stretch",
                "width": "100%"
            }
        },
        ".input-group > .form-control,\n  .input-group > .custom-select,\n  .input-group > .custom-file": {
            "children": {},
            "attributes": {
                "position": "relative",
                "-webkit-box-flex": "1",
                "-ms-flex": "1 1 auto",
                "flex": "1 1 auto",
                "width": "1%",
                "margin-bottom": "0"
            }
        },
        ".input-group > .form-control:focus,\n  .input-group > .custom-select:focus,\n  .input-group > .custom-file:focus": {
            "children": {},
            "attributes": {
                "z-index": "3"
            }
        },
        ".input-group > .form-control + .form-control,\n  .input-group > .form-control + .custom-select,\n  .input-group > .form-control + .custom-file,\n  .input-group > .custom-select + .form-control,\n  .input-group > .custom-select + .custom-select,\n  .input-group > .custom-select + .custom-file,\n  .input-group > .custom-file + .form-control,\n  .input-group > .custom-file + .custom-select,\n  .input-group > .custom-file + .custom-file": {
            "children": {},
            "attributes": {
                "margin-left": "-1px"
            }
        },
        ".input-group > .form-control:not(:last-child),\n  .input-group > .custom-select:not(:last-child)": {
            "children": {},
            "attributes": {
                "border-top-right-radius": "0",
                "border-bottom-right-radius": "0"
            }
        },
        ".input-group > .form-control:not(:first-child),\n  .input-group > .custom-select:not(:first-child)": {
            "children": {},
            "attributes": {
                "border-top-left-radius": "0",
                "border-bottom-left-radius": "0"
            }
        },
        ".input-group > .custom-file": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center"
            }
        },
        ".input-group > .custom-file:not(:last-child) .custom-file-label,\n  .input-group > .custom-file:not(:last-child) .custom-file-label::before": {
            "children": {},
            "attributes": {
                "border-top-right-radius": "0",
                "border-bottom-right-radius": "0"
            }
        },
        ".input-group > .custom-file:not(:first-child) .custom-file-label,\n  .input-group > .custom-file:not(:first-child) .custom-file-label::before": {
            "children": {},
            "attributes": {
                "border-top-left-radius": "0",
                "border-bottom-left-radius": "0"
            }
        },
        ".input-group-prepend,\n  .input-group-append": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ]
            }
        },
        ".input-group-prepend .btn,\n  .input-group-append .btn": {
            "children": {},
            "attributes": {
                "position": "relative",
                "z-index": "2"
            }
        },
        ".input-group-prepend .btn + .btn,\n  .input-group-prepend .btn + .input-group-text,\n  .input-group-prepend .input-group-text + .input-group-text,\n  .input-group-prepend .input-group-text + .btn,\n  .input-group-append .btn + .btn,\n  .input-group-append .btn + .input-group-text,\n  .input-group-append .input-group-text + .input-group-text,\n  .input-group-append .input-group-text + .btn": {
            "children": {},
            "attributes": {
                "margin-left": "-1px"
            }
        },
        ".input-group-prepend": {
            "children": {},
            "attributes": {
                "margin-right": "-1px"
            }
        },
        ".input-group-append": {
            "children": {},
            "attributes": {
                "margin-left": "-1px"
            }
        },
        ".input-group-text": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center",
                "padding": "0.375rem 0.75rem",
                "margin-bottom": "0",
                "font-size": "1rem",
                "font-weight": "400",
                "line-height": "1.5",
                "color": "#495057",
                "text-align": "center",
                "white-space": "nowrap",
                "background-color": "#e9ecef",
                "border": "1px solid #ced4da",
                "border-radius": "0.25rem"
            }
        },
        ".input-group-text input[type=\"radio\"],\n  .input-group-text input[type=\"checkbox\"]": {
            "children": {},
            "attributes": {
                "margin-top": "0"
            }
        },
        ".input-group > .input-group-prepend > .btn,\n  .input-group > .input-group-prepend > .input-group-text,\n  .input-group > .input-group-append:not(:last-child) > .btn,\n  .input-group > .input-group-append:not(:last-child) > .input-group-text,\n  .input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n  .input-group > .input-group-append:last-child > .input-group-text:not(:last-child)": {
            "children": {},
            "attributes": {
                "border-top-right-radius": "0",
                "border-bottom-right-radius": "0"
            }
        },
        ".input-group > .input-group-append > .btn,\n  .input-group > .input-group-append > .input-group-text,\n  .input-group > .input-group-prepend:not(:first-child) > .btn,\n  .input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n  .input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n  .input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child)": {
            "children": {},
            "attributes": {
                "border-top-left-radius": "0",
                "border-bottom-left-radius": "0"
            }
        },
        ".custom-control": {
            "children": {},
            "attributes": {
                "position": "relative",
                "display": "block",
                "min-height": "1.5rem",
                "padding-left": "1.5rem"
            }
        },
        ".custom-control-inline": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-inline-box",
                    "-ms-inline-flexbox",
                    "inline-flex"
                ],
                "margin-right": "1rem"
            }
        },
        ".custom-control-input": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "z-index": "-1",
                "opacity": "0"
            }
        },
        ".custom-control-input:checked ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#007bff"
            }
        },
        ".custom-control-input:focus ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "box-shadow": "0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25)"
            }
        },
        ".custom-control-input:active ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#b3d7ff"
            }
        },
        ".custom-control-input:disabled ~ .custom-control-label": {
            "children": {},
            "attributes": {
                "color": "#6c757d"
            }
        },
        ".custom-control-input:disabled ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "background-color": "#e9ecef"
            }
        },
        ".custom-control-label": {
            "children": {},
            "attributes": {
                "margin-bottom": "0"
            }
        },
        ".custom-control-label::before": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "0.25rem",
                "left": "0",
                "display": "block",
                "width": "1rem",
                "height": "1rem",
                "pointer-events": "none",
                "content": "\"\"",
                "-webkit-user-select": "none",
                "-moz-user-select": "none",
                "-ms-user-select": "none",
                "user-select": "none",
                "background-color": "#dee2e6"
            }
        },
        ".custom-control-label::after": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "0.25rem",
                "left": "0",
                "display": "block",
                "width": "1rem",
                "height": "1rem",
                "content": "\"\"",
                "background-repeat": "no-repeat",
                "background-position": "center center",
                "background-size": "50% 50%"
            }
        },
        ".custom-checkbox .custom-control-label::before": {
            "children": {},
            "attributes": {
                "border-radius": "0.25rem"
            }
        },
        ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "background-color": "#007bff"
            }
        },
        ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::after": {
            "children": {},
            "attributes": {
                "background-image": "url(\"data:image/svg+xml",
                "charset=utf8,%3Csvg xmlns='http": "//www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")"
            }
        },
        ".custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "background-color": "#007bff"
            }
        },
        ".custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after": {
            "children": {},
            "attributes": {
                "background-image": "url(\"data:image/svg+xml",
                "charset=utf8,%3Csvg xmlns='http": "//www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")"
            }
        },
        ".custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "background-color": "rgba(0, 123, 255, 0.5)"
            }
        },
        ".custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "background-color": "rgba(0, 123, 255, 0.5)"
            }
        },
        ".custom-radio .custom-control-label::before": {
            "children": {},
            "attributes": {
                "border-radius": "50%"
            }
        },
        ".custom-radio .custom-control-input:checked ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "background-color": "#007bff"
            }
        },
        ".custom-radio .custom-control-input:checked ~ .custom-control-label::after": {
            "children": {},
            "attributes": {
                "background-image": "url(\"data:image/svg+xml",
                "charset=utf8,%3Csvg xmlns='http": "//www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")"
            }
        },
        ".custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before": {
            "children": {},
            "attributes": {
                "background-color": "rgba(0, 123, 255, 0.5)"
            }
        },
        ".custom-select": {
            "children": {},
            "attributes": {
                "display": "inline-block",
                "width": "100%",
                "height": "calc(2.25rem + 2px)",
                "padding": "0.375rem 1.75rem 0.375rem 0.75rem",
                "line-height": "1.5",
                "color": "#495057",
                "vertical-align": "middle",
                "background": "#fff url(\"data:image/svg+xml",
                "charset=utf8,%3Csvg xmlns='http": "//www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center",
                "background-size": "8px 10px",
                "border": "1px solid #ced4da",
                "border-radius": "0.25rem",
                "-webkit-appearance": "none",
                "-moz-appearance": "none",
                "appearance": "none"
            }
        },
        ".custom-select:focus": {
            "children": {},
            "attributes": {
                "border-color": "#80bdff",
                "outline": "0",
                "box-shadow": "inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(128, 189, 255, 0.5)"
            }
        },
        ".custom-select:focus::-ms-value": {
            "children": {},
            "attributes": {
                "color": "#495057",
                "background-color": "#fff"
            }
        },
        ".custom-select[multiple], .custom-select[size]:not([size=\"1\"])": {
            "children": {},
            "attributes": {
                "height": "auto",
                "padding-right": "0.75rem",
                "background-image": "none"
            }
        },
        ".custom-select:disabled": {
            "children": {},
            "attributes": {
                "color": "#6c757d",
                "background-color": "#e9ecef"
            }
        },
        ".custom-select::-ms-expand": {
            "children": {},
            "attributes": {
                "opacity": "0"
            }
        },
        ".custom-select-sm": {
            "children": {},
            "attributes": {
                "height": "calc(1.8125rem + 2px)",
                "padding-top": "0.375rem",
                "padding-bottom": "0.375rem",
                "font-size": "75%"
            }
        },
        ".custom-select-lg": {
            "children": {},
            "attributes": {
                "height": "calc(2.875rem + 2px)",
                "padding-top": "0.375rem",
                "padding-bottom": "0.375rem",
                "font-size": "125%"
            }
        },
        ".custom-file": {
            "children": {},
            "attributes": {
                "position": "relative",
                "display": "inline-block",
                "width": "100%",
                "height": "calc(2.25rem + 2px)",
                "margin-bottom": "0"
            }
        },
        ".custom-file-input": {
            "children": {},
            "attributes": {
                "position": "relative",
                "z-index": "2",
                "width": "100%",
                "height": "calc(2.25rem + 2px)",
                "margin": "0",
                "opacity": "0"
            }
        },
        ".custom-file-input:focus ~ .custom-file-control": {
            "children": {},
            "attributes": {
                "border-color": "#80bdff",
                "box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.25)"
            }
        },
        ".custom-file-input:focus ~ .custom-file-control::before": {
            "children": {},
            "attributes": {
                "border-color": "#80bdff"
            }
        },
        ".custom-file-input:lang(en) ~ .custom-file-label::after": {
            "children": {},
            "attributes": {
                "content": "\"Browse\""
            }
        },
        ".custom-file-label": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "0",
                "right": "0",
                "left": "0",
                "z-index": "1",
                "height": "calc(2.25rem + 2px)",
                "padding": "0.375rem 0.75rem",
                "line-height": "1.5",
                "color": "#495057",
                "background-color": "#fff",
                "border": "1px solid #ced4da",
                "border-radius": "0.25rem"
            }
        },
        ".custom-file-label::after": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "0",
                "right": "0",
                "bottom": "0",
                "z-index": "3",
                "display": "block",
                "height": "calc(calc(2.25rem + 2px) - 1px * 2)",
                "padding": "0.375rem 0.75rem",
                "line-height": "1.5",
                "color": "#495057",
                "content": "\"Browse\"",
                "background-color": "#e9ecef",
                "border-left": "1px solid #ced4da",
                "border-radius": "0 0.25rem 0.25rem 0"
            }
        },
        ".nav": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-ms-flex-wrap": "wrap",
                "flex-wrap": "wrap",
                "padding-left": "0",
                "margin-bottom": "0",
                "list-style": "none"
            }
        },
        ".nav-link": {
            "children": {},
            "attributes": {
                "display": "block",
                "padding": "0.5rem 1rem"
            }
        },
        ".nav-link:hover, .nav-link:focus": {
            "children": {},
            "attributes": {
                "text-decoration": "none"
            }
        },
        ".nav-link.disabled": {
            "children": {},
            "attributes": {
                "color": "#6c757d"
            }
        },
        ".nav-tabs": {
            "children": {},
            "attributes": {
                "border-bottom": "1px solid #dee2e6"
            }
        },
        ".nav-tabs .nav-item": {
            "children": {},
            "attributes": {
                "margin-bottom": "-1px"
            }
        },
        ".nav-tabs .nav-link": {
            "children": {},
            "attributes": {
                "border": "1px solid transparent",
                "border-top-left-radius": "0.25rem",
                "border-top-right-radius": "0.25rem"
            }
        },
        ".nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus": {
            "children": {},
            "attributes": {
                "border-color": "#e9ecef #e9ecef #dee2e6"
            }
        },
        ".nav-tabs .nav-link.disabled": {
            "children": {},
            "attributes": {
                "color": "#6c757d",
                "background-color": "transparent",
                "border-color": "transparent"
            }
        },
        ".nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link": {
            "children": {},
            "attributes": {
                "color": "#495057",
                "background-color": "#fff",
                "border-color": "#dee2e6 #dee2e6 #fff"
            }
        },
        ".nav-tabs .dropdown-menu": {
            "children": {},
            "attributes": {
                "margin-top": "-1px",
                "border-top-left-radius": "0",
                "border-top-right-radius": "0"
            }
        },
        ".nav-pills .nav-link": {
            "children": {},
            "attributes": {
                "border-radius": "0.25rem"
            }
        },
        ".nav-pills .nav-link.active,\n  .nav-pills .show > .nav-link": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#007bff"
            }
        },
        ".nav-fill .nav-item": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "1",
                "-ms-flex": "1 1 auto",
                "flex": "1 1 auto",
                "text-align": "center"
            }
        },
        ".nav-justified .nav-item": {
            "children": {},
            "attributes": {
                "-ms-flex-preferred-size": "0",
                "flex-basis": "0",
                "-webkit-box-flex": "1",
                "-ms-flex-positive": "1",
                "flex-grow": "1",
                "text-align": "center"
            }
        },
        ".tab-content > .tab-pane": {
            "children": {},
            "attributes": {
                "display": "none"
            }
        },
        ".tab-content > .active": {
            "children": {},
            "attributes": {
                "display": "block"
            }
        },
        ".navbar": {
            "children": {},
            "attributes": {
                "position": "relative",
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-ms-flex-wrap": "wrap",
                "flex-wrap": "wrap",
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center",
                "-webkit-box-pack": "justify",
                "-ms-flex-pack": "justify",
                "justify-content": "space-between",
                "padding": "0.5rem 1rem"
            }
        },
        ".navbar > .container,\n  .navbar > .container-fluid": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-ms-flex-wrap": "wrap",
                "flex-wrap": "wrap",
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center",
                "-webkit-box-pack": "justify",
                "-ms-flex-pack": "justify",
                "justify-content": "space-between"
            }
        },
        ".navbar-brand": {
            "children": {},
            "attributes": {
                "display": "inline-block",
                "padding-top": "0.3125rem",
                "padding-bottom": "0.3125rem",
                "margin-right": "1rem",
                "font-size": "1.25rem",
                "line-height": "inherit",
                "white-space": "nowrap"
            }
        },
        ".navbar-brand:hover, .navbar-brand:focus": {
            "children": {},
            "attributes": {
                "text-decoration": "none"
            }
        },
        ".navbar-nav": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-orient": "vertical",
                "-webkit-box-direction": "normal",
                "-ms-flex-direction": "column",
                "flex-direction": "column",
                "padding-left": "0",
                "margin-bottom": "0",
                "list-style": "none"
            }
        },
        ".navbar-nav .nav-link": {
            "children": {},
            "attributes": {
                "padding-right": "0",
                "padding-left": "0"
            }
        },
        ".navbar-nav .dropdown-menu": {
            "children": {},
            "attributes": {
                "position": "static",
                "float": "none"
            }
        },
        ".navbar-text": {
            "children": {},
            "attributes": {
                "display": "inline-block",
                "padding-top": "0.5rem",
                "padding-bottom": "0.5rem"
            }
        },
        ".navbar-collapse": {
            "children": {},
            "attributes": {
                "-ms-flex-preferred-size": "100%",
                "flex-basis": "100%",
                "-webkit-box-flex": "1",
                "-ms-flex-positive": "1",
                "flex-grow": "1",
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center"
            }
        },
        ".navbar-toggler": {
            "children": {},
            "attributes": {
                "padding": "0.25rem 0.75rem",
                "font-size": "1.25rem",
                "line-height": "1",
                "background-color": "transparent",
                "border": "1px solid transparent",
                "border-radius": "0.25rem"
            }
        },
        ".navbar-toggler:hover, .navbar-toggler:focus": {
            "children": {},
            "attributes": {
                "text-decoration": "none"
            }
        },
        ".navbar-toggler:not(:disabled):not(.disabled)": {
            "children": {},
            "attributes": {
                "cursor": "pointer"
            }
        },
        ".navbar-toggler-icon": {
            "children": {},
            "attributes": {
                "display": "inline-block",
                "width": "1.5em",
                "height": "1.5em",
                "vertical-align": "middle",
                "content": "\"\"",
                "background": "no-repeat center center",
                "background-size": "100% 100%"
            }
        },
        ".navbar-expand": {
            "children": {},
            "attributes": {
                "-webkit-box-orient": "horizontal",
                "-webkit-box-direction": "normal",
                "-ms-flex-flow": "row nowrap",
                "flex-flow": "row nowrap",
                "-webkit-box-pack": "start",
                "-ms-flex-pack": "start",
                "justify-content": "flex-start"
            }
        },
        ".navbar-expand > .container,\n  .navbar-expand > .container-fluid": {
            "children": {},
            "attributes": {
                "padding-right": "0",
                "padding-left": "0",
                "-ms-flex-wrap": "nowrap",
                "flex-wrap": "nowrap"
            }
        },
        ".navbar-expand .navbar-nav": {
            "children": {},
            "attributes": {
                "-webkit-box-orient": "horizontal",
                "-webkit-box-direction": "normal",
                "-ms-flex-direction": "row",
                "flex-direction": "row"
            }
        },
        ".navbar-expand .navbar-nav .dropdown-menu": {
            "children": {},
            "attributes": {
                "position": "absolute"
            }
        },
        ".navbar-expand .navbar-nav .dropdown-menu-right": {
            "children": {},
            "attributes": {
                "right": "0",
                "left": "auto"
            }
        },
        ".navbar-expand .navbar-nav .nav-link": {
            "children": {},
            "attributes": {
                "padding-right": "0.5rem",
                "padding-left": "0.5rem"
            }
        },
        ".navbar-expand .navbar-collapse": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box !important",
                    "-ms-flexbox !important",
                    "flex !important"
                ],
                "-ms-flex-preferred-size": "auto",
                "flex-basis": "auto"
            }
        },
        ".navbar-expand .navbar-toggler": {
            "children": {},
            "attributes": {
                "display": "none"
            }
        },
        ".navbar-expand .dropup .dropdown-menu": {
            "children": {},
            "attributes": {
                "top": "auto",
                "bottom": "100%"
            }
        },
        ".navbar-light .navbar-brand": {
            "children": {},
            "attributes": {
                "color": "rgba(0, 0, 0, 0.9)"
            }
        },
        ".navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus": {
            "children": {},
            "attributes": {
                "color": "rgba(0, 0, 0, 0.9)"
            }
        },
        ".navbar-light .navbar-nav .nav-link": {
            "children": {},
            "attributes": {
                "color": "rgba(0, 0, 0, 0.5)"
            }
        },
        ".navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus": {
            "children": {},
            "attributes": {
                "color": "rgba(0, 0, 0, 0.7)"
            }
        },
        ".navbar-light .navbar-nav .nav-link.disabled": {
            "children": {},
            "attributes": {
                "color": "rgba(0, 0, 0, 0.3)"
            }
        },
        ".navbar-light .navbar-nav .show > .nav-link,\n  .navbar-light .navbar-nav .active > .nav-link,\n  .navbar-light .navbar-nav .nav-link.show,\n  .navbar-light .navbar-nav .nav-link.active": {
            "children": {},
            "attributes": {
                "color": "rgba(0, 0, 0, 0.9)"
            }
        },
        ".navbar-light .navbar-toggler": {
            "children": {},
            "attributes": {
                "color": "rgba(0, 0, 0, 0.5)",
                "border-color": "rgba(0, 0, 0, 0.1)"
            }
        },
        ".navbar-light .navbar-toggler-icon": {
            "children": {},
            "attributes": {
                "background-image": "url(\"data:image/svg+xml",
                "charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http": "//www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")"
            }
        },
        ".navbar-light .navbar-text": {
            "children": {},
            "attributes": {
                "color": "rgba(0, 0, 0, 0.5)"
            }
        },
        ".navbar-light .navbar-text a": {
            "children": {},
            "attributes": {
                "color": "rgba(0, 0, 0, 0.9)"
            }
        },
        ".navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus": {
            "children": {},
            "attributes": {
                "color": "rgba(0, 0, 0, 0.9)"
            }
        },
        ".navbar-dark .navbar-brand": {
            "children": {},
            "attributes": {
                "color": "#fff"
            }
        },
        ".navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus": {
            "children": {},
            "attributes": {
                "color": "#fff"
            }
        },
        ".navbar-dark .navbar-nav .nav-link": {
            "children": {},
            "attributes": {
                "color": "rgba(255, 255, 255, 0.5)"
            }
        },
        ".navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus": {
            "children": {},
            "attributes": {
                "color": "rgba(255, 255, 255, 0.75)"
            }
        },
        ".navbar-dark .navbar-nav .nav-link.disabled": {
            "children": {},
            "attributes": {
                "color": "rgba(255, 255, 255, 0.25)"
            }
        },
        ".navbar-dark .navbar-nav .show > .nav-link,\n  .navbar-dark .navbar-nav .active > .nav-link,\n  .navbar-dark .navbar-nav .nav-link.show,\n  .navbar-dark .navbar-nav .nav-link.active": {
            "children": {},
            "attributes": {
                "color": "#fff"
            }
        },
        ".navbar-dark .navbar-toggler": {
            "children": {},
            "attributes": {
                "color": "rgba(255, 255, 255, 0.5)",
                "border-color": "rgba(255, 255, 255, 0.1)"
            }
        },
        ".navbar-dark .navbar-toggler-icon": {
            "children": {},
            "attributes": {
                "background-image": "url(\"data:image/svg+xml",
                "charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http": "//www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")"
            }
        },
        ".navbar-dark .navbar-text": {
            "children": {},
            "attributes": {
                "color": "rgba(255, 255, 255, 0.5)"
            }
        },
        ".navbar-dark .navbar-text a": {
            "children": {},
            "attributes": {
                "color": "#fff"
            }
        },
        ".navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus": {
            "children": {},
            "attributes": {
                "color": "#fff"
            }
        },
        ".card": {
            "children": {},
            "attributes": {
                "position": "relative",
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-orient": "vertical",
                "-webkit-box-direction": "normal",
                "-ms-flex-direction": "column",
                "flex-direction": "column",
                "min-width": "0",
                "word-wrap": "break-word",
                "background-color": "#fff",
                "background-clip": "border-box",
                "border": "1px solid rgba(0, 0, 0, 0.125)",
                "border-radius": "0.25rem"
            }
        },
        ".card > hr": {
            "children": {},
            "attributes": {
                "margin-right": "0",
                "margin-left": "0"
            }
        },
        ".card > .list-group:first-child .list-group-item:first-child": {
            "children": {},
            "attributes": {
                "border-top-left-radius": "0.25rem",
                "border-top-right-radius": "0.25rem"
            }
        },
        ".card > .list-group:last-child .list-group-item:last-child": {
            "children": {},
            "attributes": {
                "border-bottom-right-radius": "0.25rem",
                "border-bottom-left-radius": "0.25rem"
            }
        },
        ".card-body": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "1",
                "-ms-flex": "1 1 auto",
                "flex": "1 1 auto",
                "padding": "1.25rem"
            }
        },
        ".card-title": {
            "children": {},
            "attributes": {
                "margin-bottom": "0.75rem"
            }
        },
        ".card-subtitle": {
            "children": {},
            "attributes": {
                "margin-top": "-0.375rem",
                "margin-bottom": "0"
            }
        },
        ".card-text:last-child": {
            "children": {},
            "attributes": {
                "margin-bottom": "0"
            }
        },
        ".card-link:hover": {
            "children": {},
            "attributes": {
                "text-decoration": "none"
            }
        },
        ".card-link + .card-link": {
            "children": {},
            "attributes": {
                "margin-left": "1.25rem"
            }
        },
        ".card-header": {
            "children": {},
            "attributes": {
                "padding": "0.75rem 1.25rem",
                "margin-bottom": "0",
                "background-color": "rgba(0, 0, 0, 0.03)",
                "border-bottom": "1px solid rgba(0, 0, 0, 0.125)"
            }
        },
        ".card-header:first-child": {
            "children": {},
            "attributes": {
                "border-radius": "calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0"
            }
        },
        ".card-header + .list-group .list-group-item:first-child": {
            "children": {},
            "attributes": {
                "border-top": "0"
            }
        },
        ".card-footer": {
            "children": {},
            "attributes": {
                "padding": "0.75rem 1.25rem",
                "background-color": "rgba(0, 0, 0, 0.03)",
                "border-top": "1px solid rgba(0, 0, 0, 0.125)"
            }
        },
        ".card-footer:last-child": {
            "children": {},
            "attributes": {
                "border-radius": "0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)"
            }
        },
        ".card-header-tabs": {
            "children": {},
            "attributes": {
                "margin-right": "-0.625rem",
                "margin-bottom": "-0.75rem",
                "margin-left": "-0.625rem",
                "border-bottom": "0"
            }
        },
        ".card-header-pills": {
            "children": {},
            "attributes": {
                "margin-right": "-0.625rem",
                "margin-left": "-0.625rem"
            }
        },
        ".card-img-overlay": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "0",
                "right": "0",
                "bottom": "0",
                "left": "0",
                "padding": "1.25rem"
            }
        },
        ".card-img": {
            "children": {},
            "attributes": {
                "width": "100%",
                "border-radius": "calc(0.25rem - 1px)"
            }
        },
        ".card-img-top": {
            "children": {},
            "attributes": {
                "width": "100%",
                "border-top-left-radius": "calc(0.25rem - 1px)",
                "border-top-right-radius": "calc(0.25rem - 1px)"
            }
        },
        ".card-img-bottom": {
            "children": {},
            "attributes": {
                "width": "100%",
                "border-bottom-right-radius": "calc(0.25rem - 1px)",
                "border-bottom-left-radius": "calc(0.25rem - 1px)"
            }
        },
        ".card-deck": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-orient": "vertical",
                "-webkit-box-direction": "normal",
                "-ms-flex-direction": "column",
                "flex-direction": "column"
            }
        },
        ".card-deck .card": {
            "children": {},
            "attributes": {
                "margin-bottom": "15px"
            }
        },
        ".card-group": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-orient": "vertical",
                "-webkit-box-direction": "normal",
                "-ms-flex-direction": "column",
                "flex-direction": "column"
            }
        },
        ".card-group > .card": {
            "children": {},
            "attributes": {
                "margin-bottom": "15px"
            }
        },
        ".card-columns .card": {
            "children": {},
            "attributes": {
                "margin-bottom": "0.75rem"
            }
        },
        ".breadcrumb": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-ms-flex-wrap": "wrap",
                "flex-wrap": "wrap",
                "padding": "0.75rem 1rem",
                "margin-bottom": "1rem",
                "list-style": "none",
                "background-color": "#e9ecef",
                "border-radius": "0.25rem"
            }
        },
        ".breadcrumb-item + .breadcrumb-item::before": {
            "children": {},
            "attributes": {
                "display": "inline-block",
                "padding-right": "0.5rem",
                "padding-left": "0.5rem",
                "color": "#6c757d",
                "content": "\"/\""
            }
        },
        ".breadcrumb-item + .breadcrumb-item:hover::before": {
            "children": {},
            "attributes": {
                "text-decoration": "none"
            }
        },
        ".breadcrumb-item.active": {
            "children": {},
            "attributes": {
                "color": "#6c757d"
            }
        },
        ".pagination": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "padding-left": "0",
                "list-style": "none",
                "border-radius": "0.25rem"
            }
        },
        ".page-link": {
            "children": {},
            "attributes": {
                "position": "relative",
                "display": "block",
                "padding": "0.5rem 0.75rem",
                "margin-left": "-1px",
                "line-height": "1.25",
                "color": "#007bff",
                "background-color": "#fff",
                "border": "1px solid #dee2e6"
            }
        },
        ".page-link:hover": {
            "children": {},
            "attributes": {
                "color": "#0056b3",
                "text-decoration": "none",
                "background-color": "#e9ecef",
                "border-color": "#dee2e6"
            }
        },
        ".page-link:focus": {
            "children": {},
            "attributes": {
                "z-index": "2",
                "outline": "0",
                "box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.25)"
            }
        },
        ".page-link:not(:disabled):not(.disabled)": {
            "children": {},
            "attributes": {
                "cursor": "pointer"
            }
        },
        ".page-item:first-child .page-link": {
            "children": {},
            "attributes": {
                "margin-left": "0",
                "border-top-left-radius": "0.25rem",
                "border-bottom-left-radius": "0.25rem"
            }
        },
        ".page-item:last-child .page-link": {
            "children": {},
            "attributes": {
                "border-top-right-radius": "0.25rem",
                "border-bottom-right-radius": "0.25rem"
            }
        },
        ".page-item.active .page-link": {
            "children": {},
            "attributes": {
                "z-index": "1",
                "color": "#fff",
                "background-color": "#007bff",
                "border-color": "#007bff"
            }
        },
        ".page-item.disabled .page-link": {
            "children": {},
            "attributes": {
                "color": "#6c757d",
                "pointer-events": "none",
                "cursor": "auto",
                "background-color": "#fff",
                "border-color": "#dee2e6"
            }
        },
        ".pagination-lg .page-link": {
            "children": {},
            "attributes": {
                "padding": "0.75rem 1.5rem",
                "font-size": "1.25rem",
                "line-height": "1.5"
            }
        },
        ".pagination-lg .page-item:first-child .page-link": {
            "children": {},
            "attributes": {
                "border-top-left-radius": "0.3rem",
                "border-bottom-left-radius": "0.3rem"
            }
        },
        ".pagination-lg .page-item:last-child .page-link": {
            "children": {},
            "attributes": {
                "border-top-right-radius": "0.3rem",
                "border-bottom-right-radius": "0.3rem"
            }
        },
        ".pagination-sm .page-link": {
            "children": {},
            "attributes": {
                "padding": "0.25rem 0.5rem",
                "font-size": "0.875rem",
                "line-height": "1.5"
            }
        },
        ".pagination-sm .page-item:first-child .page-link": {
            "children": {},
            "attributes": {
                "border-top-left-radius": "0.2rem",
                "border-bottom-left-radius": "0.2rem"
            }
        },
        ".pagination-sm .page-item:last-child .page-link": {
            "children": {},
            "attributes": {
                "border-top-right-radius": "0.2rem",
                "border-bottom-right-radius": "0.2rem"
            }
        },
        ".badge": {
            "children": {},
            "attributes": {
                "display": "inline-block",
                "padding": "0.25em 0.4em",
                "font-size": "75%",
                "font-weight": "700",
                "line-height": "1",
                "text-align": "center",
                "white-space": "nowrap",
                "vertical-align": "baseline",
                "border-radius": "0.25rem"
            }
        },
        ".badge:empty": {
            "children": {},
            "attributes": {
                "display": "none"
            }
        },
        ".btn .badge": {
            "children": {},
            "attributes": {
                "position": "relative",
                "top": "-1px"
            }
        },
        ".badge-pill": {
            "children": {},
            "attributes": {
                "padding-right": "0.6em",
                "padding-left": "0.6em",
                "border-radius": "10rem"
            }
        },
        ".badge-primary": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#007bff"
            }
        },
        ".badge-primary[href]:hover, .badge-primary[href]:focus": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "text-decoration": "none",
                "background-color": "#0062cc"
            }
        },
        ".badge-secondary": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#6c757d"
            }
        },
        ".badge-secondary[href]:hover, .badge-secondary[href]:focus": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "text-decoration": "none",
                "background-color": "#545b62"
            }
        },
        ".badge-success": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#28a745"
            }
        },
        ".badge-success[href]:hover, .badge-success[href]:focus": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "text-decoration": "none",
                "background-color": "#1e7e34"
            }
        },
        ".badge-info": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#17a2b8"
            }
        },
        ".badge-info[href]:hover, .badge-info[href]:focus": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "text-decoration": "none",
                "background-color": "#117a8b"
            }
        },
        ".badge-warning": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#ffc107"
            }
        },
        ".badge-warning[href]:hover, .badge-warning[href]:focus": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "text-decoration": "none",
                "background-color": "#d39e00"
            }
        },
        ".badge-danger": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#dc3545"
            }
        },
        ".badge-danger[href]:hover, .badge-danger[href]:focus": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "text-decoration": "none",
                "background-color": "#bd2130"
            }
        },
        ".badge-light": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#f8f9fa"
            }
        },
        ".badge-light[href]:hover, .badge-light[href]:focus": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "text-decoration": "none",
                "background-color": "#dae0e5"
            }
        },
        ".badge-dark": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#343a40"
            }
        },
        ".badge-dark[href]:hover, .badge-dark[href]:focus": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "text-decoration": "none",
                "background-color": "#1d2124"
            }
        },
        ".jumbotron": {
            "children": {},
            "attributes": {
                "padding": "2rem 1rem",
                "margin-bottom": "2rem",
                "background-color": "#e9ecef",
                "border-radius": "0.3rem"
            }
        },
        ".jumbotron-fluid": {
            "children": {},
            "attributes": {
                "padding-right": "0",
                "padding-left": "0",
                "border-radius": "0"
            }
        },
        ".alert": {
            "children": {},
            "attributes": {
                "position": "relative",
                "padding": "0.75rem 1.25rem",
                "margin-bottom": "1rem",
                "border": "1px solid transparent",
                "border-radius": "0.25rem"
            }
        },
        ".alert-heading": {
            "children": {},
            "attributes": {
                "color": "inherit"
            }
        },
        ".alert-link": {
            "children": {},
            "attributes": {
                "font-weight": "700"
            }
        },
        ".alert-dismissible": {
            "children": {},
            "attributes": {
                "padding-right": "4rem"
            }
        },
        ".alert-dismissible .close": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "0",
                "right": "0",
                "padding": "0.75rem 1.25rem",
                "color": "inherit"
            }
        },
        ".alert-primary": {
            "children": {},
            "attributes": {
                "color": "#004085",
                "background-color": "#cce5ff",
                "border-color": "#b8daff"
            }
        },
        ".alert-primary hr": {
            "children": {},
            "attributes": {
                "border-top-color": "#9fcdff"
            }
        },
        ".alert-primary .alert-link": {
            "children": {},
            "attributes": {
                "color": "#002752"
            }
        },
        ".alert-secondary": {
            "children": {},
            "attributes": {
                "color": "#383d41",
                "background-color": "#e2e3e5",
                "border-color": "#d6d8db"
            }
        },
        ".alert-secondary hr": {
            "children": {},
            "attributes": {
                "border-top-color": "#c8cbcf"
            }
        },
        ".alert-secondary .alert-link": {
            "children": {},
            "attributes": {
                "color": "#202326"
            }
        },
        ".alert-success": {
            "children": {},
            "attributes": {
                "color": "#155724",
                "background-color": "#d4edda",
                "border-color": "#c3e6cb"
            }
        },
        ".alert-success hr": {
            "children": {},
            "attributes": {
                "border-top-color": "#b1dfbb"
            }
        },
        ".alert-success .alert-link": {
            "children": {},
            "attributes": {
                "color": "#0b2e13"
            }
        },
        ".alert-info": {
            "children": {},
            "attributes": {
                "color": "#0c5460",
                "background-color": "#d1ecf1",
                "border-color": "#bee5eb"
            }
        },
        ".alert-info hr": {
            "children": {},
            "attributes": {
                "border-top-color": "#abdde5"
            }
        },
        ".alert-info .alert-link": {
            "children": {},
            "attributes": {
                "color": "#062c33"
            }
        },
        ".alert-warning": {
            "children": {},
            "attributes": {
                "color": "#856404",
                "background-color": "#fff3cd",
                "border-color": "#ffeeba"
            }
        },
        ".alert-warning hr": {
            "children": {},
            "attributes": {
                "border-top-color": "#ffe8a1"
            }
        },
        ".alert-warning .alert-link": {
            "children": {},
            "attributes": {
                "color": "#533f03"
            }
        },
        ".alert-danger": {
            "children": {},
            "attributes": {
                "color": "#721c24",
                "background-color": "#f8d7da",
                "border-color": "#f5c6cb"
            }
        },
        ".alert-danger hr": {
            "children": {},
            "attributes": {
                "border-top-color": "#f1b0b7"
            }
        },
        ".alert-danger .alert-link": {
            "children": {},
            "attributes": {
                "color": "#491217"
            }
        },
        ".alert-light": {
            "children": {},
            "attributes": {
                "color": "#818182",
                "background-color": "#fefefe",
                "border-color": "#fdfdfe"
            }
        },
        ".alert-light hr": {
            "children": {},
            "attributes": {
                "border-top-color": "#ececf6"
            }
        },
        ".alert-light .alert-link": {
            "children": {},
            "attributes": {
                "color": "#686868"
            }
        },
        ".alert-dark": {
            "children": {},
            "attributes": {
                "color": "#1b1e21",
                "background-color": "#d6d8d9",
                "border-color": "#c6c8ca"
            }
        },
        ".alert-dark hr": {
            "children": {},
            "attributes": {
                "border-top-color": "#b9bbbe"
            }
        },
        ".alert-dark .alert-link": {
            "children": {},
            "attributes": {
                "color": "#040505"
            }
        },
        "@-webkit-keyframes progress-bar-stripes": {
            "children": {
                "from": {
                    "children": {},
                    "attributes": {
                        "background-position": "1rem 0"
                    }
                },
                "to": {
                    "children": {},
                    "attributes": {
                        "background-position": "0 0"
                    }
                }
            },
            "attributes": {}
        },
        "@keyframes progress-bar-stripes": {
            "children": {
                "from": {
                    "children": {},
                    "attributes": {
                        "background-position": "1rem 0"
                    }
                },
                "to": {
                    "children": {},
                    "attributes": {
                        "background-position": "0 0"
                    }
                }
            },
            "attributes": {}
        },
        ".progress": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "height": "1rem",
                "overflow": "hidden",
                "font-size": "0.75rem",
                "background-color": "#e9ecef",
                "border-radius": "0.25rem"
            }
        },
        ".progress-bar": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-orient": "vertical",
                "-webkit-box-direction": "normal",
                "-ms-flex-direction": "column",
                "flex-direction": "column",
                "-webkit-box-pack": "center",
                "-ms-flex-pack": "center",
                "justify-content": "center",
                "color": "#fff",
                "text-align": "center",
                "background-color": "#007bff",
                "transition": "width 0.6s ease"
            }
        },
        ".progress-bar-striped": {
            "children": {},
            "attributes": {
                "background-image": "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
                "background-size": "1rem 1rem"
            }
        },
        ".progress-bar-animated": {
            "children": {},
            "attributes": {
                "-webkit-animation": "progress-bar-stripes 1s linear infinite",
                "animation": "progress-bar-stripes 1s linear infinite"
            }
        },
        ".media": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-align": "start",
                "-ms-flex-align": "start",
                "align-items": "flex-start"
            }
        },
        ".media-body": {
            "children": {},
            "attributes": {
                "-webkit-box-flex": "1",
                "-ms-flex": "1",
                "flex": "1"
            }
        },
        ".list-group": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-orient": "vertical",
                "-webkit-box-direction": "normal",
                "-ms-flex-direction": "column",
                "flex-direction": "column",
                "padding-left": "0",
                "margin-bottom": "0"
            }
        },
        ".list-group-item-action": {
            "children": {},
            "attributes": {
                "width": "100%",
                "color": "#495057",
                "text-align": "inherit"
            }
        },
        ".list-group-item-action:hover, .list-group-item-action:focus": {
            "children": {},
            "attributes": {
                "color": "#495057",
                "text-decoration": "none",
                "background-color": "#f8f9fa"
            }
        },
        ".list-group-item-action:active": {
            "children": {},
            "attributes": {
                "color": "#212529",
                "background-color": "#e9ecef"
            }
        },
        ".list-group-item": {
            "children": {},
            "attributes": {
                "position": "relative",
                "display": "block",
                "padding": "0.75rem 1.25rem",
                "margin-bottom": "-1px",
                "background-color": "#fff",
                "border": "1px solid rgba(0, 0, 0, 0.125)"
            }
        },
        ".list-group-item:first-child": {
            "children": {},
            "attributes": {
                "border-top-left-radius": "0.25rem",
                "border-top-right-radius": "0.25rem"
            }
        },
        ".list-group-item:last-child": {
            "children": {},
            "attributes": {
                "margin-bottom": "0",
                "border-bottom-right-radius": "0.25rem",
                "border-bottom-left-radius": "0.25rem"
            }
        },
        ".list-group-item:hover, .list-group-item:focus": {
            "children": {},
            "attributes": {
                "z-index": "1",
                "text-decoration": "none"
            }
        },
        ".list-group-item.disabled, .list-group-item:disabled": {
            "children": {},
            "attributes": {
                "color": "#6c757d",
                "background-color": "#fff"
            }
        },
        ".list-group-item.active": {
            "children": {},
            "attributes": {
                "z-index": "2",
                "color": "#fff",
                "background-color": "#007bff",
                "border-color": "#007bff"
            }
        },
        ".list-group-flush .list-group-item": {
            "children": {},
            "attributes": {
                "border-right": "0",
                "border-left": "0",
                "border-radius": "0"
            }
        },
        ".list-group-flush:first-child .list-group-item:first-child": {
            "children": {},
            "attributes": {
                "border-top": "0"
            }
        },
        ".list-group-flush:last-child .list-group-item:last-child": {
            "children": {},
            "attributes": {
                "border-bottom": "0"
            }
        },
        ".list-group-item-primary": {
            "children": {},
            "attributes": {
                "color": "#004085",
                "background-color": "#b8daff"
            }
        },
        ".list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus": {
            "children": {},
            "attributes": {
                "color": "#004085",
                "background-color": "#9fcdff"
            }
        },
        ".list-group-item-primary.list-group-item-action.active": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#004085",
                "border-color": "#004085"
            }
        },
        ".list-group-item-secondary": {
            "children": {},
            "attributes": {
                "color": "#383d41",
                "background-color": "#d6d8db"
            }
        },
        ".list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus": {
            "children": {},
            "attributes": {
                "color": "#383d41",
                "background-color": "#c8cbcf"
            }
        },
        ".list-group-item-secondary.list-group-item-action.active": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#383d41",
                "border-color": "#383d41"
            }
        },
        ".list-group-item-success": {
            "children": {},
            "attributes": {
                "color": "#155724",
                "background-color": "#c3e6cb"
            }
        },
        ".list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus": {
            "children": {},
            "attributes": {
                "color": "#155724",
                "background-color": "#b1dfbb"
            }
        },
        ".list-group-item-success.list-group-item-action.active": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#155724",
                "border-color": "#155724"
            }
        },
        ".list-group-item-info": {
            "children": {},
            "attributes": {
                "color": "#0c5460",
                "background-color": "#bee5eb"
            }
        },
        ".list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus": {
            "children": {},
            "attributes": {
                "color": "#0c5460",
                "background-color": "#abdde5"
            }
        },
        ".list-group-item-info.list-group-item-action.active": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#0c5460",
                "border-color": "#0c5460"
            }
        },
        ".list-group-item-warning": {
            "children": {},
            "attributes": {
                "color": "#856404",
                "background-color": "#ffeeba"
            }
        },
        ".list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus": {
            "children": {},
            "attributes": {
                "color": "#856404",
                "background-color": "#ffe8a1"
            }
        },
        ".list-group-item-warning.list-group-item-action.active": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#856404",
                "border-color": "#856404"
            }
        },
        ".list-group-item-danger": {
            "children": {},
            "attributes": {
                "color": "#721c24",
                "background-color": "#f5c6cb"
            }
        },
        ".list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus": {
            "children": {},
            "attributes": {
                "color": "#721c24",
                "background-color": "#f1b0b7"
            }
        },
        ".list-group-item-danger.list-group-item-action.active": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#721c24",
                "border-color": "#721c24"
            }
        },
        ".list-group-item-light": {
            "children": {},
            "attributes": {
                "color": "#818182",
                "background-color": "#fdfdfe"
            }
        },
        ".list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus": {
            "children": {},
            "attributes": {
                "color": "#818182",
                "background-color": "#ececf6"
            }
        },
        ".list-group-item-light.list-group-item-action.active": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#818182",
                "border-color": "#818182"
            }
        },
        ".list-group-item-dark": {
            "children": {},
            "attributes": {
                "color": "#1b1e21",
                "background-color": "#c6c8ca"
            }
        },
        ".list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus": {
            "children": {},
            "attributes": {
                "color": "#1b1e21",
                "background-color": "#b9bbbe"
            }
        },
        ".list-group-item-dark.list-group-item-action.active": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "background-color": "#1b1e21",
                "border-color": "#1b1e21"
            }
        },
        ".close": {
            "children": {},
            "attributes": {
                "float": "right",
                "font-size": "1.5rem",
                "font-weight": "700",
                "line-height": "1",
                "color": "#000",
                "text-shadow": "0 1px 0 #fff",
                "opacity": ".5"
            }
        },
        ".close:hover, .close:focus": {
            "children": {},
            "attributes": {
                "color": "#000",
                "text-decoration": "none",
                "opacity": ".75"
            }
        },
        ".close:not(:disabled):not(.disabled)": {
            "children": {},
            "attributes": {
                "cursor": "pointer"
            }
        },
        "button.close": {
            "children": {},
            "attributes": {
                "padding": "0",
                "background-color": "transparent",
                "border": "0",
                "-webkit-appearance": "none"
            }
        },
        ".modal-open": {
            "children": {},
            "attributes": {
                "overflow": "hidden"
            }
        },
        ".modal": {
            "children": {},
            "attributes": {
                "position": "fixed",
                "top": "0",
                "right": "0",
                "bottom": "0",
                "left": "0",
                "z-index": "1050",
                "display": "none",
                "overflow": "hidden",
                "outline": "0"
            }
        },
        ".modal-open .modal": {
            "children": {},
            "attributes": {
                "overflow-x": "hidden",
                "overflow-y": "auto"
            }
        },
        ".modal-dialog": {
            "children": {},
            "attributes": {
                "position": "relative",
                "width": "auto",
                "margin": "0.5rem",
                "pointer-events": "none"
            }
        },
        ".modal.fade .modal-dialog": {
            "children": {},
            "attributes": {
                "transition": [
                    "-webkit-transform 0.3s ease-out",
                    "transform 0.3s ease-out",
                    "transform 0.3s ease-out, -webkit-transform 0.3s ease-out"
                ],
                "-webkit-transform": "translate(0, -25%)",
                "transform": "translate(0, -25%)"
            }
        },
        ".modal.show .modal-dialog": {
            "children": {},
            "attributes": {
                "-webkit-transform": "translate(0, 0)",
                "transform": "translate(0, 0)"
            }
        },
        ".modal-dialog-centered": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center",
                "min-height": "calc(100% - (0.5rem * 2))"
            }
        },
        ".modal-content": {
            "children": {},
            "attributes": {
                "position": "relative",
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-orient": "vertical",
                "-webkit-box-direction": "normal",
                "-ms-flex-direction": "column",
                "flex-direction": "column",
                "width": "100%",
                "pointer-events": "auto",
                "background-color": "#fff",
                "background-clip": "padding-box",
                "border": "1px solid rgba(0, 0, 0, 0.2)",
                "border-radius": "0.3rem",
                "outline": "0"
            }
        },
        ".modal-backdrop": {
            "children": {},
            "attributes": {
                "position": "fixed",
                "top": "0",
                "right": "0",
                "bottom": "0",
                "left": "0",
                "z-index": "1040",
                "background-color": "#000"
            }
        },
        ".modal-backdrop.fade": {
            "children": {},
            "attributes": {
                "opacity": "0"
            }
        },
        ".modal-backdrop.show": {
            "children": {},
            "attributes": {
                "opacity": "0.5"
            }
        },
        ".modal-header": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-align": "start",
                "-ms-flex-align": "start",
                "align-items": "flex-start",
                "-webkit-box-pack": "justify",
                "-ms-flex-pack": "justify",
                "justify-content": "space-between",
                "padding": "1rem",
                "border-bottom": "1px solid #e9ecef",
                "border-top-left-radius": "0.3rem",
                "border-top-right-radius": "0.3rem"
            }
        },
        ".modal-header .close": {
            "children": {},
            "attributes": {
                "padding": "1rem",
                "margin": "-1rem -1rem -1rem auto"
            }
        },
        ".modal-title": {
            "children": {},
            "attributes": {
                "margin-bottom": "0",
                "line-height": "1.5"
            }
        },
        ".modal-body": {
            "children": {},
            "attributes": {
                "position": "relative",
                "-webkit-box-flex": "1",
                "-ms-flex": "1 1 auto",
                "flex": "1 1 auto",
                "padding": "1rem"
            }
        },
        ".modal-footer": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center",
                "-webkit-box-pack": "end",
                "-ms-flex-pack": "end",
                "justify-content": "flex-end",
                "padding": "1rem",
                "border-top": "1px solid #e9ecef"
            }
        },
        ".modal-footer > :not(:first-child)": {
            "children": {},
            "attributes": {
                "margin-left": ".25rem"
            }
        },
        ".modal-footer > :not(:last-child)": {
            "children": {},
            "attributes": {
                "margin-right": ".25rem"
            }
        },
        ".modal-scrollbar-measure": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "-9999px",
                "width": "50px",
                "height": "50px",
                "overflow": "scroll"
            }
        },
        ".tooltip": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "z-index": "1070",
                "display": "block",
                "margin": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
                "font-style": "normal",
                "font-weight": "400",
                "line-height": "1.5",
                "text-align": [
                    "left",
                    "start"
                ],
                "text-decoration": "none",
                "text-shadow": "none",
                "text-transform": "none",
                "letter-spacing": "normal",
                "word-break": "normal",
                "word-spacing": "normal",
                "white-space": "normal",
                "line-break": "auto",
                "font-size": "0.875rem",
                "word-wrap": "break-word",
                "opacity": "0"
            }
        },
        ".tooltip.show": {
            "children": {},
            "attributes": {
                "opacity": "0.9"
            }
        },
        ".tooltip .arrow": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "display": "block",
                "width": "0.8rem",
                "height": "0.4rem"
            }
        },
        ".tooltip .arrow::before": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "content": "\"\"",
                "border-color": "transparent",
                "border-style": "solid"
            }
        },
        ".bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"]": {
            "children": {},
            "attributes": {
                "padding": "0.4rem 0"
            }
        },
        ".bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow": {
            "children": {},
            "attributes": {
                "bottom": "0"
            }
        },
        ".bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before": {
            "children": {},
            "attributes": {
                "top": "0",
                "border-width": "0.4rem 0.4rem 0",
                "border-top-color": "#000"
            }
        },
        ".bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"]": {
            "children": {},
            "attributes": {
                "padding": "0 0.4rem"
            }
        },
        ".bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow": {
            "children": {},
            "attributes": {
                "left": "0",
                "width": "0.4rem",
                "height": "0.8rem"
            }
        },
        ".bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before": {
            "children": {},
            "attributes": {
                "right": "0",
                "border-width": "0.4rem 0.4rem 0.4rem 0",
                "border-right-color": "#000"
            }
        },
        ".bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"]": {
            "children": {},
            "attributes": {
                "padding": "0.4rem 0"
            }
        },
        ".bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow": {
            "children": {},
            "attributes": {
                "top": "0"
            }
        },
        ".bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before": {
            "children": {},
            "attributes": {
                "bottom": "0",
                "border-width": "0 0.4rem 0.4rem",
                "border-bottom-color": "#000"
            }
        },
        ".bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"]": {
            "children": {},
            "attributes": {
                "padding": "0 0.4rem"
            }
        },
        ".bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow": {
            "children": {},
            "attributes": {
                "right": "0",
                "width": "0.4rem",
                "height": "0.8rem"
            }
        },
        ".bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before": {
            "children": {},
            "attributes": {
                "left": "0",
                "border-width": "0.4rem 0 0.4rem 0.4rem",
                "border-left-color": "#000"
            }
        },
        ".tooltip-inner": {
            "children": {},
            "attributes": {
                "max-width": "200px",
                "padding": "0.25rem 0.5rem",
                "color": "#fff",
                "text-align": "center",
                "background-color": "#000",
                "border-radius": "0.25rem"
            }
        },
        ".popover": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "0",
                "left": "0",
                "z-index": "1060",
                "display": "block",
                "max-width": "276px",
                "font-family": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
                "font-style": "normal",
                "font-weight": "400",
                "line-height": "1.5",
                "text-align": [
                    "left",
                    "start"
                ],
                "text-decoration": "none",
                "text-shadow": "none",
                "text-transform": "none",
                "letter-spacing": "normal",
                "word-break": "normal",
                "word-spacing": "normal",
                "white-space": "normal",
                "line-break": "auto",
                "font-size": "0.875rem",
                "word-wrap": "break-word",
                "background-color": "#fff",
                "background-clip": "padding-box",
                "border": "1px solid rgba(0, 0, 0, 0.2)",
                "border-radius": "0.3rem"
            }
        },
        ".popover .arrow": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "display": "block",
                "width": "1rem",
                "height": "0.5rem",
                "margin": "0 0.3rem"
            }
        },
        ".popover .arrow::before, .popover .arrow::after": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "display": "block",
                "content": "\"\"",
                "border-color": "transparent",
                "border-style": "solid"
            }
        },
        ".bs-popover-top, .bs-popover-auto[x-placement^=\"top\"]": {
            "children": {},
            "attributes": {
                "margin-bottom": "0.5rem"
            }
        },
        ".bs-popover-top .arrow, .bs-popover-auto[x-placement^=\"top\"] .arrow": {
            "children": {},
            "attributes": {
                "bottom": "calc((0.5rem + 1px) * -1)"
            }
        },
        ".bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before,\n  .bs-popover-top .arrow::after, .bs-popover-auto[x-placement^=\"top\"] .arrow::after": {
            "children": {},
            "attributes": {
                "border-width": "0.5rem 0.5rem 0"
            }
        },
        ".bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before": {
            "children": {},
            "attributes": {
                "bottom": "0",
                "border-top-color": "rgba(0, 0, 0, 0.25)"
            }
        },
        ".bs-popover-top .arrow::after, .bs-popover-auto[x-placement^=\"top\"] .arrow::after": {
            "children": {},
            "attributes": {
                "bottom": "1px",
                "border-top-color": "#fff"
            }
        },
        ".bs-popover-right, .bs-popover-auto[x-placement^=\"right\"]": {
            "children": {},
            "attributes": {
                "margin-left": "0.5rem"
            }
        },
        ".bs-popover-right .arrow, .bs-popover-auto[x-placement^=\"right\"] .arrow": {
            "children": {},
            "attributes": {
                "left": "calc((0.5rem + 1px) * -1)",
                "width": "0.5rem",
                "height": "1rem",
                "margin": "0.3rem 0"
            }
        },
        ".bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before,\n  .bs-popover-right .arrow::after, .bs-popover-auto[x-placement^=\"right\"] .arrow::after": {
            "children": {},
            "attributes": {
                "border-width": "0.5rem 0.5rem 0.5rem 0"
            }
        },
        ".bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before": {
            "children": {},
            "attributes": {
                "left": "0",
                "border-right-color": "rgba(0, 0, 0, 0.25)"
            }
        },
        ".bs-popover-right .arrow::after, .bs-popover-auto[x-placement^=\"right\"] .arrow::after": {
            "children": {},
            "attributes": {
                "left": "1px",
                "border-right-color": "#fff"
            }
        },
        ".bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"]": {
            "children": {},
            "attributes": {
                "margin-top": "0.5rem"
            }
        },
        ".bs-popover-bottom .arrow, .bs-popover-auto[x-placement^=\"bottom\"] .arrow": {
            "children": {},
            "attributes": {
                "top": "calc((0.5rem + 1px) * -1)"
            }
        },
        ".bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before,\n  .bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after": {
            "children": {},
            "attributes": {
                "border-width": "0 0.5rem 0.5rem 0.5rem"
            }
        },
        ".bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before": {
            "children": {},
            "attributes": {
                "top": "0",
                "border-bottom-color": "rgba(0, 0, 0, 0.25)"
            }
        },
        ".bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after": {
            "children": {},
            "attributes": {
                "top": "1px",
                "border-bottom-color": "#fff"
            }
        },
        ".bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "0",
                "left": "50%",
                "display": "block",
                "width": "1rem",
                "margin-left": "-0.5rem",
                "content": "\"\"",
                "border-bottom": "1px solid #f7f7f7"
            }
        },
        ".bs-popover-left, .bs-popover-auto[x-placement^=\"left\"]": {
            "children": {},
            "attributes": {
                "margin-right": "0.5rem"
            }
        },
        ".bs-popover-left .arrow, .bs-popover-auto[x-placement^=\"left\"] .arrow": {
            "children": {},
            "attributes": {
                "right": "calc((0.5rem + 1px) * -1)",
                "width": "0.5rem",
                "height": "1rem",
                "margin": "0.3rem 0"
            }
        },
        ".bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before,\n  .bs-popover-left .arrow::after, .bs-popover-auto[x-placement^=\"left\"] .arrow::after": {
            "children": {},
            "attributes": {
                "border-width": "0.5rem 0 0.5rem 0.5rem"
            }
        },
        ".bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before": {
            "children": {},
            "attributes": {
                "right": "0",
                "border-left-color": "rgba(0, 0, 0, 0.25)"
            }
        },
        ".bs-popover-left .arrow::after, .bs-popover-auto[x-placement^=\"left\"] .arrow::after": {
            "children": {},
            "attributes": {
                "right": "1px",
                "border-left-color": "#fff"
            }
        },
        ".popover-header": {
            "children": {},
            "attributes": {
                "padding": "0.5rem 0.75rem",
                "margin-bottom": "0",
                "font-size": "1rem",
                "color": "inherit",
                "background-color": "#f7f7f7",
                "border-bottom": "1px solid #ebebeb",
                "border-top-left-radius": "calc(0.3rem - 1px)",
                "border-top-right-radius": "calc(0.3rem - 1px)"
            }
        },
        ".popover-header:empty": {
            "children": {},
            "attributes": {
                "display": "none"
            }
        },
        ".popover-body": {
            "children": {},
            "attributes": {
                "padding": "0.5rem 0.75rem",
                "color": "#212529"
            }
        },
        ".carousel": {
            "children": {},
            "attributes": {
                "position": "relative"
            }
        },
        ".carousel-inner": {
            "children": {},
            "attributes": {
                "position": "relative",
                "width": "100%",
                "overflow": "hidden"
            }
        },
        ".carousel-item": {
            "children": {},
            "attributes": {
                "position": "relative",
                "display": "none",
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center",
                "width": "100%",
                "transition": [
                    "-webkit-transform 0.6s ease",
                    "transform 0.6s ease",
                    "transform 0.6s ease, -webkit-transform 0.6s ease"
                ],
                "-webkit-backface-visibility": "hidden",
                "backface-visibility": "hidden",
                "-webkit-perspective": "1000px",
                "perspective": "1000px"
            }
        },
        ".carousel-item.active,\n  .carousel-item-next,\n  .carousel-item-prev": {
            "children": {},
            "attributes": {
                "display": "block"
            }
        },
        ".carousel-item-next,\n  .carousel-item-prev": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "0"
            }
        },
        ".carousel-item-next.carousel-item-left,\n  .carousel-item-prev.carousel-item-right": {
            "children": {},
            "attributes": {
                "-webkit-transform": "translateX(0)",
                "transform": "translateX(0)"
            }
        },
        "@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d))": {
            "children": {
                ".carousel-item-next.carousel-item-left,\n    .carousel-item-prev.carousel-item-right": {
                    "children": {},
                    "attributes": {
                        "-webkit-transform": "translate3d(0, 0, 0)",
                        "transform": "translate3d(0, 0, 0)"
                    }
                }
            },
            "attributes": {}
        },
        ".carousel-item-next,\n  .active.carousel-item-right": {
            "children": {},
            "attributes": {
                "-webkit-transform": "translateX(100%)",
                "transform": "translateX(100%)"
            }
        },
        ".carousel-item-prev,\n  .active.carousel-item-left": {
            "children": {},
            "attributes": {
                "-webkit-transform": "translateX(-100%)",
                "transform": "translateX(-100%)"
            }
        },
        ".carousel-control-prev,\n  .carousel-control-next": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "0",
                "bottom": "0",
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center",
                "-webkit-box-pack": "center",
                "-ms-flex-pack": "center",
                "justify-content": "center",
                "width": "15%",
                "color": "#fff",
                "text-align": "center",
                "opacity": "0.5"
            }
        },
        ".carousel-control-prev:hover, .carousel-control-prev:focus,\n  .carousel-control-next:hover,\n  .carousel-control-next:focus": {
            "children": {},
            "attributes": {
                "color": "#fff",
                "text-decoration": "none",
                "outline": "0",
                "opacity": ".9"
            }
        },
        ".carousel-control-prev": {
            "children": {},
            "attributes": {
                "left": "0"
            }
        },
        ".carousel-control-next": {
            "children": {},
            "attributes": {
                "right": "0"
            }
        },
        ".carousel-control-prev-icon,\n  .carousel-control-next-icon": {
            "children": {},
            "attributes": {
                "display": "inline-block",
                "width": "20px",
                "height": "20px",
                "background": "transparent no-repeat center center",
                "background-size": "100% 100%"
            }
        },
        ".carousel-control-prev-icon": {
            "children": {},
            "attributes": {
                "background-image": "url(\"data:image/svg+xml",
                "charset=utf8,%3Csvg xmlns='http": "//www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")"
            }
        },
        ".carousel-control-next-icon": {
            "children": {},
            "attributes": {
                "background-image": "url(\"data:image/svg+xml",
                "charset=utf8,%3Csvg xmlns='http": "//www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")"
            }
        },
        ".carousel-indicators": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "right": "0",
                "bottom": "10px",
                "left": "0",
                "z-index": "15",
                "display": [
                    "-webkit-box",
                    "-ms-flexbox",
                    "flex"
                ],
                "-webkit-box-pack": "center",
                "-ms-flex-pack": "center",
                "justify-content": "center",
                "padding-left": "0",
                "margin-right": "15%",
                "margin-left": "15%",
                "list-style": "none"
            }
        },
        ".carousel-indicators li": {
            "children": {},
            "attributes": {
                "position": "relative",
                "-webkit-box-flex": "0",
                "-ms-flex": "0 1 auto",
                "flex": "0 1 auto",
                "width": "30px",
                "height": "3px",
                "margin-right": "3px",
                "margin-left": "3px",
                "text-indent": "-999px",
                "background-color": "rgba(255, 255, 255, 0.5)"
            }
        },
        ".carousel-indicators li::before": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "-10px",
                "left": "0",
                "display": "inline-block",
                "width": "100%",
                "height": "10px",
                "content": "\"\""
            }
        },
        ".carousel-indicators li::after": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "bottom": "-10px",
                "left": "0",
                "display": "inline-block",
                "width": "100%",
                "height": "10px",
                "content": "\"\""
            }
        },
        ".carousel-indicators .active": {
            "children": {},
            "attributes": {
                "background-color": "#fff"
            }
        },
        ".carousel-caption": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "right": "15%",
                "bottom": "20px",
                "left": "15%",
                "z-index": "10",
                "padding-top": "20px",
                "padding-bottom": "20px",
                "color": "#fff",
                "text-align": "center"
            }
        },
        ".align-baseline": {
            "children": {},
            "attributes": {
                "vertical-align": "baseline !important"
            }
        },
        ".align-top": {
            "children": {},
            "attributes": {
                "vertical-align": "top !important"
            }
        },
        ".align-middle": {
            "children": {},
            "attributes": {
                "vertical-align": "middle !important"
            }
        },
        ".align-bottom": {
            "children": {},
            "attributes": {
                "vertical-align": "bottom !important"
            }
        },
        ".align-text-bottom": {
            "children": {},
            "attributes": {
                "vertical-align": "text-bottom !important"
            }
        },
        ".align-text-top": {
            "children": {},
            "attributes": {
                "vertical-align": "text-top !important"
            }
        },
        ".bg-primary": {
            "children": {},
            "attributes": {
                "background-color": "#007bff !important"
            }
        },
        "a.bg-primary:hover, a.bg-primary:focus,\n  button.bg-primary:hover,\n  button.bg-primary:focus": {
            "children": {},
            "attributes": {
                "background-color": "#0062cc !important"
            }
        },
        ".bg-secondary": {
            "children": {},
            "attributes": {
                "background-color": "#6c757d !important"
            }
        },
        "a.bg-secondary:hover, a.bg-secondary:focus,\n  button.bg-secondary:hover,\n  button.bg-secondary:focus": {
            "children": {},
            "attributes": {
                "background-color": "#545b62 !important"
            }
        },
        ".bg-success": {
            "children": {},
            "attributes": {
                "background-color": "#28a745 !important"
            }
        },
        "a.bg-success:hover, a.bg-success:focus,\n  button.bg-success:hover,\n  button.bg-success:focus": {
            "children": {},
            "attributes": {
                "background-color": "#1e7e34 !important"
            }
        },
        ".bg-info": {
            "children": {},
            "attributes": {
                "background-color": "#17a2b8 !important"
            }
        },
        "a.bg-info:hover, a.bg-info:focus,\n  button.bg-info:hover,\n  button.bg-info:focus": {
            "children": {},
            "attributes": {
                "background-color": "#117a8b !important"
            }
        },
        ".bg-warning": {
            "children": {},
            "attributes": {
                "background-color": "#ffc107 !important"
            }
        },
        "a.bg-warning:hover, a.bg-warning:focus,\n  button.bg-warning:hover,\n  button.bg-warning:focus": {
            "children": {},
            "attributes": {
                "background-color": "#d39e00 !important"
            }
        },
        ".bg-danger": {
            "children": {},
            "attributes": {
                "background-color": "#dc3545 !important"
            }
        },
        "a.bg-danger:hover, a.bg-danger:focus,\n  button.bg-danger:hover,\n  button.bg-danger:focus": {
            "children": {},
            "attributes": {
                "background-color": "#bd2130 !important"
            }
        },
        ".bg-light": {
            "children": {},
            "attributes": {
                "background-color": "#f8f9fa !important"
            }
        },
        "a.bg-light:hover, a.bg-light:focus,\n  button.bg-light:hover,\n  button.bg-light:focus": {
            "children": {},
            "attributes": {
                "background-color": "#dae0e5 !important"
            }
        },
        ".bg-dark": {
            "children": {},
            "attributes": {
                "background-color": "#343a40 !important"
            }
        },
        "a.bg-dark:hover, a.bg-dark:focus,\n  button.bg-dark:hover,\n  button.bg-dark:focus": {
            "children": {},
            "attributes": {
                "background-color": "#1d2124 !important"
            }
        },
        ".bg-white": {
            "children": {},
            "attributes": {
                "background-color": "#fff !important"
            }
        },
        ".bg-transparent": {
            "children": {},
            "attributes": {
                "background-color": "transparent !important"
            }
        },
        ".border": {
            "children": {},
            "attributes": {
                "border": "1px solid #dee2e6 !important"
            }
        },
        ".border-top": {
            "children": {},
            "attributes": {
                "border-top": "1px solid #dee2e6 !important"
            }
        },
        ".border-right": {
            "children": {},
            "attributes": {
                "border-right": "1px solid #dee2e6 !important"
            }
        },
        ".border-bottom": {
            "children": {},
            "attributes": {
                "border-bottom": "1px solid #dee2e6 !important"
            }
        },
        ".border-left": {
            "children": {},
            "attributes": {
                "border-left": "1px solid #dee2e6 !important"
            }
        },
        ".border-0": {
            "children": {},
            "attributes": {
                "border": "0 !important"
            }
        },
        ".border-top-0": {
            "children": {},
            "attributes": {
                "border-top": "0 !important"
            }
        },
        ".border-right-0": {
            "children": {},
            "attributes": {
                "border-right": "0 !important"
            }
        },
        ".border-bottom-0": {
            "children": {},
            "attributes": {
                "border-bottom": "0 !important"
            }
        },
        ".border-left-0": {
            "children": {},
            "attributes": {
                "border-left": "0 !important"
            }
        },
        ".border-primary": {
            "children": {},
            "attributes": {
                "border-color": "#007bff !important"
            }
        },
        ".border-secondary": {
            "children": {},
            "attributes": {
                "border-color": "#6c757d !important"
            }
        },
        ".border-success": {
            "children": {},
            "attributes": {
                "border-color": "#28a745 !important"
            }
        },
        ".border-info": {
            "children": {},
            "attributes": {
                "border-color": "#17a2b8 !important"
            }
        },
        ".border-warning": {
            "children": {},
            "attributes": {
                "border-color": "#ffc107 !important"
            }
        },
        ".border-danger": {
            "children": {},
            "attributes": {
                "border-color": "#dc3545 !important"
            }
        },
        ".border-light": {
            "children": {},
            "attributes": {
                "border-color": "#f8f9fa !important"
            }
        },
        ".border-dark": {
            "children": {},
            "attributes": {
                "border-color": "#343a40 !important"
            }
        },
        ".border-white": {
            "children": {},
            "attributes": {
                "border-color": "#fff !important"
            }
        },
        ".rounded": {
            "children": {},
            "attributes": {
                "border-radius": "0.25rem !important"
            }
        },
        ".rounded-top": {
            "children": {},
            "attributes": {
                "border-top-left-radius": "0.25rem !important",
                "border-top-right-radius": "0.25rem !important"
            }
        },
        ".rounded-right": {
            "children": {},
            "attributes": {
                "border-top-right-radius": "0.25rem !important",
                "border-bottom-right-radius": "0.25rem !important"
            }
        },
        ".rounded-bottom": {
            "children": {},
            "attributes": {
                "border-bottom-right-radius": "0.25rem !important",
                "border-bottom-left-radius": "0.25rem !important"
            }
        },
        ".rounded-left": {
            "children": {},
            "attributes": {
                "border-top-left-radius": "0.25rem !important",
                "border-bottom-left-radius": "0.25rem !important"
            }
        },
        ".rounded-circle": {
            "children": {},
            "attributes": {
                "border-radius": "50% !important"
            }
        },
        ".rounded-0": {
            "children": {},
            "attributes": {
                "border-radius": "0 !important"
            }
        },
        ".clearfix::after": {
            "children": {},
            "attributes": {
                "display": "block",
                "clear": "both",
                "content": "\"\""
            }
        },
        ".d-none": {
            "children": {},
            "attributes": {
                "display": "none !important"
            }
        },
        ".d-inline": {
            "children": {},
            "attributes": {
                "display": "inline !important"
            }
        },
        ".d-inline-block": {
            "children": {},
            "attributes": {
                "display": "inline-block !important"
            }
        },
        ".d-block": {
            "children": {},
            "attributes": {
                "display": "block !important"
            }
        },
        ".d-table": {
            "children": {},
            "attributes": {
                "display": "table !important"
            }
        },
        ".d-table-row": {
            "children": {},
            "attributes": {
                "display": "table-row !important"
            }
        },
        ".d-table-cell": {
            "children": {},
            "attributes": {
                "display": "table-cell !important"
            }
        },
        ".d-flex": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-box !important",
                    "-ms-flexbox !important",
                    "flex !important"
                ]
            }
        },
        ".d-inline-flex": {
            "children": {},
            "attributes": {
                "display": [
                    "-webkit-inline-box !important",
                    "-ms-inline-flexbox !important",
                    "inline-flex !important"
                ]
            }
        },
        "@media print": {
            "children": {
                ".d-print-none": {
                    "children": {},
                    "attributes": {
                        "display": "none !important"
                    }
                },
                ".d-print-inline": {
                    "children": {},
                    "attributes": {
                        "display": "inline !important"
                    }
                },
                ".d-print-inline-block": {
                    "children": {},
                    "attributes": {
                        "display": "inline-block !important"
                    }
                },
                ".d-print-block": {
                    "children": {},
                    "attributes": {
                        "display": "block !important"
                    }
                },
                ".d-print-table": {
                    "children": {},
                    "attributes": {
                        "display": "table !important"
                    }
                },
                ".d-print-table-row": {
                    "children": {},
                    "attributes": {
                        "display": "table-row !important"
                    }
                },
                ".d-print-table-cell": {
                    "children": {},
                    "attributes": {
                        "display": "table-cell !important"
                    }
                },
                ".d-print-flex": {
                    "children": {},
                    "attributes": {
                        "display": [
                            "-webkit-box !important",
                            "-ms-flexbox !important",
                            "flex !important"
                        ]
                    }
                },
                ".d-print-inline-flex": {
                    "children": {},
                    "attributes": {
                        "display": [
                            "-webkit-inline-box !important",
                            "-ms-inline-flexbox !important",
                            "inline-flex !important"
                        ]
                    }
                }
            },
            "attributes": {}
        },
        ".embed-responsive": {
            "children": {},
            "attributes": {
                "position": "relative",
                "display": "block",
                "width": "100%",
                "padding": "0",
                "overflow": "hidden"
            }
        },
        ".embed-responsive::before": {
            "children": {},
            "attributes": {
                "display": "block",
                "content": "\"\""
            }
        },
        ".embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "top": "0",
                "bottom": "0",
                "left": "0",
                "width": "100%",
                "height": "100%",
                "border": "0"
            }
        },
        ".embed-responsive-21by9::before": {
            "children": {},
            "attributes": {
                "padding-top": "42.857143%"
            }
        },
        ".embed-responsive-16by9::before": {
            "children": {},
            "attributes": {
                "padding-top": "56.25%"
            }
        },
        ".embed-responsive-4by3::before": {
            "children": {},
            "attributes": {
                "padding-top": "75%"
            }
        },
        ".embed-responsive-1by1::before": {
            "children": {},
            "attributes": {
                "padding-top": "100%"
            }
        },
        ".flex-row": {
            "children": {},
            "attributes": {
                "-webkit-box-orient": "horizontal !important",
                "-webkit-box-direction": "normal !important",
                "-ms-flex-direction": "row !important",
                "flex-direction": "row !important"
            }
        },
        ".flex-column": {
            "children": {},
            "attributes": {
                "-webkit-box-orient": "vertical !important",
                "-webkit-box-direction": "normal !important",
                "-ms-flex-direction": "column !important",
                "flex-direction": "column !important"
            }
        },
        ".flex-row-reverse": {
            "children": {},
            "attributes": {
                "-webkit-box-orient": "horizontal !important",
                "-webkit-box-direction": "reverse !important",
                "-ms-flex-direction": "row-reverse !important",
                "flex-direction": "row-reverse !important"
            }
        },
        ".flex-column-reverse": {
            "children": {},
            "attributes": {
                "-webkit-box-orient": "vertical !important",
                "-webkit-box-direction": "reverse !important",
                "-ms-flex-direction": "column-reverse !important",
                "flex-direction": "column-reverse !important"
            }
        },
        ".flex-wrap": {
            "children": {},
            "attributes": {
                "-ms-flex-wrap": "wrap !important",
                "flex-wrap": "wrap !important"
            }
        },
        ".flex-nowrap": {
            "children": {},
            "attributes": {
                "-ms-flex-wrap": "nowrap !important",
                "flex-wrap": "nowrap !important"
            }
        },
        ".flex-wrap-reverse": {
            "children": {},
            "attributes": {
                "-ms-flex-wrap": "wrap-reverse !important",
                "flex-wrap": "wrap-reverse !important"
            }
        },
        ".justify-content-start": {
            "children": {},
            "attributes": {
                "-webkit-box-pack": "start !important",
                "-ms-flex-pack": "start !important",
                "justify-content": "flex-start !important"
            }
        },
        ".justify-content-end": {
            "children": {},
            "attributes": {
                "-webkit-box-pack": "end !important",
                "-ms-flex-pack": "end !important",
                "justify-content": "flex-end !important"
            }
        },
        ".justify-content-center": {
            "children": {},
            "attributes": {
                "-webkit-box-pack": "center !important",
                "-ms-flex-pack": "center !important",
                "justify-content": "center !important"
            }
        },
        ".justify-content-between": {
            "children": {},
            "attributes": {
                "-webkit-box-pack": "justify !important",
                "-ms-flex-pack": "justify !important",
                "justify-content": "space-between !important"
            }
        },
        ".justify-content-around": {
            "children": {},
            "attributes": {
                "-ms-flex-pack": "distribute !important",
                "justify-content": "space-around !important"
            }
        },
        ".align-items-start": {
            "children": {},
            "attributes": {
                "-webkit-box-align": "start !important",
                "-ms-flex-align": "start !important",
                "align-items": "flex-start !important"
            }
        },
        ".align-items-end": {
            "children": {},
            "attributes": {
                "-webkit-box-align": "end !important",
                "-ms-flex-align": "end !important",
                "align-items": "flex-end !important"
            }
        },
        ".align-items-center": {
            "children": {},
            "attributes": {
                "-webkit-box-align": "center !important",
                "-ms-flex-align": "center !important",
                "align-items": "center !important"
            }
        },
        ".align-items-baseline": {
            "children": {},
            "attributes": {
                "-webkit-box-align": "baseline !important",
                "-ms-flex-align": "baseline !important",
                "align-items": "baseline !important"
            }
        },
        ".align-items-stretch": {
            "children": {},
            "attributes": {
                "-webkit-box-align": "stretch !important",
                "-ms-flex-align": "stretch !important",
                "align-items": "stretch !important"
            }
        },
        ".align-content-start": {
            "children": {},
            "attributes": {
                "-ms-flex-line-pack": "start !important",
                "align-content": "flex-start !important"
            }
        },
        ".align-content-end": {
            "children": {},
            "attributes": {
                "-ms-flex-line-pack": "end !important",
                "align-content": "flex-end !important"
            }
        },
        ".align-content-center": {
            "children": {},
            "attributes": {
                "-ms-flex-line-pack": "center !important",
                "align-content": "center !important"
            }
        },
        ".align-content-between": {
            "children": {},
            "attributes": {
                "-ms-flex-line-pack": "justify !important",
                "align-content": "space-between !important"
            }
        },
        ".align-content-around": {
            "children": {},
            "attributes": {
                "-ms-flex-line-pack": "distribute !important",
                "align-content": "space-around !important"
            }
        },
        ".align-content-stretch": {
            "children": {},
            "attributes": {
                "-ms-flex-line-pack": "stretch !important",
                "align-content": "stretch !important"
            }
        },
        ".align-self-auto": {
            "children": {},
            "attributes": {
                "-ms-flex-item-align": "auto !important",
                "align-self": "auto !important"
            }
        },
        ".align-self-start": {
            "children": {},
            "attributes": {
                "-ms-flex-item-align": "start !important",
                "align-self": "flex-start !important"
            }
        },
        ".align-self-end": {
            "children": {},
            "attributes": {
                "-ms-flex-item-align": "end !important",
                "align-self": "flex-end !important"
            }
        },
        ".align-self-center": {
            "children": {},
            "attributes": {
                "-ms-flex-item-align": "center !important",
                "align-self": "center !important"
            }
        },
        ".align-self-baseline": {
            "children": {},
            "attributes": {
                "-ms-flex-item-align": "baseline !important",
                "align-self": "baseline !important"
            }
        },
        ".align-self-stretch": {
            "children": {},
            "attributes": {
                "-ms-flex-item-align": "stretch !important",
                "align-self": "stretch !important"
            }
        },
        ".float-left": {
            "children": {},
            "attributes": {
                "float": "left !important"
            }
        },
        ".float-right": {
            "children": {},
            "attributes": {
                "float": "right !important"
            }
        },
        ".float-none": {
            "children": {},
            "attributes": {
                "float": "none !important"
            }
        },
        ".position-static": {
            "children": {},
            "attributes": {
                "position": "static !important"
            }
        },
        ".position-relative": {
            "children": {},
            "attributes": {
                "position": "relative !important"
            }
        },
        ".position-absolute": {
            "children": {},
            "attributes": {
                "position": "absolute !important"
            }
        },
        ".position-fixed": {
            "children": {},
            "attributes": {
                "position": "fixed !important"
            }
        },
        ".position-sticky": {
            "children": {},
            "attributes": {
                "position": [
                    "-webkit-sticky !important",
                    "sticky !important"
                ]
            }
        },
        ".fixed-top": {
            "children": {},
            "attributes": {
                "position": "fixed",
                "top": "0",
                "right": "0",
                "left": "0",
                "z-index": "1030"
            }
        },
        ".fixed-bottom": {
            "children": {},
            "attributes": {
                "position": "fixed",
                "right": "0",
                "bottom": "0",
                "left": "0",
                "z-index": "1030"
            }
        },
        "@supports ((position: -webkit-sticky) or (position: sticky))": {
            "children": {
                ".sticky-top": {
                    "children": {},
                    "attributes": {
                        "position": [
                            "-webkit-sticky",
                            "sticky"
                        ],
                        "top": "0",
                        "z-index": "1020"
                    }
                }
            },
            "attributes": {}
        },
        ".sr-only": {
            "children": {},
            "attributes": {
                "position": "absolute",
                "width": "1px",
                "height": "1px",
                "padding": "0",
                "overflow": "hidden",
                "clip": "rect(0, 0, 0, 0)",
                "white-space": "nowrap",
                "-webkit-clip-path": "inset(50%)",
                "clip-path": "inset(50%)",
                "border": "0"
            }
        },
        ".sr-only-focusable:active, .sr-only-focusable:focus": {
            "children": {},
            "attributes": {
                "position": "static",
                "width": "auto",
                "height": "auto",
                "overflow": "visible",
                "clip": "auto",
                "white-space": "normal",
                "-webkit-clip-path": "none",
                "clip-path": "none"
            }
        },
        ".w-25": {
            "children": {},
            "attributes": {
                "width": "25% !important"
            }
        },
        ".w-50": {
            "children": {},
            "attributes": {
                "width": "50% !important"
            }
        },
        ".w-75": {
            "children": {},
            "attributes": {
                "width": "75% !important"
            }
        },
        ".w-100": {
            "children": {},
            "attributes": {
                "width": "100% !important"
            }
        },
        ".h-25": {
            "children": {},
            "attributes": {
                "height": "25% !important"
            }
        },
        ".h-50": {
            "children": {},
            "attributes": {
                "height": "50% !important"
            }
        },
        ".h-75": {
            "children": {},
            "attributes": {
                "height": "75% !important"
            }
        },
        ".h-100": {
            "children": {},
            "attributes": {
                "height": "100% !important"
            }
        },
        ".mw-100": {
            "children": {},
            "attributes": {
                "max-width": "100% !important"
            }
        },
        ".mh-100": {
            "children": {},
            "attributes": {
                "max-height": "100% !important"
            }
        },
        ".m-0": {
            "children": {},
            "attributes": {
                "margin": "0 !important"
            }
        },
        ".mt-0,\n  .my-0": {
            "children": {},
            "attributes": {
                "margin-top": "0 !important"
            }
        },
        ".mr-0,\n  .mx-0": {
            "children": {},
            "attributes": {
                "margin-right": "0 !important"
            }
        },
        ".mb-0,\n  .my-0": {
            "children": {},
            "attributes": {
                "margin-bottom": "0 !important"
            }
        },
        ".ml-0,\n  .mx-0": {
            "children": {},
            "attributes": {
                "margin-left": "0 !important"
            }
        },
        ".m-1": {
            "children": {},
            "attributes": {
                "margin": "0.25rem !important"
            }
        },
        ".mt-1,\n  .my-1": {
            "children": {},
            "attributes": {
                "margin-top": "0.25rem !important"
            }
        },
        ".mr-1,\n  .mx-1": {
            "children": {},
            "attributes": {
                "margin-right": "0.25rem !important"
            }
        },
        ".mb-1,\n  .my-1": {
            "children": {},
            "attributes": {
                "margin-bottom": "0.25rem !important"
            }
        },
        ".ml-1,\n  .mx-1": {
            "children": {},
            "attributes": {
                "margin-left": "0.25rem !important"
            }
        },
        ".m-2": {
            "children": {},
            "attributes": {
                "margin": "0.5rem !important"
            }
        },
        ".mt-2,\n  .my-2": {
            "children": {},
            "attributes": {
                "margin-top": "0.5rem !important"
            }
        },
        ".mr-2,\n  .mx-2": {
            "children": {},
            "attributes": {
                "margin-right": "0.5rem !important"
            }
        },
        ".mb-2,\n  .my-2": {
            "children": {},
            "attributes": {
                "margin-bottom": "0.5rem !important"
            }
        },
        ".ml-2,\n  .mx-2": {
            "children": {},
            "attributes": {
                "margin-left": "0.5rem !important"
            }
        },
        ".m-3": {
            "children": {},
            "attributes": {
                "margin": "1rem !important"
            }
        },
        ".mt-3,\n  .my-3": {
            "children": {},
            "attributes": {
                "margin-top": "1rem !important"
            }
        },
        ".mr-3,\n  .mx-3": {
            "children": {},
            "attributes": {
                "margin-right": "1rem !important"
            }
        },
        ".mb-3,\n  .my-3": {
            "children": {},
            "attributes": {
                "margin-bottom": "1rem !important"
            }
        },
        ".ml-3,\n  .mx-3": {
            "children": {},
            "attributes": {
                "margin-left": "1rem !important"
            }
        },
        ".m-4": {
            "children": {},
            "attributes": {
                "margin": "1.5rem !important"
            }
        },
        ".mt-4,\n  .my-4": {
            "children": {},
            "attributes": {
                "margin-top": "1.5rem !important"
            }
        },
        ".mr-4,\n  .mx-4": {
            "children": {},
            "attributes": {
                "margin-right": "1.5rem !important"
            }
        },
        ".mb-4,\n  .my-4": {
            "children": {},
            "attributes": {
                "margin-bottom": "1.5rem !important"
            }
        },
        ".ml-4,\n  .mx-4": {
            "children": {},
            "attributes": {
                "margin-left": "1.5rem !important"
            }
        },
        ".m-5": {
            "children": {},
            "attributes": {
                "margin": "3rem !important"
            }
        },
        ".mt-5,\n  .my-5": {
            "children": {},
            "attributes": {
                "margin-top": "3rem !important"
            }
        },
        ".mr-5,\n  .mx-5": {
            "children": {},
            "attributes": {
                "margin-right": "3rem !important"
            }
        },
        ".mb-5,\n  .my-5": {
            "children": {},
            "attributes": {
                "margin-bottom": "3rem !important"
            }
        },
        ".ml-5,\n  .mx-5": {
            "children": {},
            "attributes": {
                "margin-left": "3rem !important"
            }
        },
        ".p-0": {
            "children": {},
            "attributes": {
                "padding": "0 !important"
            }
        },
        ".pt-0,\n  .py-0": {
            "children": {},
            "attributes": {
                "padding-top": "0 !important"
            }
        },
        ".pr-0,\n  .px-0": {
            "children": {},
            "attributes": {
                "padding-right": "0 !important"
            }
        },
        ".pb-0,\n  .py-0": {
            "children": {},
            "attributes": {
                "padding-bottom": "0 !important"
            }
        },
        ".pl-0,\n  .px-0": {
            "children": {},
            "attributes": {
                "padding-left": "0 !important"
            }
        },
        ".p-1": {
            "children": {},
            "attributes": {
                "padding": "0.25rem !important"
            }
        },
        ".pt-1,\n  .py-1": {
            "children": {},
            "attributes": {
                "padding-top": "0.25rem !important"
            }
        },
        ".pr-1,\n  .px-1": {
            "children": {},
            "attributes": {
                "padding-right": "0.25rem !important"
            }
        },
        ".pb-1,\n  .py-1": {
            "children": {},
            "attributes": {
                "padding-bottom": "0.25rem !important"
            }
        },
        ".pl-1,\n  .px-1": {
            "children": {},
            "attributes": {
                "padding-left": "0.25rem !important"
            }
        },
        ".p-2": {
            "children": {},
            "attributes": {
                "padding": "0.5rem !important"
            }
        },
        ".pt-2,\n  .py-2": {
            "children": {},
            "attributes": {
                "padding-top": "0.5rem !important"
            }
        },
        ".pr-2,\n  .px-2": {
            "children": {},
            "attributes": {
                "padding-right": "0.5rem !important"
            }
        },
        ".pb-2,\n  .py-2": {
            "children": {},
            "attributes": {
                "padding-bottom": "0.5rem !important"
            }
        },
        ".pl-2,\n  .px-2": {
            "children": {},
            "attributes": {
                "padding-left": "0.5rem !important"
            }
        },
        ".p-3": {
            "children": {},
            "attributes": {
                "padding": "1rem !important"
            }
        },
        ".pt-3,\n  .py-3": {
            "children": {},
            "attributes": {
                "padding-top": "1rem !important"
            }
        },
        ".pr-3,\n  .px-3": {
            "children": {},
            "attributes": {
                "padding-right": "1rem !important"
            }
        },
        ".pb-3,\n  .py-3": {
            "children": {},
            "attributes": {
                "padding-bottom": "1rem !important"
            }
        },
        ".pl-3,\n  .px-3": {
            "children": {},
            "attributes": {
                "padding-left": "1rem !important"
            }
        },
        ".p-4": {
            "children": {},
            "attributes": {
                "padding": "1.5rem !important"
            }
        },
        ".pt-4,\n  .py-4": {
            "children": {},
            "attributes": {
                "padding-top": "1.5rem !important"
            }
        },
        ".pr-4,\n  .px-4": {
            "children": {},
            "attributes": {
                "padding-right": "1.5rem !important"
            }
        },
        ".pb-4,\n  .py-4": {
            "children": {},
            "attributes": {
                "padding-bottom": "1.5rem !important"
            }
        },
        ".pl-4,\n  .px-4": {
            "children": {},
            "attributes": {
                "padding-left": "1.5rem !important"
            }
        },
        ".p-5": {
            "children": {},
            "attributes": {
                "padding": "3rem !important"
            }
        },
        ".pt-5,\n  .py-5": {
            "children": {},
            "attributes": {
                "padding-top": "3rem !important"
            }
        },
        ".pr-5,\n  .px-5": {
            "children": {},
            "attributes": {
                "padding-right": "3rem !important"
            }
        },
        ".pb-5,\n  .py-5": {
            "children": {},
            "attributes": {
                "padding-bottom": "3rem !important"
            }
        },
        ".pl-5,\n  .px-5": {
            "children": {},
            "attributes": {
                "padding-left": "3rem !important"
            }
        },
        ".m-auto": {
            "children": {},
            "attributes": {
                "margin": "auto !important"
            }
        },
        ".mt-auto,\n  .my-auto": {
            "children": {},
            "attributes": {
                "margin-top": "auto !important"
            }
        },
        ".mr-auto,\n  .mx-auto": {
            "children": {},
            "attributes": {
                "margin-right": "auto !important"
            }
        },
        ".mb-auto,\n  .my-auto": {
            "children": {},
            "attributes": {
                "margin-bottom": "auto !important"
            }
        },
        ".ml-auto,\n  .mx-auto": {
            "children": {},
            "attributes": {
                "margin-left": "auto !important"
            }
        },
        ".text-justify": {
            "children": {},
            "attributes": {
                "text-align": "justify !important"
            }
        },
        ".text-nowrap": {
            "children": {},
            "attributes": {
                "white-space": "nowrap !important"
            }
        },
        ".text-truncate": {
            "children": {},
            "attributes": {
                "overflow": "hidden",
                "text-overflow": "ellipsis",
                "white-space": "nowrap"
            }
        },
        ".text-left": {
            "children": {},
            "attributes": {
                "text-align": "left !important"
            }
        },
        ".text-right": {
            "children": {},
            "attributes": {
                "text-align": "right !important"
            }
        },
        ".text-center": {
            "children": {},
            "attributes": {
                "text-align": "center !important"
            }
        },
        ".text-lowercase": {
            "children": {},
            "attributes": {
                "text-transform": "lowercase !important"
            }
        },
        ".text-uppercase": {
            "children": {},
            "attributes": {
                "text-transform": "uppercase !important"
            }
        },
        ".text-capitalize": {
            "children": {},
            "attributes": {
                "text-transform": "capitalize !important"
            }
        },
        ".font-weight-light": {
            "children": {},
            "attributes": {
                "font-weight": "300 !important"
            }
        },
        ".font-weight-normal": {
            "children": {},
            "attributes": {
                "font-weight": "400 !important"
            }
        },
        ".font-weight-bold": {
            "children": {},
            "attributes": {
                "font-weight": "700 !important"
            }
        },
        ".font-italic": {
            "children": {},
            "attributes": {
                "font-style": "italic !important"
            }
        },
        ".text-white": {
            "children": {},
            "attributes": {
                "color": "#fff !important"
            }
        },
        ".text-primary": {
            "children": {},
            "attributes": {
                "color": "#007bff !important"
            }
        },
        "a.text-primary:hover, a.text-primary:focus": {
            "children": {},
            "attributes": {
                "color": "#0062cc !important"
            }
        },
        ".text-secondary": {
            "children": {},
            "attributes": {
                "color": "#6c757d !important"
            }
        },
        "a.text-secondary:hover, a.text-secondary:focus": {
            "children": {},
            "attributes": {
                "color": "#545b62 !important"
            }
        },
        ".text-success": {
            "children": {},
            "attributes": {
                "color": "#28a745 !important"
            }
        },
        "a.text-success:hover, a.text-success:focus": {
            "children": {},
            "attributes": {
                "color": "#1e7e34 !important"
            }
        },
        ".text-info": {
            "children": {},
            "attributes": {
                "color": "#17a2b8 !important"
            }
        },
        "a.text-info:hover, a.text-info:focus": {
            "children": {},
            "attributes": {
                "color": "#117a8b !important"
            }
        },
        ".text-warning": {
            "children": {},
            "attributes": {
                "color": "#ffc107 !important"
            }
        },
        "a.text-warning:hover, a.text-warning:focus": {
            "children": {},
            "attributes": {
                "color": "#d39e00 !important"
            }
        },
        ".text-danger": {
            "children": {},
            "attributes": {
                "color": "#dc3545 !important"
            }
        },
        "a.text-danger:hover, a.text-danger:focus": {
            "children": {},
            "attributes": {
                "color": "#bd2130 !important"
            }
        },
        ".text-light": {
            "children": {},
            "attributes": {
                "color": "#f8f9fa !important"
            }
        },
        "a.text-light:hover, a.text-light:focus": {
            "children": {},
            "attributes": {
                "color": "#dae0e5 !important"
            }
        },
        ".text-dark": {
            "children": {},
            "attributes": {
                "color": "#343a40 !important"
            }
        },
        "a.text-dark:hover, a.text-dark:focus": {
            "children": {},
            "attributes": {
                "color": "#1d2124 !important"
            }
        },
        ".text-muted": {
            "children": {},
            "attributes": {
                "color": "#6c757d !important"
            }
        },
        ".text-hide": {
            "children": {},
            "attributes": {
                "font": "0/0 a",
                "color": "transparent",
                "text-shadow": "none",
                "background-color": "transparent",
                "border": "0"
            }
        },
        ".visible": {
            "children": {},
            "attributes": {
                "visibility": "visible !important"
            }
        },
        ".invisible": {
            "children": {},
            "attributes": {
                "visibility": "hidden !important"
            }
        }
    },
    "attributes": {}
};