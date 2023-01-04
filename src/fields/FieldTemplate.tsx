import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FieldTemplateProps } from '@rjsf/utils';

import { useFormContext } from '../FormContext';
import DescriptionField from './DescriptionField';
import TitleField from './TitleField';

const FieldTemplate = ({
	label,
	children,
	displayLabel,
	rawErrors = [],
	rawHelp,
	required,
	rawDescription,
}: FieldTemplateProps) => {
	const { theme } = useFormContext();
	const hasErrors = rawErrors?.length > 0;

	return (
		<View style={styles.container}>
			{displayLabel && label ? (
				<TitleField title={label} required={required} error={hasErrors} />
			) : null}
			{displayLabel && rawDescription ? <DescriptionField description={rawDescription} /> : null}
			{children}

			{hasErrors &&
				rawErrors.map((error, i: number) => (
					<Text key={i} style={[styles.description, styles.error, { color: theme.errorColor }]}>
						{'\u2022'} {error}
					</Text>
				))}
			{rawHelp?.length > 0 && <Text style={styles.description}>{rawHelp}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	error: {
		marginTop: 5,
	},
	description: {
		fontSize: 14,
		color: '#999999',
	},
});

export default FieldTemplate;
