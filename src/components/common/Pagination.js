import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

class Pagination extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    const { data } = this.props;
    // console.log(this.props);
    // this.setState({
    //   data
    // });
  };

  renderNumbers = () => {
    const { data, onSelect, selectedIndex } = this.props;

    // console.log(data);
    let nos = data.map((data, index) => {
      return (
        <TouchableWithoutFeedback
          key={index + "jdjdjfjfjjjsj" + index}
          onPress={() => onSelect(index)}
        >
          <View
            style={
              selectedIndex === index
                ? {
                    backgroundColor: "orange",
                    height: 22,
                    width: 22,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "orange",
                    borderWidth: 2
                  }
                : {
                    backgroundColor: "#fff",
                    height: 22,
                    width: 22,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#ddd",
                    borderWidth: 1
                  }
            }
          >
            <Text
              style={
                selectedIndex === index
                  ? { color: "#fff", textAlign: "center" }
                  : {
                      color: "#000",
                      textAlign: "center"
                    }
              }
            >
              {index + 1}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
    });

    return nos;
  };

  render() {
    const { selectedIndex, onForward, onBackward } = this.props;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => onBackward(selectedIndex)}>
          <View style={styles.iconContainer}>
            <Ionicons color="orange" name="ios-arrow-back" size={25} />
          </View>
        </TouchableWithoutFeedback>
        {this.renderNumbers()}
        <TouchableWithoutFeedback onPress={() => onForward(selectedIndex)}>
          <View style={styles.iconContainer}>
            <Ionicons color="orange" name="ios-arrow-forward" size={25} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default Pagination;
