import React, { Component } from 'react';
import data from './data';
import './style.css';

export default class ContentComponent extends Component {

    render() {

        return (
            <div className="App">
                <h3>Sample List</h3>
                <div className="container">
                    {
                        data.map((eachRow, index) => {
                        return (
                            <div key={index} className="each-row">
                                {
                                    eachRow.details.map((eachDiv, ind) => {
                                        return (
                                            <div className="each-div">
                                                <div key={ind} className="each-block">
                                                    {
                                                        eachDiv.segments.map((eachBlock, i) => {
                                                            return (
                                                                <div key={i} style={{ width: `${eachBlock.width}%`, backgroundColor: eachBlock.color, padding: '5px' }}>{eachBlock.width}</div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className="content">{eachDiv.content}</div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }

}
