"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "emails_vercel-invite-user_tsx";
exports.ids = ["emails_vercel-invite-user_tsx"];
exports.modules = {

/***/ "./emails/vercel-invite-user.tsx":
/*!***************************************!*\
  !*** ./emails/vercel-invite-user.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emails_vercel_invite_user_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../emails/vercel-invite-user.tsx */ \"../emails/vercel-invite-user.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_emails_vercel_invite_user_tsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbWFpbHMvdmVyY2VsLWludml0ZS11c2VyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1RDtBQUN2RCxpRUFBZUEsc0VBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1lbWFpbC1jbGllbnQvLi9lbWFpbHMvdmVyY2VsLWludml0ZS11c2VyLnRzeD84ZTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWlsIGZyb20gJy4uLy4uL2VtYWlscy92ZXJjZWwtaW52aXRlLXVzZXIudHN4JztcbmV4cG9ydCBkZWZhdWx0IE1haWw7Il0sIm5hbWVzIjpbIk1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./emails/vercel-invite-user.tsx\n");

/***/ }),

/***/ "../emails/vercel-invite-user.tsx":
/*!****************************************!*\
  !*** ../emails/vercel-invite-user.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VercelInviteUserEmail\": () => (/* binding */ VercelInviteUserEmail),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-email/components */ \"@react-email/components\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_email_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : \"\";\nconst VercelInviteUserEmail = ({ username =\"zenorocha\" , userImage =`${baseUrl}/static/vercel-user.png` , invitedByUsername =\"bukinoshita\" , invitedByEmail =\"bukinoshita@example.com\" , teamName =\"My Project\" , teamImage =`${baseUrl}/static/vercel-team.png` , inviteLink =\"https://vercel.com/teams/invite/foo\" , inviteFromIp =\"204.13.186.218\" , inviteFromLocation =\"S\\xe3o Paulo, Brazil\"  })=>{\n    const previewText = `Join ${invitedByUsername} on Vercel`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Preview, {\n                children: previewText\n            }, void 0, false, {\n                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Tailwind, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Body, {\n                    className: \"bg-white my-auto mx-auto font-sans\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                        className: \"border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {\n                                className: \"mt-[32px]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                                    src: `${baseUrl}/static/vercel-logo.png`,\n                                    width: \"40\",\n                                    height: \"37\",\n                                    alt: \"Vercel\",\n                                    className: \"my-0 mx-auto\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                className: \"text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0\",\n                                children: [\n                                    \"Join \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: teamName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 20\n                                    }, undefined),\n                                    \" on \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Vercel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 51\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                className: \"text-black text-[14px] leading-[24px]\",\n                                children: [\n                                    \"Hello \",\n                                    username,\n                                    \",\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                className: \"text-black text-[14px] leading-[24px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"bukinoshita\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \" (\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        href: `mailto:${invitedByEmail}`,\n                                        className: \"text-blue-600 no-underline\",\n                                        children: invitedByEmail\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \") has invited you to the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: teamName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 40\n                                    }, undefined),\n                                    \" team on\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Vercel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \".\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Row, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Column, {\n                                            align: \"right\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                                                className: \"rounded-full\",\n                                                src: userImage,\n                                                width: \"64\",\n                                                height: \"64\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Column, {\n                                            align: \"center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                                                src: `${baseUrl}/static/vercel-arrow.png`,\n                                                width: \"12\",\n                                                height: \"9\",\n                                                alt: \"invited you to\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Column, {\n                                            align: \"left\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                                                className: \"rounded-full\",\n                                                src: teamImage,\n                                                width: \"64\",\n                                                height: \"64\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {\n                                className: \"text-center mt-[32px] mb-[32px]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    pX: 20,\n                                    pY: 12,\n                                    className: \"bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center\",\n                                    href: inviteLink,\n                                    children: \"Join the team\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                className: \"text-black text-[14px] leading-[24px]\",\n                                children: [\n                                    \"or copy and paste this URL into your browser:\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        href: inviteLink,\n                                        className: \"text-blue-600 no-underline\",\n                                        children: inviteLink\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Hr, {\n                                className: \"border border-solid border-[#eaeaea] my-[26px] mx-0 w-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                className: \"text-[#666666] text-[12px] leading-[24px]\",\n                                children: [\n                                    \"This invitation was intended for\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-black\",\n                                        children: [\n                                            username,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \".This invite was sent from\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-black\",\n                                        children: inviteFromIp\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \" located in\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-black\",\n                                        children: inviteFromLocation\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \". If you were not expecting this invitation, you can ignore this email. If you are concerned about your account's safety, please reply to this email to get in touch with us.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jbsoccer97/Desktop/react-email-starter/emails/vercel-invite-user.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VercelInviteUserEmail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUE7Z0NBQUNpQixXQUFVOztvQ0FBd0M7b0NBQ1I7a0RBQzlDLDhEQUFDdEIseURBQUlBO3dDQUNINEIsTUFBTVY7d0NBQ05JLFdBQVU7a0RBRVRKOzs7Ozs7Ozs7Ozs7MENBR0wsOERBQUNyQix1REFBRUE7Z0NBQUN5QixXQUFVOzs7Ozs7MENBQ2QsOERBQUNqQix5REFBSUE7Z0NBQUNpQixXQUFVOztvQ0FBNEM7b0NBQ3pCO2tEQUNqQyw4REFBQ1U7d0NBQUtWLFdBQVU7OzRDQUFjVjs0Q0FBUzs7Ozs7OztvQ0FBUTtvQ0FBMkI7a0RBQzFFLDhEQUFDb0I7d0NBQUtWLFdBQVU7a0RBQWNIOzs7Ozs7b0NBQW9CO29DQUFZO2tEQUM5RCw4REFBQ2E7d0NBQUtWLFdBQVU7a0RBQWNGOzs7Ozs7b0NBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV0RSxFQUFFO0FBRUYsaUVBQWVULHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWVtYWlsLWNsaWVudC8uLi9lbWFpbHMvdmVyY2VsLWludml0ZS11c2VyLnRzeD9kNDM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJvZHksXG4gIEJ1dHRvbixcbiAgQ29sdW1uLFxuICBDb250YWluZXIsXG4gIEhlYWQsXG4gIEhlYWRpbmcsXG4gIEhyLFxuICBIdG1sLFxuICBJbWcsXG4gIExpbmssXG4gIFByZXZpZXcsXG4gIFJvdyxcbiAgU2VjdGlvbixcbiAgVGFpbHdpbmQsXG4gIFRleHQsXG59IGZyb20gJ0ByZWFjdC1lbWFpbC9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFZlcmNlbEludml0ZVVzZXJFbWFpbFByb3BzIHtcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gIHVzZXJJbWFnZT86IHN0cmluZztcbiAgaW52aXRlZEJ5VXNlcm5hbWU/OiBzdHJpbmc7XG4gIGludml0ZWRCeUVtYWlsPzogc3RyaW5nO1xuICB0ZWFtTmFtZT86IHN0cmluZztcbiAgdGVhbUltYWdlPzogc3RyaW5nO1xuICBpbnZpdGVMaW5rPzogc3RyaW5nO1xuICBpbnZpdGVGcm9tSXA/OiBzdHJpbmc7XG4gIGludml0ZUZyb21Mb2NhdGlvbj86IHN0cmluZztcbn1cblxuY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LlZFUkNFTF9VUkxcbiAgPyBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LlZFUkNFTF9VUkx9YFxuICA6ICcnO1xuXG5leHBvcnQgY29uc3QgVmVyY2VsSW52aXRlVXNlckVtYWlsID0gKHtcbiAgdXNlcm5hbWUgPSAnemVub3JvY2hhJyxcbiAgdXNlckltYWdlID0gYCR7YmFzZVVybH0vc3RhdGljL3ZlcmNlbC11c2VyLnBuZ2AsXG4gIGludml0ZWRCeVVzZXJuYW1lID0gJ2J1a2lub3NoaXRhJyxcbiAgaW52aXRlZEJ5RW1haWwgPSAnYnVraW5vc2hpdGFAZXhhbXBsZS5jb20nLFxuICB0ZWFtTmFtZSA9ICdNeSBQcm9qZWN0JyxcbiAgdGVhbUltYWdlID0gYCR7YmFzZVVybH0vc3RhdGljL3ZlcmNlbC10ZWFtLnBuZ2AsXG4gIGludml0ZUxpbmsgPSAnaHR0cHM6Ly92ZXJjZWwuY29tL3RlYW1zL2ludml0ZS9mb28nLFxuICBpbnZpdGVGcm9tSXAgPSAnMjA0LjEzLjE4Ni4yMTgnLFxuICBpbnZpdGVGcm9tTG9jYXRpb24gPSAnU8OjbyBQYXVsbywgQnJhemlsJyxcbn06IFZlcmNlbEludml0ZVVzZXJFbWFpbFByb3BzKSA9PiB7XG4gIGNvbnN0IHByZXZpZXdUZXh0ID0gYEpvaW4gJHtpbnZpdGVkQnlVc2VybmFtZX0gb24gVmVyY2VsYDtcblxuICByZXR1cm4gKFxuICAgIDxIdG1sPlxuICAgICAgPEhlYWQgLz5cbiAgICAgIDxQcmV2aWV3PntwcmV2aWV3VGV4dH08L1ByZXZpZXc+XG4gICAgICA8VGFpbHdpbmQ+XG4gICAgICAgIDxCb2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlIG15LWF1dG8gbXgtYXV0byBmb250LXNhbnNcIj5cbiAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLVsjZWFlYWVhXSByb3VuZGVkIG15LVs0MHB4XSBteC1hdXRvIHAtWzIwcHhdIHctWzQ2NXB4XVwiPlxuICAgICAgICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPVwibXQtWzMycHhdXCI+XG4gICAgICAgICAgICAgIDxJbWdcbiAgICAgICAgICAgICAgICBzcmM9e2Ake2Jhc2VVcmx9L3N0YXRpYy92ZXJjZWwtbG9nby5wbmdgfVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjM3XCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJWZXJjZWxcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTAgbXgtYXV0b1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8SGVhZGluZyBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHRleHQtWzI0cHhdIGZvbnQtbm9ybWFsIHRleHQtY2VudGVyIHAtMCBteS1bMzBweF0gbXgtMFwiPlxuICAgICAgICAgICAgICBKb2luIDxzdHJvbmc+e3RlYW1OYW1lfTwvc3Ryb25nPiBvbiA8c3Ryb25nPlZlcmNlbDwvc3Ryb25nPlxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1ibGFjayB0ZXh0LVsxNHB4XSBsZWFkaW5nLVsyNHB4XVwiPlxuICAgICAgICAgICAgICBIZWxsbyB7dXNlcm5hbWV9LFxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1ibGFjayB0ZXh0LVsxNHB4XSBsZWFkaW5nLVsyNHB4XVwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPmJ1a2lub3NoaXRhPC9zdHJvbmc+IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtgbWFpbHRvOiR7aW52aXRlZEJ5RW1haWx9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIG5vLXVuZGVybGluZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aW52aXRlZEJ5RW1haWx9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSBoYXMgaW52aXRlZCB5b3UgdG8gdGhlIDxzdHJvbmc+e3RlYW1OYW1lfTwvc3Ryb25nPiB0ZWFtIG9ueycgJ31cbiAgICAgICAgICAgICAgPHN0cm9uZz5WZXJjZWw8L3N0cm9uZz4uXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8U2VjdGlvbj5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxJbWcgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgc3JjPXt1c2VySW1hZ2V9IHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPEltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2Jhc2VVcmx9L3N0YXRpYy92ZXJjZWwtYXJyb3cucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjlcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbnZpdGVkIHlvdSB0b1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICA8SW1nIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIHNyYz17dGVhbUltYWdlfSB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LVszMnB4XSBtYi1bMzJweF1cIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHBYPXsyMH1cbiAgICAgICAgICAgICAgICBwWT17MTJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyMwMDAwMDBdIHJvdW5kZWQgdGV4dC13aGl0ZSB0ZXh0LVsxMnB4XSBmb250LXNlbWlib2xkIG5vLXVuZGVybGluZSB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgaHJlZj17aW52aXRlTGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEpvaW4gdGhlIHRlYW1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHRleHQtWzE0cHhdIGxlYWRpbmctWzI0cHhdXCI+XG4gICAgICAgICAgICAgIG9yIGNvcHkgYW5kIHBhc3RlIHRoaXMgVVJMIGludG8geW91ciBicm93c2VyOnsnICd9XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17aW52aXRlTGlua31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIG5vLXVuZGVybGluZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aW52aXRlTGlua31cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPEhyIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLVsjZWFlYWVhXSBteS1bMjZweF0gbXgtMCB3LWZ1bGxcIiAvPlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1bIzY2NjY2Nl0gdGV4dC1bMTJweF0gbGVhZGluZy1bMjRweF1cIj5cbiAgICAgICAgICAgICAgVGhpcyBpbnZpdGF0aW9uIHdhcyBpbnRlbmRlZCBmb3J7JyAnfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+e3VzZXJuYW1lfSA8L3NwYW4+LlRoaXMgaW52aXRlIHdhcyBzZW50IGZyb217JyAnfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+e2ludml0ZUZyb21JcH08L3NwYW4+IGxvY2F0ZWQgaW57JyAnfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+e2ludml0ZUZyb21Mb2NhdGlvbn08L3NwYW4+LiBJZiB5b3Ugd2VyZSBub3RcbiAgICAgICAgICAgICAgZXhwZWN0aW5nIHRoaXMgaW52aXRhdGlvbiwgeW91IGNhbiBpZ25vcmUgdGhpcyBlbWFpbC4gSWYgeW91IGFyZVxuICAgICAgICAgICAgICBjb25jZXJuZWQgYWJvdXQgeW91ciBhY2NvdW50J3Mgc2FmZXR5LCBwbGVhc2UgcmVwbHkgdG8gdGhpcyBlbWFpbCB0b1xuICAgICAgICAgICAgICBnZXQgaW4gdG91Y2ggd2l0aCB1cy5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9Cb2R5PlxuICAgICAgPC9UYWlsd2luZD5cbiAgICA8L0h0bWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWZXJjZWxJbnZpdGVVc2VyRW1haWw7Il0sIm5hbWVzIjpbIkJvZHkiLCJCdXR0b24iLCJDb2x1bW4iLCJDb250YWluZXIiLCJIZWFkIiwiSGVhZGluZyIsIkhyIiwiSHRtbCIsIkltZyIsIkxpbmsiLCJQcmV2aWV3IiwiUm93IiwiU2VjdGlvbiIsIlRhaWx3aW5kIiwiVGV4dCIsIlJlYWN0IiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJWRVJDRUxfVVJMIiwiVmVyY2VsSW52aXRlVXNlckVtYWlsIiwidXNlcm5hbWUiLCJ1c2VySW1hZ2UiLCJpbnZpdGVkQnlVc2VybmFtZSIsImludml0ZWRCeUVtYWlsIiwidGVhbU5hbWUiLCJ0ZWFtSW1hZ2UiLCJpbnZpdGVMaW5rIiwiaW52aXRlRnJvbUlwIiwiaW52aXRlRnJvbUxvY2F0aW9uIiwicHJldmlld1RleHQiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInN0cm9uZyIsImhyZWYiLCJhbGlnbiIsInBYIiwicFkiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../emails/vercel-invite-user.tsx\n");

/***/ })

};
;