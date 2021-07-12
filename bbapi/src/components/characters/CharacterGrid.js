import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ isLoading, items }) => {
	return (
		<div>
			{isLoading ? (
				<h1>Loading</h1>
			) : (
				<section className="cards">
					{items.map((item) => (
						<CharacterItem key={item.char_id} item={item} />
					))}
				</section>
			)}
		</div>
	);
};

export default CharacterGrid;
