import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const TableRow =  (props) => {

    console.log(props.index+1)


  return (
    <Row
    key={props.index}
    data= {props.lineItem}
    widthArr={props.widthArr}
    style={[styles.row, props.index%2 && {backgroundColor: 'grey'}]}
    borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}
    textStyle={styles.text}
  />
  );
}

const styles = StyleSheet.create({
    row: {
      backgroundColor: 'white'
    },
    text: {
      fontSize: 20,
    }
  });

export default observer(TableRow)