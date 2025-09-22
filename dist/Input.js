var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Input = (_a) => {
    var { label, error } = _a, props = __rest(_a, ["label", "error"]);
    return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', marginBottom: '1rem' }, children: [label && _jsx("label", { style: { marginBottom: '0.25rem', fontWeight: 'bold' }, children: label }), _jsx("input", Object.assign({}, props, { style: {
                    padding: '0.5rem',
                    border: error ? '1px solid red' : '1px solid #f08 ouline-none',
                    borderRadius: '4px',
                    fontSize: '3rem'
                } })), error && _jsx("span", { style: { color: 'red', marginTop: '0.25rem', fontSize: '0.875rem' }, children: error })] }));
};
