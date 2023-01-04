import { ThemeProps } from '@rjsf/core';

import ErrorList from './ErrorList';
import ArrayFieldTemplate from './fields/ArrayFieldTemplate';
import { Fields } from './fields/Fields';
import FieldTemplate from './fields/FieldTemplate';
import ObjectFieldTemplate from './fields/ObjectFieldTemplate';
import { MockHTMLForm } from './MockHTMLForm';
import { Widgets } from './widgets/Widgets';

const Theme: ThemeProps = {
	widgets: Widgets,
	fields: Fields,
	templates: {
		FieldTemplate,
		ObjectFieldTemplate,
		ArrayFieldTemplate,
		// ErrorListTemplate
	},
	// tagName: MockHTMLForm,
};

export { Theme, FieldTemplate, ObjectFieldTemplate, ArrayFieldTemplate, ErrorList, MockHTMLForm };
