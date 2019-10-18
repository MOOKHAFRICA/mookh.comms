import React from 'react';

import { AssetsSettingsGroup } from './groups/AssetsSettingsGroup';
import { OAuthSettingsGroup } from './groups/OAuthSettingsGroup';
import {
	useSettingsGroup,
	useSettingsGroupSections,
} from './SettingsEditingState';
import { SettingsGroup } from './SettingsGroup';
import { SettingsGroupSection } from './SettingsGroupSection';

export function SettingsPageInner() {
	const group = useSettingsGroup();
	const sections = useSettingsGroupSections();

	if (!group) {
		return null;
	}

	if (group._id === 'Assets') {
		return <AssetsSettingsGroup />;
	}

	if (group._id === 'OAuth') {
		return <OAuthSettingsGroup />;
	}

	return <SettingsGroup>
		{sections.map((section) => <SettingsGroupSection key={section.name} section={section} />)}
	</SettingsGroup>;
}
