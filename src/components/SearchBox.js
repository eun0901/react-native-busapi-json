import React from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';

const SearchBox = ({ placeholder, value, onChangeText, onSubmitEditing, onBlur }) => {

    return(
        <View>
            <TextInput
            style={{borderWidth: 1, padding: 10, fontSize: 20}}
            placeholder={placeholder}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
            />
        </View>
    );
};

SearchBox.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
};

export default SearchBox;