/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {}

app.onDeviceReady = function() {
    app.initBroadcastBtn();
    app.initScanBtn();
};

app.initialize = function() {
    document.addEventListener('deviceready', app.onDeviceReady, false);
};

app.initBroadcastBtn = function() {
    document.getElementById("btn").addEventListener("click", function(){
        var uuid = '67839326-9777-4f62-aab8-5652bc90bcc3';
        var identifier = 'Beacon';
        var major = 1;
        var minor = 1;
        var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

        // The Delegate is optional
        var delegate = new cordova.plugins.locationManager.Delegate();

        // Event when advertising starts (there may be a short delay after the request)
        // The property 'region' provides details of the broadcasting Beacon
        delegate.peripheralManagerDidStartAdvertising = function(pluginResult) {
            alert('peripheralManagerDidStartAdvertising: '+ JSON.stringify(pluginResult.region));
        };

        // Event when bluetooth transmission state changes
        // If 'state' is not set to BluetoothManagerStatePoweredOn when advertising it cannot start
        delegate.peripheralManagerDidUpdateState = function(pluginResult) {
            alert('peripheralManagerDidUpdateState: '+ pluginResult.state);
        };

        cordova.plugins.locationManager.setDelegate(delegate);

        // Verify the platform supports transmitting as a beacon
        cordova.plugins.locationManager.isAdvertisingAvailable()
            .then(function(isSupported){
                if (isSupported) {
                    cordova.plugins.locationManager.isAdvertising()
                        .then(function (isAdvertising){
                            if(isAdvertising){
                                cordova.plugins.locationManager.stopAdvertising()
                                    .then(alert)
                                    .fail(alert)
                                    .done();
                                document.getElementById("btn").innerHTML = "Starta broadcast";
                            } else {
                                cordova.plugins.locationManager.startAdvertising(beaconRegion)
                                    .then(function(result){
                                        alert(result + "\nName: " + beaconRegion.identifier + "\nUUID: " + beaconRegion.uuid +
                                            "\nMajor: " + beaconRegion.major + "\nMinor: " + beaconRegion.minor);
                                    })
                                    .fail(alert)
                                    .done();
                                document.getElementById("btn").innerHTML = "Stoppa broadcast";
                            }
                        })
                        .fail(alert)
                        .done();
                } else {
                    alert("Advertising not supported. If bluetooth is off turn it on.");
                }
            })
            .fail(alert)
            .done();
    }, false);
};

app.beaconFound = false;
app.isScanning = false;

app.initScanBtn = function(){
    toggleScan = function() {
        if(app.isScanning){
            evothings.ble.stopScan();
            app.isScanning = false;
            alert("Scanning stoppad");
            document.getElementById("btn2").innerHTML = "Starta scanning";
        }
        else{
            evothings.ble.startScan(
                app.deviceFound,
                app.scanError);
            app.isScanning = true;
            alert("Scanning startad");
            document.getElementById("btn2").innerHTML = "Stoppa scanning";
        }
    }
    var elem = document.getElementById("btn2");
    elem.addEventListener("click", toggleScan, false);
};
    
app.deviceFound = function(deviceInfo){
    if (!app.beaconFound && deviceInfo.rssi < 0 && deviceInfo.rssi > -50 /*&& deviceInfo.name == "Beacon"*/){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.google.se/robots.txt', true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', true);
        xhr.send(null);

        xhr.onreadystatechange = function () {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    alert(xhr.responseText); // 'This is the returned text.'
                } else {
                    console.log('Error: ' + xhr.status + ' ' + xhr.statusText); // An error occurred during the request.
                }
            }
        };

        app.beaconFound = true;
    }
};

app.scanError = function(errorCode){
    // Report error.
    alert('Beacon Scan Error: ' + errorCode);
}

app.initialize();