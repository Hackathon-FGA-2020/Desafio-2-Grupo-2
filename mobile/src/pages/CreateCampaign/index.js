import { AntDesign, Entypo } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

export default function EditCampaign() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="left" size={30} color="#1671A7" />
        </TouchableOpacity>
        <Text style={styles.title}> Criar Campanha</Text>
      </View>

      <Text style={styles.instruction}>Basta preencher os campos</Text>

      <View style={styles.form}>
        <Text style={styles.subTitles}>Nome da campanha</Text>
        <TextInput style={styles.input} />

        <Text style={styles.subTitles}>Do que vocês precisam</Text>
        <TextInput style={styles.input} />

        <Text style={styles.subTitles}>Descrição</Text>
        <TextInput style={styles.input} />

        <Text style={styles.subTitles}>Imagem</Text>
        <TouchableOpacity style={styles.button}>
          <Entypo name="upload" size={24} color="black" />
          <Text style={styles.text}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.create}>
          <Text style={styles.text2}>Criar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
