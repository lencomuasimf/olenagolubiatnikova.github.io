// Components bundle — 5 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 3318:2478 radio button (8 variants)
const __venc_RadioButton = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_RadioButton = p => "state=" + __venc_RadioButton(p.state) + '|' + "checked=" + __venc_RadioButton(p.checked) + '|' + "focused=" + __venc_RadioButton(p.focused) + '|' + "disabled=" + __venc_RadioButton(p.disabled);
function RadioButton(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "default",
    checked: _p.checked ?? false,
    focused: _p.focused ?? false,
    disabled: _p.disabled ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      borderRadius: 999,
      backgroundColor: "var(--color-background-white-default)",
      boxShadow: "inset 0 0 0 1px var(--color-border-grey-darker)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      borderRadius: 999,
      backgroundColor: "var(--color-background-purple-darker-3)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 26,
      height: 26,
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: 999,
      backgroundColor: "var(--color-background-white-default)",
      flexShrink: 0
    }
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      boxShadow: "0 0 0 4px var(--colors-sky-blue-sky-blue-600)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      borderRadius: 999,
      backgroundColor: "var(--color-background-purple-darker-3)",
      boxShadow: "0 0 0 2px var(--color-border-white-default)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: 999,
      backgroundColor: "var(--color-background-white-default)",
      flexShrink: 0
    }
  })))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      borderRadius: 999,
      backgroundColor: "var(--color-background-red-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 26,
      height: 26,
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: 999,
      backgroundColor: "var(--color-background-white-default)",
      flexShrink: 0
    }
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      borderRadius: 999,
      backgroundColor: "var(--color-background-grey-subtle-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 26,
      height: 26,
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      borderRadius: 999,
      backgroundColor: "var(--color-background-white-default)",
      flexShrink: 0
    }
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      borderRadius: 999,
      backgroundColor: "var(--color-background-white-default)",
      boxShadow: "inset 0 0 0 1px var(--color-border-red-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px var(--color-border-grey-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __impls = {
    // figma: state=default, checked=false, disabled=false, focused=false
    "state=default|checked=false|focused=false|disabled=false": __body0,
    // figma: state=default, checked=true, disabled=false, focused=false
    "state=default|checked=true|focused=false|disabled=false": __body1,
    // figma: state=default, checked=true, disabled=false, focused=true
    "state=default|checked=true|focused=true|disabled=false": __body2,
    // figma: state=error, checked=true, disabled=false, focused=false
    "state=error|checked=true|focused=false|disabled=false": __body3,
    // figma: state=error, checked=true, disabled=false, focused=true
    "state=error|checked=true|focused=true|disabled=false": __body3,
    // figma: state=default, checked=true, disabled=true, focused=false
    "state=default|checked=true|focused=false|disabled=true": __body4,
    // figma: state=error, checked=false, disabled=false, focused=false
    "state=error|checked=false|focused=false|disabled=false": __body5,
    // figma: state=default, checked=false, disabled=true, focused=false
    "state=default|checked=false|focused=false|disabled=true": __body6
  };
  return (__impls[__vkey_RadioButton(props)] ?? __body0)();
}

