import React from "react";

import {View, Text, TextInput} from "react-native";

import { COLORS } from "../constants/colors";

const SupaMenuHomePage = () => {
    <View>
        <View>
            <Text>Supa<span style={styles.header}>Menu</span></Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
   header: {
       color: COLORS.ORANGE
   }
})