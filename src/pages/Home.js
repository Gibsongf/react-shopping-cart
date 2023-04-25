import Gameplay from "../imgs/gameplay.gif";
import Gameplay2 from "../imgs/gameplay2.gif";
import "../styles/Home.css";
export const Home = () => {
	return (
		<div className="home-content">
			<img src={Gameplay} alt="" className="gameplay-right" />
			<img src={Gameplay2} alt="" className="gameplay-left" />
			<div className="about">
				<p>
					{" "}
					<strong>Dead Cells</strong> is a rogue-like,
					Castlevania-inspired action-platformer from Motion Twin. It
					was released on the 7th of August 2018.
				</p>
				<br />
				<p>
					{" "}
					It will allow you to explore a sprawling, ever-changing
					castle… assuming you're able to fight your way past its
					keepers. To beat the game, you'll have to master 2D
					souls-like combat with the ever-present threat of permadeath
					looming. No checkpoints. Kill, die, learn, repeat.
				</p>
				<br />
				<p>
					<strong>RogueVania</strong>: The progressive exploration of
					an interconnected world, with the replayability of a
					rogue-like and the adrenaline pumping threat of permadeath.
				</p>
				<br />
				<p>
					<strong>2D Souls-like Action</strong>: Tough but fair
					combat, more than fifty weapons and spells with unique
					gameplay, and of course, the emergency panic roll to get you
					out of trouble. Nonlinear progression: Sewers, Ossuary or
					Ramparts? Once unlocked, special permanent abilities allow
					you to access new paths to reach your objective. Opt for the
					path that suits your current build, your play style or just
					your mood.
				</p>
				<br />
				<p>
					<strong>Exploration</strong>: Secret rooms, hidden passages,
					charming landscapes. Take a moment to stroll the towers and
					breathe in that fresh sea mist infused air...
				</p>
			</div>
		</div>
	);
};
