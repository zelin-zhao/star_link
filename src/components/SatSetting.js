import React, {Component} from 'react';
import {InputNumber, Button} from 'antd';

class SatSetting extends Component {
    constructor(){
        super();
        this.state = {
            observerLat: 0,
            observerLong: 0,
            observerAlt: 0,
        }
    }

    onChangeLong = (value) => {
        this.setState({
            observerLong: value
        })
    }

    onChangeLat = (value) => {
        this.setState({
            observerLat: value
        })
    }

    onChangeAlt = (value) => {
        this.setState({
            observerAlt: value
        })
    }

    render() {
        return (
            <div className="sat-setting">
                <div className="loc-setting">
                    <p className="setting-label">From Location</p>
                    <div className="setting-list two-item-col">
                        <div className="list-item">
                            <label>Longitude: </label>
                            <InputNumber
                                min={-180}
                                max={180}
                                defaultValue={0}
                                style={{margin: "0 2px"}}
                                onChange={this.onChangeLong}
                            />
                        </div>

                        <div className="list-item right-item">
                            <label>Latitude: </label>
                            <InputNumber
                                placeholder="latitude"
                                min={-90}
                                max={90}
                                defaultValue={0}
                                style={{margin: "0 2px"}}
                                onChange={this.onChangeLat}
                            />
                        </div>
                    </div>
                    <div className="setting-list">
                        <div className="list-item">
                            <label>Elevation(meters): </label>
                            <InputNumber
                                min={0}
                                max={90}
                                defaultValue={0}
                                style={{margin: "0 2px"}}
                                onChange={this.onChangeAlt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SatSetting;