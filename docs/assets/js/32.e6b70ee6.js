(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{677:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"day-5-namespaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#day-5-namespaces"}},[s._v("#")]),s._v(" Day 5 – Namespaces")]),s._v(" "),a("p",[s._v("The namespace provides a way to organize different Clojure objects into logical groups which logical ones are commonly called the library and can be used in other namespaces.")]),s._v(" "),a("h3",{attrs:{id:"ns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ns"}},[s._v("#")]),s._v(" ns")]),s._v(" "),a("p",[s._v("To define a namespace, use the "),a("code",[s._v("ns")]),s._v(" macro.")]),s._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ns")]),s._v(" seven-days-of-clojure.example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[a("code",[s._v("ns")]),s._v(" can take "),a("code",[s._v(":require")]),s._v(", "),a("code",[s._v(":use")]),s._v(", and "),a("code",[s._v(":import")]),s._v(" keyword.")]),s._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ns")]),s._v(" seven-days-of-clojure.example\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":require")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("clojure.java.io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":use")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("clojure.data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("java.util List Set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("Typically, each "),a("code",[s._v("ns")]),s._v(" references a specific file.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("directory.file-name.clj\ndirectory.subdirectory.file-name.clj\n")])])]),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";; file-name.clj")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ns")]),s._v(" seven-days-of-clojure.file-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defn")]),s._v(" function-"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello from function-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defn")]),s._v(" function-"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello from function-2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defn")]),s._v(" function-"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello from function-3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";; ...")]),s._v("\n")])])]),a("h3",{attrs:{id:"in-ns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-ns"}},[s._v("#")]),s._v(" in-ns")]),s._v(" "),a("p",[a("code",[s._v("in-ns")]),s._v(" allows you to switch to a specific namespace.")]),s._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in-ns")]),s._v(" 'test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(';; user=> #object[clojure.lang.Namespace 0x415156bf "test"]')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in-ns")]),s._v(" 'calculate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(';; user=> #object[clojure.lang.Namespace 0x1ecfcbc9 "calculate"]')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in-ns")]),s._v(" 'some-other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(';; user=> #object[clojure.lang.Namespace 0x660591fb "some-ohter"]')]),s._v("\n")])])]),a("h3",{attrs:{id:"require"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require"}},[s._v("#")]),s._v(" require")]),s._v(" "),a("p",[s._v("That you define in a namespace is not visible to other namespaces by default.")]),s._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ns")]),s._v(" seven-days-of-clojure.calculate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defn")]),s._v(" sum\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("+")]),s._v(" a b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defn")]),s._v(" div\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("c d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("/")]),s._v(" c d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defn")]),s._v(" mult\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("e f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("*")]),s._v(" e f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("Note that if you try to access definitions in another namespace, an exception will be thrown.")]),s._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";; user=> Unable to resolve symbol: sum in this context")]),s._v("\n")])])]),a("p",[s._v("To access other namespaces, use "),a("code",[s._v("require")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),s._v(" 'seven-days-of-clojure.calculate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";; user=> nill")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("seven-days-of-clojure.calculate/sum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";; user=> 7")]),s._v("\n")])])]),a("p",[s._v("To create a namespace alias, use the "),a("code",[s._v(":as")]),s._v(" keyword.")]),s._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),s._v(" '"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("seven-days-of-clojure.calculate "),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":as")]),s._v(" calc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc/mult")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";; user=> 49")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc/div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";; user=> 2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc/sum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";; user=> 8")]),s._v("\n")])])]),a("p",[s._v("Load multiple namespaces.")]),s._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),s._v(" '"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("seven-days-of-clojure.example "),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":as")]),s._v(" eg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n         '"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("clojure.core "),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":as")]),s._v(" cc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h2",{attrs:{id:"test-your-knowledge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-your-knowledge"}},[s._v("#")]),s._v(" Test your knowledge")]),s._v(" "),a("ul",[a("li",[s._v("Create a namespace with some functions and try to access them from another namespace.\n"),a("ul",[a("li",[s._v("Tip: use "),a("code",[s._v("(in-ns' namespace-name)")]),s._v(" to switch namespace).")])])]),s._v(" "),a("li",[s._v("Load a namespace using an alias for a short name.")]),s._v(" "),a("li",[s._v("Load multiple namespaces and use at least one resource from each in the current namespace.")]),s._v(" "),a("li",[s._v("Build your imagination.")])]),s._v(" "),a("h2",{attrs:{id:"day-6-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#day-6-tests"}},[s._v("#")]),s._v(" Day 6 - Tests")]),s._v(" "),a("p",[a("a",{attrs:{href:"/day6"}},[s._v("See more")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[s._v("#")]),s._v(" License")]),s._v(" "),a("p",[s._v("This project is licensed under the MIT License.")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://badges.mit-license.org",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://img.shields.io/:license-mit-black.svg?style=flat-square",alt:"License"}}),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);