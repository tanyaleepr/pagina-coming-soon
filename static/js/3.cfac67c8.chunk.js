(this["webpackJsonpTanya-Lee-Portfolio"]=this["webpackJsonpTanya-Lee-Portfolio"]||[]).push([[3],{40:function(e,t,r){"use strict";r.d(t,"a",(function(){return x})),r.d(t,"b",(function(){return b}));var a=r(9),s=r(1),i=r.p+"static/media/gititdone.c479be4a.png",n=r.p+"static/media/horiseon.010a6200.png",c=r.p+"static/media/meangirls.92faa194.png",o=r.p+"static/media/ohsnap.01624d51.png",l=r.p+"static/media/password.63a3db18.png",d=r.p+"static/media/runbuddy.a942d3bb.png",m=r.p+"static/media/stockmarketdata.ba75b73f.png",u=[{id:1,title:"Lizza Oh Snap!",category:"Frontend",tools:"React",img:o,url:"http://github.com/tanyaleepr/photo-port"},{id:2,title:"Super Fan",category:"Frontend",tools:"HTML, CSS, JavaScript, and Bootstrap",img:r.p+"static/media/superfan.e63a46f2.png",url:"https://github.com/tanyaleepr/super-fan"},{id:3,title:"Horiseon",category:"Frontend",tools:"HTML and CSS",img:n,url:"https://github.com/tanyaleepr/horiseon-website"},{id:4,title:"Run Buddy",category:"Frontend",tools:"HTML and CSS",img:d,url:"https://github.com/tanyaleepr/run-buddy-website"},{id:5,title:"Git it Done!",category:"Frontend",tools:"HTML, CSS, and JavaScript",img:i,url:"https://github.com/tanyaleepr/git-it-done"},{id:6,title:"Weather Dashboard",category:"Frontend",tools:"HTML, CSS, and JavaScript",img:r.p+"static/media/weatherdashboard.09ce3296.png",url:"https://github.com/tanyaleepr/weather-dashboard"},{id:7,title:"Mean Girls Horoscope",category:"Frontend",tools:"HTML, CSS, and JavaScript",img:c,url:"https://github.com/tanyaleepr/burn-book"},{id:8,title:"Stock Market Prediction",category:"Data Science",tools:"Python, SQL, Data Modeling",img:m,url:"https://github.com/tanyaleepr/Daily-News-Headline-for-Stock-Market-Prediction"},{id:9,title:"Password Generator for Security",category:"Cybersecurity",tools:"HTML, CSS, JavaScript, Password Security",img:l,url:"https://github.com/tanyaleepr/password-for-security"}],g=r(2),x=Object(s.createContext)(),b=function(e){var t=Object(s.useState)(u),r=Object(a.a)(t,2),i=r[0],n=r[1],c=Object(s.useState)(""),o=Object(a.a)(c,2),l=o[0],d=o[1],m=Object(s.useState)(""),b=Object(a.a)(m,2),j=b[0],p=b[1],y=i.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())||""===l?e:""})),h=i.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(j)}));return Object(g.jsx)(x.Provider,{value:{projects:i,setProjects:n,searchProject:l,setSearchProject:d,searchProjectsByTitle:y,selectProject:j,setSelectProject:p,selectProjectsByCategory:h},children:e.children})}},41:function(e,t,r){"use strict";var a=r(7),s=r(14),i=r(38),n=r(2),c=function(e){var t=e.title,r=e.category,a=e.image,c=e.tools,o=e.url;return Object(n.jsx)(i.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(n.jsx)(s.b,{to:o,target:"_blank",children:Object(n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project",url:o})}),Object(n.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:c})]})]})})})},o=r(40),l=["Cybersecurity","Frontend","Backend","Fullstack","Branding","Digital Marketing","Research Papers","Mobile Apps","Cloud Projects","Data Science","IT Projects"],d=function(e){var t=e.setSelectProject;return Object(n.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[Object(n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),l.map((function(e){return Object(n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})},m=r(1);t.a=function(){var e=Object(m.useContext)(o.a),t=e.projects,r=e.searchProject,s=e.setSearchProject,i=e.searchProjectsByTitle,l=e.selectProject,u=e.setSelectProject,g=e.selectProjectsByCategory;return Object(n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(n.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),Object(n.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[Object(n.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(n.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:Object(n.jsx)(a.j,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(n.jsx)("input",{onChange:function(e){s(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(n.jsx)(d,{setSelectProject:u})]})]}),Object(n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:l?g.map((function(e){return Object(n.jsx)(c,{title:e.title,category:e.category,image:e.img,tools:e.tools,url:e.url},e.id)})):r?i.map((function(e){return Object(n.jsx)(c,{title:e.title,category:e.category,image:e.img,tools:e.tools,url:e.url},e.id)})):t.map((function(e){return Object(n.jsx)(c,{title:e.title,category:e.category,image:e.img,tools:e.tools,url:e.url},e.id)}))})]})}},46:function(e,t,r){"use strict";r.r(t);var a=r(9),s=r(7),i=r.p+"static/media/web-security.b33673e5.svg",n=r(38),c=r(21),o=r(2),l=function(){var e=Object(c.a)();Object(a.a)(e,1)[0];return Object(o.jsxs)(n.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(o.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(o.jsx)(n.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I am Tanya Lee"}),Object(o.jsx)(n.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A Cybersecurity Student & Multifaceted Professional"}),Object(o.jsx)(n.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(o.jsxs)("a",{download:"Tanya-Resume.pdf",href:"/files/Tanya-Resume.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(o.jsx)(s.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(o.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),Object(o.jsx)(n.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-1/2 sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:Object(o.jsx)("img",{src:i,alt:"Developer"})})]})};var d=function(e){var t=e.title;return Object(o.jsx)("button",{children:t})},m=r(14),u=r(41),g=r(40);t.default=function(){return Object(o.jsxs)("div",{className:"container mx-auto",children:[Object(o.jsx)(l,{}),Object(o.jsx)(g.b,{children:Object(o.jsx)(u.a,{})}),Object(o.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(o.jsx)(m.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg bg-green-400 hover:bg-indigo-600 focus:ring-1 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(o.jsx)(d,{title:"More Projects"})})})]})}}}]);
//# sourceMappingURL=3.cfac67c8.chunk.js.map