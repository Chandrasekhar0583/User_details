import React,{useRef} from "react";
import { StyleSheet, View, Text ,Animated} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { useState, useEffect } from "react";
import { Profile } from "./Profile";
import axios from 'axios';

export const Mainpage = () => {
    const [data, setData] = useState(null);
    const [usernum, setUsernum] = useState(0);
    
    const Previous = () => {
        // if (usernum === 0){
        //     setUsernum(74);}
        setUsernum((usernum - 1+80)%80);
    }
    const Next = () => {
        setUsernum((usernum + 1)%80);
    }
    useEffect(() => {
        const fetchData = async () => {
            const users = await axios.get('https://random-data-api.com/api/users/random_user?size=80');
            setData(users.data);
        };
        fetchData();
    }, []);
    return (
        <SafeAreaView  style={styles.container}>
                {data ? <Profile prof={data[usernum]} num={usernum} /> : <Text style={{color:"white"}}>Loading...</Text>}

                <View style={styles.ButtonContainer}>
                    <Button icon="arrow-left-bold" rippleColor="rgb(93, 93, 96)" style={styles.ButtonContainer.buttons} borderRadius="none" textColor="black" mode="contained"  onPress={Previous}  buttonColor="white"  >Prev</Button>
                    <Text style={{ fontSize: 20, color: "white" }}>{usernum + 1}</Text>
                    <Button icon="arrow-right-bold" rippleColor="rgb(93, 93, 96)" style={styles.ButtonContainer.buttons} mode="contained"  textColor="black" onPress={Next} buttonColor="white">Next</Button>
                </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#121212"
    },
    ButtonContainer: {
        marginTop: 20,
        height: 40,
        color: "rgb(249, 250, 250)",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        buttons: {
            borderRadius: 10,
            textColor: "black",
            buttonColor: "white"
        }
    }
});