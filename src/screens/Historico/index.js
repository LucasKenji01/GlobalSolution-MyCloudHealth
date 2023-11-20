import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HistoricoScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <ScrollView style={styles.container}>
        <Image source={require('../../assets/img/LogoPequena.png')} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/img/Voltar.png')} style={styles.voltar} />
        </TouchableOpacity>
        <Text style={styles.titulo}>Aqui estão todos os seus atendimentos registrados.</Text>
        <View style={styles.atendimentos}>
          <View style={styles.atendimentosPorAno}>
            <Text style={styles.ano}>2023</Text>
          </View>
          <View style={styles.atendimentosPorAno}>
            <Text style={styles.ano}>2022</Text>
            <View style={styles.containerAtendimento}>
              <Text style={styles.data}>Setembro 01 - Quinta Feira</Text>
              <View style={styles.descricao}>
                <Text style={styles.unidade}>AMA CAPÃO REDONDO - CAPÃO REDONDO</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Atendimento')}>
                  <Text style={styles.verMais}>Ver mais</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.atendimentosPorAno}>
            <Text style={styles.ano}>2021</Text>
          </View>
          <View style={styles.atendimentosPorAno}>
            <Text style={styles.ano}>2020</Text>
            <View style={styles.containerAtendimento}>
              <Text style={styles.data}>Setembro 01 - Quinta Feira</Text>
              <View style={styles.descricao}>
                <Text style={styles.unidade}>AMA CAPÃO REDONDO - CAPÃO REDONDO</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Atendimento')}>
                  <Text style={styles.verMais}>Ver mais</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.atendimentosPorAno}>
            <Text style={styles.ano}>2019</Text>
          </View>
        </View>
      </ScrollView >
    </View >
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white'
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
    fontSize: 22,
    alignSelf: 'center',
    color: '#4788c6',
  },
  atendimentos: {
    marginTop: 30,
  },
  atendimentosPorAno: {
    marginTop: 10,
    marginBottom: 20,
  },
  ano: {
    fontSize: 20,
    color: '#4788c6'
  },
  containerAtendimento: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  data: {
    fontSize: 16,
    color: '#4788c6',
  },
  descricao: {
    flexDirection: 'row',
  },
  unidade: {
    fontSize: 11,
  },
  verMais: {
    color: '#4788c6',
    fontSize: 10,
    marginLeft: 8,
  }

})