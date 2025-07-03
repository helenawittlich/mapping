var config = {
    style: 'mapbox://styles/helena-wittlich/cmcnjidkz00gk01s0hzjdarnk',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiaGVsZW5hLXdpdHRsaWNoIiwiYSI6ImNtYnprcW5hYzEyaTUya3BzcTNuYmxlMWUifQ.81DTWlxDkwWts1GF0wGHyA',
    // turns marker on and off 
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'This would be your title',
    subtitle: 'Here goes the description',
    byline: 'By a I.M. Amapper',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'New York',
            image: './assets/san-fran.jpeg',
            description: 'xxxxxxxx',
            location: {
                center: [-74.17264, 40.75172],
                zoom: 9.0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: ' subwayLines Turn On',
            image: './assets/washington-dc.jpg',
            description: 'xxxxxxxx',
            location: {
                center: [-74.17264, 40.75172],
                zoom: 9.0,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'Subways',
                opacity: 1,
                duration: 500
                }
            ],
            onChapterExit: [
                            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'not15 Turns On',
            image: './assets/geneva.jpg',
            description: 'xxxxxxxx',
            location: {
                center: [-74.17264, 40.75172],
                zoom: 9.0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'no15',
                opacity: .4,
                duration: 500
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Zoom to South Brooklyn',
            image: './assets/buenos-aires.jpg',
            description: 'xxxxxxxx',
            location: {
                center: [-73.96449, 40.62855],
                zoom: 11.0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Zoom to South Brooklyn',
            image: './assets/buenos-aires.jpg',
            description: 'xxxxxxxx',
            location: {
                center: [-74.17264, 40.75172],
                zoom: 9.0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
