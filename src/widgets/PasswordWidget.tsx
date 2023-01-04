import React from 'react';

import { WidgetProps } from '@rjsf/utils';

import TextWidget from './TextWidget';

const PasswordWidget = (props: WidgetProps) => <TextWidget {...props} secureEntry={true} />;

export default PasswordWidget;
