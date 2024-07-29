
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        padding: 5
    },

    buttonContainer: {
        marginVertical: 5,
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    form: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffff',
        padding: 10,
        marginVertical: 4
    },
    todoText: {
        flex: 1,

        padding: 10
    },
    todo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4
    }
});

export default styles;