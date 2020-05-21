import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

export default function DonateFood() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="left" size={30} color="#1671A7" />
        </TouchableOpacity>
        <Text style={styles.title}> Doar alimento</Text>
      </View>

      <Text style={styles.instruction}>Basta preencher o campo</Text>

      <View style={styles.form}>
        <Text style={styles.subTitles}>Qual alimento deseja doar? </Text>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.create}>
          <Text style={styles.text2}>Criar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
