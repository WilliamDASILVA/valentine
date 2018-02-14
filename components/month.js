import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Day from './month/day';


export default class Month extends React.Component {
  render() {

    const unread = this.props.unread > 0 ?
      <View>
        <Text style={styles.notificationText}>
          Vous avez {this.props.unread} messages non lus
        </Text>
      </View> : null;

    const days = Array.from(new Array(28)).map((v, k) => {
      return <Day
        navigation={this.props.navigation}
        key={k}
        day={k + 1}
      />;
    });

    return (
      <View style={styles.container}>
        <View style={styles.monthHeader}>
          <Text style={styles.monthTitle}>
            {this.props.month}
          </Text>
          {unread}
        </View>
        <View style={styles.monthContent}>
          {days}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  monthHeader: {
    marginBottom: 16,
  },
  monthTitle: {
    fontSize: 24,
    color: '#333333',
  },
  monthContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  notificationText: {
    fontSize: 16,
    color: '#9B51E0',
  },
});