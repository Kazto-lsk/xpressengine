import XE from 'xe'
import 'xe-common/griper' // @FIXME https://github.com/xpressengine/xpressengine/issues/765
import moment from 'moment'
import 'xe-transition' // @FIXME https://github.com/xpressengine/xpressengine/issues/765
import 'xe-modal' // @FIXME https://github.com/xpressengine/xpressengine/issues/765
import 'xe-dropdown' // @FIXME https://github.com/xpressengine/xpressengine/issues/765
import 'xe-tooltip' // @FIXME https://github.com/xpressengine/xpressengine/issues/765
import DynamicLoadManager from 'xe-dynamicLoadManager' // @FIXME https://github.com/xpressengine/xpressengine/issues/765
import $ from 'jquery'

/**
 * @module Component
 * */
var Component = (function (exports) {
  return {
    /**
     * 시간 설정을 바인딩한다.
     * @memberof module:Component
     * */
    timeago: function () {
      $('[data-xe-timeago]').trigger('boot.xe.timeago')
    },
    /**
     * DOM에 지정된 selector가 있을 경우 컴포넌트를 바인딩한다.
     * @memberof module:Component
     * */
    boot: function () {
      this.timeago()
      $('[data-toggle=xe-dropdown]').trigger('boot.xe.dropdown')
      $('[data-toggle=xe-modal]').trigger('boot.xe.modal')
      $('[data-toggle=xe-tooltip]').trigger('boot.xe.tooltip')
      $('[data-toggle=dropdown]').trigger('boot.dropdown')
    }
  }
})(window)

DynamicLoadManager.cssLoad('/assets/core/xe-ui-component/xe-ui-component.css')

$(function () {
  /*
   * @Component Timeago
   *
   * <span data-xe-timeago="{timestmap|ISO8601}">2016-04-04 07:05:44</span>
   * <span data-xe-timeago="{timestmap|ISO8601}" title="2016-04-04 07:05:44" />3 Hours ago</span>
   */

  moment.locale(XE.getLocale())

  $(document).on('boot.xe.timeago', '[data-xe-timeago]', function () {
    let $this = $(this)
    if ($this.data().xeTimeagoCalled === true) return false

    let dataDate = $this.data('xe-timeago')
    let isTimestamp = (parseInt(dataDate) == dataDate)

    if (isTimestamp) {
      dataDate = moment.unix(dataDate)
    } else {
      dataDate = moment(dataDate)
    }

    $this.text(dataDate.fromNow())
    $this.data().xeTimeagoCalled = true
  })

  $(document).on('boot.xe.dropdown', '[data-toggle=xe-dropdown]', function () {
    $(this).xeDropdown()
  })

  $(document).on('boot.xe.modal', '[data-toggle=xe-modal]', function () {
  })

  $(document).on('boot.xe.tooltip', '[data-toggle=xe-tooltip]', function () {
    $(this).xeTooltip()
  })

  Component.boot()
})

// // xeModal =========================================================
// $.fn.xeModal = function (options) {
//   var _this = this;
//
//   _this.xeModal(options);
//   DynamicLoadManager.cssLoad('/assets/core/xe-ui-component/xe-ui-component.css');
// };
//
// // xeDropdown ======================================================
// $.fn.xeDropdown = function (options) {
//   var _this = this;
//
//   _this.xeDropdown(options);
//   DynamicLoadManager.cssLoad('/assets/core/xe-ui-component/xe-ui-component.css');
// };
//
// // xeTooltip =======================================================
// $.fn.xeTooltip = function (options) {
//   var _this = this;
//
//   _this.xeTooltip(options);
//   DynamicLoadManager.cssLoad('/assets/core/xe-ui-component/xe-ui-component.css');
// };

export default Component
