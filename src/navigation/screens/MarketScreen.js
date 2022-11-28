import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Modal, Touchable } from 'react-native';
import { useState, useEffect } from 'react'
import { getFruits, getOptions } from '../../translations';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconFruits from './icons/apple-whole-solid.svg'
import IconPlus from './icons/plus-svgrepo-com.svg'
import IconSnackes from './icons/cookie-bite-solid.svg'

export default function MarketScreen({ navigation }) {
    const [fruits, setFruits] = useState(getFruits())
    const [bag, setBag] = useState([])
    const [visible, setVisible] = useState(false)
    const [options, setOptions] = useState(getOptions())
    const [menu, setMenu] = useState('options')
    const [focus, setFocus] = useState()


    /*     useEffect(() => {
            console.log(menu)
        }, [menu]);
     */


    function handleAddPress() {
        setVisible(true)
        setMenu('options')
    }

    function handleAddToBag() {
        setBag(prev => [...prev, focus])
    }

    function handleDeleteItem(index) {
        setBag(prev => prev.filter((item, i) => index !== i))
    }

    return (
        <View>
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {bag.map((item, i) =>
                        <View key={`item ${i + 1}`} style={styles.item} >
                            <Text>{item.name}</Text>
                            <TouchableOpacity onPress={() => handleDeleteItem(i)} ><Text>DELETE</Text></TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => handleAddPress()}
            >
                <IconPlus fill='red' width={40} height={40} />
            </TouchableOpacity>
            <Modal transparent visible={visible}>
                <SafeAreaView
                    style={{ flex: 1 }}
                    onTouchStart={() => setVisible(false)}
                >
                </SafeAreaView>
                <View style={styles.popUp}>
                    {menu === 'options' &&
                        <View>
                            <View style={styles.line}>
                                <TouchableOpacity onPress={() => setMenu('fruits')} style={styles.option}>
                                    <IconFruits fill='#212121' width={50} height={50} />
                                    <Text>{options[0].name}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setMenu('snacks')} style={styles.option}>
                                    <IconSnackes fill='#212121' width={50} height={50} />
                                    <Text>{options[1].name}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.option}>
                                    <IconFruits fill='#212121' width={50} height={50} />
                                    <Text>{options[0].name}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line}>
                                <TouchableOpacity style={styles.option}>
                                    <IconSnackes fill='#212121' width={50} height={50} />
                                    <Text>{options[1].name}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.option}>
                                    <IconSnackes fill='#212121' width={50} height={50} />
                                    <Text>{options[1].name}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.option}>
                                    <IconSnackes fill='#212121' width={50} height={50} />
                                    <Text>{options[1].name}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    {menu === 'fruits' &&
                        <View>
                            <View style={styles.line}>
                                <TouchableOpacity onPress={() => setFocus(fruits[0])} style={styles.option}>
                                    <Text>{fruits[0].name}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setFocus(fruits[1])} style={styles.option}>
                                    <Text>{fruits[1].name}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line}>
                                <TouchableOpacity onPress={() => setFocus(fruits[2])} style={styles.option}>
                                    <Text>{fruits[2].name}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setFocus(fruits[3])} style={styles.option}>
                                    <Text>{fruits[3].name}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    {menu !== 'options' &&
                        <TouchableOpacity onPress={() => handleAddToBag()}>
                            <Text>Add to bag</Text>
                        </TouchableOpacity>
                    }
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    addButton: {
        display: 'flex',
        position: 'absolute',
        right: 20,
        top: 650,
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: '60%',
        backgroundColor: 'green',
    },
    popUp: {
        borderRadius: 8,
        borderColor: '#333',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 10,
        position: 'absolute',
        top: 76,
        right: 50,
        width: '80%',
        height: '80%',
        justifyContent: 'flex-start',
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
    },
    option: {
        alignItems: 'center',
        backgroundColor: '#dcdcdc',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8,
        borderColor: '#333',
        borderWidth: 1,
    }
})