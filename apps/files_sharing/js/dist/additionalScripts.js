!function(e){function t(t){for(var i,a,n=t[0],o=t[1],s=0,h=[];s<n.length;s++)a=n[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(l&&l(t);h.length;)h.shift()()}var i={},r={0:0,1:0};function a(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],i=r[e];if(0!==i)if(i)t.push(i[2]);else{var n=new Promise((function(t,a){i=r[e]=[t,a]}));t.push(i[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=function(e){return a.p+"files_sharing."+e+".js?v="+{4:"e10e29cbd75ba35820c2",5:"41804f92d50a9b7dc44d"}[e]}(e);var l=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(h);var i=r[e];if(0!==i){if(i){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,i[1](l)}r[e]=void 0}};var h=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=i,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/js/",a.oe=function(e){throw console.error(e),e};var n=window.webpackJsonpFilesSharing=window.webpackJsonpFilesSharing||[],o=n.push.bind(n);n.push=t,n=n.slice();for(var s=0;s<n.length;s++)t(n[s]);var l=o;a(a.s=194)}({16:function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var a=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),n=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[i].concat(n).concat([a]).join("\n")}var o,s,l;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(i,"}"):i})).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var n=this[a][0];null!=n&&(r[n]=!0)}for(var o=0;o<e.length;o++){var s=e[o];null!=s[0]&&r[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="(".concat(s[2],") and (").concat(i,")")),t.push(s))}},t}},18:function(e,t,i){"use strict";function r(e,t){for(var i=[],r={},a=0;a<t.length;a++){var n=t[a],o=n[0],s={id:e+":"+a,css:n[1],media:n[2],sourceMap:n[3]};r[o]?r[o].parts.push(s):i.push(r[o]={id:o,parts:[s]})}return i}i.r(t),i.d(t,"default",(function(){return f}));var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},o=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,h=!1,p=function(){},d=null,c="data-vue-ssr-id",u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,i,a){h=i,d=a||{};var o=r(e,t);return m(o),function(t){for(var i=[],a=0;a<o.length;a++){var s=o[a];(l=n[s.id]).refs--,i.push(l)}t?m(o=r(e,t)):o=[];for(a=0;a<i.length;a++){var l;if(0===(l=i[a]).refs){for(var h=0;h<l.parts.length;h++)l.parts[h]();delete n[l.id]}}}}function m(e){for(var t=0;t<e.length;t++){var i=e[t],r=n[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(v(i.parts[a]));r.parts.length>i.parts.length&&(r.parts.length=i.parts.length)}else{var o=[];for(a=0;a<i.parts.length;a++)o.push(v(i.parts[a]));n[i.id]={id:i.id,refs:1,parts:o}}}}function g(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function v(e){var t,i,r=document.querySelector("style["+c+'~="'+e.id+'"]');if(r){if(h)return p;r.parentNode.removeChild(r)}if(u){var a=l++;r=s||(s=g()),t=O.bind(null,r,a,!1),i=O.bind(null,r,a,!0)}else r=g(),t=C.bind(null,r),i=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else i()}}var b,w=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function O(e,t,i,r){var a=i?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,a);else{var n=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(n,o[t]):e.appendChild(n)}}function C(e,t){var i=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(c,t.id),a&&(i+="\n/*# sourceURL="+a.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}},194:function(e,t,i){"use strict";i.r(t);i(195),i(196),i(197),i(198),i(200),i(66);i.p=OC.linkTo("files_sharing","js/dist/"),i.nc=btoa(OC.requestToken),window.OCA.Sharing=OCA.Sharing},195:function(e,i){_.extend(OC.Files.Client,{PROPERTY_SHARE_TYPES:"{"+OC.Files.Client.NS_OWNCLOUD+"}share-types",PROPERTY_OWNER_ID:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-id",PROPERTY_OWNER_DISPLAY_NAME:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-display-name"}),OCA.Sharing||(OCA.Sharing={}),OCA.Sharing.Util={attach:function(e){if(OC.Share&&"trashbin"!==e.id&&"files.public"!==e.id){var i=e.fileActions,r=e._createRow;e._createRow=function(e){var t=r.apply(this,arguments),a=OCA.Sharing.Util.getSharePermissions(e);return 0===e.permissions&&(delete i.actions.all.Comment,delete i.actions.all.Details,delete i.actions.all.Goto),t.attr("data-share-permissions",a),e.shareOwner&&(t.attr("data-share-owner",e.shareOwner),t.attr("data-share-owner-id",e.shareOwnerId),"shared-root"===e.mountType&&t.attr("data-permissions",e.permissions|OC.PERMISSION_UPDATE)),e.recipientData&&!_.isEmpty(e.recipientData)&&t.attr("data-share-recipient-data",JSON.stringify(e.recipientData)),e.shareTypes&&t.attr("data-share-types",e.shareTypes.join(",")),t};var a=e.elementToFile;e.elementToFile=function(e){var t=a.apply(this,arguments);if(t.sharePermissions=e.attr("data-share-permissions")||void 0,t.shareOwner=e.attr("data-share-owner")||void 0,t.shareOwnerId=e.attr("data-share-owner-id")||void 0,e.attr("data-share-types")&&(t.shareTypes=e.attr("data-share-types").split(",")),e.attr("data-expiration")){var i=parseInt(e.attr("data-expiration"));t.shares=[],t.shares.push({expiration:i})}return t};var n=e._getWebdavProperties;e._getWebdavProperties=function(){var e=n.apply(this,arguments);return e.push(OC.Files.Client.PROPERTY_OWNER_ID),e.push(OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME),e.push(OC.Files.Client.PROPERTY_SHARE_TYPES),e},e.filesClient.addFileInfoParser((function(e){var t={},i=e.propStat[0].properties,r=i[OC.Files.Client.PROPERTY_PERMISSIONS];r&&r.indexOf("S")>=0&&(t.shareOwner=i[OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME],t.shareOwnerId=i[OC.Files.Client.PROPERTY_OWNER_ID]);var a=i[OC.Files.Client.PROPERTY_SHARE_TYPES];return a&&(t.shareTypes=_.chain(a).filter((function(e){return e.namespaceURI===OC.Files.Client.NS_OWNCLOUD&&"share-type"===e.nodeName.split(":")[1]})).map((function(e){return parseInt(e.textContent||e.text,10)})).value()),t})),e.$el.on("fileActionsReady",(function(e){var t=e.$files;_.each(t,(function(e){var t=$(e),i=t.attr("data-share-types")||"",r=t.attr("data-share-owner");if(i||r){var a=!1,n=!1;_.each(i.split(",")||[],(function(e){(e=parseInt(e,10))===OC.Share.SHARE_TYPE_LINK?a=!0:e===OC.Share.SHARE_TYPE_EMAIL?a=!0:e===OC.Share.SHARE_TYPE_USER?n=!0:e===OC.Share.SHARE_TYPE_GROUP?n=!0:e===OC.Share.SHARE_TYPE_REMOTE?n=!0:e===OC.Share.SHARE_TYPE_CIRCLE?n=!0:e===OC.Share.SHARE_TYPE_ROOM&&(n=!0)})),OCA.Sharing.Util._updateFileActionIcon(t,n,a)}}))})),e.$el.on("changeDirectory",(function(){OCA.Sharing.sharesLoaded=!1})),i.registerAction({name:"Share",displayName:function(e){if(e&&e.$file){var i=parseInt(e.$file.data("share-types"),10),r=e.$file.data("share-owner-id");if(i>=0||r)return t("core","Shared")}return t("core","Share")},altText:t("core","Share"),mime:"all",order:-150,permissions:OC.PERMISSION_ALL,iconClass:function(e,t){var i=parseInt(t.$file.data("share-types"),10);return i===OC.Share.SHARE_TYPE_EMAIL||i===OC.Share.SHARE_TYPE_LINK?"icon-public":"icon-shared"},icon:function(e,t){var i=t.$file.data("share-owner-id");if(i)return OC.generateUrl("/avatar/".concat(i,"/32"))},type:OCA.Files.FileActions.TYPE_INLINE,actionHandler:function(t,i){var r=parseInt(i.$file.data("share-permissions"),10);(isNaN(r)||r>0)&&e.showDetailsView(t,"sharing")},render:function(e,t,r){return 0!=(parseInt(r.$file.data("permissions"),10)&OC.PERMISSION_SHARE)||r.$file.attr("data-share-owner")?i._defaultRenderAction.call(i,e,t,r):null}});var o=new OCA.Sharing.ShareTabView("sharing",{order:-20}),s=new OCA.Sharing.ShareBreadCrumbView({shareTab:o});e.registerBreadCrumbDetailView(s)}},_updateFileListDataAttributes:function(e,t,i){if("files"!==e.id)if(_.pluck(i.get("shares"),"share_with_displayname").length){var r=_.mapObject(i.get("shares"),(function(e){return{shareWith:e.share_with,shareWithDisplayName:e.share_with_displayname}}));t.attr("data-share-recipient-data",JSON.stringify(r))}else t.removeAttr("data-share-recipient-data")},_updateFileActionIcon:function(e,t,i){return!!(t||i||e.attr("data-share-recipient-data")||e.attr("data-share-owner"))&&(OC.Share.markFileAsShared(e,!0,i),!0)},getSharePermissions:function(e){return e.sharePermissions}},OC.Plugins.register("OCA.Files.FileList",OCA.Sharing.Util)},196:function(e,i,r){var a;a=OCA.Files.DetailTabView.extend({id:"shareTabView",className:"tab shareTabView",initialize:function(e,t){OCA.Files.DetailTabView.prototype.initialize.call(this,e,t),OC.Plugins.attach("OCA.Sharing.ShareTabView",this)},template:function(e){return'<div><div class="dialogContainer"></div><div id="collaborationResources"></div></div>'},getLabel:function(){return t("files_sharing","Sharing")},getIcon:function(){return"icon-shared"},render:function(){var e=this,t=this;if(this._dialog&&(this._dialog.model.off(),this._dialog.remove(),this._dialog=null),this.model){this.$el.html(this.template()),_.isUndefined(this.model.get("sharePermissions"))&&this.model.set("sharePermissions",OCA.Sharing.Util.getSharePermissions(this.model.attributes));var i={itemType:this.model.isDirectory()?"folder":"file",itemSource:this.model.get("id"),possiblePermissions:this.model.get("sharePermissions")},a=new OC.Share.ShareConfigModel,n=new OC.Share.ShareItemModel(i,{configModel:a,fileInfoModel:this.model});this._dialog=new OC.Share.ShareDialogView({configModel:a,model:n}),this.$el.find(".dialogContainer").append(this._dialog.$el),this._dialog.render(),this._dialog.model.fetch(),this._dialog.model.on("change",(function(){t.trigger("sharesChanged",n)})),Promise.all([r.e(4),r.e(5)]).then(r.bind(null,351)).then((function(t){var i=new t.Vue({el:"#collaborationResources",render:function(e){return e(t.View)},data:{model:e.model.toJSON()}});e.model.on("change",(function(){i.data=e.model.toJSON()}))}))}else this.$el.empty();this.trigger("rendered")}}),OCA.Sharing.ShareTabView=a},197:function(e,t){
/**
 * @copyright 2016 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2016 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
!function(){"use strict";var e=OC.Backbone.View.extend({tagName:"span",events:{click:"_onClick"},_dirInfo:void 0,_shareTab:void 0,initialize:function(e){this._shareTab=e.shareTab},render:function(e){if(this._dirInfo=e.dirInfo||null,null===this._dirInfo||"/"===this._dirInfo.path&&""===this._dirInfo.name)this.$el.removeClass("shared icon-public icon-shared"),this.$el.hide();else{var t=e.dirInfo&&e.dirInfo.shareTypes&&e.dirInfo.shareTypes.length>0;this.$el.removeClass("shared icon-public icon-shared"),t?(this.$el.addClass("shared"),-1!==e.dirInfo.shareTypes.indexOf(OC.Share.SHARE_TYPE_LINK)?this.$el.addClass("icon-public"):this.$el.addClass("icon-shared")):this.$el.addClass("icon-shared"),this.$el.show(),this.delegateEvents()}return this},_onClick:function(e){e.preventDefault();var t=new OCA.Files.FileInfoModel(this._dirInfo),i=this;t.on("change",(function(){i.render({dirInfo:i._dirInfo})})),this._shareTab.on("sharesChanged",(function(e){for(var t=[],r=e.getSharesWithCurrentItem(),a=0;a<r.length;a++)-1===t.indexOf(r[a].share_type)&&t.push(r[a].share_type);e.hasLinkShares()&&t.push(OC.Share.SHARE_TYPE_LINK),i._dirInfo.shareTypes=t,i.render({dirInfo:i._dirInfo})})),OCA.Files.App.fileList.showDetailsView(t,"sharing")}});OCA.Sharing.ShareBreadCrumbView=e}()},198:function(e,t,i){var r=i(199);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,i(18).default)("3e5548ea",r,!0,{})},199:function(e,t,i){(e.exports=i(16)(!1)).push([e.i,".app-files .shareTabView{min-height:100px}.share-autocomplete-item{display:flex}.share-autocomplete-item.merged{margin-left:32px}.share-autocomplete-item .autocomplete-item-text{margin-left:10px;margin-right:10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;line-height:32px;vertical-align:middle;flex-grow:1}.share-autocomplete-item .autocomplete-item-text .ui-state-highlight{border:none;margin:0}.share-autocomplete-item.with-description .autocomplete-item-text{line-height:100%}.share-autocomplete-item .autocomplete-item-details{display:block;line-height:130%;font-size:90%;opacity:0.7}.share-autocomplete-item .icon{opacity:.7;margin-right:7px}.share-autocomplete-item .icon.search-globally{width:32px;height:32px;margin-right:0}.shareTabView .oneline{white-space:nowrap;position:relative}.shareTabView .shareWithLoading{padding-left:10px;right:35px;top:3px}.shareTabView .shareWithConfirm{position:absolute;right:2px;top:6px;padding:14px;opacity:0.5}.shareTabView .shareWithField:focus ~ .shareWithConfirm{opacity:1}.shareTabView .linkMore{position:absolute;right:-7px;top:-4px;padding:14px}.shareTabView .popovermenu .linkPassMenu input.error{border-color:var(--color-error) !important}.shareTabView .popovermenu .linkPassMenu input.error[type=\"submit\"]{border-left:none}.shareTabView .popovermenu .linkPassMenu .share-pass-submit{width:auto !important}.shareTabView .popovermenu .linkPassMenu .icon-loading-small{background-color:var(--color-main-background);position:absolute;right:8px;margin:3px;padding:10px;width:32px;height:32px;z-index:10}.shareTabView .popovermenu .datepicker{margin-left:35px}.shareTabView .popovermenu .share-add input.share-note-delete{border:none;background-color:transparent;width:44px !important;padding:0;flex:0 0 44px;margin-left:auto}.shareTabView .popovermenu .share-add input.share-note-delete.hidden{display:none}.shareTabView .popovermenu .share-note-form span.icon-note{position:relative}.shareTabView .popovermenu .share-note-form textarea.share-note{margin:0;width:200px;min-height:70px;resize:none}.shareTabView .popovermenu .share-note-form textarea.share-note+input.share-note-submit{position:absolute;width:44px !important;height:44px;bottom:0px;right:10px;margin:0;background-color:transparent;border:none;opacity:.7}.shareTabView .popovermenu .share-note-form textarea.share-note+input.share-note-submit:hover,.shareTabView .popovermenu .share-note-form textarea.share-note+input.share-note-submit:focus,.shareTabView .popovermenu .share-note-form textarea.share-note+input.share-note-submit:active{opacity:1}.shareTabView .popovermenu .share-note-form.share-note-link{margin-bottom:10px}.shareTabView .popovermenu .new-share{border-top:1px solid var(--color-border)}.shareTabView .linkPass .icon-loading-small{margin-right:0px}.shareTabView .icon{background-size:16px 16px}.shareTabView .shareWithList .icon-loading-small:not(.hidden)+span,.shareTabView .linkShareView .icon-loading-small:not(.hidden)+input+label:before{display:none !important}.shareTabView input[type='checkbox']{margin:0 3px 0 8px;vertical-align:middle}.shareTabView input[type='text'].shareWithField,.shareTabView input[type='text'].emailField{width:100%;box-sizing:border-box;padding-right:32px;text-overflow:ellipsis}.shareTabView input[type='text'].linkText .shareTabView input[type='password'].linkPassText,.shareTabView input[type='password'].passwordField{width:180px !important}.shareTabView form{font-size:100%;margin-left:0;margin-right:0}.shareTabView .share-note{border-radius:var(--border-radius);margin-bottom:10px;margin-left:37px}.shareWithList{list-style-type:none;display:flex;flex-direction:column}.shareWithList>li{height:44px;white-space:normal;display:inline-flex;align-items:center;position:relative}.shareWithList>li .avatar{width:32px;height:32px;background-color:var(--color-primary)}.shareWithList .unshare img{vertical-align:text-bottom}.shareWithList .sharingOptionsGroup{margin-left:auto;display:flex;align-items:center;white-space:nowrap}.shareWithList .sharingOptionsGroup>.icon:not(.hidden),.shareWithList .sharingOptionsGroup .share-menu>.icon:not(.hidden){padding:14px;height:44px;width:44px;opacity:.5;display:block;cursor:pointer}.shareWithList .sharingOptionsGroup>.icon:not(.hidden):hover,.shareWithList .sharingOptionsGroup>.icon:not(.hidden):focus,.shareWithList .sharingOptionsGroup>.icon:not(.hidden):active,.shareWithList .sharingOptionsGroup .share-menu>.icon:not(.hidden):hover,.shareWithList .sharingOptionsGroup .share-menu>.icon:not(.hidden):focus,.shareWithList .sharingOptionsGroup .share-menu>.icon:not(.hidden):active{opacity:.7}.shareWithList .sharingOptionsGroup>.share-menu{position:relative;display:block}.shareWithList .username{padding:0 8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ui-autocomplete{max-height:calc(36px * 6.5);overflow-y:auto;overflow-x:hidden;z-index:1550 !important}.notCreatable{padding-left:12px;padding-top:12px;color:var(--color-text-lighter)}.contactsmenu-popover{left:-6px;right:auto;padding:3px 6px;top:100%;margin-top:0}.contactsmenu-popover li.hidden{display:none !important}.contactsmenu-popover:after{left:8px;right:auto}.reshare,#link label,#expiration label{display:inline-flex;align-items:center}.reshare .avatar,#link label .avatar,#expiration label .avatar{margin-right:5px}.resharerInfoView.subView{position:relative}\n",""])},200:function(e,t,i){var r=i(201);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,i(18).default)("57e7eec1",r,!0,{})},201:function(e,t,i){(e.exports=i(16)(!1)).push([e.i,"div.crumb span.icon-shared,div.crumb span.icon-public{display:inline-block;cursor:pointer;opacity:0.2;margin-right:6px}div.crumb span.icon-shared.shared,div.crumb span.icon-public.shared{opacity:0.7}\n",""])},66:function(e,i,r){r.p=OC.linkTo("files_sharing","js/dist/"),r.nc=btoa(OC.requestToken),window.OCP.Collaboration.registerType("file",{action:function(){return new Promise((function(e,i){OC.dialogs.filepicker(t("files_sharing","Link to a file"),(function(t){OC.Files.getClient().getFileInfo(t).then((function(t,i){e(i.id)})).fail((function(){i(new Error("Cannot get fileinfo"))}))}),!1,null,!1,OC.dialogs.FILEPICKER_TYPE_CHOOSE,"",{allowDirectoryChooser:!0})}))},typeString:t("files_sharing","Link to a file"),typeIconClass:"icon-files-dark"})}});
//# sourceMappingURL=additionalScripts.js.map