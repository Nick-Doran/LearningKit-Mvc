/*! Built with http://stenciljs.com */
const{h:t}=window.components;class o{constructor(){this.onClosePopupContainer=(t=>{t.stopPropagation(),this.closePopup.emit(t)}),this.onBackButtonClick=(t=>{t.stopPropagation(),this.backClick.emit(t)})}get closeTooltip(){return this.getString(this.localizationService,"typelist.closeTooltip")}get backTooltip(){return this.getString(this.localizationService,"variant.back")}render(){return this.popupContainerEl.setAttribute("position",this.position),t("div",{class:"ktc-pop-up",onClick:t=>t.stopPropagation()},t("kentico-dialog-header",{headerTitle:this.headerTitle,primary:this.primary,showBackButton:this.showBackButton,closeTooltip:this.closeTooltip,backTooltip:this.backTooltip,onClose:this.onClosePopupContainer,onBack:this.onBackButtonClick}),t("div",{class:"ktc-pop-up-content"},t("slot",{name:"pop-up-content"})),t("slot",{name:"pop-up-footer"}))}static get is(){return"kentico-pop-up-container"}static get properties(){return{getString:{context:"getString"},headerTitle:{type:String,attr:"header-title"},localizationService:{type:"Any",attr:"localization-service"},popupContainerEl:{elementRef:!0},position:{type:String,attr:"position"},primary:{type:Boolean,attr:"primary"},showBackButton:{type:Boolean,attr:"show-back-button"}}}static get events(){return[{name:"closePopup",method:"closePopup",bubbles:!0,cancelable:!0,composed:!0},{name:"backClick",method:"backClick",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"kentico-pop-up-container [class*=\" icon-\"],kentico-pop-up-container [class^=icon-]{font-family:Core-icons;display:inline-block;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-image:none}kentico-pop-up-container [class^=icon-]:before{content:\"\\e619\"}kentico-pop-up-container .ktc-icon-only:before{content:none}kentico-pop-up-container .ktc-pop-up{min-width:300px;max-width:900px;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.5);box-shadow:0 2px 5px 0 rgba(0,0,0,.5)}kentico-pop-up-container .ktc-pop-up .ktc-pop-up-content{background-color:#fff;padding-left:8px;padding-right:8px}"}}export{o as KenticoPopUpContainer};