// figma node: 3318:2513 icon/plus (4 variants)
const __venc_IconPlus = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconPlus = p => "size=" + __venc_IconPlus(p.size);
function IconPlus(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "24"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-text-grey-darker)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.333,
    height: 2,
    viewBox: "0 -1 9.333 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.333,
      top: 8,
      width: 9.333,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 9.333 1 C 9.886 1 10.333 0.552 10.333 0 C 10.333 -0.552 9.886 -1 9.333 -1 L 9.333 0 L 9.333 1 Z M 0 0 L 0 1 L 9.333 1 L 9.333 0 L 9.333 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 9.333,
    viewBox: "-1 0 2 9.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 3.333,
      width: 2,
      height: 9.333
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M -1 9.333 C -1 9.886 -0.552 10.333 0 10.333 C 0.552 10.333 1 9.886 1 9.333 L 0 9.333 L -1 9.333 Z M 0 0 L -1 0 L -1 9.333 L 0 9.333 L 1 9.333 L 1 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-text-grey-darker)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.667,
    height: 2,
    viewBox: "0 -1 11.667 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.167,
      top: 10,
      width: 11.667,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 11.667 1 C 12.219 1 12.667 0.552 12.667 0 C 12.667 -0.552 12.219 -1 11.667 -1 L 11.667 0 L 11.667 1 Z M 0 0 L 0 1 L 11.667 1 L 11.667 0 L 11.667 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 11.667,
    viewBox: "-1 0 2 11.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 4.167,
      width: 2,
      height: 11.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M -1 11.667 C -1 12.219 -0.552 12.667 0 12.667 C 0.552 12.667 1 12.219 1 11.667 L 0 11.667 L -1 11.667 Z M 0 0 L -1 0 L -1 11.667 L 0 11.667 L 1 11.667 L 1 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-text-grey-darker)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 2,
    viewBox: "0 -1 14 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 12,
      width: 14,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 14 1 C 14.552 1 15 0.552 15 0 C 15 -0.552 14.552 -1 14 -1 L 14 0 L 14 1 Z M 0 0 L 0 1 L 14 1 L 14 0 L 14 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 14,
    viewBox: "-1 0 2 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 12,
      top: 5,
      width: 2,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M -1 14 C -1 14.552 -0.552 15 0 15 C 0.552 15 1 14.552 1 14 L 0 14 L -1 14 Z M 0 0 L -1 0 L -1 14 L 0 14 L 1 14 L 1 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-text-grey-darker)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.667,
    height: 2,
    viewBox: "0 -1 18.667 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.667,
      top: 16,
      width: 18.667,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 18.667 1 C 19.219 1 19.667 0.552 19.667 0 C 19.667 -0.552 19.219 -1 18.667 -1 L 18.667 0 L 18.667 1 Z M 0 0 L 0 1 L 18.667 1 L 18.667 0 L 18.667 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 18.667,
    viewBox: "-1 0 2 18.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 16,
      top: 6.667,
      width: 2,
      height: 18.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 C 1 -0.552 0.552 -1 0 -1 C -0.552 -1 -1 -0.552 -1 0 L 0 0 L 1 0 Z M -1 18.667 C -1 19.219 -0.552 19.667 0 19.667 C 0.552 19.667 1 19.219 1 18.667 L 0 18.667 L -1 18.667 Z M 0 0 L -1 0 L -1 18.667 L 0 18.667 L 1 18.667 L 1 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: size=16
    "size=16": __body0,
    // figma: size=20
    "size=20": __body1,
    // figma: size=24
    "size=24": __body2,
    // figma: size=32
    "size=32": __body3
  };
  return (__impls[__vkey_IconPlus(props)] ?? __body2)();
}

