import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Table, TableWrapper, Row } from "react-native-table-component";
//import _ from "lodash";
import Pagination from "../components/Pagination";

class TableScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Head", "Head2", "Head3", "Head4", "Head5"],
      widthArr: [40, 70, 60, 70, 60],
      tableData: [],
      chunkedArray: [],
      selectedIndex: 0,
      selectedArray: []
    };
  }

  componentDidMount() {
    const state = this.state;
    let tableData = [];
    for (let i = 0; i < 66; i += 1) {
      const rowData = [];
      for (let j = 0; j < 6; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    let chunkedArray = _.chunk(tableData, 10);

    this.setState({
      tableData: tableData,
      chunkedArray,
      selectedArray: chunkedArray[0]
    });
  }

  onSelect = index => {
    const { chunkedArray } = this.state;
    this.setState({
      selectedArray: chunkedArray[index],
      selectedIndex: index
    });
  };

  onForward = index => {
    const { chunkedArray } = this.state;
    let length = chunkedArray.length;

    if (index <= length && index + 1 !== length) {
      this.setState({
        selectedArray: chunkedArray[index + 1],
        selectedIndex: index + 1
      });
    }
  };

  onBackward = index => {
    const { chunkedArray, selectedIndex } = this.state;
    let length = chunkedArray.length;

    if (index <= length && index >= 1) {
      this.setState({
        selectedArray: chunkedArray[index - 1],
        selectedIndex: index - 1
      });
    }
  };

  render() {
    const state = this.state;
    const {
      tableData,
      chunkedArray,
      selectedArray,
      selectedIndex
    } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={{ flex: 1 }}>
            <Table borderStyle={{ borderColor: "#C1C0B9" }}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              style={styles.dataWrapper}
            >
              <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                {selectedArray.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={state.widthArr}
                    style={[
                      styles.row,
                      index % 2 && { backgroundColor: "#F7F6E7" }
                    ]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
              <Pagination
                selectedIndex={selectedIndex}
                onSelect={this.onSelect}
                onBackward={this.onBackward}
                onForward={this.onForward}
                selectedData={selectedArray}
                data={chunkedArray}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff"
  },
  header: {
    height: 50,
    backgroundColor: "#537791"
  },
  text: {
    textAlign: "center",
    fontWeight: "100"
  },
  dataWrapper: { marginTop: -1 },
  row: {
    height: 40,
    backgroundColor: "#E7E6E1"
  }
});

export default TableScreen;
