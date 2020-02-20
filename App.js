import React, { Component } from "react";
// import Icon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import { Container, Row, Col } from "reactstrap";

import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
  Picker,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Searchbar } from "react-native-paper";
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from "react-native-material-textfield";

class Inputs extends Component {
  state = {
    firstQuery: "",
    search: "",
    user: "",
    phone: ""
  };

  fieldRef = React.createRef();

  updateSearch = search => {
    this.setState({ search });
  };

  updateUser = user => {
    this.setState({ user: user });
  };

  onSubmit = () => {
    let { current: field } = this.fieldRef;
    console.log(field.value());
  };

  formatText = text => {
    return text.replace(/[^+\d]/g, "");
  };

  render() {
    const { firstQuery } = this.state;
    const { search } = this.state;
    let { phone } = this.state;

    return (
      <View style={styles.container}>
        {/* <Icon name="md-checkmark-circle" size={32} color="green" /> */}
        {/* <Icon name="md-add-circle" size={32} style={{color:'#0557B1'}} /> */}
        <ScrollView>
          <LinearGradient
            colors={["#004386", "#005FC2", "#0064CB"]}
            style={{
              width: "100%",
              height: "14%",
              alignItems: "center",
              borderRadius: 10
            }}
          >
            <Text style={styles.myState}> My Cart</Text>
            <Searchbar
              style={{
                width: "95%",
                height: "35%",
                alignItems: "center",
                borderRadius: 10,
                marginTop: 25
              }}
              placeholder="Search For Medicine..."
              inputContainerStyle="{{backgroundColor: 'white'}}"
              onChangeText={query => {
                this.setState({ firstQuery: query });
              }}
              value={firstQuery}
            />
          </LinearGradient>

          <LinearGradient
            colors={["#FFFFFF", "#FFFFFF", "#FFFFFF"]}
            style={{
              width: 410,
              height: 100,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10
            }}
          >
            <Text style={styles.data1}>
              Medicine 1{"         "}
              <Icon name="plus-circle" size={30} style={{ color: "#0557B1" }} />
              <Text>
                {"   "}5{"   "}
              </Text>
              <Icon
                name="minus-circle"
                size={32}
                style={{ color: "#0557B1" }}
              />
              <Text>
                {"    "}
                {"\u20B9"}330/-{" "}
              </Text>
            </Text>
          </LinearGradient>

          <LinearGradient
            colors={["#FFFFFF", "#FFFFFF", "#FFFFFF"]}
            style={{
              width: 410,
              height: 100,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 3
            }}
          >
            <Text style={styles.data1}>
              Medicine 2{"         "}
              <Icon name="plus-circle" size={30} style={{ color: "#0557B1" }} />
              <Text>
                {"   "}5{"   "}
              </Text>
              <Icon
                name="minus-circle"
                size={32}
                style={{ color: "#0557B1" }}
              />
              <Text>
                {"    "}
                {"\u20B9"}330/-{" "}
              </Text>
            </Text>
          </LinearGradient>

          <LinearGradient
            colors={["#FFFFFF", "#FFFFFF", "#FFFFFF"]}
            style={{
              width: 410,
              height: 140,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10
            }}
          >
            {/* <Text style={{flexDirection:'row'}}> */}
            <Text style={styles.text}></Text>
            <Text
              style={{
                color: "#469C76",
                fontSize: 22,
                position: "absolute",
                marginLeft: "55%",
                marginTop: "4%"
              }}
            >
              9% Off
            </Text>
            <Text
              style={{
                color: "#469C76",
                fontSize: 22,
                position: "absolute",
                marginLeft: "80%",
                marginTop: "4%"
              }}
            >
              {"\u20B9"}-30{" "}
              <Icon
                name="times-circle"
                size={26}
                style={{ color: "#0557B1" }}
              />
            </Text>

            <View style={{ marginLeft: "10%", marginRight: "38%" }}>
              <TextField
                style={{
                  flexDirection: "row",
                  borderColor: "#ff0000",
                  borderRadius: 1,
                  borderBottomColor: "grey"
                }}
                placeholder="Coupon Code"
                onSubmitEditing={this.onSubmit}
                ref={this.fieldRef}
              />
              <TouchableHighlight>
                <Text style={styles.newtext}></Text>
              </TouchableHighlight>
            </View>
          </LinearGradient>

          {/* <TouchableHighlight>
            <Text style={styles.text}>Button</Text>
          </TouchableHighlight> */}
          {/* title="Press me" onPress={() => Alert.alert('Button pressed')} /> */}
          <LinearGradient
            colors={["#FFFFFF", "#FFFFFF", "#FFFFFF"]}
            style={{
              width: 410,
              height: 130,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 6,
              marginBottom: 5
            }}
          >
            <Text style={styles.myStatez}>
              Total Amount(MRP){" "}
              <Text>
                {"                           "} {"\u20B9"}-330/-{" "}
              </Text>
            </Text>

            <Text style={styles.myStatez}>
              Coupon Discount{"                                 "}
              <Text style={styles.myData}> {"\u20B9"}-30/- </Text>
            </Text>

            <Text style={styles.myStatez}>
              Delivery Charges{" "}
              <Text>
                {" "}
                {"                                 "}
                {"\u20B9"}0/-{" "}
              </Text>
            </Text>

            {/* <Text style={styles.myStatez}>Coupon Discount</Text> */}
            {/* <Text style={styles.myStatez}>Delivery Charges</Text> */}
          </LinearGradient>

          {/* <TextField
            style={styles.textStyle}
            label="Add Instruction For Order"
            value={phone}
            onChangeText={phone => this.setState({ phone })}
          /> */}

          <View
            style={{
              width: "100%",
              borderRadius: 10,
              borderColor: "red",
              padding: 10
            }}
          >
            <TextField
              label="Add Instruction For Order"
              value={phone}
              onChangeText={phone => this.setState({ phone })}
            />
          </View>

          <LinearGradient
            colors={["#FFFFFF", "#FFFFFF", "#FFFFFF"]}
            style={{
              width: 410,
              height: 100,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 6,
              marginBottom: 15
            }}
          >
            {/* <Text style={styles.myStatez}>Medicine 2</Text> */}
          </LinearGradient>

          <LinearGradient
            colors={["red", "red"]}
            style={{
              width: "100%",
              height: 60
              // marginBottom: 10
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
                color: "white",
                marginTop: 10
              }}
            >
              <Icon name="square" size={25} style={{ color: "white" }} />
              {"      "}
              <Icon name="book" size={25} style={{ color: "yellow" }} />
              Express Delivery{"      "}
              <Icon
                name="question-circle"
                size={25}
                style={{ color: "white" }}
              />
            </Text>
          </LinearGradient>

          <LinearGradient
            colors={["#FFFFFF", "#FFFFFF", "#FFFFFF"]}
            style={{
              width: "95%",
              height: "12%",
              marginTop: "3%",
              marginLeft: "3%",
              marginBottom: "35%"
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "black",
                marginLeft:'10%'
              }}
            >
              Total Amount
            </Text>

            <Text
              style={{
                fontSize: 25,
                color: "black",
                marginLeft:'20%'
              }}
            >
               {"\u20B9"}30/-
            </Text>

            <Text
              style={{
                marginLeft: '10%',
                color: "#469C76",
                fontSize: 20
              }}
            >
               You Save {"\u20B9"}30
            </Text>

            <Text style={styles.textdata}></Text>


            {/* <Text style={styles.myData}> You Save {"\u20B9"}30</Text> */}
          </LinearGradient>
        </ScrollView>
      </View>
    );
  }
}

