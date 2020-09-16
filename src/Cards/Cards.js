import React,{Component} from 'react'
import Card from './CardUi'
import img1 from '../img/defender.jpg'
import img2 from '../img/ford gt 4.jpg'
import img3 from '../img/gt40.jpg'



export default class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp: ["9","17","-2"],
            day: ["TUESDAY","WEDNESDAY","THURSDAY"],
            date: "2-0-2-0/0-4/0-9",
            id: ["one","two","three"]
        };
      }

    render() {
        return (
            <div className="container-fluid d-flex.justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card check={this.state.id[0]} image={img1} title={this.state.temp[0]} content={this.state.day[0]} date={this.state.date}/>
                    </div>
                    <div className="col-md-4">
                        <Card check={this.state.id[1]} image={img2} title={this.state.temp[1]} content={this.state.day[1]} date={this.state.date}/>
                    </div>
                    <div className="col-md-4">
                        <Card check={this.state.id[2]} image={img3} title={this.state.temp[2]} content={this.state.day[2]} date={this.state.date}/>
                    </div>
                </div>
            </div>
        )
    }
}
