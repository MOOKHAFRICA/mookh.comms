import React from 'react';

import { Button } from '../../../basic/Button';
import { useTranslation } from '../../../providers/TranslationProvider';
import { useSettingsGroupSections } from '../SettingsEditingState';
import { SettingsGroup } from '../SettingsGroup';
import { SettingsGroupSection } from '../SettingsGroupSection';

export function AssetsSettingsGroup() {
	const t = useTranslation();

	const sections = useSettingsGroupSections();

	return <SettingsGroup headerButtons={<>
		<Button secondary className='refresh-clients'>{t('Apply_and_refresh_all_clients')}</Button>
	</>}>
		{sections.map((section) => <SettingsGroupSection key={section.name} section={section} hasReset={false} />)}
	</SettingsGroup>;
}