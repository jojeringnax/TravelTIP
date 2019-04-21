import React from "react";
import { compose, withProps, withHandlers, withState, lifecycle } from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";
import {Link} from "react-router-dom";
import './App.css';




const MapConst = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBvVoT7eYE-TriltLJEbAPivTfjZ7O1S4w",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div id='mapping' />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withState('center', 'onCenterChanged', { lat: 23.18, lng: 71.58 }),
    withState('mapProp', 'onMapMounted'),
    withHandlers(() => {
        let refs = {
            map: undefined,
        };

        return {
            onMapMounted: ({ onMapMounted }) => ref => {
                refs.map = ref;
                onMapMounted(ref)
            },
            onCenterChanged: ({ onCenterChanged }) => () => {
                let latlng = refs.map.getCenter();
                let center = {lat: latlng.lat(), lng: latlng.lng()};
                onCenterChanged(center)
            }
        }
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentWillMount() {
            this.setState({
                onDivClick: marker => {
                    this.setState({
                        center: { lat: marker.x_pos, lng: marker.y_pos }
                    })
                },
                onDblClick: (event) => {
                    console.log('---state',this.state);
                    document.getElementById('pointCreateForm').classList.remove('hide');

                    const Marker = new google.maps.Marker(event.latLng);
                    let markers = this.props.markers;
                    let newID = markers[markers.length - 1].id + 1;
                    this.props.markers.push({
                        id: newID,
                        name: 'No name',
                        description: 'faf',
                        x_pos: event.latLng.lat(),
                        y_pos: event.latLng.lng()
                    });
                    // this.props.newMarkers = {
                    //     id: newID,
                    //     name: 'No name',
                    //     description: 'faf',
                    //     x_pos: event.latLng.lat(),
                    //     y_pos: event.latLng.lng()
                    // };
                    //console.log(this.props.markers[newID-1].name = '123123');
                    this.setState({addMark: true});
                }

            })
        }
    })
)((props) =>

    <GoogleMap
        center={props.center}
        ref={props.onMapMounted}
        mapProp={props.mapProp}
        onCenterChanged={props.onCenterChanged}
        defaultZoom={8}
        onDblClick={props.onDblClick}
        defaultOptions={{disableDoubleClickZoom: true}}
    >
    <div style={{position: 'absolute', zIndex: 100, right: 0, top: '0', left: 'auto'}}>
        <div className='card' id='coordUsers'>
            <div className='card-header'>All points</div>
            <div className='card-body' id="points" style={{overflow: 'scroll'}}>
                <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                    Create new point
                </Link>
                <ul className='list-group list-group-flush'>
                    {props.markers.map(marker => (
                        <div key={marker.id}>
                            <div
                                id={marker.id + '_point'}
                                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                onClick={() => props.onDivClick(marker) }
                            >
                                {marker.name}
                                <div><span className='badge badge-primary badge-pill'>{marker.x_pos}</span>
                                    <span className='badge badge-primary badge-pill'>{marker.y_pos}</span></div>
                            </div>

                        <MarkerWithLabel
                            position={{ lat: marker.x_pos, lng: marker.y_pos }}
                            labelAnchor={new google.maps.Point(marker.x_pos, marker.y_pos)}
                            labelStyle={{backgroundColor: "yellow", fontSize: "10px", padding: "2px"}}
                            onClick={ () => {
                                let div = document.getElementById(marker.id + '_point');
                                document.getElementById('points').scrollTop = div.offsetTop - div.offsetHeight;
                                div.classList.add('lol');
                            }}
                        >
                            <div>{ marker.name }</div>
                        </MarkerWithLabel>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    </div>

    </GoogleMap>
);

class Map extends React.PureComponent {
    render() {
        return (
            <MapConst
                markers={this.props.markers}
                onMarkerClick={this.props.handleMarkerClick}/>
        )
    }
}

export default Map
