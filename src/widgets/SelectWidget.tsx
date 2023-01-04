import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { WidgetProps } from '@rjsf/utils';
import DropDownPicker from 'react-native-dropdown-picker';

import { useFormContext } from '../FormContext';

const SelectWidget = ({ options, value: val, onChange }: WidgetProps) => {
	// const RadioWidget = ({ options, value, disabled, readonly, onChange, rawErrors }: WidgetProps) => {
	const { enumOptions, enumDisabled } = options;
	// const { theme, radioLabelMapping } = useFormContext();
	// const hasErrors = rawErrors?.length > 0;

	// const onPress = (newValue: any) => () => onChange(newValue);

	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(val);

	return (
		<DropDownPicker
			open={open}
			value={value}
			items={enumOptions || []}
			setOpen={setOpen}
			setValue={setValue}
			onChangeValue={onChange}
		/>
	);

	// return (
	// 	<View>
	// 		{(enumOptions as any).map((option: any, i: number) => {
	// 			const itemDisabled = enumDisabled && (enumDisabled as any).indexOf(option.value) !== -1;
	// 			const selected = option.value === value;
	// 			const label = radioLabelMapping ? radioLabelMapping(option.label) : option.label;
	// 			const color = hasErrors
	// 				? theme.errorColor
	// 				: selected
	// 				? theme.highlightColor
	// 				: theme.textColor;

	// 			return (
	// 				<TouchableOpacity
	// 					key={i}
	// 					style={styles.container}
	// 					disabled={disabled || itemDisabled || readonly}
	// 					onPress={onPress(option.value)}
	// 				>
	// 					<View style={[styles.radioButton, { borderColor: color }]}>
	// 						{selected && (
	// 							<View
	// 								style={[styles.radioButtonFilled, { backgroundColor: theme.highlightColor }]}
	// 							/>
	// 						)}
	// 					</View>
	// 					<Text style={[styles.text, { color }]}>{label}</Text>
	// 				</TouchableOpacity>
	// 			);
	// 		})}
	// 	</View>
	// );
};

export default SelectWidget;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
	},
	radioButton: {
		width: 18,
		height: 18,
		borderRadius: 18,
		borderWidth: 1,
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	radioButtonFilled: {
		width: 12,
		height: 12,
		borderRadius: 12,
	},
	text: {
		fontSize: 14,
	},
});
