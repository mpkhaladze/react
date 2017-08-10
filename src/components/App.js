import { Component } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSkiDays: [
                {
                    resort: "Safari Mountain",
                    date: new Date("2/8/2017"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Baja California",
                    date: new Date("6/10/2017"),
                    powder: false,
                    backcountry: true
                },
                {
                    resort: "Victoria Waterfall",
                    date: new Date("11/8/2017"),
                    powder: false,
                    backcountry: false
                }
            ]
        }
    }

    countDays(filter) {
        this.state.allSkiDays.filter(function(day) {
            if (filter) {
                return day[filter]
            }else{
                return day
            }
        }).length
    }

    render() {
        return (
            <div className="app">
                <SkiDayList days={this.state.allSkiDays}/>
                <SkiDayCount total={this.countDays()}
                             powder={this.countDays("powder")}
                             backcountry={this.countDays("backcountry")} />
            </div>
        )
    }   
}