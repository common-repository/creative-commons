!function(e){function t(l){if(n[l])return n[l].exports;var c=n[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=cgbGlobal},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2),n(5),n(8),n(11),n(14),n(17),n(20)},function(e,t,n){"use strict";var l=n(3),c=(n.n(l),n(4)),r=(n.n(c),n(0)),o=n.n(r),__=wp.i18n.__,a=wp.blocks.registerBlockType,i=wp.blockEditor,s=i.InspectorControls,m=i.PanelColorSettings,u=wp.blockEditor.RichText;a("cgb/cc-by",{title:__("CC-BY"),icon:"media-text",category:"cc-licenses",keywords:[__("creative commons"),__("CC-BY"),__("attribution")],attributes:{bgColor:{type:"string",default:"white"},txtColor:{type:"string",default:"black"},contentName:{selector:".cc-cgb-name",source:"children"},contentText:{selector:".cc-cgb-text",source:"children"}},edit:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText,r=e.attributes,a=e.setAttributes,i=function(e){a({contentName:e})},p=function(e){a({contentText:e})};return[wp.element.createElement(s,{key:"3"},wp.element.createElement(m,{title:__("Color Settings","creativecommons"),colorSettings:[{label:__("Background Color"),value:t,onChange:function(t){return e.setAttributes({bgColor:t})}},{label:__("Text Color"),value:n,onChange:function(t){return e.setAttributes({txtColor:t})}}]})),wp.element.createElement("div",{key:"2",className:r,style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/by.png",alt:"CC-BY",width:"88",height:"31"}),wp.element.createElement("p",null,"This content is licensed by"," ",wp.element.createElement("a",{href:"https://creativecommons.org/licenses/by/4.0/"},"Creative Commons Attribution 4.0 International license.")),wp.element.createElement("h4",null,"Edit"),wp.element.createElement("span",null,"Attribution name ",wp.element.createElement("i",null,"(default: This content)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("This content","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:i,value:l})),wp.element.createElement("span",null,wp.element.createElement("br",null),"Additional text ",wp.element.createElement("i",null,"(optional)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("Custom text/description/links ","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:p,value:c})))]},save:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText;return""==l&&(l="This content"),wp.element.createElement("div",{className:"message-body",style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/by.png",alt:"CC",width:"88",height:"31"}),wp.element.createElement("p",null,wp.element.createElement("span",{className:"cc-cgb-name"},l)," is licensed under a"," ",wp.element.createElement("a",{href:"https://creativecommons.org/licenses/by/4.0/"},"Creative Commons Attribution 4.0 International license.")," ",wp.element.createElement("span",{className:"cc-cgb-text"},c)))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(6),c=(n.n(l),n(7)),r=(n.n(c),n(0)),o=n.n(r),__=wp.i18n.__,a=wp.blocks.registerBlockType,i=wp.blockEditor,s=i.InspectorControls,m=i.PanelColorSettings,u=wp.blockEditor.RichText;a("cgb/cc-by-sa",{title:__("CC-BY-SA"),icon:"media-text",category:"cc-licenses",keywords:[__("creative commons"),__("CC-BY-SA"),__("share alike")],attributes:{bgColor:{type:"string",default:"white"},txtColor:{type:"string",default:"black"},contentName:{selector:".cc-cgb-name",source:"children"},contentText:{selector:".cc-cgb-text",source:"children"}},edit:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText,r=e.attributes,a=e.setAttributes,i=function(e){a({contentName:e})},p=function(e){a({contentText:e})};return[wp.element.createElement(s,{key:"3"},wp.element.createElement(m,{title:__("Color Settings","creativecommons"),colorSettings:[{label:__("Background Color"),value:t,onChange:function(t){return e.setAttributes({bgColor:t})}},{label:__("Text Color"),value:n,onChange:function(t){return e.setAttributes({txtColor:t})}}]})),wp.element.createElement("div",{key:"2",className:r,style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/by-sa.png",alt:"CC-BY-SA",width:"88",height:"31"}),wp.element.createElement("p",null,"This content is licensed by"," ",wp.element.createElement("a",{href:"https://creativecommons.org/licenses/by-sa/4.0"},"Creative Commons Attribution-ShareAlike 4.0 International license.")),wp.element.createElement("h4",null,"Edit"),wp.element.createElement("span",null,"Attribution name ",wp.element.createElement("i",null,"(default: This content)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("This content","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:i,value:l})),wp.element.createElement("span",null,wp.element.createElement("br",null),"Additional text ",wp.element.createElement("i",null,"(optional)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("Custom text/description/links ","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:p,value:c})))]},save:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText;return""==l&&(l="This content"),wp.element.createElement("div",{className:"message-body",style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/by-sa.png",alt:"CC BY-SA",width:"88",height:"31"}),wp.element.createElement("p",null,wp.element.createElement("span",{className:"cc-cgb-name"},l)," is licensed under a"," ",wp.element.createElement("a",{href:"https://creativecommons.org/licenses/by-sa/4.0"},"Creative Commons Attribution-ShareAlike 4.0 International license.")," ",wp.element.createElement("span",{className:"cc-cgb-text"},c)))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(9),c=(n.n(l),n(10)),r=(n.n(c),n(0)),o=n.n(r),__=wp.i18n.__,a=wp.blocks.registerBlockType,i=wp.blockEditor,s=i.InspectorControls,m=i.PanelColorSettings,u=wp.blockEditor.RichText;a("cgb/cc-by-nd",{title:__("CC-BY-ND"),icon:"media-text",category:"cc-licenses",keywords:[__("creative commons"),__("CC-BY-ND"),__("nd")],attributes:{bgColor:{type:"string",default:"white"},txtColor:{type:"string",default:"black"},contentName:{selector:".cc-cgb-name",source:"children"},contentText:{selector:".cc-cgb-text",source:"children"}},edit:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText,r=e.attributes,a=e.setAttributes,i=function(e){a({contentName:e})},p=function(e){a({contentText:e})};return[wp.element.createElement(s,{key:"3"},wp.element.createElement(m,{title:__("Color Settings","creativecommons"),colorSettings:[{label:__("Background Color"),value:t,onChange:function(t){return e.setAttributes({bgColor:t})}},{label:__("Text Color"),value:n,onChange:function(t){return e.setAttributes({txtColor:t})}}]})),wp.element.createElement("div",{key:"2",className:r,style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/by-nd.png",alt:"CC-BY-ND",width:"88",height:"31"}),wp.element.createElement("p",null,"This content is licensed by"," ",wp.element.createElement("a",{href:"https://creativecommons.org/licenses/by-nd/4.0/"},"Creative Commons Attribution-NoDerivatives 4.0 International license.")),wp.element.createElement("h4",null,"Edit"),wp.element.createElement("span",null,"Attribution name ",wp.element.createElement("i",null,"(default: This content)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("This content","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:i,value:l})),wp.element.createElement("span",null,wp.element.createElement("br",null),"Additional text ",wp.element.createElement("i",null,"(optional)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("Custom text/description/links ","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:p,value:c})))]},save:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText;return""==l&&(l="This content"),wp.element.createElement("div",{className:"message-body",style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/by-nd.png",alt:"CC-BY-ND",width:"88",height:"31"}),wp.element.createElement("p",null,wp.element.createElement("span",{className:"cc-cgb-name"},l)," is licensed under a"," ",wp.element.createElement("a",{href:"https://creativecommons.org/licenses/by-nd/4.0/"},"Creative Commons Attribution-NoDerivatives 4.0 International license.")," ",wp.element.createElement("span",{className:"cc-cgb-text"},c)))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(12),c=(n.n(l),n(13)),r=(n.n(c),n(0)),o=n.n(r),__=wp.i18n.__,a=wp.blocks.registerBlockType,i=wp.blockEditor,s=i.InspectorControls,m=i.PanelColorSettings,u=wp.blockEditor.RichText;a("cgb/cc-by-nc",{title:__("CC-BY-NC"),icon:"media-text",category:"cc-licenses",keywords:[__("creative commons"),__("CC-BY-NC"),__("attribution")],attributes:{bgColor:{type:"string",default:"white"},txtColor:{type:"string",default:"black"},contentName:{selector:".cc-cgb-name",source:"children"},contentText:{selector:".cc-cgb-text",source:"children"}},edit:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText,r=e.attributes,a=e.setAttributes,i=function(e){a({contentName:e})},p=function(e){a({contentText:e})};return[wp.element.createElement(s,{key:"3"},wp.element.createElement(m,{title:__("Color Settings","creativecommons"),colorSettings:[{label:__("Background Color"),value:t,onChange:function(t){return e.setAttributes({bgColor:t})}},{label:__("Text Color"),value:n,onChange:function(t){return e.setAttributes({txtColor:t})}}]})),wp.element.createElement("div",{key:"2",className:r,style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/by-nc.png",alt:"CC-BY-NC",width:"88",height:"31"}),wp.element.createElement("p",null,"This content is licensed by"," ",wp.element.createElement("a",{href:"https://creativecommons.org/licenses/by-nc/4.0"},"Creative Commons Attribution-NonCommercial 4.0 International license.")),wp.element.createElement("h4",null,"Edit"),wp.element.createElement("span",null,"Attribution name ",wp.element.createElement("i",null,"(default: This content)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("This content","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:i,value:l})),wp.element.createElement("span",null,wp.element.createElement("br",null),"Additional text ",wp.element.createElement("i",null,"(optional)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("Custom text/description/links ","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:p,value:c})))]},save:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText;return""==l&&(l="This content"),wp.element.createElement("div",{className:"message-body",style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/by-nc.png",alt:"CC-BY-NC",width:"88",height:"31"}),wp.element.createElement("p",null,wp.element.createElement("span",{className:"cc-cgb-name"},l)," is licensed under a"," ",wp.element.createElement("a",{href:"https://creativecommons.org/licenses/by-nc/4.0"},"Creative Commons Attribution-NonCommercial 4.0 International license.")," ",wp.element.createElement("span",{className:"cc-cgb-text"},c)))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(15),c=(n.n(l),n(16)),r=(n.n(c),n(0)),o=n.n(r),__=wp.i18n.__,a=wp.blocks.registerBlockType,i=wp.blockEditor,s=i.InspectorControls,m=i.PanelColorSettings,u=wp.blockEditor.RichText;a("cgb/cc-by-nc-nd",{title:__("CC-BY-NC-ND"),icon:"media-text",category:"cc-licenses",keywords:[__("creative commons"),__("CC-BY-NC-ND"),__("nc nd")],attributes:{bgColor:{type:"string",default:"white"},txtColor:{type:"string",default:"black"},contentName:{selector:".cc-cgb-name",source:"children"},contentText:{selector:".cc-cgb-text",source:"children"}},edit:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText,r=e.attributes,a=e.setAttributes,i=function(e){a({contentName:e})},p=function(e){a({contentText:e})};return[wp.element.createElement(s,{key:"3"},wp.element.createElement(m,{title:__("Color Settings","creativecommons"),colorSettings:[{label:__("Background Color"),value:t,onChange:function(t){return e.setAttributes({bgColor:t})}},{label:__("Text Color"),value:n,onChange:function(t){return e.setAttributes({txtColor:t})}}]})),wp.element.createElement("div",{key:"2",className:r,style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/by-nc-nd.png",alt:"CC-BY-NC-ND",width:"88",height:"31"}),wp.element.createElement("p",null,"This content is licensed by"," ",wp.element.createElement("a",{href:"https://creativecommons.org/licenses/by-nc-nd/4.0"},"Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International license.")),wp.element.createElement("h4",null,"Edit"),wp.element.createElement("span",null,"Attribution name ",wp.element.createElement("i",null,"(default: This content)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("This content","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:i,value:l})),wp.element.createElement("span",null,wp.element.createElement("br",null),"Additional text ",wp.element.createElement("i",null,"(optional)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("Custom text/description/links ","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:p,value:c})))]},save:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText;return""==l&&(l="This content"),wp.element.createElement("div",{className:"message-body",style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/by-nc-nd.png",alt:"CC-BY-NC-ND",width:"88",height:"31"}),wp.element.createElement("p",null,wp.element.createElement("span",{className:"cc-cgb-name"},l)," is licensed under a"," ",wp.element.createElement("a",{href:"https://creativecommons.org/licenses/by-nc-nd/4.0"},"Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International license.")," ",wp.element.createElement("span",{className:"cc-cgb-text"},c)))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(18),c=(n.n(l),n(19)),r=(n.n(c),n(0)),o=n.n(r),__=wp.i18n.__,a=wp.blocks.registerBlockType,i=wp.blockEditor,s=i.InspectorControls,m=i.PanelColorSettings,u=wp.blockEditor.RichText;a("cgb/cc-by-nc-sa",{title:__("CC-BY-NC-SA"),icon:"media-text",category:"cc-licenses",keywords:[__("creative commons"),__("CC-BY-NC-SA"),__("nc sa")],attributes:{bgColor:{type:"string",default:"white"},txtColor:{type:"string",default:"black"},contentName:{selector:".cc-cgb-name",source:"children"},contentText:{selector:".cc-cgb-text",source:"children"}},edit:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText,r=e.attributes,a=e.setAttributes,i=function(e){a({contentName:e})},p=function(e){a({contentText:e})};return[wp.element.createElement(s,{key:"3"},wp.element.createElement(m,{title:__("Color Settings","creativecommons"),colorSettings:[{label:__("Background Color"),value:t,onChange:function(t){return e.setAttributes({bgColor:t})}},{label:__("Text Color"),value:n,onChange:function(t){return e.setAttributes({txtColor:t})}}]})),wp.element.createElement("div",{key:"2",className:r,style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/by-nc-sa.png",alt:"CC-BY-NC-SA"}),wp.element.createElement("p",null,"This content is licensed by"," ",wp.element.createElement("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0"},"Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license.")),wp.element.createElement("h4",null,"Edit"),wp.element.createElement("span",null,"Attribution name ",wp.element.createElement("i",null,"(default: This content)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("This content","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:i,value:l})),wp.element.createElement("span",null,wp.element.createElement("br",null),"Additional text ",wp.element.createElement("i",null,"(optional)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("Custom text/description/links ","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:p,value:c})))]},save:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText;return""==l&&(l="This content"),wp.element.createElement("div",{className:"message-body",style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/by-nc-sa.png",alt:"CC-BY-NC-SA"}),wp.element.createElement("p",null,wp.element.createElement("span",{className:"cc-cgb-name"},l)," is licensed under a"," ",wp.element.createElement("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0"},"Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license.")," ",wp.element.createElement("span",{className:"cc-cgb-text"},c)))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(21),c=(n.n(l),n(22)),r=(n.n(c),n(0)),o=n.n(r),__=wp.i18n.__,a=wp.blocks.registerBlockType,i=wp.blockEditor,s=i.InspectorControls,m=i.PanelColorSettings,u=wp.blockEditor.RichText;a("cgb/cc0",{title:__("CC0"),icon:"media-text",category:"cc-licenses",keywords:[__("creative commons"),__("cc0"),__("attribution")],attributes:{bgColor:{type:"string",default:"white"},txtColor:{type:"string",default:"black"},contentName:{selector:".cc-cgb-name",source:"children"},contentText:{selector:".cc-cgb-text",source:"children"}},edit:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText,r=e.attributes,a=e.setAttributes,i=function(e){a({contentName:e})},p=function(e){a({contentText:e})};return[wp.element.createElement(s,{key:"3"},wp.element.createElement(m,{title:__("Color Settings","creativecommons"),colorSettings:[{label:__("Background Color"),value:t,onChange:function(t){return e.setAttributes({bgColor:t})}},{label:__("Text Color"),value:n,onChange:function(t){return e.setAttributes({txtColor:t})}}]})),wp.element.createElement("div",{key:"2",className:r,style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/cc0.png",alt:"cc0"}),wp.element.createElement("p",null,"This content is licensed by"," ",wp.element.createElement("a",{href:"https://creativecommons.org/publicdomain/zero/1.0/"},"Creative Commons CC0 Universal Public Domain Dedication license.")),wp.element.createElement("h4",null,"Edit"),wp.element.createElement("span",null,"Attribution name ",wp.element.createElement("i",null,"(default: This content)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("This content","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:i,value:l})),wp.element.createElement("span",null,"Additional text ",wp.element.createElement("i",null,"(optional)"),":"),wp.element.createElement("div",{className:"cc-cgb-richtext-input"},wp.element.createElement(u,{className:r,placeholder:__("Custom text/description/links ","CreativeCommons"),keepPlaceholderOnFocus:!0,onChange:p,value:c})))]},save:function(e){var t=e.attributes.bgColor,n=e.attributes.txtColor,l=e.attributes.contentName,c=e.attributes.contentText;return""==l&&(l="This content"),wp.element.createElement("div",{className:"message-body",style:{backgroundColor:t,color:n}},wp.element.createElement("img",{src:o.a.pluginDirUrl+"includes/images/cc0.png",alt:"CC"}),wp.element.createElement("p",null,wp.element.createElement("span",{className:"cc-cgb-name"},l)," is licensed under a"," ",wp.element.createElement("a",{href:"https://creativecommons.org/publicdomain/zero/1.0/"},"Creative Commons CC0 Universal Public Domain Dedication license.")," ",wp.element.createElement("span",{className:"cc-cgb-text"},c)))}})},function(e,t){},function(e,t){}]);