(()=>{var s=class{galleryUID;items=[];constructor(t,i=1){if(window.PhotoSwipe==null||window.PhotoSwipeUI_Default==null){console.error("PhotoSwipe lib not loaded.");return}this.galleryUID=i,s.createGallery(t),this.loadItems(t),this.bindClick()}loadItems(t){this.items=[];let i=t.querySelectorAll("figure");for(let o of i){let r=o.querySelector("figcaption"),n=o.querySelector("img"),m={w:parseInt(n.getAttribute("width")),h:parseInt(n.getAttribute("height")),src:n.src,msrc:n.getAttribute("data-thumb")||n.src,el:o};r&&(m.title=r.innerHTML),this.items.push(m)}}static createGallery(t){let i=t.querySelectorAll("figure"),o=[];for(let r of i)o.length?r.previousElementSibling===o[o.length-1]?o.push(r):o.length&&(s.wrap(o),o=[r]):o=[r];o.length>0&&s.wrap(o)}static wrap(t){let i=document.createElement("div");i.className="gallery";let o=t[0].parentNode,r=t[0];o.insertBefore(i,r);for(let n of t)i.appendChild(n)}open(t){let i=document.querySelector(".pswp");new window.PhotoSwipe(i,window.PhotoSwipeUI_Default,this.items,{index:t,galleryUID:this.galleryUID,getThumbBoundsFn:r=>{let n=this.items[r].el.getElementsByTagName("img")[0],m=window.pageYOffset||document.documentElement.scrollTop,a=n.getBoundingClientRect();return{x:a.left,y:a.top+m,w:a.width}}}).init()}bindClick(){for(let[t,i]of this.items.entries())i.el.querySelector("a").addEventListener("click",r=>{r.preventDefault(),this.open(t)})}},p=s;var l={};if(localStorage.hasOwnProperty("StackColorsCache"))try{l=JSON.parse(localStorage.getItem("StackColorsCache"))}catch{l={}}async function y(e,t,i){if(!e)return await Vibrant.from(i).getPalette();if(!l.hasOwnProperty(e)||l[e].hash!==t){let o=await Vibrant.from(i).getPalette();l[e]={hash:t,Vibrant:{hex:o.Vibrant.hex,rgb:o.Vibrant.rgb,bodyTextColor:o.Vibrant.bodyTextColor},DarkMuted:{hex:o.DarkMuted.hex,rgb:o.DarkMuted.rgb,bodyTextColor:o.DarkMuted.bodyTextColor}},localStorage.setItem("StackColorsCache",JSON.stringify(l))}return l[e]}var T=(e,t=500)=>{e.classList.add("transiting"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",window.setTimeout(()=>{e.classList.remove("show"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},k=(e,t=500)=>{e.classList.add("transiting"),e.style.removeProperty("display"),e.classList.add("show");let i=e.offsetHeight;e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=i+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},x=(e,t=500)=>window.getComputedStyle(e).display==="none"?k(e,t):T(e,t);function g(){let e=document.getElementById("toggle-menu");e&&e.addEventListener("click",()=>{document.getElementById("main-menu").classList.contains("transiting")||(document.body.classList.toggle("show-menu"),x(document.getElementById("main-menu"),300),e.classList.toggle("is-active"))})}function L(e,t,i){var o=document.createElement(e);for(let r in t)if(r&&t.hasOwnProperty(r)){let n=t[r];r=="dangerouslySetInnerHTML"?o.innerHTML=n.__html:n===!0?o.setAttribute(r,r):n!==!1&&n!=null&&o.setAttribute(r,n.toString())}for(let r=2;r<arguments.length;r++){let n=arguments[r];n&&o.appendChild(n.nodeType==null?document.createTextNode(n.toString()):n)}return o}var f=L;var h=class{localStorageKey="StackColorScheme";currentScheme;systemPreferScheme;constructor(t){this.bindMatchMedia(),this.currentScheme=this.getSavedScheme(),this.dispatchEvent(document.body.dataset.scheme),t&&this.bindClick(t),document.body.style.transition==""&&document.body.style.setProperty("transition","background-color .3s ease")}saveScheme(){localStorage.setItem(this.localStorageKey,this.currentScheme)}bindClick(t){t.addEventListener("click",i=>{this.isDark()?this.currentScheme="light":this.currentScheme="dark",this.setBodyClass(),this.currentScheme==this.systemPreferScheme&&(this.currentScheme="auto"),this.saveScheme()})}isDark(){return this.currentScheme=="dark"||this.currentScheme=="auto"&&this.systemPreferScheme=="dark"}dispatchEvent(t){let i=new CustomEvent("onColorSchemeChange",{detail:t});window.dispatchEvent(i)}setBodyClass(){this.isDark()?document.body.dataset.scheme="dark":document.body.dataset.scheme="light",this.dispatchEvent(document.body.dataset.scheme)}getSavedScheme(){let t=localStorage.getItem(this.localStorageKey);return t=="light"||t=="dark"||t=="auto"?t:"auto"}bindMatchMedia(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?this.systemPreferScheme="dark":this.systemPreferScheme="light",this.setBodyClass()})}},b=h;var S={init:()=>{g();let e=document.querySelector(".article-content");e&&new p(e);let t=document.querySelector(".article-list--tile");t&&new IntersectionObserver(async(o,r)=>{o.forEach(n=>{if(!n.isIntersecting)return;r.unobserve(n.target),n.target.querySelectorAll("article.has-image").forEach(async a=>{let d=a.querySelector("img"),w=d.src,C=d.getAttribute("data-key"),E=d.getAttribute("data-hash"),P=a.querySelector(".article-details"),c=await y(C,E,w);P.style.background=`
                        linear-gradient(0deg, 
                            rgba(${c.DarkMuted.rgb[0]}, ${c.DarkMuted.rgb[1]}, ${c.DarkMuted.rgb[2]}, 0.5) 0%, 
                            rgba(${c.Vibrant.rgb[0]}, ${c.Vibrant.rgb[1]}, ${c.Vibrant.rgb[2]}, 0.75) 100%)`})})}).observe(t),new b(document.getElementById("dark-mode-toggle"))}};window.addEventListener("load",()=>{setTimeout(function(){S.init()},0)});var u=document.getElementsByClassName("highlight");u!=null&&(console.info(u),Array.prototype.forEach.call(u,D));function M(e){var t=window.getSelection(),i=document.createRange();return i.selectNodeContents(e),t.removeAllRanges(),t.addRange(i),t}function v(e,t){e.textContent=t,setTimeout(function(){e.textContent="Copy"},1e3)}function D(e){var t=document.createElement("button");t.className="highlight-copy-btn",t.textContent="Copy";var i=e.firstElementChild.firstElementChild.firstElementChild.firstElementChild.children[1];t.addEventListener("click",function(){try{var o=M(i);document.execCommand("copy"),o.removeAllRanges(),v(t,"Copied!")}catch(r){console&&console.log(r),v(t,"Failed :'(")}}),e.appendChild(t)}window.Stack=S;window.createElement=f;})();
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/
