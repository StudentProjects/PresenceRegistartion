cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.unarin.cordova.beacon.underscorejs",
        "file": "plugins/com.unarin.cordova.beacon/www/lib/underscore-min-1.6.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.Q",
        "file": "plugins/com.unarin.cordova.beacon/www/lib/q.min.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.LocationManager",
        "file": "plugins/com.unarin.cordova.beacon/www/LocationManager.js",
        "pluginId": "com.unarin.cordova.beacon",
        "merges": [
            "cordova.plugins"
        ]
    },
    {
        "id": "com.unarin.cordova.beacon.Delegate",
        "file": "plugins/com.unarin.cordova.beacon/www/Delegate.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.Region",
        "file": "plugins/com.unarin.cordova.beacon/www/model/Region.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.Regions",
        "file": "plugins/com.unarin.cordova.beacon/www/Regions.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.CircularRegion",
        "file": "plugins/com.unarin.cordova.beacon/www/model/CircularRegion.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.BeaconRegion",
        "file": "plugins/com.unarin.cordova.beacon/www/model/BeaconRegion.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-ble.BLE",
        "file": "plugins/cordova-plugin-ble/ble.js",
        "pluginId": "cordova-plugin-ble",
        "clobbers": [
            "evothings.ble"
        ]
    },
    {
        "id": "cordova-plugin-uniquedeviceid.UniqueDeviceID",
        "file": "plugins/cordova-plugin-uniquedeviceid/www/uniqueid.js",
        "pluginId": "cordova-plugin-uniquedeviceid",
        "merges": [
            "window.plugins.uniqueDeviceID"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "com.unarin.cordova.beacon": "3.4.1",
    "cordova-plugin-dialogs": "1.3.3",
    "cordova-plugin-ble": "2.0.1",
    "cordova-plugin-uniquedeviceid": "1.3.2"
};
// BOTTOM OF METADATA
});