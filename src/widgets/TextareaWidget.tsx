import React from 'react';

import { WidgetProps } from '@rjsf/utils';

import TextWidget from './TextWidget';

const TextareaWidget = (props: WidgetProps) => {
	return <TextWidget {...props} multiline={true} />;
};

export default TextareaWidget;
