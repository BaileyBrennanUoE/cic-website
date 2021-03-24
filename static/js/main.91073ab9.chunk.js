(this["webpackJsonpcic-website"]=this["webpackJsonpcic-website"]||[]).push([[0],{31:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s(23),a=s.n(r),o=(s(31),s(2)),c=s(3),i=s(5),l=s(4),u=s(7),h=s(6),d=s(0),j=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Home",children:"This is the homepage."})}}]),s}(n.Component),b=s(14),p=s(9),O=s(15),w=[{question:"What does the clock speed indicate?",answers:[{type:"Correct",content:"Tasks per second"},{type:"Wrong",content:"CPU cores"},{type:"Wrong",content:"How much storage the CPU has"}]},{question:"What type of CPU does a desktop computer have?",answers:[{type:"Correct",content:"CISC"},{type:"Wrong",content:"RISC"},{type:"Wrong",content:"DISCO"}]},{question:"What is the cache inside a CPU?",answers:[{type:"Correct",content:"Super fast storage"},{type:"Wrong",content:"The part where calculcations are done"},{type:"Wrong",content:"The part that manages tasks"}]},{question:"How much faster is a dual core CPU than a single core CPU?",answers:[{type:"Correct",content:"under twice as fast"},{type:"Wrong",content:"twice as fast"},{type:"Wrong",content:"over twice as fast"}]},{question:"If a CPU overheats, this can damaged files saved on the PC",answers:[{type:"Correct",content:"True"},{type:"Wrong",content:"False"},{type:"Wrong",content:"a CPU cannot overheat"}]}],f=s(10),m=s.n(f);var v=function(e){return Object(d.jsx)("div",{className:"question section",children:Object(d.jsx)("blockquote",{className:"flow-text",children:e.content})})};var x=function(e){return Object(d.jsxs)("div",{className:"questionCount",children:["Question ",Object(d.jsx)("span",{children:e.counter})," of ",Object(d.jsx)("span",{children:e.total})]})};var g=function(e){return Object(d.jsxs)("li",{className:"answerOption",children:[Object(d.jsx)("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:e.answerType==e.answer,id:e.answerType,value:e.answerType,disabled:e.answer,onChange:e.onAnswerSelected}),Object(d.jsx)("label",{className:"radioCustomLabel",htmlFor:e.answerType,children:e.answerContent})]})};function C(e){return Object(d.jsxs)("div",{className:"quiz section",children:[Object(d.jsx)(x,{counter:e.questionId,total:e.questionTotal}),Object(d.jsx)(v,{content:e.question}),Object(d.jsx)("div",{className:"containter row",children:Object(d.jsx)("div",{className:"col s12",children:Object(d.jsx)("ul",{className:"answerOptions",children:e.answerOptions.map((function(t){return Object(d.jsx)(g,{answerContent:t.content,answerType:t.type,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected},t.content)}))})})})]})}C.propsTypes={answer:m.a.string.isRequired,answerOptions:m.a.array.isRequired,counter:m.a.number.isRequired,question:m.a.string.isRequired,questionId:m.a.number.isRequired,questionTotal:m.a.number.isRequired,onAnswerSelected:m.a.func.isRequired};var y=C;var k=function(e){return Object(d.jsx)("div",{className:"result section",children:Object(d.jsxs)("blockquote",{className:"flow-text",children:["You got ",e.correctAnswers," out of ",e.questionTotal," correct ",Object(d.jsx)("br",{}),e.correctAnswers===e.questionTotal?Object(d.jsx)("p",{children:"Well done you got full marks!"}):Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Watch the video and look over the info sheet again then try again!"}),Object(d.jsx)("br",{}),"Questions you got incorrect:",(t=e.wrongAnswers,Object.keys(t).map((function(e,s){return Object(d.jsxs)("blockquote",{children:["\u2003",t[e]]})})))]})]})});var t},q=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{},correctAnswers:0,result:"",wrongAnswers:{}},n.handleAnswerSelected=n.handleAnswerSelected.bind(Object(O.a)(n)),n}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=w.map((function(t){return e.shuffleArray(t.answers)}));this.setState({question:w[0].question,answerOptions:t[0]})}},{key:"shuffleArray",value:function(e){for(var t,s,n=e.length;0!==n;)s=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[s],e[s]=t;return e}},{key:"setUserAnswer",value:function(e){if(this.setState((function(t){return{answersCount:Object(p.a)(Object(p.a)({},t.answersCount),{},Object(b.a)({},e,(t.answersCount[e]||0)+1)),answer:e}})),"Correct"===e){var t=this.state.correctAnswers+1;this.setState({correctAnswers:t})}}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:w[e].question,answerOptions:w[e].answers,answer:""})}},{key:"handleAnswerSelected",value:function(e){var t=this;this.setUserAnswer(e.currentTarget.value),console.log(e.currentTarget.value),"Wrong"===e.currentTarget.value&&(console.log("Changing wrongAnswers"),this.setState((function(e){return{wrongAnswers:Object(p.a)(Object(p.a)({},e.wrongAnswers),{},Object(b.a)({},e.counter,e.question))}}))),console.log(this.state.counter),console.log(this.state.question),console.log(this.state.wrongAnswers),this.state.questionId<w.length?setTimeout((function(){return t.setNextQuestion()}),300):setTimeout((function(){return t.setResults(t.getResults())}),300)}},{key:"getResults",value:function(){return"finished"}},{key:"setResults",value:function(e){1===e.length?this.setState({result:e[0]}):this.setState({result:"Undertermined"})}},{key:"renderQuiz",value:function(){return Object(d.jsx)(y,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:w.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return Object(d.jsx)(k,{correctAnswers:this.state.correctAnswers,questionTotal:w.length,wrongAnswers:this.state.wrongAnswers})}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:this.state.result?this.renderResult():this.renderQuiz()})}}]),s}(n.Component),A=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"row section",children:Object(d.jsx)("div",{className:"video-container",children:Object(d.jsx)("iframe",{className:"col s12",id:"kaltura_player",src:"https://cdnapisec.kaltura.com/p/2010292/sp/201029200/embedIframeJs/uiconf_id/32599141/partner_id/2010292?iframeembed=true&playerId=kaltura_player&entry_id=1_f91l1g3r&flashvars[streamerType]=auto&flashvars[localizationCode]=en&flashvars[leadWithHTML5]=true&flashvars[sideBarContainer.plugin]=true&flashvars[sideBarContainer.position]=left&flashvars[sideBarContainer.clickToClose]=true&flashvars[chapters.plugin]=true&flashvars[chapters.layout]=vertical&flashvars[chapters.thumbnailRotator]=false&flashvars[streamSelector.plugin]=true&flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&flashvars[dualScreen.plugin]=true&flashvars[Kaltura.addCrossoriginToIframe]=true&&wid=1_u40zg6b4",width:"608",height:"402",allowfullscreen:!0,webkitallowfullscreen:!0,mozAllowFullScreen:!0,allow:"autoplay *; fullscreen *; encrypted-media *",sandbox:"allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation",frameborder:"0",title:"Kaltura Player"})})})})}}]),s}(n.Component),N=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"section",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("blockquote",{className:"col s5 offset-s1 flow-text",children:["CPU Cores ",Object(d.jsx)("br",{}),Object(d.jsx)("blockquote",{children:"The main number crunching centre"}),Object(d.jsx)("blockquote",{children:"Home to the Cache"}),Object(d.jsx)("blockquote",{children:"More cores, the faster it is but its speed is not additive (e.g. a dual core CPU is not as fast as 2 single core CPUs together)"})]}),Object(d.jsxs)("blockquote",{className:"col s5 flow-text",children:["Clock Speed ",Object(d.jsx)("br",{}),Object(d.jsx)("blockquote",{children:"Tells us how fast the CPU is"}),Object(d.jsx)("blockquote",{children:"Shown in Gigahertz(Hz)"}),Object(d.jsx)("blockquote",{children:"The higher the clock speed, the hotter the CPU gets - too hot and it can destroy files on the computer even!"})]}),Object(d.jsxs)("blockquote",{className:"col s5 offset-s1 flow-text",children:["Cache ",Object(d.jsx)("br",{}),Object(d.jsx)("blockquote",{children:"Small, super fast storage for the CPU"}),Object(d.jsx)("blockquote",{children:"Like RAM but much smaller - very expensive as well"}),Object(d.jsx)("blockquote",{children:"The CPU uses cache like its memory, most common tasks are kept there"})]}),Object(d.jsxs)("blockquote",{className:"col s5 flow-text",children:["Type of CPUs ",Object(d.jsx)("br",{}),Object(d.jsx)("blockquote",{children:"CISC - found in desktop computers, larger and power hungry like super cars"}),Object(d.jsx)("blockquote",{children:"RISC - found in smartphones/tablets, smaller and less power greedy like a tiny electric car"})]})]})})})}}]),s}(n.Component),S=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"CPU container flex",children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)("nav",{className:"green darken-3",children:Object(d.jsxs)("div",{className:"nav-wrapper",children:[Object(d.jsx)("a",{className:"brand-logo center",children:"CPU"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/CPU_Video",activeClassName:"selected",children:"Video"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/CPU_Revision",activeClassName:"selected",children:"Info Sheet"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/CPU_Quiz",activeClassName:"selected",children:"Quiz"})})]})]})}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:"/CPU_Video",children:Object(d.jsx)(A,{})}),Object(d.jsx)(h.a,{path:"/CPU_Revision",children:Object(d.jsx)(N,{})}),Object(d.jsx)(h.a,{path:"/CPU_Quiz",children:Object(d.jsx)(q,{})})]})]})})}}]),s}(n.Component),T=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{},correctAnswers:0,result:"",wrongAnswers:{}},n.handleAnswerSelected=n.handleAnswerSelected.bind(Object(O.a)(n)),n}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=w.map((function(t){return e.shuffleArray(t.answers)}));this.setState({question:w[0].question,answerOptions:t[0]})}},{key:"shuffleArray",value:function(e){for(var t,s,n=e.length;0!==n;)s=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[s],e[s]=t;return e}},{key:"setUserAnswer",value:function(e){if(this.setState((function(t){return{answersCount:Object(p.a)(Object(p.a)({},t.answersCount),{},Object(b.a)({},e,(t.answersCount[e]||0)+1)),answer:e}})),"Correct"===e){var t=this.state.correctAnswers+1;this.setState({correctAnswers:t})}}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:w[e].question,answerOptions:w[e].answers,answer:""})}},{key:"handleAnswerSelected",value:function(e){var t=this;this.setUserAnswer(e.currentTarget.value),console.log(e.currentTarget.value),"Wrong"===e.currentTarget.value&&(console.log("Changing wrongAnswers"),this.setState((function(e){return{wrongAnswers:Object(p.a)(Object(p.a)({},e.wrongAnswers),{},Object(b.a)({},e.counter,e.question))}}))),console.log(this.state.counter),console.log(this.state.question),console.log(this.state.wrongAnswers),this.state.questionId<w.length?setTimeout((function(){return t.setNextQuestion()}),300):setTimeout((function(){return t.setResults(t.getResults())}),300)}},{key:"getResults",value:function(){return"finished"}},{key:"setResults",value:function(e){1===e.length?this.setState({result:e[0]}):this.setState({result:"Undertermined"})}},{key:"renderQuiz",value:function(){return Object(d.jsx)(y,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:w.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return Object(d.jsx)(k,{correctAnswers:this.state.correctAnswers,questionTotal:w.length,wrongAnswers:this.state.wrongAnswers})}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:this.state.result?this.renderResult():this.renderQuiz()})}}]),s}(n.Component),P=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"row section",children:Object(d.jsx)("div",{className:"video-container",children:Object(d.jsx)("iframe",{className:"col s12",id:"kaltura_player",src:"https://cdnapisec.kaltura.com/p/2010292/sp/201029200/embedIframeJs/uiconf_id/32599141/partner_id/2010292?iframeembed=true&playerId=kaltura_player&entry_id=1_c2jevecr&flashvars[streamerType]=auto&flashvars[localizationCode]=en&flashvars[forceMobileHTML5]=true&flashvars[Kaltura.addCrossoriginToIframe]=true&&wid=1_xqa02e0c",width:"608",height:"402",allowfullscreen:!0,webkitallowfullscreen:!0,mozAllowFullScreen:!0,allow:"autoplay *; fullscreen *; encrypted-media *",sandbox:"allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation",frameborder:"0",title:"Kaltura Player"})})})})}}]),s}(n.Component),U=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"section",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("blockquote",{className:"col s5 offset-s1 flow-text",children:["CPU Cores ",Object(d.jsx)("br",{}),Object(d.jsx)("blockquote",{children:"The main number crunching centre"}),Object(d.jsx)("blockquote",{children:"Home to the Cache"}),Object(d.jsx)("blockquote",{children:"More cores, the faster it is but its speed is not additive (e.g. a dual core CPU is not as fast as 2 single core CPUs together)"})]}),Object(d.jsxs)("blockquote",{className:"col s5 flow-text",children:["Clock Speed ",Object(d.jsx)("br",{}),Object(d.jsx)("blockquote",{children:"Tells us how fast the CPU is"}),Object(d.jsx)("blockquote",{children:"Shown in Gigahertz(Hz)"}),Object(d.jsx)("blockquote",{children:"The higher the clock speed, the hotter the CPU gets - too hot and it can destroy files on the computer even!"})]}),Object(d.jsxs)("blockquote",{className:"col s5 offset-s1 flow-text",children:["Cache ",Object(d.jsx)("br",{}),Object(d.jsx)("blockquote",{children:"Small, super fast storage for the CPU"}),Object(d.jsx)("blockquote",{children:"Like RAM but much smaller - very expensive as well"}),Object(d.jsx)("blockquote",{children:"The CPU uses cache like its memory, most common tasks are kept there"})]}),Object(d.jsxs)("blockquote",{className:"col s5 flow-text",children:["Type of CPUs ",Object(d.jsx)("br",{}),Object(d.jsx)("blockquote",{children:"CISC - found in desktop computers, larger and power hungry like super cars"}),Object(d.jsx)("blockquote",{children:"RISC - found in smartphones/tablets computers, smaller and less power greedy like a tiny electric car"})]})]})})})}}]),s}(n.Component),R=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"COMP container flex",children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)("nav",{className:"green darken-3",children:Object(d.jsxs)("div",{className:"nav-wrapper",children:[Object(d.jsx)("a",{className:"brand-logo center",children:"What's in a Computer?"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/COMP_Video",activeClassName:"selected",children:"Video"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/COMP_Revision",activeClassName:"selected",children:"Info Sheet"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/COMP_Quiz",activeClassName:"selected",children:"Quiz"})})]})]})}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:"/COMP_Video",children:Object(d.jsx)(P,{})}),Object(d.jsx)(h.a,{path:"/COMP_Revision",children:Object(d.jsx)(U,{})}),Object(d.jsx)(h.a,{path:"/COMP_Quiz",children:Object(d.jsx)(T,{})})]})]})})}}]),s}(n.Component),I=[{question:"What does the clock speed indicate?",answers:[{type:"Correct",content:"Tasks per second"},{type:"Wrong",content:"CPU cores"},{type:"Wrong",content:"How much storage the CPU has"}]},{question:"What type of CPU does a desktop computer have?",answers:[{type:"Correct",content:"CISC"},{type:"Wrong",content:"RISC"},{type:"Wrong",content:"DISCO"}]},{question:"What is the cache inside a CPU?",answers:[{type:"Correct",content:"Super fast storage"},{type:"Wrong",content:"The part where calculcations are done"},{type:"Wrong",content:"The part that manages tasks"}]},{question:"How much faster is a dual core CPU than a single core CPU?",answers:[{type:"Correct",content:"under twice as fast"},{type:"Wrong",content:"twice as fast"},{type:"Wrong",content:"over twice as fast"}]},{question:"If a CPU overheats, this can damaged files saved on the PC",answers:[{type:"Correct",content:"True"},{type:"Wrong",content:"False"},{type:"Wrong",content:"a CPU cannot overheat"}]}],_=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{},correctAnswers:0,result:"",wrongAnswers:{}},n.handleAnswerSelected=n.handleAnswerSelected.bind(Object(O.a)(n)),n}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=I.map((function(t){return e.shuffleArray(t.answers)}));this.setState({question:I[0].question,answerOptions:t[0]})}},{key:"shuffleArray",value:function(e){for(var t,s,n=e.length;0!==n;)s=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[s],e[s]=t;return e}},{key:"setUserAnswer",value:function(e){if(this.setState((function(t){return{answersCount:Object(p.a)(Object(p.a)({},t.answersCount),{},Object(b.a)({},e,(t.answersCount[e]||0)+1)),answer:e}})),"Correct"===e){var t=this.state.correctAnswers+1;this.setState({correctAnswers:t})}}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:I[e].question,answerOptions:I[e].answers,answer:""})}},{key:"handleAnswerSelected",value:function(e){var t=this;this.setUserAnswer(e.currentTarget.value),console.log(e.currentTarget.value),"Wrong"===e.currentTarget.value&&(console.log("Changing wrongAnswers"),this.setState((function(e){return{wrongAnswers:Object(p.a)(Object(p.a)({},e.wrongAnswers),{},Object(b.a)({},e.counter,e.question))}}))),console.log(this.state.counter),console.log(this.state.question),console.log(this.state.wrongAnswers),this.state.questionId<I.length?setTimeout((function(){return t.setNextQuestion()}),300):setTimeout((function(){return t.setResults(t.getResults())}),300)}},{key:"getResults",value:function(){return"finished"}},{key:"setResults",value:function(e){1===e.length?this.setState({result:e[0]}):this.setState({result:"Undertermined"})}},{key:"renderQuiz",value:function(){return Object(d.jsx)(y,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:I.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return Object(d.jsx)(k,{correctAnswers:this.state.correctAnswers,questionTotal:I.length,wrongAnswers:this.state.wrongAnswers})}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:this.state.result?this.renderResult():this.renderQuiz()})}}]),s}(n.Component),M=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"row section",children:Object(d.jsx)("div",{className:"video-container",children:Object(d.jsx)("iframe",{className:"col s12",id:"kaltura_player",src:"https://cdnapisec.kaltura.com/p/2010292/sp/201029200/embedIframeJs/uiconf_id/32599141/partner_id/2010292?iframeembed=true&playerId=kaltura_player&entry_id=1_gg4fjudj&flashvars[streamerType]=auto&flashvars[localizationCode]=en&flashvars[leadWithHTML5]=true&flashvars[sideBarContainer.plugin]=true&flashvars[sideBarContainer.position]=left&flashvars[sideBarContainer.clickToClose]=true&flashvars[chapters.plugin]=true&flashvars[chapters.layout]=vertical&flashvars[chapters.thumbnailRotator]=false&flashvars[streamSelector.plugin]=true&flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&flashvars[dualScreen.plugin]=true&flashvars[Kaltura.addCrossoriginToIframe]=true&&wid=1_ljhhjncd",width:"608",height:"402",allowfullscreen:!0,webkitallowfullscreen:!0,mozAllowFullScreen:!0,allow:"autoplay *; fullscreen *; encrypted-media *",sandbox:"allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation",frameborder:"0",title:"Kaltura Player"})})})})}}]),s}(n.Component),W=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"section",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("blockquote",{className:"col s5 offset-s1 flow-text",children:["CPU Cores ",Object(d.jsx)("br",{}),Object(d.jsx)("blockquote",{children:"The main number crunching centre"}),Object(d.jsx)("blockquote",{children:"Home to the Cache"}),Object(d.jsx)("blockquote",{children:"More cores, the faster it is but its speed is not additive (e.g. a dual core CPU is not as fast as 2 single core CPUs together)"})]}),Object(d.jsxs)("blockquote",{className:"col s5 flow-text",children:["Clock Speed ",Object(d.jsx)("br",{}),Object(d.jsx)("blockquote",{children:"Tells us how fast the CPU is"}),Object(d.jsx)("blockquote",{children:"Shown in Gigahertz(Hz)"}),Object(d.jsx)("blockquote",{children:"The higher the clock speed, the hotter the CPU gets - too hot and it can destroy files on the computer even!"})]}),Object(d.jsxs)("blockquote",{className:"col s5 offset-s1 flow-text",children:["Cache ",Object(d.jsx)("br",{}),Object(d.jsx)("blockquote",{children:"Small, super fast storage for the CPU"}),Object(d.jsx)("blockquote",{children:"Like RAM but much smaller - very expensive as well"}),Object(d.jsx)("blockquote",{children:"The CPU uses cache like its memory, most common tasks are kept there"})]}),Object(d.jsxs)("blockquote",{className:"col s5 flow-text",children:["Type of CPUs ",Object(d.jsx)("br",{}),Object(d.jsx)("blockquote",{children:"CISC - found in desktop computers, larger and power hungry like super cars"}),Object(d.jsx)("blockquote",{children:"RISC - found in smartphones/tablets computers, smaller and less power greedy like a tiny electric car"})]})]})})})}}]),s}(n.Component),z=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Ram container flex",children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)("nav",{className:"green darken-3",children:Object(d.jsxs)("div",{className:"nav-wrapper",children:[Object(d.jsx)("a",{className:"brand-logo center",children:"RAM & Storage"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/RAM_Video",activeClassName:"selected",children:"Video"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/RAM_Revision",activeClassName:"selected",children:"Info Sheet"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/RAM_Quiz",activeClassName:"selected",children:"Quiz"})})]})]})}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:"/RAM_Video",children:Object(d.jsx)(M,{})}),Object(d.jsx)(h.a,{path:"/RAM_Revision",children:Object(d.jsx)(W,{})}),Object(d.jsx)(h.a,{path:"/RAM_Quiz",children:Object(d.jsx)(_,{})})]})]})})}}]),s}(n.Component),Q=s(26),H=s.n(Q),V=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".dropdown-trigger");H.a.Dropdown.init(e,{inDuration:300,outDuration:225,hover:!0,coverTrigger:!1})}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)("nav",{className:"green darken-3",children:Object(d.jsx)("div",{className:"nav-wrapper",children:Object(d.jsxs)("ul",{id:"nav-mobile",className:"hide-on-med-and-down",children:[Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{exact:!0,to:"/",activeClassName:"selected",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/COMP_Video",activeClassName:"selected",children:"What's in a Computer?"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/CPU_Video",activeClassName:"selected",children:"CPU"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/RAM_Video",activeClassName:"selected",children:"RAM vs Storage"})})]})})}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:"/COMP_Video",children:Object(d.jsx)(R,{})}),Object(d.jsx)(h.a,{path:"/CPU_Video",children:Object(d.jsx)(S,{})}),Object(d.jsx)(h.a,{path:"/Ram_Video",children:Object(d.jsx)(z,{})}),Object(d.jsx)(h.a,{path:"/",children:Object(d.jsx)(j,{})})]})]})})}}]),s}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(d.jsx)(V,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.91073ab9.chunk.js.map