export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    // alignItems: 'center',
    backgroundColor: "#d3d3d3"
    // flexDirection: 'column',
  },
  text: {
    marginLeft: 10,
    marginTop: 10,
    textAlign: "center",
    padding: 5,
    width: 190,
    height: 45,
    borderColor: "black",
    backgroundColor: "#004482",
    borderRadius: 22,
    flexDirection: "row"
  },

  textdata: {
    marginLeft: '10%',
    marginTop: '10%',
    textAlign: "center",
    padding: 5,
    width: 190,
    height: 45,
    borderColor: "black",
    backgroundColor: "#004482",
    borderRadius: 22,
    flexDirection: "row"
  },

  newtext: {
    padding: 10,
    width: "50%",
    height: "45%",
    position: "absolute",
    backgroundColor: "#004482"
    // flexDirection: "row"
  },
  textStyle: {
    // position:"absolute",
    // alignItems:"center",
    // alignContent:"center",
    // justifyContent:"center",
    color: "#0557B1",
    borderBottomColor: "black",
    borderRadius: 1,
    fontSize: 25
  },

  myState: {
    margin: 0,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 40
  },
  myStatez: {
    marginLeft: 10,
    marginTop: 10,
    color: "black",
    fontSize: 20
  },
  data1: {
    marginLeft: 10,
    marginTop: 30,
    color: "black",
    fontSize: 26
  },
  myData: {
    // flexDirection: "row",
    // marginLeft: 20,
    marginLeft: 0,
    color: "#469C76",
    fontSize: 20
  },
  dataone: {
    flexDirection: "row",
    fontSize: 20,
    alignItems: "center"
  },
  myStates: {
    maxWidth: 10,
    maxHeight: 10,
    color: "black",
    fontSize: 20
  }
});
