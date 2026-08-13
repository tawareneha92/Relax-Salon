/* @ds-bundle: {"format":4,"namespace":"EmberStudioDesignSystem_c088a4","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarStack","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"61f8c0b0db6e","components/core/Badge.jsx":"1cbbb0b1a17f","components/core/Button.jsx":"45a5e5b9f75a","components/core/Card.jsx":"49d35ab23853","components/core/Chip.jsx":"73162fed4e94","components/core/IconButton.jsx":"590c423c3df3","components/core/ProgressBar.jsx":"b096e1659afa","components/feedback/Dialog.jsx":"2569fa4c1a69","components/feedback/Toast.jsx":"da68cf42f493","components/feedback/Tooltip.jsx":"404edfc5ac20","components/forms/Checkbox.jsx":"6af917c0fb1c","components/forms/Input.jsx":"b10d30ab7757","components/forms/Radio.jsx":"1b94621a24fd","components/forms/Select.jsx":"b20cd7db6eae","components/forms/Switch.jsx":"5f558e8c4bb7","components/navigation/SidebarNav.jsx":"867e3a932be8","components/navigation/Tabs.jsx":"d92cc36e3951","ui_kits/app/ProjectScreen.jsx":"6a9032e1e073","ui_kits/app/ProjectsScreen.jsx":"bee7cf50281c","ui_kits/app/SettingsScreen.jsx":"c193220c5ea3","ui_kits/app/Shell.jsx":"2c3b40c169c6","ui_kits/app/data.js":"7ebe1d5ddb06"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EmberStudioDesignSystem_c088a4 = window.EmberStudioDesignSystem_c088a4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  name = '',
  src,
  size = 32,
  tone = 'var(--stone-200)',
  style,
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: tone,
      color: 'var(--text-secondary)',
      border: '2px solid var(--surface-card)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: Math.round(size * 0.38),
      flexShrink: 0,
      ...style
    },
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
function AvatarStack({
  people = [],
  size = 32,
  max = 4
}) {
  const shown = people.slice(0, max);
  const rest = people.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement(Avatar, {
    key: i,
    name: p.name,
    src: p.src,
    size: size,
    tone: p.tone,
    style: {
      marginLeft: i === 0 ? 0 : -8
    }
  })), rest > 0 && /*#__PURE__*/React.createElement(Avatar, {
    name: '+' + rest,
    size: size,
    style: {
      marginLeft: -8
    },
    tone: "var(--surface-raised)"
  }));
}
Object.assign(__ds_scope, { Avatar, AvatarStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--surface-raised)',
    color: 'var(--text-secondary)'
  },
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-primary)'
  },
  accent: {
    background: 'var(--color-accent)',
    color: 'var(--stone-950)'
  },
  success: {
    background: 'rgba(22,163,74,0.12)',
    color: 'var(--color-success)'
  },
  warning: {
    background: 'rgba(217,119,6,0.12)',
    color: 'var(--color-warning)'
  },
  error: {
    background: 'rgba(220,38,38,0.12)',
    color: 'var(--color-error)'
  }
};
function Badge({
  tone = 'neutral',
  dot,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '2px 8px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      fontFamily: 'var(--font-body)',
      ...TONES[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-full)',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  small: {
    height: 32,
    padding: '0 12px',
    fontSize: 14
  },
  medium: {
    height: 40,
    padding: '0 16px',
    fontSize: 16
  },
  large: {
    height: 48,
    padding: '0 24px',
    fontSize: 16
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-primary)',
    border: '1px solid var(--color-primary)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent'
  },
  destructive: {
    background: 'var(--color-error)',
    color: 'var(--text-on-primary)',
    border: '1px solid var(--color-error)'
  }
};
function Button({
  variant = 'primary',
  size = 'medium',
  disabled,
  fullWidth,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--color-primary-hover)',
      borderColor: 'var(--color-primary-hover)',
      boxShadow: 'var(--shadow-primary-glow)'
    },
    secondary: {
      background: 'var(--surface-raised)'
    },
    ghost: {
      background: 'var(--surface-raised)',
      color: 'var(--text-primary)'
    },
    destructive: {
      background: '#B91C1C',
      borderColor: '#B91C1C'
    }
  }[variant] : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition-control)',
      width: fullWidth ? '100%' : undefined,
      whiteSpace: 'nowrap',
      ...SIZES[size],
      ...VARIANTS[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  selected,
  stripeColor,
  interactive = true,
  padding = 16,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding,
      overflow: 'hidden',
      borderLeft: selected ? '2px solid var(--color-primary)' : '1px solid var(--border-default)',
      boxShadow: interactive && hover ? 'var(--shadow-card-hover)' : 'none',
      transform: interactive && hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), stripeColor && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: stripeColor
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: stripeColor ? 12 : 0
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  default: {
    background: 'var(--stone-100)',
    color: 'var(--stone-600)',
    border: '1px solid var(--border-default)'
  },
  success: {
    background: 'rgba(22,163,74,0.12)',
    color: 'var(--color-success)',
    border: '1px solid transparent'
  },
  warning: {
    background: 'rgba(217,119,6,0.12)',
    color: 'var(--color-warning)',
    border: '1px solid transparent'
  },
  error: {
    background: 'rgba(220,38,38,0.12)',
    color: 'var(--color-error)',
    border: '1px solid transparent'
  }
};
function Chip({
  active,
  tone = 'default',
  onRemove,
  children,
  style,
  ...rest
}) {
  const look = active ? {
    background: 'var(--color-primary)',
    color: 'var(--text-on-primary)',
    border: '1px solid var(--color-primary)'
  } : TONES[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 14px',
      borderRadius: 'var(--radius-full)',
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-semibold)',
      fontFamily: 'var(--font-body)',
      cursor: rest.onClick ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...look,
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      cursor: 'pointer',
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  small: 32,
  medium: 40,
  large: 48
};
function IconButton({
  variant = 'ghost',
  size = 'medium',
  label,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-on-primary)',
      border: '1px solid var(--color-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    }
  }[variant];
  const dim = SIZES[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition-control)',
      ...base,
      ...(hover && !disabled ? variant === 'primary' ? {
        background: 'var(--color-primary-hover)'
      } : {
        background: 'var(--surface-raised)',
        color: 'var(--text-primary)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  label,
  showPercent = true,
  color = 'var(--color-primary)',
  style
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, (label || showPercent) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 8,
      fontSize: 'var(--text-small)',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, label), showPercent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 'var(--radius-full)',
      background: 'var(--stone-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      borderRadius: 'var(--radius-full)',
      background: color,
      transition: 'width var(--duration-medium) var(--ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  description,
  onClose,
  footer,
  width = 480,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-page)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-modal)',
      padding: 24,
      fontFamily: 'var(--font-body)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-display)',
      fontSize: 'var(--text-subhead)',
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)'
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  info: 'var(--color-primary)',
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  error: 'var(--color-error)'
};
function Toast({
  tone = 'info',
  title,
  message,
  action,
  onDismiss,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 360,
      maxWidth: '100%',
      background: 'var(--surface-page)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-popover)',
      padding: 16,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-full)',
      background: TONES[tone],
      marginTop: 6,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = 'top',
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 40,
      whiteSpace: 'nowrap',
      background: 'var(--stone-950)',
      color: 'var(--cream-50)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-md)',
      fontSize: 'var(--text-caption)',
      fontFamily: 'var(--font-body)',
      boxShadow: 'var(--shadow-popover)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: description ? 'flex-start' : 'center',
      fontFamily: 'var(--font-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      marginTop: description ? 2 : 0,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (checked ? 'var(--color-primary)' : 'var(--border-default)'),
      background: checked ? 'var(--color-primary)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-on-primary)',
      fontSize: 12,
      transition: 'var(--transition-control)'
    }
  }, checked && '✓'), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-size)',
      color: 'var(--text-primary)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--color-error)' : focus ? 'var(--color-primary)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 12px',
      background: 'var(--surface-card)',
      border: '1px solid ' + borderColor,
      borderRadius: 'var(--radius-md)',
      transition: 'var(--transition-control)',
      boxShadow: focus && !error ? 'var(--ring-primary)' : 'none'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: '12px 0',
      fontSize: 16,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      minWidth: 0,
      ...style
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--color-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  description,
  checked,
  onChange,
  name,
  value,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: description ? 'flex-start' : 'center',
      fontFamily: 'var(--font-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      marginTop: description ? 2 : 0,
      borderRadius: 'var(--radius-full)',
      border: '1px solid ' + (checked ? 'var(--color-primary)' : 'var(--border-default)'),
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-primary)'
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-size)',
      color: 'var(--text-primary)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  hint,
  error,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--color-error)' : focus ? 'var(--color-primary)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-semibold)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      padding: '12px 36px 12px 12px',
      fontSize: 16,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      border: '1px solid ' + borderColor,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--ring-primary)' : 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--color-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 24,
      padding: 3,
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--color-primary)' : 'var(--surface-raised)',
      border: '1px solid ' + (checked ? 'var(--color-primary)' : 'var(--border-default)'),
      display: 'inline-flex',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-full)',
      background: checked ? '#FFFFFF' : 'var(--cream-50)',
      transform: 'translateX(' + (checked ? 16 : 0) + 'px)',
      transition: 'transform var(--duration-fast) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-size)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function SidebarNav({
  workspace = 'Workspace',
  brand = 'Ember Studio',
  sections = [],
  value,
  onChange,
  footer,
  style
}) {
  const [open, setOpen] = React.useState(() => Object.fromEntries(sections.map(s => [s.label, true])));
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 'var(--sidebar-width)',
      flexShrink: 0,
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-default)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-primary)'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, workspace)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 8px'
    }
  }, sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => ({
      ...o,
      [s.label]: !o[s.label]
    })),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '6px 8px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-overline)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, s.label, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: open[s.label] ? 'rotate(0deg)' : 'rotate(-90deg)',
      transition: 'transform var(--duration-fast) var(--ease-standard)',
      fontSize: 10
    }
  }, "\u25BE")), open[s.label] && s.items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange && onChange(it.value),
      onMouseEnter: () => setHover(it.value),
      onMouseLeave: () => setHover(null),
      style: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 10px 8px 13px',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-small)',
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: active ? 'var(--color-primary)' : 'var(--text-secondary)',
        background: active ? 'var(--tint-primary)' : hover === it.value ? 'var(--surface-raised)' : 'transparent',
        transition: 'var(--transition-control)'
      }
    }, active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 6,
        bottom: 6,
        width: 3,
        borderRadius: 'var(--radius-full)',
        background: 'var(--color-primary)'
      }
    }), it.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        width: 16
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-caption)',
        color: 'var(--text-muted)'
      }
    }, it.count));
  })))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: '1px solid var(--border-default)'
    }
  }, footer));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, tabs.map(t => {
    const id = typeof t === 'string' ? t : t.value;
    const label = typeof t === 'string' ? t : t.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      onMouseEnter: () => setHover(id),
      onMouseLeave: () => setHover(null),
      onClick: () => onChange && onChange(id),
      style: {
        appearance: 'none',
        border: 'none',
        background: hover === id && !active ? 'var(--surface-raised)' : 'transparent',
        padding: '10px 14px',
        cursor: 'pointer',
        fontSize: 'var(--text-small)',
        fontWeight: 'var(--weight-semibold)',
        fontFamily: 'var(--font-body)',
        color: active ? 'var(--color-primary)' : 'var(--text-secondary)',
        borderBottom: '2px solid ' + (active ? 'var(--color-primary)' : 'transparent'),
        borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
        marginBottom: -1,
        transition: 'var(--transition-control)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, label, typeof t === 'object' && t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-caption)',
        color: 'var(--text-muted)'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ProjectScreen.jsx
try { (() => {
const {
  Card,
  Chip,
  Badge,
  Button,
  IconButton,
  ProgressBar,
  AvatarStack,
  Avatar,
  Tabs,
  Checkbox,
  Tooltip
} = window.EmberStudioDesignSystem_c088a4;
const PRIORITY = {
  High: 'error',
  Medium: 'warning',
  Low: 'default'
};
function TaskCard({
  task,
  done,
  onToggle
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: 12,
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: done,
    onChange: onToggle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)',
      textDecoration: done ? 'line-through' : 'none',
      opacity: done ? 0.6 : 1
    }
  }, task.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: PRIORITY[task.priority],
    style: {
      padding: '2px 10px',
      fontSize: 12
    }
  }, task.priority), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, task.due), /*#__PURE__*/React.createElement(Avatar, {
    name: task.assignee,
    size: 24,
    style: {
      marginLeft: 'auto'
    }
  })))));
}
function ProjectScreen({
  project
}) {
  const [tab, setTab] = React.useState('board');
  const [done, setDone] = React.useState({
    7: true,
    8: true
  });
  const cols = window.EmberData.columns;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: 24
    },
    tabs: [{
      value: 'board',
      label: 'Board'
    }, {
      value: 'files',
      label: 'Files',
      count: 24
    }, {
      value: 'activity',
      label: 'Activity'
    }]
  }), tab === 'board' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, c.label), /*#__PURE__*/React.createElement(Badge, null, c.tasks.length), /*#__PURE__*/React.createElement(IconButton, {
    label: 'Add to ' + c.label,
    size: "small",
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14
  }))), c.tasks.map(t => /*#__PURE__*/React.createElement(TaskCard, {
    key: t.id,
    task: t,
    done: !!done[t.id],
    onToggle: () => setDone(d => ({
      ...d,
      [t.id]: !d[t.id]
    }))
  }))))), tab === 'files' && /*#__PURE__*/React.createElement(Card, {
    interactive: false,
    padding: 0,
    style: {
      maxWidth: 720
    }
  }, ['Hero_sequence_v4.psd', 'Moodboard.pdf', 'Product_set_raw.zip', 'Copy_deck.docx'].map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 16,
      borderTop: i ? '1px solid var(--border-default)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Ida Morrow \xB7 2 days ago"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Download",
    size: "small"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 14
  }))))), tab === 'activity' && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, window.EmberData.activity.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: a.who,
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-primary)'
    }
  }, a.who), " ", a.what, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, a.when))))));
}
Object.assign(window, {
  ProjectScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ProjectScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ProjectsScreen.jsx
try { (() => {
const {
  Card,
  Chip,
  Badge,
  Button,
  IconButton,
  ProgressBar,
  AvatarStack,
  Input,
  Tabs,
  Tooltip
} = window.EmberStudioDesignSystem_c088a4;
function statusTone(s) {
  return s === 'Overdue' ? 'error' : s === 'Needs attention' ? 'warning' : s === 'In review' ? 'default' : 'success';
}
function ProjectsScreen({
  onOpen,
  onNew
}) {
  const [filter, setFilter] = React.useState('All');
  const [tab, setTab] = React.useState('active');
  const [query, setQuery] = React.useState('');
  const projects = window.EmberData.projects.filter(p => (filter === 'All' || p.client === filter) && p.name.toLowerCase().includes(query.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: 24
    },
    tabs: [{
      value: 'active',
      label: 'Active',
      count: 6
    }, {
      value: 'review',
      label: 'In review',
      count: 1
    }, {
      value: 'archive',
      label: 'Archive'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search projects",
    value: query,
    onChange: e => setQuery(e.target.value),
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "search"
    })
  })), ['All', 'Northwind Coffee', 'Halden & Co.', 'Fielder Press'].map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    active: filter === c,
    onClick: () => setFilter(c)
  }, c)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Board view"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Board",
    variant: "secondary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layout-grid"
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    content: "List view"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "List"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "list"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: 24
    }
  }, projects.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    stripeColor: p.color,
    onClick: () => onOpen(p),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: 20,
      color: 'var(--text-primary)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, p.client)), /*#__PURE__*/React.createElement(Badge, {
    tone: statusTone(p.status),
    dot: true
  }, p.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 0'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: p.progress,
    label: p.done + ' of ' + p.tasks + ' tasks',
    color: p.color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(AvatarStack, {
    people: p.team,
    size: 28
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      color: p.status === 'Overdue' ? 'var(--color-error)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 13
  }), p.due)))), /*#__PURE__*/React.createElement("button", {
    onClick: onNew,
    style: {
      border: '1px dashed var(--border-default)',
      background: 'transparent',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      minHeight: 160,
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 20
  }), "New project")));
}
Object.assign(window, {
  ProjectsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/SettingsScreen.jsx
try { (() => {
const {
  Card,
  Input,
  Select,
  Switch,
  Button,
  Checkbox,
  Avatar,
  Badge
} = window.EmberStudioDesignSystem_c088a4;
function Row({
  title,
  description,
  control
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '16px 0',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, description)), control);
}
function SettingsScreen() {
  const [digest, setDigest] = React.useState(true);
  const [pub, setPub] = React.useState(false);
  const [mentions, setMentions] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: false,
    padding: 24
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      marginBottom: 4
    }
  }, "Workspace"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      margin: '0 0 20px'
    }
  }, "Details your clients see on shared links."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Workspace name",
    defaultValue: "Northwind Creative"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Time zone",
    options: ['Europe/London', 'America/New_York', 'Asia/Tokyo']
  }))), /*#__PURE__*/React.createElement(Card, {
    interactive: false,
    padding: 24
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      marginBottom: 4
    }
  }, "Notifications"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      margin: '0 0 8px'
    }
  }, "Applies to every project you follow."), /*#__PURE__*/React.createElement(Row, {
    title: "Weekly digest",
    description: "One summary email each Monday morning.",
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: digest,
      onChange: () => setDigest(!digest)
    })
  }), /*#__PURE__*/React.createElement(Row, {
    title: "Mentions",
    description: "Notify me when someone @mentions me.",
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: mentions,
      onChange: () => setMentions(!mentions)
    })
  }), /*#__PURE__*/React.createElement(Row, {
    title: "Public share links",
    description: "Anyone with the link can view project boards.",
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: pub,
      onChange: () => setPub(!pub)
    })
  })), /*#__PURE__*/React.createElement(Card, {
    interactive: false,
    padding: 24
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      marginBottom: 16
    }
  }, "Team"), [['Ida Morrow', 'Studio lead', 'Owner'], ['Tom Reyes', 'Copywriter', 'Editor'], ['Lena Ford', 'Art director', 'Editor'], ['Amir Sy', 'Designer', 'Viewer']].map(([n, r, role], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderTop: i ? '1px solid var(--border-default)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, r)), /*#__PURE__*/React.createElement(Badge, {
    tone: role === 'Owner' ? 'primary' : 'neutral'
  }, role))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small"
  }, "Invite teammate"))));
}
Object.assign(window, {
  SettingsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Shell.jsx
try { (() => {
const {
  SidebarNav,
  Avatar,
  IconButton,
  Tooltip,
  Button
} = window.EmberStudioDesignSystem_c088a4;
function Icon({
  name,
  size = 16
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      display: 'inline-flex'
    }
  });
}
function Shell({
  route,
  setRoute,
  title,
  subtitle,
  actions,
  children
}) {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    brand: "Ember Studio",
    workspace: "Northwind Creative",
    value: route,
    onChange: setRoute,
    sections: [{
      label: 'Work',
      items: [{
        value: 'projects',
        label: 'All projects',
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "folder"
        }),
        count: 6
      }, {
        value: 'project',
        label: 'Autumn campaign',
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "square-dashed"
        })
      }, {
        value: 'inbox',
        label: 'Inbox',
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "inbox"
        }),
        count: 3
      }]
    }, {
      label: 'Workspace',
      items: [{
        value: 'team',
        label: 'Team',
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "users"
        })
      }, {
        value: 'settings',
        label: 'Settings',
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "settings"
        })
      }]
    }],
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Ida Morrow",
      tone: "var(--tint-primary-strong)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-primary)'
      }
    }, "Ida Morrow"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, "Studio lead")), /*#__PURE__*/React.createElement(Tooltip, {
      content: "Account settings"
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Account",
      size: "small"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-up"
    }))))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '20px 32px',
      borderBottom: '1px solid var(--border-default)',
      background: 'rgba(250,250,249,0.8)',
      backdropFilter: 'blur(8px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: 28,
      color: 'var(--text-primary)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, subtitle)), actions), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 32
    }
  }, children)));
}
Object.assign(window, {
  Shell,
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
window.EmberData = {
  projects: [{
    id: 'autumn',
    name: 'Autumn campaign',
    client: 'Northwind Coffee',
    color: '#F59E0B',
    progress: 68,
    due: 'Fri, 14 Aug',
    tasks: 12,
    done: 8,
    status: 'On track',
    team: [{
      name: 'Ida Morrow'
    }, {
      name: 'Tom Reyes'
    }, {
      name: 'Lena Ford'
    }]
  }, {
    id: 'brand',
    name: 'Brand refresh',
    client: 'Halden & Co.',
    color: '#C2410C',
    progress: 34,
    due: 'Mon, 24 Aug',
    tasks: 26,
    done: 9,
    status: 'Needs attention',
    team: [{
      name: 'Amir Sy'
    }, {
      name: 'Ida Morrow'
    }]
  }, {
    id: 'site',
    name: 'Site rebuild',
    client: 'Fielder Press',
    color: '#16A34A',
    progress: 92,
    due: 'Wed, 12 Aug',
    tasks: 18,
    done: 17,
    status: 'In review',
    team: [{
      name: 'Jo Vance'
    }, {
      name: 'Tom Reyes'
    }, {
      name: 'Lena Ford'
    }, {
      name: 'Amir Sy'
    }, {
      name: 'Ida Morrow'
    }]
  }, {
    id: 'packaging',
    name: 'Packaging system',
    client: 'Northwind Coffee',
    color: '#78716C',
    progress: 12,
    due: 'Tue, 8 Sep',
    tasks: 31,
    done: 4,
    status: 'On track',
    team: [{
      name: 'Lena Ford'
    }]
  }, {
    id: 'annual',
    name: 'Annual report',
    client: 'Halden & Co.',
    color: '#D97706',
    progress: 55,
    due: 'Thu, 20 Aug',
    tasks: 14,
    done: 8,
    status: 'On track',
    team: [{
      name: 'Jo Vance'
    }, {
      name: 'Amir Sy'
    }]
  }, {
    id: 'photo',
    name: 'Photography direction',
    client: 'Fielder Press',
    color: '#DC2626',
    progress: 4,
    due: 'Overdue',
    tasks: 9,
    done: 0,
    status: 'Overdue',
    team: [{
      name: 'Tom Reyes'
    }]
  }],
  columns: [{
    id: 'todo',
    label: 'To do',
    tasks: [{
      id: 1,
      title: 'Collect reference imagery',
      priority: 'Medium',
      assignee: 'Ida Morrow',
      due: 'Aug 13'
    }, {
      id: 2,
      title: 'Draft headline options',
      priority: 'High',
      assignee: 'Tom Reyes',
      due: 'Aug 14'
    }, {
      id: 3,
      title: 'Book studio for shoot',
      priority: 'Low',
      assignee: 'Lena Ford',
      due: 'Aug 19'
    }]
  }, {
    id: 'progress',
    label: 'In progress',
    tasks: [{
      id: 4,
      title: 'Layout the hero sequence',
      priority: 'High',
      assignee: 'Ida Morrow',
      due: 'Aug 12'
    }, {
      id: 5,
      title: 'Colour grade the product set',
      priority: 'Medium',
      assignee: 'Lena Ford',
      due: 'Aug 15'
    }]
  }, {
    id: 'review',
    label: 'In review',
    tasks: [{
      id: 6,
      title: 'Copy pass on the landing page',
      priority: 'Medium',
      assignee: 'Tom Reyes',
      due: 'Aug 12'
    }]
  }, {
    id: 'done',
    label: 'Done',
    tasks: [{
      id: 7,
      title: 'Kickoff workshop',
      priority: 'Low',
      assignee: 'Jo Vance',
      due: 'Aug 4'
    }, {
      id: 8,
      title: 'Agree the budget',
      priority: 'High',
      assignee: 'Jo Vance',
      due: 'Aug 5'
    }]
  }],
  activity: [{
    who: 'Ida Morrow',
    what: 'moved Layout the hero sequence to In progress',
    when: '12 minutes ago'
  }, {
    who: 'Tom Reyes',
    what: 'commented on Copy pass on the landing page',
    when: '1 hour ago'
  }, {
    who: 'Lena Ford',
    what: 'uploaded 8 files to Photography',
    when: 'Yesterday'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarStack = __ds_scope.AvatarStack;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
