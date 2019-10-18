import React from 'react';

import { useAtLeastOnePermission } from '../../../hooks/usePermissions';
import { useAdminSideNav } from '../hooks';
import { NotAuthorizedPage } from './NotAuthorizedPage';
import { SettingsEditingState } from './SettingsEditingState';
import { SettingsPage } from './SettingsPage';

export function SettingsRoute({
	group: groupId,
}) {
	useAdminSideNav();

	const hasPermission = useAtLeastOnePermission([
		'view-privileged-setting',
		'edit-privileged-setting',
		'manage-selected-settings',
	]);

	if (!hasPermission) {
		return <NotAuthorizedPage />;
	}

	return <SettingsEditingState groupId={groupId}>
		<SettingsPage />
	</SettingsEditingState>;
}
