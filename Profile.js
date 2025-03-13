import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Profile = ({ prof, num }) => {
    return (
        <View style={styles.profileContianer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri:prof.avatar }} resizeMode="cover" style={{ width: "100%", height: "100%", borderRadius: 50 }} />
            </View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "rgb(223, 224, 224)" }}> {prof.first_name} {prof.last_name}</Text>
            <View style={styles.textContainer}>
                <View style={styles.row}>
                    
                    <Text style={styles.label}><Ionicons name="id-card" size={18} color="rgb(10, 9, 9)" />ID: </Text>
                    <Text style={styles.text}>{prof.id}</Text>
                </View>
                <View style={styles.row}>
                   
                    <Text style={[styles.label]}><Ionicons name="key" size={18} color="rgb(10, 9, 9)" />UID:</Text>
                    <Text style={[styles.text,{ width: "80%",textAlign:"left"}]}>{prof.uid}</Text>
                </View>
                <View style={styles.row}>
                    
                    <Text style={[styles.label,{}]}><Ionicons name="lock-closed" size={18} color="rgb(10, 9, 9)" />Password: </Text>
                    <Text style={styles.text}>{prof.password}</Text>
                </View>
                <View style={styles.row}>
                    
                    <Text style={styles.label}><Ionicons name="person" size={18} color="rgb(10, 9, 9)" />First Name: </Text>
                    <Text style={styles.text}>{prof.first_name}</Text>
                </View>
                <View style={styles.row}>
                    
                    <Text style={styles.label}><Ionicons name="person" size={18} color="rgb(10, 9, 9)" />Last Name: </Text>
                    <Text style={styles.text}>{prof.last_name}</Text>
                </View>
                <View style={styles.row}>
                   
                    <Text style={styles.label}> <Ionicons name="person" size={18} color="rgb(10, 9, 9)" />Username: </Text>
                    <Text style={styles.text}>{prof.username}</Text>
                </View>
                <View style={styles.row}>
                   
                    <Text style={styles.label}> <Ionicons name="mail" size={18} color="rgb(10, 9, 9)" />Email: </Text>
                    <Text style={[styles.text,{ width: "70%",textAlign:"right"}]}>{prof.email}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    profileContianer: {
        width: "90%",
        borderRadius: 20,
        paddingTop: 10,
        height: "85%",
        backgroundColor: "rgb(53, 53, 53)",
        boxShadow: "0px 0px 2px 2px rgb(211, 209, 209)",
        alignItems: "center",
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 4,
        borderRadius: 100,
        height: 100,
        width: 100,
        borderColor: "rgb(162, 161, 161)",
        backgroundColor: "rgb(249, 244, 244)",
        boxShadow: "0px 0px 2px 1px rgb(162, 160, 160)"
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 4,
        backgroundColor: 'rgb(168, 164, 164)',
        borderRadius: 5,
        boxShadow: "0px 0px 1px 2px rgb(110, 108, 108)",
        alignItems:'center',
        justifyContent: 'space-between',
        height:50,
        width:"100%",

    },
    label: {
        fontSize: 16,
        color: "rgb(10, 9, 9)",
        fontWeight: 'bold',
        display:"flex",
        flexDirection:"row",
        textAlign:"center",
        alignItems:"center",
    },
    text: {
        fontSize: 15,
        color: "#333333",
        fontWeight: 'bold',
        width: "60%",
        textAlign: 'right',
        display: 'flex',
        flexWrap: 'wrap',
    },
    textContainer: {
        marginTop: 10,
        width: "80%",
        fontSize: 20,
        display:"flex",
        flexDirection:"column",
        rowGap:8
    },
});