// figma node: 3318:2527 Text button (3 variants)
const __venc_TextButton = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_TextButton = p => "tone=" + __venc_TextButton(p.tone);
function TextButton(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? "Add co-tenant",
    tone: _p.tone ?? "default",
    iconLeft: _p.iconLeft ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 0px 2px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconPlus, {
    size: "20",
    style: {
      transform: "scale(0.800, 0.800)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-brand-fast-black)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 0px 2px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconPlus, {
    size: "20",
    style: {
      transform: "scale(0.800, 0.800)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-border-grey-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 0px 2px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconPlus, {
    size: "20",
    style: {
      transform: "scale(0.800, 0.800)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-red-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __impls = {
    // figma: tone=default
    "tone=default": __body0,
    // figma: tone=Disabled
    "tone=disabled": __body1,
    // figma: tone=destructive
    "tone=destructive": __body2
  };
  return (__impls[__vkey_TextButton(props)] ?? __body0)();
}

// figma node: 3318:3270 Step 1
function Step1(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 852,
      overflow: "hidden",
      backgroundColor: "var(--color-background-purple-default)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 210,
      width: 393,
      height: 684,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 393,
    height: 684,
    viewBox: "0 0 393 684",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393,
      height: 684,
      borderRadius: 10,
      filter: "drop-shadow(0px -15px 30px rgba(36,39,46,0.03))",
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10 C 0 4.477 4.477 0 10 0 L 383 0 C 388.523 0 393 4.477 393 10 L 393 684 L 0 684 L 0 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 184,
      top: 9,
      width: 25.998,
      height: 9,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.913,-0.408,0.438,0.899,10.969,6.074)",
      transformOrigin: "0 0",
      width: 14.899,
      height: 3.254,
      borderRadius: 3,
      backgroundColor: "rgb(177,188,196)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.913,0.408,-0.438,0.899,1.425,0)",
      transformOrigin: "0 0",
      width: 14.899,
      height: 3.254,
      borderRadius: 3,
      backgroundColor: "rgb(177,188,196)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 34,
      width: 345,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      borderRadius: "50%",
      backgroundColor: "var(--color-background-purple-subtle)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 11,
    viewBox: "0 0 16 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 6,
      width: 16,
      height: 11,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.707 0.707 C 17.098 0.317 17.098 -0.317 16.707 -0.707 C 16.317 -1.098 15.683 -1.098 15.293 -0.707 L 16 0 L 16.707 0.707 Z M 5 11 L 4.293 11.707 C 4.683 12.098 5.317 12.098 5.707 11.707 L 5 11 Z M 0.707 5.293 C 0.317 4.902 -0.317 4.902 -0.707 5.293 C -1.098 5.683 -1.098 6.317 -0.707 6.707 L 0 6 L 0.707 5.293 Z M 16 0 L 15.293 -0.707 L 4.293 10.293 L 5 11 L 5.707 11.707 L 16.707 0.707 L 16 0 Z M 5 11 L 5.707 10.293 L 0.707 5.293 L 0 6 L -0.707 6.707 L 4.293 11.707 L 5 11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      textAlign: "center",
      lineHeight: 1.25,
      color: "var(--color-text-purple-darker)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Select your payout account"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.399999976158142,
      color: "var(--color-text-grey-darker)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Choose which bank account you'd like to use to receive your rental payments."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 184,
      width: 345,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10,
      backgroundColor: "rgb(248,249,249)",
      boxShadow: "inset 0 0 0 1px var(--color-border-purple-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "16px 24px 16px 24px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 271,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.001,
    height: 19.999,
    viewBox: "0 0 18.001 19.999",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 2.001,
      width: 18.001,
      height: 19.999,
      color: "var(--color-border-purple-darker-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 15.999 C 6 16.552 6.448 16.999 7 16.999 C 7.552 16.999 8 16.552 8 15.999 L 7 15.999 L 6 15.999 Z M 8 8.999 C 8 8.447 7.552 7.999 7 7.999 C 6.448 7.999 6 8.447 6 8.999 L 7 8.999 L 8 8.999 Z M 8.119 0.204 L 8.559 1.102 L 8.56 1.102 L 8.119 0.204 Z M 9 0 L 9 -1 L 9 0 Z M 9.881 0.204 L 9.441 1.102 L 9.441 1.102 L 9.881 0.204 Z M 17.721 4.05 L 17.281 4.948 L 17.281 4.948 L 17.721 4.05 Z M 17.5 4.999 L 17.502 3.999 L 17.5 3.999 L 17.5 4.999 Z M 0.5 4.999 L 0.5 3.999 L 0.5 3.999 L 0.5 4.999 Z M 0.28 4.05 L 0.72 4.948 L 0.72 4.948 L 0.28 4.05 Z M 10 15.999 C 10 16.552 10.448 16.999 11 16.999 C 11.552 16.999 12 16.552 12 15.999 L 11 15.999 L 10 15.999 Z M 12 8.999 C 12 8.447 11.552 7.999 11 7.999 C 10.448 7.999 10 8.447 10 8.999 L 11 8.999 L 12 8.999 Z M 14 15.999 C 14 16.552 14.448 16.999 15 16.999 C 15.552 16.999 16 16.552 16 15.999 L 15 15.999 L 14 15.999 Z M 16 8.999 C 16 8.447 15.552 7.999 15 7.999 C 14.448 7.999 14 8.447 14 8.999 L 15 8.999 L 16 8.999 Z M 0 18.999 C -0.552 18.999 -1 19.447 -1 19.999 C -1 20.552 -0.552 20.999 0 20.999 L 0 19.999 L 0 18.999 Z M 18 20.999 C 18.552 20.999 19 20.552 19 19.999 C 19 19.447 18.552 18.999 18 18.999 L 18 19.999 L 18 20.999 Z M 2 15.999 C 2 16.552 2.448 16.999 3 16.999 C 3.552 16.999 4 16.552 4 15.999 L 3 15.999 L 2 15.999 Z M 4 8.999 C 4 8.447 3.552 7.999 3 7.999 C 2.448 7.999 2 8.447 2 8.999 L 3 8.999 L 4 8.999 Z M 7 15.999 L 8 15.999 L 8 8.999 L 7 8.999 L 6 8.999 L 6 15.999 L 7 15.999 Z M 8.119 0.204 L 8.56 1.102 C 8.697 1.035 8.847 1 9 1 L 9 0 L 9 -1 C 8.542 -1 8.09 -0.895 7.679 -0.693 L 8.119 0.204 Z M 9 0 L 9 1 C 9.153 1 9.303 1.035 9.441 1.102 L 9.881 0.204 L 10.322 -0.693 C 9.91 -0.895 9.458 -1 9 -1 L 9 0 Z M 9.881 0.204 L 9.441 1.102 L 17.281 4.948 L 17.721 4.05 L 18.161 3.153 L 10.321 -0.693 L 9.881 0.204 Z M 17.721 4.05 L 17.281 4.948 C 17.179 4.899 17.098 4.816 17.049 4.714 L 17.953 4.285 L 18.856 3.856 C 18.711 3.55 18.466 3.302 18.161 3.152 L 17.721 4.05 Z M 17.953 4.285 L 17.049 4.714 C 17.001 4.612 16.988 4.496 17.014 4.386 L 17.988 4.613 L 18.962 4.84 C 19.039 4.509 19.002 4.163 18.856 3.856 L 17.953 4.285 Z M 17.988 4.613 L 17.014 4.386 C 17.04 4.276 17.102 4.178 17.191 4.108 L 17.811 4.891 L 18.432 5.675 C 18.698 5.465 18.885 5.17 18.962 4.84 L 17.988 4.613 Z M 17.811 4.891 L 17.191 4.108 C 17.279 4.037 17.389 3.999 17.502 3.999 L 17.5 4.999 L 17.498 5.999 C 17.837 6 18.167 5.886 18.432 5.675 L 17.811 4.891 Z M 17.5 4.999 L 17.5 3.999 L 0.5 3.999 L 0.5 4.999 L 0.5 5.999 L 17.5 5.999 L 17.5 4.999 Z M 0.5 4.999 L 0.5 3.999 C 0.613 3.999 0.723 4.038 0.811 4.108 L 0.189 4.891 L -0.433 5.674 C -0.168 5.885 0.161 5.999 0.5 5.999 L 0.5 4.999 Z M 0.189 4.891 L 0.811 4.108 C 0.9 4.178 0.962 4.277 0.987 4.387 L 0.013 4.612 L -0.961 4.838 C -0.885 5.168 -0.699 5.463 -0.433 5.674 L 0.189 4.891 Z M 0.013 4.612 L 0.987 4.387 C 1.013 4.497 1 4.612 0.952 4.714 L 0.048 4.285 L -0.855 3.856 C -1 4.162 -1.038 4.508 -0.961 4.838 L 0.013 4.612 Z M 0.048 4.285 L 0.952 4.714 C 0.903 4.816 0.821 4.899 0.72 4.948 L 0.28 4.05 L -0.16 3.152 C -0.464 3.302 -0.709 3.549 -0.855 3.856 L 0.048 4.285 Z M 0.28 4.05 L 0.72 4.948 L 8.559 1.102 L 8.119 0.204 L 7.679 -0.693 L -0.16 3.153 L 0.28 4.05 Z M 11 15.999 L 12 15.999 L 12 8.999 L 11 8.999 L 10 8.999 L 10 15.999 L 11 15.999 Z M 15 15.999 L 16 15.999 L 16 8.999 L 15 8.999 L 14 8.999 L 14 15.999 L 15 15.999 Z M 0 19.999 L 0 20.999 L 18 20.999 L 18 19.999 L 18 18.999 L 0 18.999 L 0 19.999 Z M 3 15.999 L 4 15.999 L 4 8.999 L 3 8.999 L 2 8.999 L 2 15.999 L 3 15.999 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 243,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--color-text-grey-default)",
      flexShrink: 0
    }
  }, "Account 1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 93,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--color-text-purple-darker)",
      flexShrink: 0
    }
  }, "Billy, Corgan"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 23,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      borderRadius: 5,
      backgroundColor: "rgb(206,211,216)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 9px 4px 9px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(23,12,55)",
      flexShrink: 0
    }
  }, "DEFAULT")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 165,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.2999999523162842,
      color: "var(--color-text-grey-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "DE8934***********5892"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 35,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 20,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-f1118ebf499d69a3",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      clipPath: "inset(0px 0px 0px 0px round 22px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-63bfad855866308b",
    style: {
      position: "absolute",
      left: -12.667,
      top: -2,
      width: 36,
      height: 24,
      borderRadius: 5
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a917904cc599509c",
    style: {
      position: "absolute",
      left: 0,
      top: 0.166,
      width: 20,
      height: 19.835,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 19.835,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 19.8347110748291,
      clipPath: "inset(0px 0px 0px 0px round 22px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-197406627ebe3d39",
    style: {
      position: "absolute",
      left: -7.333,
      top: -1.323,
      width: 33.333,
      height: 21.818,
      borderRadius: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d9552cc1f7857b13",
    style: {
      position: "absolute",
      left: 0,
      top: -1.323,
      width: 20,
      height: 22.479,
      borderRadius: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e1c281aa85287ab6",
    style: {
      position: "absolute",
      left: -3.333,
      top: -3.967,
      width: 26,
      height: 27.769
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(100,105,108)",
      flexShrink: 0
    }
  }, "2 listings linked"))))), /*#__PURE__*/React.createElement(RadioButton, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    state: "default",
    checked: true,
    focused: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10,
      backgroundColor: "rgb(248,249,249)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "16px 24px 16px 24px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 271,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.001,
    height: 19.999,
    viewBox: "0 0 18.001 19.999",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 2.001,
      width: 18.001,
      height: 19.999,
      color: "var(--color-border-purple-darker-2)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 15.999 C 6 16.552 6.448 16.999 7 16.999 C 7.552 16.999 8 16.552 8 15.999 L 7 15.999 L 6 15.999 Z M 8 8.999 C 8 8.447 7.552 7.999 7 7.999 C 6.448 7.999 6 8.447 6 8.999 L 7 8.999 L 8 8.999 Z M 8.119 0.204 L 8.559 1.102 L 8.56 1.102 L 8.119 0.204 Z M 9 0 L 9 -1 L 9 0 Z M 9.881 0.204 L 9.441 1.102 L 9.441 1.102 L 9.881 0.204 Z M 17.721 4.05 L 17.281 4.948 L 17.281 4.948 L 17.721 4.05 Z M 17.5 4.999 L 17.502 3.999 L 17.5 3.999 L 17.5 4.999 Z M 0.5 4.999 L 0.5 3.999 L 0.5 3.999 L 0.5 4.999 Z M 0.28 4.05 L 0.72 4.948 L 0.72 4.948 L 0.28 4.05 Z M 10 15.999 C 10 16.552 10.448 16.999 11 16.999 C 11.552 16.999 12 16.552 12 15.999 L 11 15.999 L 10 15.999 Z M 12 8.999 C 12 8.447 11.552 7.999 11 7.999 C 10.448 7.999 10 8.447 10 8.999 L 11 8.999 L 12 8.999 Z M 14 15.999 C 14 16.552 14.448 16.999 15 16.999 C 15.552 16.999 16 16.552 16 15.999 L 15 15.999 L 14 15.999 Z M 16 8.999 C 16 8.447 15.552 7.999 15 7.999 C 14.448 7.999 14 8.447 14 8.999 L 15 8.999 L 16 8.999 Z M 0 18.999 C -0.552 18.999 -1 19.447 -1 19.999 C -1 20.552 -0.552 20.999 0 20.999 L 0 19.999 L 0 18.999 Z M 18 20.999 C 18.552 20.999 19 20.552 19 19.999 C 19 19.447 18.552 18.999 18 18.999 L 18 19.999 L 18 20.999 Z M 2 15.999 C 2 16.552 2.448 16.999 3 16.999 C 3.552 16.999 4 16.552 4 15.999 L 3 15.999 L 2 15.999 Z M 4 8.999 C 4 8.447 3.552 7.999 3 7.999 C 2.448 7.999 2 8.447 2 8.999 L 3 8.999 L 4 8.999 Z M 7 15.999 L 8 15.999 L 8 8.999 L 7 8.999 L 6 8.999 L 6 15.999 L 7 15.999 Z M 8.119 0.204 L 8.56 1.102 C 8.697 1.035 8.847 1 9 1 L 9 0 L 9 -1 C 8.542 -1 8.09 -0.895 7.679 -0.693 L 8.119 0.204 Z M 9 0 L 9 1 C 9.153 1 9.303 1.035 9.441 1.102 L 9.881 0.204 L 10.322 -0.693 C 9.91 -0.895 9.458 -1 9 -1 L 9 0 Z M 9.881 0.204 L 9.441 1.102 L 17.281 4.948 L 17.721 4.05 L 18.161 3.153 L 10.321 -0.693 L 9.881 0.204 Z M 17.721 4.05 L 17.281 4.948 C 17.179 4.899 17.098 4.816 17.049 4.714 L 17.953 4.285 L 18.856 3.856 C 18.711 3.55 18.466 3.302 18.161 3.152 L 17.721 4.05 Z M 17.953 4.285 L 17.049 4.714 C 17.001 4.612 16.988 4.496 17.014 4.386 L 17.988 4.613 L 18.962 4.84 C 19.039 4.509 19.002 4.163 18.856 3.856 L 17.953 4.285 Z M 17.988 4.613 L 17.014 4.386 C 17.04 4.276 17.102 4.178 17.191 4.108 L 17.811 4.891 L 18.432 5.675 C 18.698 5.465 18.885 5.17 18.962 4.84 L 17.988 4.613 Z M 17.811 4.891 L 17.191 4.108 C 17.279 4.037 17.389 3.999 17.502 3.999 L 17.5 4.999 L 17.498 5.999 C 17.837 6 18.167 5.886 18.432 5.675 L 17.811 4.891 Z M 17.5 4.999 L 17.5 3.999 L 0.5 3.999 L 0.5 4.999 L 0.5 5.999 L 17.5 5.999 L 17.5 4.999 Z M 0.5 4.999 L 0.5 3.999 C 0.613 3.999 0.723 4.038 0.811 4.108 L 0.189 4.891 L -0.433 5.674 C -0.168 5.885 0.161 5.999 0.5 5.999 L 0.5 4.999 Z M 0.189 4.891 L 0.811 4.108 C 0.9 4.178 0.962 4.277 0.987 4.387 L 0.013 4.612 L -0.961 4.838 C -0.885 5.168 -0.699 5.463 -0.433 5.674 L 0.189 4.891 Z M 0.013 4.612 L 0.987 4.387 C 1.013 4.497 1 4.612 0.952 4.714 L 0.048 4.285 L -0.855 3.856 C -1 4.162 -1.038 4.508 -0.961 4.838 L 0.013 4.612 Z M 0.048 4.285 L 0.952 4.714 C 0.903 4.816 0.821 4.899 0.72 4.948 L 0.28 4.05 L -0.16 3.152 C -0.464 3.302 -0.709 3.549 -0.855 3.856 L 0.048 4.285 Z M 0.28 4.05 L 0.72 4.948 L 8.559 1.102 L 8.119 0.204 L 7.679 -0.693 L -0.16 3.153 L 0.28 4.05 Z M 11 15.999 L 12 15.999 L 12 8.999 L 11 8.999 L 10 8.999 L 10 15.999 L 11 15.999 Z M 15 15.999 L 16 15.999 L 16 8.999 L 15 8.999 L 14 8.999 L 14 15.999 L 15 15.999 Z M 0 19.999 L 0 20.999 L 18 20.999 L 18 19.999 L 18 18.999 L 0 18.999 L 0 19.999 Z M 3 15.999 L 4 15.999 L 4 8.999 L 3 8.999 L 2 8.999 L 2 15.999 L 3 15.999 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 239,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--color-text-grey-default)",
      flexShrink: 0
    }
  }, "Account 2")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 93,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--color-text-purple-darker)",
      flexShrink: 0
    }
  }, "Proust, Marcel")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 165,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.2999999523162842,
      color: "var(--color-text-grey-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "DE8934***********5892"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e42b5188c9425f07",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px rgb(255,255,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 20,
      clipPath: "inset(0px 0px 0px 0px round 22px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-6da28c433a8776f3",
    style: {
      position: "absolute",
      left: -12.667,
      top: -2,
      width: 36,
      height: 24,
      borderRadius: 5
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(100,105,108)",
      flexShrink: 0
    }
  }, "1 listing linked"))))), /*#__PURE__*/React.createElement(RadioButton, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    state: "default",
    checked: false,
    focused: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "0px 0px 8px 8px",
      backgroundColor: "var(--color-background-white-default)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 0px 16px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(TextButton, {
    style: {
      position: "relative",
      width: 151,
      flexShrink: 0
    },
    label: "Add bank account",
    tone: "default"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 764,
      width: 393,
      backgroundColor: "var(--color-background-white-default)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      borderRadius: 40,
      backgroundColor: "var(--color-background-grey-subtle)",
      boxShadow: "inset 0 0 0 1px rgb(221,225,228)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "10px 32px 10px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--color-text-purple-darker)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Cancel")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      borderRadius: 40,
      backgroundColor: "var(--color-background-purple-darker-3)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "10px 32px 10px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--color-text-white-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Next")))));
}

