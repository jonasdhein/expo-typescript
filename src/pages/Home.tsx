import React, { useContext, useState } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet, TextInput, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { TaskList } from '../components/TaskList';
import { TasksContext, useTaskList } from '../context/TasksContext';

export const Home = () => {

    const [newTask, setNewTask] = useState('');
    //const [listTasks, setListTasks] = useState<Task[]>([]);

    // const tasks = useContext(TasksContext);
    // console.log('TASKS', tasks);
    // const {addTask} = useContext(TasksContext);
    const {addTask} = useTaskList();

    const handleAddNewTask = () => {
        const data = { 
            id: String(new Date().getTime()),
            title: newTask ? newTask : 'Task Empty'
        }

        addTask(data);

    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome, Dev</Text>

                <TextInput
                    placeholder='Nova tarefa'
                    onChangeText={setNewTask}
                    placeholderTextColor={'#005C53'}
                    style={styles.input} />

                <TouchableOpacity
                    onPress={handleAddNewTask}
                    activeOpacity={0.7}
                    style={styles.button}>
                    <Text style={styles.textButton}>Salvar</Text>
                </TouchableOpacity>

                <Text style={styles.titleTasks}>Minhas Tarefas</Text>

                <TaskList/>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#042940',
    },
    container: {
        flex: 1,
        padding: 16
    },
    title: {
        color: '#fff',
        fontSize: 24,
    },
    titleTasks: {
        marginTop: 20,
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    contentTitle: {
        color: '#fff',
        fontSize: 18,
        marginTop: 10
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: Platform.OS === 'ios' ? 12 : 8,
        color: '#042940',
        fontSize: 16,
        marginTop: 24,
    },
    button: {
        width: 'auto',
        backgroundColor: '#005C53',
        borderRadius: 8,
        marginTop: 16,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});