/*---------------------------------------------------------------------
    File Name: slider-setting.js
---------------------------------------------------------------------*/

"use strict";
	var tpj = jQuery;

	var revapi486;
	tpj(document).ready(function () {
		if (tpj("#rev__slider__486__1").revolution == undefined) {
			revslider__showDoubleJqueryError("#rev__slider__486__1");
		} else {
			revapi486 = tpj("#rev__slider__486__1").show().revolution({
				sliderType: "standard",
				jsFileLocation: "revolution/js/",
				sliderLayout: "fullscreen",
				dottedOverlay: "none",
				delay: 5000,
				navigation: {
					keyboardNavigation: "on",
					keyboard__direction: "horizontal",
					mouseScrollNavigation: "off",
					mouseScrollReverse: "default",
					onHoverStop: "on",
					touch: {
						touchenabled: "on",
						swipe__threshold: 75,
						swipe__min__touches: 1,
						swipe__direction: "horizontal",
						drag__block__vertical: false
					},
					arrows: {
						  style: "gyges",
						  enable: true,
						  hide__onmobile: false,
						  hide__onleave: true,
						  hide__delay: 200,
						  hide__delay__mobile: 1200,
						  tmp: '',
						  left: {
							  h__align: "left",
							  v__align: "center",
							  h__offset: 0,
							  v__offset: 0
						  },
						  right: {
							  h__align: "right",
							  v__align: "center",
							  h__offset: 0,
							  v__offset: 0
						  }
					  },
					bullets: {
						enable: true,
						hide__onmobile: true,
						hide__under: 800,
						style: "hebe",
						hide__onleave: false,
						direction: "horizontal",
						h__align: "center",
						v__align: "bottom",
						h__offset: 0,
						v__offset: 30,
						space: 5,
						tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title"></span>'
					}
				},
				viewPort: {
					enable: true,
					outof: "pause",
					visible__area: "70%",
					presize: false
				},
				responsiveLevels: [1240, 1024, 778, 480],
				visibilityLevels: [1240, 1024, 778, 480],
				gridwidth: [1240, 1024, 778, 480],
				gridheight: [500, 450, 400, 350],
				lazyType: "none",
				parallax: {
					type: "scroll",
					origo: "enterpoint",
					speed: 400,
					levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 46, 47, 48, 49, 50, 55],
					type: "scroll",
				},
				shadow: 0,
				spinner: "off",
				stopLoop: "off",
				stopAfterLoops: -1,
				stopAtSlide: -1,
				shuffle: "off",
				autoHeight: "off",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false,
				}
			});
		}
	});