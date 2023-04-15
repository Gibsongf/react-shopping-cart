import Gameplay from '../imgs/gameplay.gif'
import Gameplay2 from '../imgs/gameplay2.gif'


export const Home = () => {
	
	return (
		<div className="home-content">
			<div className="gameplays">
				<img src={Gameplay} alt="" className="gameplay" />
				<img src={Gameplay2} alt="" className="gameplay" />
			</div>
				<h4> Dead Cells is a rogue-like, Castlevania-inspired
				action-platformer from Motion Twin.
				It was released on the 7th of August 2018.</h4>
				<br /> 
				<h4> It will allow you to explore a sprawling,
				ever-changing castle… assuming you're able to fight your way
				past its keepers. To beat the game, you'll have to master 2D
				souls-like combat with the ever-present threat of permadeath
				looming. No checkpoints. Kill, die, learn, repeat.
				</h4>
				<br />
				<h4>
				RogueVania: The progressive exploration of an interconnected world, with the
				replayability of a rogue-like and the adrenaline pumping threat
				of permadeath. 
				</h4>
				<br />
				<h4>
				2D Souls-like Action: Tough but fair combat, more
				than fifty weapons and spells with unique gameplay, and of
				course, the emergency panic roll to get you out of trouble.
				Nonlinear progression: Sewers, Ossuary or Ramparts? Once
				unlocked, special permanent abilities allow you to access new
				paths to reach your objective. Opt for the path that suits your
				current build, your play style or just your mood.
				</h4>
				<br />
				<h4> 
				Exploration:
				Secret rooms, hidden passages, charming landscapes. Take a
				moment to stroll the towers and breathe in that fresh sea mist
				infused air...
				</h4>
		</div>
	);
};
