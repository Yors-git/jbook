(this["webpackJsonp@jsnote-jtb/local-client"]=this["webpackJsonp@jsnote-jtb/local-client"]||[]).push([[197],{367:function(e,t){!function(e){function t(e,s){return s<=0?"[]":e.replace(/<SELF>/g,(function(){return t(e,s-1)}))}var s=/'[{}:=,](?:[^']|'')*'(?!')/,n={pattern:/''/,greedy:!0,alias:"operator"},a={pattern:s,greedy:!0,inside:{escape:n}},i=t("\\{(?:[^{}']|'(?![{},'])|''|<STR>|<SELF>)*\\}".replace(/<STR>/g,(function(){return s.source})),8),r={pattern:RegExp(i),inside:{message:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:null},"message-delimiter":{pattern:/./,alias:"punctuation"}}};e.languages["icu-message-format"]={argument:{pattern:RegExp(i),greedy:!0,inside:{content:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:{"argument-name":{pattern:/^(\s*)[^{}:=,\s]+/,lookbehind:!0},"choice-style":{pattern:/^(\s*,\s*choice\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{punctuation:/\|/,range:{pattern:/^(\s*)[+-]?(?:\d+(?:\.\d*)?|\u221e)\s*[<#\u2264]/,lookbehind:!0,inside:{operator:/[<#\u2264]/,number:/\S+/}},rest:null}},"plural-style":{pattern:/^(\s*,\s*(?:plural|selectordinal)\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{offset:/^offset:\s*\d+/,"nested-message":r,selector:{pattern:/=\d+|[^{}:=,\s]+/,inside:{keyword:/^(?:zero|one|two|few|many|other)$/}}}},"select-style":{pattern:/^(\s*,\s*select\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{"nested-message":r,selector:{pattern:/[^{}:=,\s]+/,inside:{keyword:/^other$/}}}},keyword:/\b(?:choice|plural|select|selectordinal)\b/,"arg-type":{pattern:/\b(?:number|date|time|spellout|ordinal|duration)\b/,alias:"keyword"},"arg-skeleton":{pattern:/(,\s*)::[^{}:=,\s]+/,lookbehind:!0},"arg-style":{pattern:/(,\s*)(?:short|medium|long|full|integer|currency|percent)(?=\s*$)/,lookbehind:!0},"arg-style-text":{pattern:RegExp("(^\\s*,\\s*(?=\\S))"+t("(?:[^{}']|'[^']*'|\\{(?:<SELF>)?\\})+",8)+"$"),lookbehind:!0,alias:"string"},punctuation:/,/}},"argument-delimiter":{pattern:/./,alias:"operator"}}},escape:n,string:a},r.inside.message.inside=e.languages["icu-message-format"],e.languages["icu-message-format"].argument.inside.content.inside["choice-style"].inside.rest=e.languages["icu-message-format"]}(Prism)}}]);
//# sourceMappingURL=197.d74593b4.chunk.js.map