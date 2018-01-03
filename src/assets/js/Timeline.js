var timeline;
var options;
var groups;
var combinedItems;
var items;

function getTimeline(){
  return timeline;
}

function getOptions(){
  return options;
}

function toggleView(isNetoMode) {
  if(isNetoMode) {
    timeline.setData({
      groups: groups,
      items: combinedItems
    });
  } else {
    timeline.setData({
      groups: null,
      items: items
    });
    timeline.setGroups(null);
  }

  timeline.redraw();
}

function move (percentage) {
  var range = timeline.getWindow()
  var interval = range.end - range.start

  timeline.setWindow(
    range.start.valueOf() - interval * percentage,
    range.end.valueOf()   - interval * percentage,
    {animation: false}
  )
}
function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.opacity = "0";
  popup.style.visibility = "hidden";
}
function initTimeline(callback) {
    // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');
  var toggleView = document.getElementById('toggleView');

  function log (a){console.log(a);return a}
  var brutos = [{"name":"Licensed Rubber Cheese","start":"2017-12-30T18:42:20.575Z","end":"2017-12-31T04:29:32.409Z","description":"mint green","netosArray":[{"name":"Fresh","start":"2017-12-30T18:46:20.575Z","end":"2017-12-30T18:50:20.575Z","description":"Vatu pixel invoice"},{"name":"Unbranded","start":"2017-12-30T18:59:20.575Z","end":"2017-12-30T19:10:20.575Z","description":"deposit port"},{"name":"Tenge","start":"2017-12-30T19:19:20.575Z","end":"2017-12-30T19:30:20.575Z","description":"e-commerce Incredible"},{"name":"front-end","start":"2017-12-30T19:38:20.575Z","end":"2017-12-30T19:47:20.575Z","description":"salmon Corporate mesh"},{"name":"Tasty","start":"2017-12-30T19:54:20.575Z","end":"2017-12-30T20:09:20.575Z","description":"Antigua and Barbuda"},{"name":"clear-thinking","start":"2017-12-30T20:14:20.575Z","end":"2017-12-30T20:29:20.575Z","description":"index XML"},{"name":"Iceland","start":"2017-12-30T20:30:20.575Z","end":"2017-12-30T20:40:20.575Z","description":"Mountains drive Generic"},{"name":"Central","start":"2017-12-30T20:44:20.575Z","end":"2017-12-30T20:46:20.575Z","description":"Berkshire granular Italy"},{"name":"calculating","start":"2017-12-30T20:49:20.575Z","end":"2017-12-30T21:00:20.575Z","description":"optical Unbranded Global"},{"name":"front-end","start":"2017-12-30T21:04:20.575Z","end":"2017-12-30T21:19:20.575Z","description":"withdrawal program Cape Verde"},{"name":"tan","start":"2017-12-30T21:25:20.575Z","end":"2017-12-30T21:29:20.575Z","description":"backing up"},{"name":"Configuration","start":"2017-12-30T21:30:20.575Z","end":"2017-12-30T21:43:20.575Z","description":"Accountability"},{"name":"back up","start":"2017-12-30T21:53:20.575Z","end":"2017-12-30T22:12:20.575Z","description":"Sleek Plastic Pizza"},{"name":"Tasty","start":"2017-12-30T22:13:20.575Z","end":"2017-12-30T22:20:20.575Z","description":"SDD Road"},{"name":"IB","start":"2017-12-30T22:30:20.575Z","end":"2017-12-30T22:40:20.575Z","description":"Gorgeous"},{"name":"Street","start":"2017-12-30T22:47:20.575Z","end":"2017-12-30T22:52:20.575Z","description":"Greece"},{"name":"Credit Card Account","start":"2017-12-30T23:00:20.575Z","end":"2017-12-30T23:11:20.575Z","description":"Mozambique navigating Web"},{"name":"Burundi Franc","start":"2017-12-30T23:16:20.575Z","end":"2017-12-30T23:17:20.575Z","description":"feed Circle"},{"name":"Public-key","start":"2017-12-30T23:24:20.575Z","end":"2017-12-30T23:44:20.575Z","description":"copy Berkshire Enterprise-wide"},{"name":"compress","start":"2017-12-30T23:47:20.575Z","end":"2017-12-30T23:52:20.575Z","description":"Fully-configurable"},{"name":"teal","start":"2017-12-31T00:00:20.575Z","end":"2017-12-31T00:20:20.575Z","description":"pink quantify"},{"name":"Cook Islands","start":"2017-12-31T00:21:20.575Z","end":"2017-12-31T00:23:20.575Z","description":"Malagasy Ariary"},{"name":"Realigned","start":"2017-12-31T00:29:20.575Z","end":"2017-12-31T00:43:20.575Z","description":"Borders Brand"},{"name":"brand","start":"2017-12-31T00:46:20.575Z","end":"2017-12-31T00:50:20.575Z","description":"Borders e-tailers"},{"name":"Concrete","start":"2017-12-31T00:56:20.575Z","end":"2017-12-31T01:11:20.575Z","description":"RSS Valleys Designer"},{"name":"Sleek","start":"2017-12-31T01:15:20.575Z","end":"2017-12-31T01:29:20.575Z","description":"Gloves"},{"name":"Wisconsin","start":"2017-12-31T01:35:20.575Z","end":"2017-12-31T01:45:20.575Z","description":"Avon Automotive"},{"name":"relationships","start":"2017-12-31T01:47:20.575Z","end":"2017-12-31T02:01:20.575Z","description":"teal contingency deposit"},{"name":"grey","start":"2017-12-31T02:03:20.575Z","end":"2017-12-31T02:16:20.575Z","description":"Communications"},{"name":"Sleek","start":"2017-12-31T02:21:20.575Z","end":"2017-12-31T02:27:20.575Z","description":"Gateway Designer Grocery"}]},{"name":"Rubber","start":"2017-12-30T14:37:36.553Z","end":"2017-12-31T01:03:30.003Z","description":"Steel moratorium Berkshire","netosArray":[{"name":"auxiliary","start":"2017-12-30T14:43:36.553Z","end":"2017-12-30T14:57:36.553Z","description":"SMS Bike"},{"name":"Planner","start":"2017-12-30T15:02:36.553Z","end":"2017-12-30T15:18:36.553Z","description":"District"},{"name":"dynamic","start":"2017-12-30T15:20:36.553Z","end":"2017-12-30T15:31:36.553Z","description":"Virtual Small Plastic Shoes Dominican Peso"},{"name":"Personal Loan Account","start":"2017-12-30T15:34:36.553Z","end":"2017-12-30T15:40:36.553Z","description":"PNG Ergonomic Developer"},{"name":"Personal Loan Account","start":"2017-12-30T15:42:36.553Z","end":"2017-12-30T15:49:36.553Z","description":"Soft radical Borders"},{"name":"National","start":"2017-12-30T15:59:36.553Z","end":"2017-12-30T16:13:36.553Z","description":"Handcrafted Corporate withdrawal"},{"name":"experiences","start":"2017-12-30T16:23:36.553Z","end":"2017-12-30T16:39:36.553Z","description":"silver e-commerce"},{"name":"application","start":"2017-12-30T16:47:36.553Z","end":"2017-12-30T16:55:36.553Z","description":"Devolved"},{"name":"transmitting","start":"2017-12-30T16:58:36.553Z","end":"2017-12-30T17:12:36.553Z","description":"secondary Books Direct"},{"name":"digital","start":"2017-12-30T17:13:36.553Z","end":"2017-12-30T17:20:36.553Z","description":"deliver"},{"name":"Unbranded Wooden Towels","start":"2017-12-30T17:28:36.553Z","end":"2017-12-30T17:39:36.553Z","description":"Handcrafted Concrete EXE"},{"name":"Illinois","start":"2017-12-30T17:43:36.553Z","end":"2017-12-30T18:02:36.553Z","description":"calculating synergize  Quality"},{"name":"generate","start":"2017-12-30T18:06:36.553Z","end":"2017-12-30T18:22:36.553Z","description":"Underpass"},{"name":"virtual","start":"2017-12-30T18:32:36.553Z","end":"2017-12-30T18:47:36.553Z","description":"implement Checking Account Grocery"},{"name":"Port","start":"2017-12-30T18:52:36.553Z","end":"2017-12-30T19:09:36.553Z","description":"Cliffs"},{"name":"Home Loan Account","start":"2017-12-30T19:16:36.553Z","end":"2017-12-30T19:35:36.553Z","description":"Ergonomic Soft Car"},{"name":"Vatu","start":"2017-12-30T19:42:36.553Z","end":"2017-12-30T19:56:36.553Z","description":"approach Small Metal Gloves"},{"name":"Riel","start":"2017-12-30T20:06:36.553Z","end":"2017-12-30T20:07:36.553Z","description":"Grocery"},{"name":"Rapid","start":"2017-12-30T20:10:36.553Z","end":"2017-12-30T20:28:36.553Z","description":"pink Auto Loan Account THX"},{"name":"withdrawal","start":"2017-12-30T20:32:36.553Z","end":"2017-12-30T20:41:36.553Z","description":"Distributed hardware morph"},{"name":"green","start":"2017-12-30T20:49:36.553Z","end":"2017-12-30T21:08:36.553Z","description":"Licensed"},{"name":"e-enable","start":"2017-12-30T21:09:36.553Z","end":"2017-12-30T21:10:36.553Z","description":"scalable Soft"},{"name":"District","start":"2017-12-30T21:16:36.553Z","end":"2017-12-30T21:25:36.553Z","description":"Run"},{"name":"Kentucky","start":"2017-12-30T21:28:36.553Z","end":"2017-12-30T21:33:36.553Z","description":"Cotton"},{"name":"disintermediate","start":"2017-12-30T21:41:36.553Z","end":"2017-12-30T21:58:36.553Z","description":"Direct Auto Loan Account navigate"},{"name":"Intelligent Wooden Mouse","start":"2017-12-30T22:06:36.553Z","end":"2017-12-30T22:13:36.553Z","description":"Liaison solid state Administrator"},{"name":"Cheese","start":"2017-12-30T22:20:36.553Z","end":"2017-12-30T22:40:36.553Z","description":"Automated compressing"},{"name":"Haven","start":"2017-12-30T22:48:36.553Z","end":"2017-12-30T23:08:36.553Z","description":"Guyana Dollar"},{"name":"PNG","start":"2017-12-30T23:11:36.553Z","end":"2017-12-30T23:25:36.553Z","description":"systems encryption"},{"name":"circuit","start":"2017-12-30T23:32:36.553Z","end":"2017-12-30T23:41:36.553Z","description":"Uruguay reboot"}]},{"name":"Product","start":"2017-12-30T17:07:50.334Z","end":"2017-12-31T02:46:05.973Z","description":"Minnesota Communications withdrawal","netosArray":[{"name":"Quality","start":"2017-12-30T17:15:50.334Z","end":"2017-12-30T17:24:50.334Z","description":"brand Sports"},{"name":"Australia","start":"2017-12-30T17:26:50.334Z","end":"2017-12-30T17:43:50.334Z","description":"Dominican Peso"},{"name":"deposit","start":"2017-12-30T17:44:50.334Z","end":"2017-12-30T17:51:50.334Z","description":"lime"},{"name":"Metal","start":"2017-12-30T17:54:50.334Z","end":"2017-12-30T18:05:50.334Z","description":"Money Market Account"},{"name":"synthesize","start":"2017-12-30T18:09:50.334Z","end":"2017-12-30T18:12:50.334Z","description":"exuding"},{"name":"payment","start":"2017-12-30T18:20:50.334Z","end":"2017-12-30T18:31:50.334Z","description":"Table"},{"name":"Credit Card Account","start":"2017-12-30T18:34:50.334Z","end":"2017-12-30T18:40:50.334Z","description":"South Carolina withdrawal"},{"name":"optical","start":"2017-12-30T18:46:50.334Z","end":"2017-12-30T18:53:50.334Z","description":"Buckinghamshire Union"},{"name":"Ball","start":"2017-12-30T18:56:50.334Z","end":"2017-12-30T19:01:50.334Z","description":"revolutionize Consultant intangible"},{"name":"transparent","start":"2017-12-30T19:10:50.334Z","end":"2017-12-30T19:23:50.334Z","description":"CSS"},{"name":"Berkshire","start":"2017-12-30T19:31:50.334Z","end":"2017-12-30T19:49:50.334Z","description":"Shoes North Korean Won Chief"},{"name":"back-end","start":"2017-12-30T19:55:50.334Z","end":"2017-12-30T20:03:50.334Z","description":"silver"},{"name":"Towels","start":"2017-12-30T20:04:50.334Z","end":"2017-12-30T20:11:50.334Z","description":"Uganda Shilling platforms"},{"name":"Small","start":"2017-12-30T20:21:50.334Z","end":"2017-12-30T20:24:50.334Z","description":"Avon"},{"name":"e-commerce","start":"2017-12-30T20:32:50.334Z","end":"2017-12-30T20:47:50.334Z","description":"out-of-the-box Implementation program"},{"name":"Practical","start":"2017-12-30T20:48:50.334Z","end":"2017-12-30T20:51:50.334Z","description":"Boliviano Mvdol Steel Directives"},{"name":"partnerships","start":"2017-12-30T21:00:50.334Z","end":"2017-12-30T21:10:50.334Z","description":"deposit"},{"name":"Checking Account","start":"2017-12-30T21:12:50.334Z","end":"2017-12-30T21:21:50.334Z","description":"yellow system"},{"name":"cross-platform","start":"2017-12-30T21:22:50.334Z","end":"2017-12-30T21:41:50.334Z","description":"copying"},{"name":"Fords","start":"2017-12-30T21:44:50.334Z","end":"2017-12-30T21:45:50.334Z","description":"Tasty"},{"name":"Home Loan Account","start":"2017-12-30T21:54:50.334Z","end":"2017-12-30T22:06:50.334Z","description":"asynchronous HDD implement"},{"name":"Synergized","start":"2017-12-30T22:09:50.334Z","end":"2017-12-30T22:20:50.334Z","description":"Specialist"},{"name":"Borders","start":"2017-12-30T22:23:50.334Z","end":"2017-12-30T22:33:50.334Z","description":"Keys Brooks"},{"name":"Open-source","start":"2017-12-30T22:39:50.334Z","end":"2017-12-30T22:45:50.334Z","description":"bottom-line violet"},{"name":"Awesome","start":"2017-12-30T22:47:50.334Z","end":"2017-12-30T22:58:50.334Z","description":"Research Identity Gorgeous Frozen Bacon"},{"name":"Morocco","start":"2017-12-30T23:00:50.334Z","end":"2017-12-30T23:10:50.334Z","description":"Home Loan Account"},{"name":"Georgia","start":"2017-12-30T23:17:50.334Z","end":"2017-12-30T23:31:50.334Z","description":"Home Credit Card Account"},{"name":"applications","start":"2017-12-30T23:35:50.334Z","end":"2017-12-30T23:41:50.334Z","description":"deposit"},{"name":"Usability","start":"2017-12-30T23:44:50.334Z","end":"2017-12-30T23:47:50.334Z","description":"paradigm purple"},{"name":"Kids","start":"2017-12-30T23:54:50.334Z","end":"2017-12-31T00:00:50.334Z","description":"optimal Keyboard"}]},{"name":"haptic","start":"2017-12-30T20:26:17.316Z","end":"2017-12-31T08:42:34.674Z","description":"Saint Helena","netosArray":[{"name":"Soft","start":"2017-12-30T20:35:17.316Z","end":"2017-12-30T20:53:17.316Z","description":"Fall connecting Unbranded Wooden Gloves"},{"name":"optical","start":"2017-12-30T20:55:17.316Z","end":"2017-12-30T21:10:17.316Z","description":"Direct USB"},{"name":"Corporate","start":"2017-12-30T21:18:17.316Z","end":"2017-12-30T21:21:17.316Z","description":"Tasty International Factors"},{"name":"Refined Soft Shoes","start":"2017-12-30T21:24:17.316Z","end":"2017-12-30T21:42:17.316Z","description":"Arkansas"},{"name":"bypass","start":"2017-12-30T21:44:17.316Z","end":"2017-12-30T21:56:17.316Z","description":"Tactics Field"},{"name":"Small","start":"2017-12-30T22:02:17.316Z","end":"2017-12-30T22:22:17.316Z","description":"Internal Lead"},{"name":"Outdoors","start":"2017-12-30T22:28:17.316Z","end":"2017-12-30T22:32:17.316Z","description":"reinvent Refined Roads"},{"name":"Analyst","start":"2017-12-30T22:40:17.316Z","end":"2017-12-30T22:44:17.316Z","description":"embrace transmitting"},{"name":"Personal Loan Account","start":"2017-12-30T22:46:17.316Z","end":"2017-12-30T23:00:17.316Z","description":"overriding Sports"},{"name":"Designer","start":"2017-12-30T23:03:17.316Z","end":"2017-12-30T23:17:17.316Z","description":"payment"},{"name":"HTTP","start":"2017-12-30T23:23:17.316Z","end":"2017-12-30T23:37:17.316Z","description":"Health"},{"name":"human-resource","start":"2017-12-30T23:38:17.316Z","end":"2017-12-30T23:43:17.316Z","description":"repurpose Row Ergonomic"},{"name":"interfaces","start":"2017-12-30T23:46:17.316Z","end":"2017-12-30T23:51:17.316Z","description":"morph"},{"name":"Checking Account","start":"2017-12-31T00:00:17.316Z","end":"2017-12-31T00:16:17.316Z","description":"online Gibraltar Pound parse"},{"name":"Integration","start":"2017-12-31T00:19:17.316Z","end":"2017-12-31T00:35:17.316Z","description":"magnetic"},{"name":"Senior","start":"2017-12-31T00:45:17.316Z","end":"2017-12-31T00:50:17.316Z","description":"Handcrafted zero tolerance Svalbard & Jan Mayen Islands"},{"name":"withdrawal","start":"2017-12-31T00:59:17.316Z","end":"2017-12-31T01:16:17.316Z","description":"calculate Clothing"},{"name":"deliverables","start":"2017-12-31T01:18:17.316Z","end":"2017-12-31T01:26:17.316Z","description":"ADP sensor communities"},{"name":"Buckinghamshire","start":"2017-12-31T01:32:17.316Z","end":"2017-12-31T01:43:17.316Z","description":"vortals"},{"name":"invoice","start":"2017-12-31T01:45:17.316Z","end":"2017-12-31T02:05:17.316Z","description":"Communications"},{"name":"Buckinghamshire","start":"2017-12-31T02:08:17.316Z","end":"2017-12-31T02:28:17.316Z","description":"encoding"},{"name":"visionary","start":"2017-12-31T02:30:17.316Z","end":"2017-12-31T02:48:17.316Z","description":"Rustic Fresh Baby"},{"name":"olive","start":"2017-12-31T02:57:17.316Z","end":"2017-12-31T03:02:17.316Z","description":"payment  dynamic"},{"name":"scalable","start":"2017-12-31T03:10:17.316Z","end":"2017-12-31T03:28:17.316Z","description":"users"},{"name":"overriding","start":"2017-12-31T03:33:17.316Z","end":"2017-12-31T03:39:17.316Z","description":"leading edge"},{"name":"Awesome Concrete Cheese","start":"2017-12-31T03:49:17.316Z","end":"2017-12-31T04:08:17.316Z","description":"Tools efficient one-to-one"},{"name":"Keyboard","start":"2017-12-31T04:18:17.316Z","end":"2017-12-31T04:21:17.316Z","description":"copying auxiliary Dynamic"},{"name":"convergence","start":"2017-12-31T04:25:17.316Z","end":"2017-12-31T04:39:17.316Z","description":"Mongolia Chicken"},{"name":"silver","start":"2017-12-31T04:46:17.316Z","end":"2017-12-31T05:04:17.316Z","description":"Massachusetts infrastructure"},{"name":"Shirt","start":"2017-12-31T05:12:17.316Z","end":"2017-12-31T05:25:17.316Z","description":"1080p internet solution"}]},{"name":"Switchable","start":"2017-12-31T06:01:19.497Z","end":"2017-12-31T13:40:36.075Z","description":"Regional Ergonomic Steel Towels withdrawal","netosArray":[{"name":"extensible","start":"2017-12-31T06:09:19.497Z","end":"2017-12-31T06:25:19.497Z","description":"Forest Electronics fault-tolerant"},{"name":"Buckinghamshire","start":"2017-12-31T06:31:19.497Z","end":"2017-12-31T06:44:19.497Z","description":"RAM"},{"name":"withdrawal","start":"2017-12-31T06:51:19.497Z","end":"2017-12-31T07:09:19.497Z","description":"mobile withdrawal Home"},{"name":"application","start":"2017-12-31T07:14:19.497Z","end":"2017-12-31T07:16:19.497Z","description":"Ferry Computers Towels"},{"name":"Group","start":"2017-12-31T07:22:19.497Z","end":"2017-12-31T07:38:19.497Z","description":"tan protocol"},{"name":"Savings Account","start":"2017-12-31T07:46:19.497Z","end":"2017-12-31T07:49:19.497Z","description":"SMS"},{"name":"Division","start":"2017-12-31T07:50:19.497Z","end":"2017-12-31T07:56:19.497Z","description":"mobile schemas Togo"},{"name":"Metal","start":"2017-12-31T08:00:19.497Z","end":"2017-12-31T08:15:19.497Z","description":"Hawaii"},{"name":"Unbranded","start":"2017-12-31T08:24:19.497Z","end":"2017-12-31T08:36:19.497Z","description":"Bike e-business"},{"name":"Saint Kitts and Nevis","start":"2017-12-31T08:44:19.497Z","end":"2017-12-31T08:48:19.497Z","description":"Tennessee Handcrafted Nicaragua"},{"name":"Dynamic","start":"2017-12-31T08:49:19.497Z","end":"2017-12-31T09:07:19.497Z","description":"panel Yuan Renminbi ivory"},{"name":"infrastructures","start":"2017-12-31T09:11:19.497Z","end":"2017-12-31T09:15:19.497Z","description":"connect Credit Card Account"},{"name":"extranet","start":"2017-12-31T09:16:19.497Z","end":"2017-12-31T09:22:19.497Z","description":"Granite withdrawal Industrial"},{"name":"Fiji Dollar","start":"2017-12-31T09:28:19.497Z","end":"2017-12-31T09:32:19.497Z","description":"hard drive haptic incremental"},{"name":"Tasty","start":"2017-12-31T09:36:19.497Z","end":"2017-12-31T09:49:19.497Z","description":"Gloves AGP Small"},{"name":"solid state","start":"2017-12-31T09:59:19.497Z","end":"2017-12-31T10:15:19.497Z","description":"Valley Cloned"},{"name":"primary","start":"2017-12-31T10:16:19.497Z","end":"2017-12-31T10:26:19.497Z","description":"Berkshire Bacon deposit"},{"name":"SSL","start":"2017-12-31T10:34:19.497Z","end":"2017-12-31T10:45:19.497Z","description":"Pizza iterate"},{"name":"deposit","start":"2017-12-31T10:51:19.497Z","end":"2017-12-31T10:53:19.497Z","description":"District"},{"name":"Multi-tiered","start":"2017-12-31T10:58:19.497Z","end":"2017-12-31T11:10:19.497Z","description":"Vista"},{"name":"invoice","start":"2017-12-31T11:13:19.497Z","end":"2017-12-31T11:29:19.497Z","description":"Handcrafted Metal Gloves"},{"name":"Investment Account","start":"2017-12-31T11:37:19.497Z","end":"2017-12-31T11:48:19.497Z","description":"Music haptic transmit"},{"name":"Enhanced","start":"2017-12-31T11:56:19.497Z","end":"2017-12-31T12:04:19.497Z","description":"Computers drive Multi-layered"},{"name":"benchmark","start":"2017-12-31T12:12:19.497Z","end":"2017-12-31T12:21:19.497Z","description":"bricks-and-clicks"},{"name":"innovative","start":"2017-12-31T12:27:19.497Z","end":"2017-12-31T12:43:19.497Z","description":"Baby synthesize"},{"name":"Handmade Wooden Chips","start":"2017-12-31T12:45:19.497Z","end":"2017-12-31T12:50:19.497Z","description":"redundant web-readiness black"},{"name":"Locks","start":"2017-12-31T12:55:19.497Z","end":"2017-12-31T12:56:19.497Z","description":"next generation"},{"name":"forecast","start":"2017-12-31T13:06:19.497Z","end":"2017-12-31T13:17:19.497Z","description":"Rustic Soft Ball leading-edge users"},{"name":"Brand","start":"2017-12-31T13:18:19.497Z","end":"2017-12-31T13:28:19.497Z","description":"calculating Self-enabling"},{"name":"silver","start":"2017-12-31T13:32:19.497Z","end":"2017-12-31T13:40:19.497Z","description":"Sports Bedfordshire"}]}]

  function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
      } : null;
  }

  // Return the color of the text according to the brightness of the given color
  function getTextColor(rgb) {
    var result = ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;

    if (result < 125) {
      return "#fff";
    } else {
      return "333";
    }
  }

  var colors = ['#0074D9','#001f3f','#FF851B','#85144b','#e5e5e5']

  // Create a DataSet (allows two way data-binding)
  items = new vis.DataSet()
  groups = new vis.DataSet()
  combinedItems = new vis.DataSet()

  var minDate = vis.moment(new Date(8640000000000000))
  var maxDate = vis.moment(new Date(-8640000000000000))
  var lowestDuration = Number.MAX_SAFE_INTEGER
  for (let index = 0; index < brutos.length; index++) {
    var bruto = brutos[index]
    groups.add({
      id :     index,
      content: bruto.name,
      start:   bruto.start,
      end:     bruto.end
    })
    combinedItems.add({
      content: bruto.name,
      start:   bruto.start,
      end:     bruto.end,
      style: 'background-color: '+colors[index]+'; color: ' + getTextColor(hexToRgb(colors[index])) + ';',
      group:   index,
      description: bruto.description,
      align: 'left'
    })

    if (minDate.diff(bruto.start) > 0)
      minDate = vis.moment(bruto.start)
    if (maxDate.diff(bruto.end) < 0)
      maxDate = vis.moment(bruto.end)

    bruto.netosArray.forEach(neto => {
      if (lowestDuration > vis.moment(neto.end).diff(neto.start, 'ms'))
        lowestDuration = vis.moment(neto.end).diff(neto.start, 'ms')
      items.add({
        content: neto.name + ' (' + bruto.name + ')',
        start:   neto.start,
        end:     neto.end,
        style: 'background-color: '+colors[index]+'; color: ' + getTextColor(hexToRgb(colors[index])) + ';',
        align: 'left',
        description: neto.description,
      })
      combinedItems.add({
        content: neto.name,
        start:   neto.start,
        end:     neto.end,
        group:   index,
        style: 'background-color: '+colors[index]+'; color: ' + getTextColor(hexToRgb(colors[index])) + ';',
        description: bruto.description,
        align: 'left',
        description: neto.description,
      })
    })
  }

  function customOrder (a, b) {
    return vis.moment(a.start).diff(vis.moment(b.start),'ms');
  }

  // Configuration for the Timeline
  options = {
    order: customOrder,
    selectable: false,
    zoomMax: maxDate.diff(minDate,'ms'),
    zoomMin: lowestDuration,
    margin: {item: 2},
    selectable: false,
    groupOrder: 'content',  // groupOrder can be a property name or a sorting function
    align: 'left',
    zoomable: true
  };
  // set starting values
  options.min = vis.moment(minDate).subtract(options.zoomMax / 2, 'ms')
  options.max = vis.moment(maxDate).add(options.zoomMax / 2, 'ms')
  // Create a Timeline
  timeline = new vis.Timeline(container, items, options);
  timeline.on('rangechange',function(properties){
    closePopup()
    var start = vis.moment(properties.start)
    var end = vis.moment(properties.end)
    var diff = end.diff(start, 'ms')
    options.min = vis.moment(minDate).subtract(diff / 2, 'ms')
    options.max = vis.moment(maxDate).add(diff / 2, 'ms')
    timeline.setOptions(options)
  })
  // var tog = 1
  // toggleView.onclick = function(){
  //   if (tog){
  //     timeline.setData({
  //       groups: groups,
  //       items: combinedItems
  //     })
  //   }
  //   else {
  //     timeline.setData({
  //       groups: null,
  //       items: items
  //     })
  //     timeline.setGroups(null)
  //   }
  //   timeline.redraw()
  //   tog = !tog
  // }

  

  function openPopup(properties) {
    // If the clicked area is an item
    if (properties.item) {
      var item;
      if (tog)
        item = items.get(properties.item);
      else
        item = combinedItems.get(properties.item);

      // Setting the popup heading
      document.getElementsByClassName('popup-heading')[0].textContent = item.content;

      // Setting the popup content
      var content = document.getElementsByClassName('popup-content')[0];
      content.innerHTML="<h2>Description: </h2> " + item.description;

      // Setting the position of the popup in the needed point and displaying it
      var element = document.getElementById('popup-container');
      var parent = document.getElementById('popup');
      parent.style.top = properties.pageY + "px";
      parent.style.left = (properties.pageX - (element.clientWidth / 2)) + "px";
      parent.style.opacity = "1";
      parent.style.visibility = "visible";
    }
  }

  timeline.on("doubleClick", openPopup);
}
