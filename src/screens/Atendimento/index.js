import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Atendimento({ navigation }) {
  return (
    <View style={styles.background}>
      <ScrollView style={styles.container}>
        <Image source={require('../../assets/img/LogoPequena.png')} />
        <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/img/Voltar.png')} />
        </TouchableOpacity>
        <Text style={styles.titulo}>Registro do Atendimento</Text>
        <View style={styles.containerAtendimento}>
          <View style={styles.indicadorAtendimento}>
            <Text style={styles.dataAtendimento}>Setembro 01 - Quinta Feira</Text>
            <Text style={styles.unidadeAtendimento}>AMA CAPÃO REDONDO - CAPÃO REDONDO</Text>
          </View>
          <View style={styles.divisor}></View>
          <View style={styles.infoAtendimento}>
            <View style={styles.topico}>
              <Text style={styles.subtitulo}>Descrição do atendimento:</Text>
              <Text style={styles.txt}>Aqui vai a descrição que o médico coloca referente ao atendimento prestado.</Text>
            </View>
            <View style={styles.topico}>
              <Text style={styles.subtitulo}>Receita:</Text>
              <Text style={styles.txt}>Aqui vai a descrição que o médico coloca referente ao atendimento prestado.</Text>
            </View>
            <View style={styles.topico}>
              <Text style={styles.subtitulo}>Exames:</Text>
              <Text style={styles.txt}>Aqui vai a descrição que o médico coloca referente ao atendimento prestado.</Text>
            </View>
            <View style={styles.topico}>
              <Text style={styles.subtitulo}>Encaminhamento:</Text>
              <Text style={styles.txt}>Aqui vai a descrição que o médico coloca referente ao atendimento prestado.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginTop: 30,
    marginLeft: 34,
    marginRight: 34,
  },
  voltar: {
    marginTop: 30,
  },
  titulo: {
    marginTop: 30,
    alignSelf: 'center',
    fontSize: 26,
    color: '#4788c6',
  },
  containerAtendimento: {
    marginTop: 30,
    width: 330,
    height: 450,
    backgroundColor: '#DEEFFD',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 4,
  },
  indicadorAtendimento: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  dataAtendimento: {
    fontSize: 18,
    color: '#002E59',
    fontWeight: 'bold',
  },
  unidadeAtendimento: {
    fontSize: 11,
    color: '#7A9DBE',
    fontWeight: 'bold',
  },
  divisor: {
    marginTop: 10,
    width: 328,
    height: 1,
    backgroundColor: 'black',
  },
  infoAtendimento: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  topico: {
    marginBottom: 25,
  },
  subtitulo: {
    fontSize: 16,
    color: '#4788c6',
  },
  txt: {
    fontSize: 11,
  }
})