import React, { useState, useEffect, ChangeEvent } from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import RNPickerSelect from 'react-native-picker-select'
import axios from 'axios'

interface IBGEUFResponse {
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

const home = () => {

    const [ufs, setUfs] = useState<string[]>([])
    const [cities, setCities] = useState<string[]>([])
    const navigation = useNavigation()

    const [uf, setUf] = useState('')
    const [city, setCity] = useState('')

    // função que navega para a pag de Points usando o navigate
    function handleNavigateToPoints() {
        navigation.navigate('Points', {
            uf,
            city,
        })
    }

    function handleSelectUf(value: string) {
        const uf = value

        setUf(uf)
    }

    function handleSelectCity(value: string) {
        const city = value

        setCity(city)
    }

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufInitials = response.data.map(uf => uf.sigla)

            setUfs(ufInitials)
        })
    }, [])

    useEffect(() => {
        // carregar as cidades sempre que a uf mudar
        if (uf === '0') {
            return
        }

        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(response => {
                const cityNames = response.data.map(city => city.nome)

                setCities(cityNames)
            })

    }, [uf])

    return (
        // Keyboard uzado para o teclado não sobrepor conteúdo
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ImageBackground
                source={require('../../assets/home-background.png')}
                style={styles.container}
                imageStyle={{ width: 274, height: 368 }}
            >
                <View style={styles.main}>
                    <Image source={require('../../assets/logo.png')} />
                    <View>
                        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
                        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiênte.</Text>
                    </View>
                </View>

                <View style={styles.footer} >
                    <RNPickerSelect
                        onValueChange={handleSelectUf}
                        placeholder={{ label: 'Escolha a UF', value: '' }}
                        items={ufs.map(uf => (
                            { label: uf, value: uf }
                        ))}
                    />

                    <RNPickerSelect
                        onValueChange={handleSelectCity}
                        placeholder={{ label: 'Escolha a cidade', value: '' }}
                        items={cities.map(city => (
                            { label: city, value: city }
                        ))}
                    />

                    <RectButton style={styles.button} onPress={handleNavigateToPoints}>
                        <View style={styles.buttonIcon}>
                            <Text>
                                <Icon name='arrow-right' color='#fff' size={24} />
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>
                            Entrar
                    </Text>
                    </RectButton>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },

    main: {
        flex: 1,
        justifyContent: "center",
    },

    title: {
        color: "#322153",
        fontSize: 32,
        fontFamily: "Ubuntu_700Bold",
        maxWidth: 260,
        marginTop: 64,
    },

    description: {
        color: "#6C6C80",
        fontSize: 16,
        marginTop: 16,
        fontFamily: "Roboto_400Regular",
        maxWidth: 260,
        lineHeight: 24,
    },

    footer: {},

    select: {},

    input: {
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        backgroundColor: "#34CB79",
        height: 60,
        flexDirection: "row",
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",
        marginTop: 8,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        color: "#FFF",
        fontFamily: "Roboto_500Medium",
        fontSize: 16,
    },
})

export default home