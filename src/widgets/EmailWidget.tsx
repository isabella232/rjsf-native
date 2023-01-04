import React from 'react';

import { WidgetProps } from '@rjsf/utils';

import TextWidget from './TextWidget';

const EmailWidget = (props: WidgetProps) => (
	<TextWidget {...props} textContentType={'emailAddress'} />
);

export default EmailWidget;
