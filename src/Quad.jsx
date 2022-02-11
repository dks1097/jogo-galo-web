import React from "react";
import Cruz from "./Cruz";
import { View, Pressable } from "react-native";

const Quad = (props) => {
	const { quad, onPress } = props;
	return (
		<Pressable
			onPress={() => onPress()}
			style={{
				width: 100,
				height: 100,
				flex: 1,
				borderColor: "chocolate",
				borderWidth: 5,
				borderRadius: 20,
			}}
		>
			{quad === "o" && (
				<View
					style={{
						flex: 1,
						borderRadius: 50,
						alignItems: "center",
						justifyContent: "center",
						margin: 10,
						borderWidth: 10,
						borderColor: "#dac1a8",
					}}
				/>
			)}
			{quad === "x" && <Cruz />}
		</Pressable>
	);
};

export default Quad;