// figma node: 3318:2934 MySetup
function MySetup(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      height: 812,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 224,
      width: 327,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "var(--color-background-white-default)",
      boxShadow: "inset 0 0 0 1px var(--color-border-grey-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 253,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(23,12,55)",
      flexShrink: 0
    }
  }, "Add billing details"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.2999999523162842,
      color: "rgb(129,135,140)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Needed to generate your rental contract")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      height: 26,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 26,
      height: 26,
      borderRadius: "50%",
      backgroundColor: "rgb(237,241,244)",
      boxShadow: "inset 0 0 0 1px rgb(229,233,237)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      opacity: 0,
      color: "rgb(184,188,193)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 0 0 L 0 16 L 16 16 L 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.600,
    height: 10,
    viewBox: "0 0 11.600 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.2,
      top: 3,
      width: 11.6,
      height: 10,
      color: "rgb(36,39,46)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.6 0 L 4.4 0 L 8.7 4.2 L 0 4.2 L 0 5.7 L 8.7 5.7 L 4.4 10 L 6.6 10 L 11.6 5 L 6.6 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "var(--color-background-white-default)",
      boxShadow: "inset 0 0 0 1px var(--color-border-grey-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 253,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(23,12,55)",
      flexShrink: 0
    }
  }, "Enable payout"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.2999999523162842,
      color: "rgb(129,135,140)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "To get your first rent payout on time")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      height: 26,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 26,
      height: 26,
      borderRadius: "50%",
      backgroundColor: "rgb(237,241,244)",
      boxShadow: "inset 0 0 0 1px rgb(229,233,237)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      opacity: 0,
      color: "rgb(184,188,193)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 0 0 L 0 16 L 16 16 L 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.600,
    height: 10,
    viewBox: "0 0 11.600 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.2,
      top: 3,
      width: 11.6,
      height: 10,
      color: "rgb(36,39,46)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.6 0 L 4.4 0 L 8.7 4.2 L 0 4.2 L 0 5.7 L 8.7 5.7 L 4.4 10 L 6.6 10 L 11.6 5 L 6.6 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 184,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 375,
      height: 125,
      backgroundColor: "var(--color-background-grey-lighter)",
      borderTop: "1px solid var(--color-border-grey-subtle)",
      borderRight: "1px solid var(--color-border-grey-subtle)",
      borderBottom: "1px solid var(--color-border-grey-subtle)",
      borderLeft: "1px solid var(--color-border-grey-subtle)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 132,
      top: 72,
      width: 112,
      height: 29,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(0,0,0)"
    }
  }, "My setup"), /*#__PURE__*/React.createElement("svg", {
    width: 33.882,
    height: 36,
    viewBox: "0 0 33.882 36",
    fill: "none",
    style: {
      position: "absolute",
      left: 20,
      top: 20,
      width: 33.882,
      height: 36,
      color: "rgb(84,46,188)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.941 4.141 L 30.588 14.4 L 30.588 28.047 L 25.412 31.906 L 16.941 25.553 L 8.471 31.906 L 3.294 28 L 3.294 14.353 L 16.941 4.141 Z M 16.941 0 L 0 12.706 L 0 29.647 L 8.471 36 L 16.941 29.647 L 25.412 36 L 33.882 29.647 L 33.882 12.706 L 16.941 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 319,
      top: 20,
      width: 36,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36,
      height: 36,
      borderRadius: "50%",
      backgroundColor: "rgba(36,39,46,0.1)",
      boxShadow: "0 0 0 1px rgba(36,39,46,0.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 12,
      width: 14,
      height: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 2,
      borderRadius: 2,
      backgroundColor: "rgb(36,39,46)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 5,
      width: 14,
      height: 2,
      borderRadius: 2,
      backgroundColor: "rgb(36,39,46)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 14,
      height: 2,
      borderRadius: 2,
      backgroundColor: "rgb(36,39,46)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      top: 149,
      width: 327,
      height: 35,
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "105%",
      color: "rgb(0,0,0)"
    }
  }, "Complete the following tasks to keep your account active and your experience uninterrupted.")));
}

// Globals for scripts loaded after this file.
window.RadioButton = RadioButton;
window.IconPlus = IconPlus;
window.TextButton = TextButton;
window.Step1 = Step1;
window.MySetup = MySetup;