import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database';
import { db } from '../../configs/firebase';

export default function VisualizarCadastro({ navigation }) {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');

  const user = {
    nome: nome,
    sobrenome: sobrenome,
    dataNascimento: dataNascimento,
    peso: peso,
    altura: altura,
    sexo: sexo,
    logradouro: logradouro,
    numero: numero,
    bairro: bairro,
    cidade: cidade,
    estado: estado,
    cep: cep,
  }

  useEffect(() => {

    function lerDados() {
      const id = "-NjsLSf7xx7vFctsXfVM"
      onValue(ref(db, 'usuario/' + id), (snapshot) => {
        const data = snapshot.val()
        setNome(data.nome)
        setSobrenome(data.sobrenome)
        setDataNascimento(data.dataNascimento)
        setPeso(data.peso)
        setAltura(data.altura)
        setSexo(data.sexo)
        setLogradouro(data.logradouro)
        setNumero(data.numero)
        setBairro(data.bairro)
        setCidade(data.cidade)
        setEstado(data.estado)
        setCep(data.cep)
      })
    }

    lerDados()

  }, [])

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/img/LogoPequena.png')} />
        <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/img/Voltar.png')} />
        </TouchableOpacity>
        <Text style={styles.titulo}>Meu Cadastro</Text>
        <View style={styles.list}>
          <Text style={styles.txt}>Nome: {nome}</Text>
          <Text style={styles.txt}>Sobrenome: {sobrenome}</Text>
          <Text style={styles.txt}>Data de Nascimento: {dataNascimento}</Text>
          <Text style={styles.txt}>Peso: {peso}</Text>
          <Text style={styles.txt}>Altura: {altura}</Text>
          <Text style={styles.txt}>Sexo: {sexo}</Text>
          <Text style={styles.txt}>Logradouro: {logradouro}</Text>
          <Text style={styles.txt}>Número: {numero}</Text>
          <Text style={styles.txt}>Bairro: {bairro}</Text>
          <Text style={styles.txt}>Cidade: {cidade}</Text>
          <Text style={styles.txt}>Estado: {estado}</Text>
          <Text style={styles.txt}>Cep: {cep}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('EditarCadastro')}>
          <Text style={styles.btnTxt}>Editar cadastro</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

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
    alignSelf: 'center',
    fontSize: 30,
    color: '#4788c6',
    fontWeight: 'bold',
  },
  list: {
    marginTop: 30,
  },
  txt: {
    fontSize: 18,
    marginBottom: 10,
  },
  btn: {
    marginTop: 30,
    width: 200,
    height: 40,
    backgroundColor: '#4788c6',
    borderRadius: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  }


})