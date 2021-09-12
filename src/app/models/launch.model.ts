export interface Launch {
    id: string;
    name: string;
    details?: string;
    flight_number: number;
    rocket?: string;
    success?: boolean;
    upcoming?: boolean;
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: DatePrecision;
}

enum DatePrecision {
    hours,
    minutes,
    seconds,
    month,
    year
}
/*

"fairings": {
    "reused": null,
        "recovery_attempt": null,
            "recovered": null,
                "ships": []
},
"links": {
    "patch": {
        "small": "https://imgur.com/BrW201S.png",
            "large": "https://imgur.com/573IfGk.png"
    },
    "reddit": {
        "campaign": "https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/",
            "launch": null,
                "media": null,
                    "recovery": "https://www.reddit.com/r/spacex/comments/k2ts1q/rspacex_fleet_updates_discussion_thread/"
    },
    "flickr": {
        "small": [],
            "original": []
    },
    "presskit": null,
        "webcast": null,
            "youtube_id": null,
                "article": null,
                    "wikipedia": "https://en.wikipedia.org/wiki/Starlink"
},
"net": false,
"window": null,
"failures": [],
"crew": [],
"ships": [
    "5ea6ed30080df4000697c913"
],
"capsules": [],
    "payloads": [
        "60e3bf3373359e1e20335c3c"
    ],
"launchpad": "5e9e4502f509092b78566f87",
"cores": [
        {
            "core": "5e9e28a5f3591833b13b2659",
            "flight": 10,
            "gridfins": true,
            "legs": true,
            "reused": true,
            "landing_attempt": true,
            "landing_success": null,
            "landing_type": "ASDS",
            "landpad": "5e9e3032383ecb6bb234e7ca"
        }
    ],
"tbd": false,
"launch_library_id": "6b9f9fe6-7f94-498b-a664-7c9e42dbe76d",



"fairings": null,
"links": {
"patch": {
"small": "https://i.imgur.com/ZBUSrcD.png",
"large": "https://i.imgur.com/yPv13SR.png"
},
"reddit": {
"campaign": "https://www.reddit.com/r/spacex/comments/p67i27/crs23_launch_campaign_thread/",
"launch": "https://www.reddit.com/r/spacex/comments/pcj0ao/rspacex_crs23_launch_docking_discussion_updates/",
"media": null,
"recovery": null
},
"flickr": {
"small": [],
"original": [
"https://live.staticflickr.com/65535/51411435986_82d7088b61_o.jpg",
"https://live.staticflickr.com/65535/51411702583_fe67991413_o.jpg",
"https://live.staticflickr.com/65535/51411702573_de10cdbc06_o.jpg",
"https://live.staticflickr.com/65535/51411435116_ac7b3cc3d1_o.jpg"
]
},
"presskit": null,
"webcast": "https://youtu.be/x-KiDqxAMU0",
"youtube_id": "x-KiDqxAMU0",
"article": null,
"wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-23"
},
"static_fire_date_utc": "2021-08-26T02:49:00.000Z",
"static_fire_date_unix": 1629946140,
"net": false,
"window": 0,
"rocket": "5e9d0d95eda69973a809d1ec",
"success": true,
"failures": [],
"details": "SpaceX's 23rd ISS resupply mission on behalf of NASA, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. Cargo includes several science experiments. The booster for this mission is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
"crew": [],
"ships": [
"5ea6ed2d080df4000697c904"
],
"capsules": [],
"payloads": [
"5fe3c4f2b3467846b3242193"
],
"launchpad": "5e9e4502f509094188566f88",
"cores": [
{
"core": "5f57c53d0622a6330279009f",
"flight": 4,
"gridfins": true,
"legs": true,
"reused": true,
"landing_attempt": true,
"landing_success": true,
"landing_type": "ASDS",
"landpad": "5e9e3033383ecb075134e7cd"
}
],
"auto_update": true,
"tbd": false,*/