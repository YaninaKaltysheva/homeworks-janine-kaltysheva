!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.r(n);var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,o;return n=e,(t=[{key:"post",value:function(e,n){return new Promise(function(t,r){fetch(e,{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json"}}).then(function(e){return console.log(e),e.json()}).then(function(e){return t(e)}).catch(function(e){return r(e)})})}}])&&r(n.prototype,t),o&&r(n,o),e}(),a="https://mostlikedperson-api.herokuapp.com/api";function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"login",value:function(e,n){var t=new o;return new Promise(function(r,o){t.post("".concat(a,"/public/auth/login"),{email:e,password:n}).then(function(e){if(!e.auth)return Promise.reject(e.message);localStorage.setItem("sn_user_id",e.id),localStorage.setItem("sn_user_token",e.token),r(e)}).catch(function(e){o(e)})})}}])&&i(n.prototype,t),r&&i(n,r),e}();function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._authService=new l}var n,t,r;return n=e,(t=[{key:"render",value:function(){return'\n        <div class="auth-wrap d-flex mt-5">\n            <div class="auth-form col col-6 mx-auto my-auto">\n                <h3>Login to Social.</h3>\n                <p class="text-secondary">Enter your e-mail address & password to login to your Social account.</p>\n                <form name="loginForm" novalidate>\n                    <div class="form-group">\n                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^S+@[a-z]+.[a-z]+$">\n                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="S+">\n                        <div class="d-flex mt-5">\n                            <button type="submit" class="btn btn-primary btn-sm">Login</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class="auth-bg col col-6"></div>\n        </div>\n        '}},{key:"afterRender",value:function(){var e=this;document.forms.loginForm.addEventListener("submit",function(n){n.preventDefault();var t=n.target.elements.email.value,r=n.target.elements.password.value;t&&r&&e._authService.login(t,r).then(function(e){console.log("Login ok -> ",e)}).catch(function(e){return console.log("Login error -> ",e)})})}}])&&c(n.prototype,t),r&&c(n,r),e}();function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"signup",value:function(e,n,t,r,i,l,c,u,s,f,d,m){var p=new o;return new Promise(function(o,v){p.post("".concat(a,"/public/auth/signup"),{email:e,password:n,nickname:t,first_name:r,last_name:i,phone:l,gender_orientation:c,city:u,country:s,date_of_birth_day:f,date_of_birth_month:d,date_of_birth_year:m}).then(function(e){if(!e.auth)return Promise.reject(e.message);o(e)}).catch(function(e){v(e)})})}}])&&s(n.prototype,t),r&&s(n,r),e}();function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._authSignService=new f}var n,t,r;return n=e,(t=[{key:"render",value:function(){return'\n        <div class="auth-wrap d-flex mt-5">\n            <div class="auth-form col col-6 mx-auto my-auto">\n                <h3>Sign up</h3>\n                <p class="text-secondary">Enter the information to registrate to your Social account.</p>\n                <form name="registrationForm" novalidate>\n                    <div class="form-group">\n                        <input type="email" class="form-control form-control-sm" id="email" placeholder="enter the email: name@example.com" required data-pattern="^S+@[a-z]+.[a-z]+$">\n                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="enter the password" required data-pattern="S+">\n                        <input class="form-control nick-name" type="text" id="nickname" placeholder="Nick Name">\n                        <input class="form-control first-name" type="text" id="first_name" placeholder="Nick Name">\n                        <input class="form-control last-name" type="text" id="last_name" placeholder="Nick Name">\n                        <input class="form-control" type="text" id="phone" placeholder="Phone number">\n                        <input type="radio" name="gender_orientation" value="male"> Male\n                        <input type="radio" name="gender_orientation" value="female"> Female\n                        <input class="form-control" type="text" id="city" placeholder="Enter your city">\n                        <input class="form-control" type="text" id="country" placeholder="Enter your country">\n                        <input type="date_of_birth_day" class="form-control form-control-sm mt-3" id="date_of_birth_day" placeholder="enter the date of birth day" required data-pattern="S+">\n                        <input type="date_of_birth_month" class="form-control form-control-sm mt-3" id="date_of_birth_month" placeholder="enter the date of birth month" required data-pattern="S+">\n                        <input type="date_of_birth_year" class="form-control form-control-sm mt-3" id="date_of_birth_year" placeholder="enter the date of birth year" required data-pattern="S+">\n                        <div class="d-flex mt-5">\n                            <button type="submit" class="btn btn-primary btn-sm">Sign Up</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class="auth-bg col col-6"></div>\n        </div>\n        '}},{key:"afterRender",value:function(){var e=this;document.forms.registrationForm.addEventListener("submit",function(n){n.preventDefault();var t=n.target.elements.email.value,r=n.target.elements.password.value,o=n.target.elements.nickname.value,a=n.target.elements.first_name.value,i=n.target.elements.last_name.value,l=n.target.elements.phone.value,c=n.target.elements.gender_orientation.value,u=n.target.elements.city.value,s=n.target.elements.country.value,f=n.target.elements.date_of_birth_day.value,d=n.target.elements.date_of_birth_month.value,m=n.target.elements.date_of_birth_year.value;t&&r&&o&&a&&i&&l&&c&&u&&s&&f&&d&&m&&e._authSignService.signup(t,r,o,a,i,l,c,u,s,f,d,m).then(function(e){console.log("Login ok -> ",e)}).catch(function(e){return console.log("Login error -> ",e)})})}}])&&d(n.prototype,t),r&&d(n,r),e}();function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"render",value:function(){return"\n            <div>Home</div>\n        "}}])&&p(n.prototype,t),r&&p(n,r),e}();function h(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"render",value:function(){return"\n            <div>404</div>\n        "}}])&&h(n.prototype,t),r&&h(n,r),e}(),b={"/":new v,"/login":new u,"**":new y,"/signup":new m},g=function(){var e=location.hash.slice(1).toLowerCase(),n=document.querySelector("app-container"),t=b[e]||b["**"];n.innerHTML=t.render(),t.afterRender&&t.afterRender()};window.addEventListener("load",g),window.addEventListener("hashchange",g)}]);