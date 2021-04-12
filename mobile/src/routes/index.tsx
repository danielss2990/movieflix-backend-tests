import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { BtnNavbar, CatalogMovie, DetailsMovie, Home, Login } from '../pages';
import { colors, nav } from "../styles";
import back from "../assets/back.png";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();


const HeaderText: React.FC = () => <Text style={nav.textTitle}>MovieFlix</Text>

const HeaderText2: React.FC = () => <Text style={nav.textTitle2}>MovieFlix</Text>

const BackButton: React.FC = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} />
        </TouchableOpacity>
    )

}


const Routes: React.FC = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                headerStyle: {
                    backgroundColor: colors.orange,
                },
                headerLeft: () => <HeaderText />,
                headerRight: () => <BtnNavbar />

            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
                options={({ }) => ({
                    headerLeft: () => (
                        <View style={{ alignItems: "center", flexDirection: "row", paddingLeft: 20 }}>
                            <BackButton />
                            <HeaderText2/>
                        </View>

                    ),
                })}
                name="Login" component={Login} />
            <Stack.Screen name="CatalogMovie" component={CatalogMovie} />
            <Stack.Screen
                options={({ }) => ({
                    headerLeft: () => (
                        <View style={{ alignItems: "center", flexDirection: "row", paddingLeft: 20 }}>
                            <BackButton />
                            <HeaderText2 />
                        </View>

                    ),
                })}

                name="DetailsMovie" component={DetailsMovie} />
        </Stack.Navigator>
    )
}

export default Routes;