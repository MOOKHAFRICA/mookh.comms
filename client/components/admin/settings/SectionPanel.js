import { useToggle } from '@rocket.chat/fuselage-hooks';
import React from 'react';

import { Button } from '../../basic/Button';
import { Icon } from '../../basic/Icon';
import { useTranslation } from '../../providers/TranslationProvider';


export function SectionPanel({ children, name, defaultCollapsed, help }) {
	const [collapsed, toggleCollapsed] = useToggle(defaultCollapsed);

	const t = useTranslation();

	const handleTitleClick = () => {
		toggleCollapsed();
	};

	return <div className={['section', collapsed && 'section-collapsed'].filter(Boolean).join(' ')}>
		{name && <div className='section-title' onClick={handleTitleClick}>
			<div className='section-title-text'>{t(name)}</div>
			<div className='section-title-right'>
				<Button nude title={collapsed ? t('Expand') : t('Collapse')}>
					<Icon icon={collapsed ? 'icon-angle-down' : 'icon-angle-up'} />
				</Button>
			</div>
		</div>}

		<div className='section-content border-component-color'>
			{help && <div className='section-helper'>{help}</div>}

			{children}
		</div>
	</div>;
}
