import React from 'react';

import { WidgetProps } from '@rjsf/utils';

import TextWidget from './TextWidget';

const URLWidget = (props: WidgetProps) => <TextWidget {...props} textContentType={'URL'} />;

export default URLWidget;
