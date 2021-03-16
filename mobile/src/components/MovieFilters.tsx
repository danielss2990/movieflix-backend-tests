import React from "react";
import { Modal, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { catalog } from "../styles";

const MovieFilters: React.FC = () => {
    return (
        <Modal
            
            animationType="fade"
            transparent={true}
            presentationStyle="overFullScreen"

        >
            <View style={catalog.containerModal}>
                <View style={catalog.contentModal}>
                    <ScrollView >
                        {
                            
                        }
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default MovieFilters;