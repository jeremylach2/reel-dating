import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, PanResponder, ImageBackground} from "react-native";
//https://codepen.io/tnmaysharma/pen/KzLGOw

const Forgot_Password = props => {
	const [email, setEmail] = React.useState("");
	const [pass1, setPass1] = React.useState("");
	const [pass2, setPass2] = React.useState("");
	//probably would want something that checks pass1 == pass2.
	//also something that would check in database to see if email address has
	//	an account attached to it.

	return (
		<View style={page.container}>
			<ImageBackground
				style={page.background}
				source={require("../assets/images/background-login.jpg")} 
				>
				<Image
					style={page.logo}
					source={require("../assets/images/logo.png")}
				/>
				<View style={page.box}>
					<View style={page.form}>
						<Text style={page.title}>Reset Password</Text>
						<View style={page.form_content}>
							<TextInput
								style={page.forgotPassword}
								onChangeText={text => setEmail(text)}
								value={email}
								placeholder="Email Address"
								placeholderTextColor="black"
							/>
							<TextInput
								style={page.forgotPassword}
								onChangeText={text => setPass1(text)}
								value={pass1}
								placeholder="New Password"
								placeholderTextColor="black"
							/>
							<TextInput
								style={page.forgotPassword}
								onChangeText={text => setPass2(text)}
								value={pass2}
								placeholder="Retype Password"
								placeholderTextColor="black"
							/>
							<TouchableOpacity onPress>  
								<View style={page.reset_button}>
									<Text style={page.reset_text}>RESET</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};


const page = StyleSheet.create({
	background: {
		flex: 1,
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",

	},
	logo: {
		resizeMode: "contain",
		height: 150,
		width: "100%",
	},
	container: {
		flex: 1,
		flexDirection: "row",
	},
	box: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		alignContent: "center",
		height: 400,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		color: "white",
		fontSize: 22,
	},
	form: {
		backgroundColor: "transparent",
		borderColor: "white",
		borderStyle: "solid",
		borderWidth: 2,
		borderRadius: 8,
		padding: "5%",
		paddingBottom: "1%",
		marginTop: "1%",
		width: "70%",
		flexWrap: "wrap",
		flexDirection: "column",
		justifyContent: "center",
	},
	form_content: {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "column",
		width: "100%",
	},
	forgotPassword: {
		backgroundColor: "#B0C4DE",
		borderRadius: 4,
		padding: "3%",
		marginBottom: "2%",
		width: "100%",
	},
	reset_button: {
		backgroundColor: "#FFFFFF",
		borderRadius: 4,
		padding: "4%",
		marginBottom: "4%",
		width: "100%",
	},
	reset_text: {
		color: "black",
		textAlign: "center",
	},
	return: {
		textAlign: 'center',
		color: 'white',
		opacity: 0.6
	},
});

export default Forgot_Password;