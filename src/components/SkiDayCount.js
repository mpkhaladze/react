import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

const decimalToPercent = (decimal) => {
	return ((decimal) * 100 + "%")
}
	
const calcGoalProgress = (total, goal) => {
	return decimalToPercent(total/goal);
}

export const SkiDayCount = ({total=133, powder=22, backcountry=120, goal=200}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
					<Calendar />
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
					<SnowFlake />
				<span> days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
					<Terrain />
				<span> hiking days</span>
			</div>
			<div>
				<span>{calcGoalProgress(total, goal)}</span>
				<span>Goal Progress</span>
			</div>
		</div>
)

SkiDayCount.propTypes = {
  total: PropTypes.Number.isRequired,
  powder: PropTypes.Number.isRequired,
  backcountry: PropTypes.Number.isRequired,
}
