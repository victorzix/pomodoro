import PomodoroTimer from '../src/components/Pomodoro-timer';
function App() {
	return (
		<div className="container">
			<PomodoroTimer
				pomodoroTime={5}
				shortRestTime={5}
				longRestTime={5}
				cycles={4}
			/>
		</div>
	);
}

export default App;
