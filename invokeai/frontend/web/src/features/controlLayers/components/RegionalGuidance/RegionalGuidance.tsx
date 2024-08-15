import { Spacer, useDisclosure } from '@invoke-ai/ui-library';
import { CanvasEntityContainer } from 'features/controlLayers/components/common/CanvasEntityContainer';
import { CanvasEntityDeleteButton } from 'features/controlLayers/components/common/CanvasEntityDeleteButton';
import { CanvasEntityEnabledToggle } from 'features/controlLayers/components/common/CanvasEntityEnabledToggle';
import { CanvasEntityHeader } from 'features/controlLayers/components/common/CanvasEntityHeader';
import { CanvasEntityTitle } from 'features/controlLayers/components/common/CanvasEntityTitle';
import { CanvasEntityTitleEdit } from 'features/controlLayers/components/common/CanvasEntityTitleEdit';
import { RegionalGuidanceBadges } from 'features/controlLayers/components/RegionalGuidance/RegionalGuidanceBadges';
import { RegionalGuidanceSettings } from 'features/controlLayers/components/RegionalGuidance/RegionalGuidanceSettings';
import { EntityIdentifierContext } from 'features/controlLayers/contexts/EntityIdentifierContext';
import type { CanvasEntityIdentifier } from 'features/controlLayers/store/types';
import { memo, useMemo } from 'react';

import { RegionalGuidanceMaskFillColorPicker } from './RegionalGuidanceMaskFillColorPicker';
import { RegionalGuidanceSettingsPopover } from './RegionalGuidanceSettingsPopover';

type Props = {
  id: string;
};

export const RegionalGuidance = memo(({ id }: Props) => {
  const entityIdentifier = useMemo<CanvasEntityIdentifier>(() => ({ id, type: 'regional_guidance' }), [id]);
  const editing = useDisclosure({ defaultIsOpen: false });

  return (
    <EntityIdentifierContext.Provider value={entityIdentifier}>
      <CanvasEntityContainer>
        <CanvasEntityHeader onDoubleClick={editing.onOpen}>
          <CanvasEntityEnabledToggle />
          {editing.isOpen ? <CanvasEntityTitleEdit onStopEditing={editing.onClose} /> : <CanvasEntityTitle />}
          <Spacer />
          <RegionalGuidanceBadges />
          <RegionalGuidanceMaskFillColorPicker />
          <RegionalGuidanceSettingsPopover />
          <CanvasEntityDeleteButton />
        </CanvasEntityHeader>
        <RegionalGuidanceSettings />
      </CanvasEntityContainer>
    </EntityIdentifierContext.Provider>
  );
});

RegionalGuidance.displayName = 'RegionalGuidance';